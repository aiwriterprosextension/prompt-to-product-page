
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download as DownloadIcon, CheckCircle, AlertCircle, Chrome, Monitor } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import DarkModeToggle from '@/components/DarkModeToggle';

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
      // Create a download link to the file
      const downloadUrl = `/downloads/amz-extractor-v1.0.zip?token=${token}`;
      
      // Create a temporary download link
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'amz-extractor-v1.0.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Update download count
      await supabase.functions.invoke('download-file', {
        body: { token }
      });

      toast.success('Download started! Check your downloads folder.');
      
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Download failed. Please contact support.');
    } finally {
      setDownloading(false);
    }
  };

  if (isValid === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-light/10 to-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (isValid === false) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary-light/10 to-background dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        {/* Navigation */}
        <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-border">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/21e93c14-f110-46be-9a78-e5ddc580d29f.png" 
                alt="AMZ Extractor Logo" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-semibold text-foreground">AMZ Extractor</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/">Home</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/support">Support</Link>
              </Button>
              <DarkModeToggle />
            </div>
          </div>
        </nav>

        <div className="flex items-center justify-center p-4 min-h-[calc(100vh-4rem)]">
          <Card className="w-full max-w-md border-border">
            <CardHeader className="text-center">
              <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
              <CardTitle className="text-destructive">Invalid Download Link</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                This download link is invalid or has expired. Download links are valid for 30 days after purchase.
              </p>
              <Button onClick={() => navigate('/')} variant="outline">
                Return Home
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black py-12 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} AMZ Extractor. All rights reserved.
          </p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light/10 to-background dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/21e93c14-f110-46be-9a78-e5ddc580d29f.png" 
              alt="AMZ Extractor Logo" 
              className="h-8 w-auto"
            />
            <span className="text-lg font-semibold text-foreground">AMZ Extractor</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/support">Support</Link>
            </Button>
            <DarkModeToggle />
          </div>
        </div>
      </nav>

      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              AMZ Extractor Ready to Download
            </h1>
            <p className="text-muted-foreground">
              Your Amazon data extraction tool is ready for installation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DownloadIcon className="w-6 h-6 mr-2 text-primary" />
                  Download AMZ Extractor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-primary-light/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary mb-2">Download Information</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• File: amz-extractor-v1.0.zip</li>
                      <li>• Size: ~2.5 MB</li>
                      <li>• Downloads: {downloadInfo?.download_count || 0}</li>
                      <li>• Expires: {downloadInfo?.expires_at ? new Date(downloadInfo.expires_at).toLocaleDateString() : 'N/A'}</li>
                    </ul>
                  </div>
                  
                  <Button 
                    onClick={handleDownload}
                    disabled={downloading}
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                    size="lg"
                  >
                    {downloading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
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

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Monitor className="w-6 h-6 mr-2 text-primary" />
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
                    <ol className="text-sm space-y-2 text-muted-foreground">
                      <li>1. Extract the downloaded ZIP file</li>
                      <li>2. Open Chrome/Edge → Menu → Extensions</li>
                      <li>3. Enable "Developer Mode" (toggle in top-right)</li>
                      <li>4. Click "Load Unpacked" and select extracted folder</li>
                      <li>5. Pin AMZ Extractor to your toolbar</li>
                    </ol>
                  </div>

                  <div className="bg-success/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-success mb-2">✅ Compatible With:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
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
            <p className="text-muted-foreground mb-4">
              Need help? Contact our support team at{' '}
              <a href="mailto:support@aiwriterpros.com" className="text-primary hover:underline">
                support@aiwriterpros.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black py-12 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} AMZ Extractor. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Download;
