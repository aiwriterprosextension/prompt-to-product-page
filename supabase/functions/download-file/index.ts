
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const supabaseAdmin = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
);

serve(async (req) => {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");

  if (!token) {
    return new Response("Download token required", { status: 400 });
  }

  try {
    // Validate token
    const { data: validation, error } = await supabaseAdmin
      .rpc("validate_download_token", { p_token: token });

    if (error || !validation?.[0]?.is_valid) {
      return new Response("Invalid or expired download token", { status: 403 });
    }

    // Update download count
    await supabaseAdmin
      .from("downloads")
      .update({ 
        download_count: validation[0].download_count + 1,
        last_downloaded_at: new Date().toISOString()
      })
      .eq("download_token", token);

    // For demo purposes, return a JSON response with download info
    // In production, you would serve the actual ZIP file
    const downloadResponse = {
      message: "Download successful",
      filename: "amz-extractor.zip",
      downloadCount: validation[0].download_count + 1,
      email: validation[0].email,
    };

    return new Response(JSON.stringify(downloadResponse), {
      headers: {
        "Content-Type": "application/json",
        "Content-Disposition": "attachment; filename=amz-extractor.zip"
      },
      status: 200,
    });

  } catch (error) {
    console.error("Download error:", error);
    return new Response("Download failed", { status: 500 });
  }
});
