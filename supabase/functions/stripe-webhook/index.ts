
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import Stripe from "https://esm.sh/stripe@14.21.0";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2023-10-16",
});

const supabaseAdmin = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
);

serve(async (req) => {
  const signature = req.headers.get("stripe-signature");
  const body = await req.text();
  
  if (!signature) {
    return new Response("No signature", { status: 400 });
  }

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      Deno.env.get("STRIPE_WEBHOOK_SECRET") || ""
    );

    console.log("Webhook event type:", event.type);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      
      console.log("Processing completed checkout:", session.id);

      // Create purchase record
      const { data: purchase, error: purchaseError } = await supabaseAdmin
        .from("purchases")
        .insert([{
          email: session.customer_details?.email,
          stripe_session_id: session.id,
          stripe_payment_intent_id: session.payment_intent as string,
          amount: session.amount_total || 2700,
          status: "completed",
          customer_name: session.customer_details?.name,
        }])
        .select()
        .single();

      if (purchaseError) {
        console.error("Error creating purchase:", purchaseError);
        throw purchaseError;
      }

      console.log("Purchase created:", purchase.id);

      // Create download token
      const { data: downloadToken, error: tokenError } = await supabaseAdmin
        .rpc("create_download_token", {
          p_purchase_id: purchase.id,
          p_email: session.customer_details?.email,
        });

      if (tokenError) {
        console.error("Error creating download token:", tokenError);
        throw tokenError;
      }

      console.log("Download token created:", downloadToken);

      // Send confirmation email
      const emailResponse = await fetch(`${Deno.env.get("SUPABASE_URL")}/functions/v1/send-purchase-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")}`,
        },
        body: JSON.stringify({
          email: session.customer_details?.email,
          customerName: session.customer_details?.name,
          downloadToken: downloadToken,
          purchaseId: purchase.id,
        }),
      });

      if (!emailResponse.ok) {
        console.error("Failed to send email");
      } else {
        console.log("Purchase confirmation email sent");
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Webhook error:", error.message);
    return new Response(`Webhook error: ${error.message}`, { status: 400 });
  }
});
