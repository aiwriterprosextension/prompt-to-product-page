
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const supabaseAdmin = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, subject, message, purchaseId } = await req.json();

    // Create support ticket
    const { data: ticket, error } = await supabaseAdmin
      .from("support_tickets")
      .insert([{
        email,
        subject,
        message,
        purchase_id: purchaseId || null,
      }])
      .select()
      .single();

    if (error) {
      throw error;
    }

    // Send notification email to support team
    await resend.emails.send({
      from: "AMZ Extractor Support <support@resend.dev>",
      to: ["support@aiwriterpros.com"],
      subject: `New Support Ticket: ${subject}`,
      html: `
        <h2>New Support Ticket Received</h2>
        <p><strong>Ticket ID:</strong> ${ticket.id}</p>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Purchase ID:</strong> ${purchaseId || 'None'}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <p><strong>Created:</strong> ${new Date().toISOString()}</p>
      `,
    });

    // Send confirmation to user
    await resend.emails.send({
      from: "AMZ Extractor Support <support@resend.dev>",
      to: [email],
      subject: "Support Ticket Received - AMZ Extractor",
      html: `
        <h2>Support Ticket Confirmation</h2>
        <p>Hi there,</p>
        <p>We've received your support request and will get back to you as soon as possible.</p>
        <p><strong>Ticket ID:</strong> ${ticket.id}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>Our typical response time is within 24 hours during business days.</p>
        <p>Thanks for using AMZ Extractor!</p>
      `,
    });

    return new Response(JSON.stringify({ 
      success: true, 
      ticketId: ticket.id 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error submitting support ticket:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
