
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download as DownloadIcon, CheckCircle, AlertCircle, Chrome, Monitor } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Download = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [downloadInfo, setDownloadInfo] = useState<any>(null);

  useEffect(() => {
    if (token) {
      validateToken();
    } else {
      setIsValid(false);
    }
  }, [token]);

  const validateToken = async () => {
    try {
      const { data, error } = await supabase
        .rpc('validate_download_token', { p_token: token });

      if (error || !data?.[0]?.is_valid) {
        setIsValid(false);
        return;
      }

      setIsValid(true);
      setDownloadInfo(data[0]);
    } catch (error) {
      console.error('Token validation error:', error);
      setIsValid(false);
    }
  };

  const handleDownload = async () => {
    if (!token) return;
    
    setDownloading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('download-file', {
        body: { token }
      });

      if (error) {
        throw error;
      }

      toast.success('Download started! Check your downloads folder.');
      
      // In a real implementation, this would trigger the actual file download
      console.log('Download response:', data);
      
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Download failed. Please contact support.');
    } finally {
      setDownloading(false);
    }
  };

  if (isValid === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF9900]"></div>
      </div>
    );
  }

  if (isValid === false) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <CardTitle className="text-red-600">Invalid Download Link</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-6">
              This download link is invalid or has expired. Download links are valid for 30 days after purchase.
            </p>
            <Button onClick={() => navigate('/')} variant="outline">
              Return Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#FF9900] rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            AMZ Extractor Ready to Download
          </h1>
          <p className="text-gray-600">
            Your Amazon data extraction tool is ready for installation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DownloadIcon className="w-6 h-6 mr-2 text-[#FF9900]" />
                Download AMZ Extractor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Download Information</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• File: amz-extractor.zip</li>
                    <li>• Size: ~2.5 MB</li>
                    <li>• Downloads: {downloadInfo?.download_count || 0}</li>
                    <li>• Expires: {downloadInfo?.expires_at ? new Date(downloadInfo.expires_at).toLocaleDateString() : 'N/A'}</li>
                  </ul>
                </div>
                
                <Button 
                  onClick={handleDownload}
                  disabled={downloading}
                  className="w-full bg-[#FF9900] hover:bg-[#e6890f] text-white"
                  size="lg"
                >
                  {downloading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Downloading...
                    </>
                  ) : (
                    <>
                      <DownloadIcon className="w-5 h-5 mr-2" />
                      Download Now
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Monitor className="w-6 h-6 mr-2 text-blue-600" />
                Installation Instructions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Chrome className="w-5 h-5 mr-2" />
                    For Chrome & Edge:
                  </h3>
                  <ol className="text-sm space-y-2 text-gray-600">
                    <li>1. Extract the downloaded ZIP file</li>
                    <li>2. Open Chrome/Edge → Menu → Extensions</li>
                    <li>3. Enable "Developer Mode" (toggle in top-right)</li>
                    <li>4. Click "Load Unpacked" and select extracted folder</li>
                    <li>5. Pin AMZ Extractor to your toolbar</li>
                  </ol>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">✅ Compatible With:</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Google Chrome</li>
                    <li>• Microsoft Edge</li>
                    <li>• All Amazon marketplaces</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Need help? Contact our support team at{' '}
            <a href="mailto:support@aiwriterpros.com" className="text-[#FF9900] hover:underline">
              support@aiwriterpros.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Download;
