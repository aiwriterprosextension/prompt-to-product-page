
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
    const { email, customerName, downloadToken, purchaseId } = await req.json();

    const downloadUrl = `${req.headers.get("origin")}/download/${downloadToken}`;

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <title>AMZ Extractor - Download Ready!</title>
      </head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #FF9900 0%, #232F3E 100%); padding: 30px; text-align: center; border-radius: 10px;">
              <h1 style="color: white; margin: 0;">🎉 Welcome to AMZ Extractor!</h1>
              <p style="color: white; margin: 10px 0 0 0;">Your Amazon data extraction tool is ready to download.</p>
          </div>
          
          <div style="padding: 30px 0;">
              <p>Hi ${customerName || 'there'},</p>
              
              <p>Thank you for purchasing AMZ Extractor! Your Chrome & Microsoft Edge extension is ready for download.</p>
              
              <h2>What's Next:</h2>
              <ol style="line-height: 1.8;">
                  <li>Click the download button below to get your extension</li>
                  <li>Install AMZ Extractor on Chrome or Microsoft Edge</li>
                  <li>Start extracting product data from any Amazon page</li>
                  <li>Use our Article Creator to turn data into content</li>
              </ol>
              
              <div style="text-align: center; margin: 30px 0;">
                  <a href="${downloadUrl}" style="background: #FF9900; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">Download AMZ Extractor</a>
              </div>
              
              <p><strong>Installation Instructions:</strong></p>
              <ul style="line-height: 1.8;">
                  <li>Extract the downloaded ZIP file</li>
                  <li>Open Chrome/Edge → Extensions → Enable "Developer Mode"</li>
                  <li>Click "Load Unpacked" and select the extracted folder</li>
                  <li>Pin AMZ Extractor to your toolbar</li>
              </ul>
              
              <p><strong>Compatible with:</strong></p>
              <ul>
                  <li>✅ Google Chrome</li>
                  <li>✅ Microsoft Edge</li>
                  <li>✅ All major Amazon marketplaces (.com, .ca, .co.uk, .de, .fr, .es, .it, .in, .com.au, .co.jp)</li>
              </ul>
              
              <p>Questions? Contact us at <a href="mailto:support@aiwriterpros.com">support@aiwriterpros.com</a></p>
          </div>
          
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
              <p>AMZ Extractor - The Ultimate Amazon Data Extraction Tool</p>
              <p>This download link expires in 30 days.</p>
          </div>
      </body>
      </html>
    `;

    const emailResponse = await resend.emails.send({
      from: "AMZ Extractor <onboarding@resend.dev>",
      to: [email],
      subject: "🎉 AMZ Extractor - Your Download is Ready!",
      html: emailHtml,
    });

    // Log email sent
    await supabaseAdmin.from("email_logs").insert([{
      email: email,
      type: "purchase_confirmation",
      status: emailResponse.error ? "failed" : "sent",
      provider: "resend",
      provider_message_id: emailResponse.data?.id,
      error_message: emailResponse.error?.message,
      purchase_id: purchaseId,
    }]);

    console.log("Email sent:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
