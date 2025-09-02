import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Check, Download, Mail, ArrowRight, Shield, Clock, Chrome, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import DarkModeToggle from '@/components/DarkModeToggle';

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [downloadToken, setDownloadToken] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    // In a real implementation, you would verify the session and get the download token
    // For now, we'll simulate this with a placeholder token
    if (sessionId) {
      setDownloadToken('sample-download-token-' + sessionId);
    }
  }, [sessionId]);

  const handleOpenEmail = () => {
    // Try to open the default email client
    window.location.href = 'mailto:';
  };

  const handleDownload = async () => {
    if (!downloadToken) {
      toast.error('Download token not available. Please check your email for the download link.');
      return;
    }

    setDownloading(true);
    
    try {
      // Create a download link to the file
      const downloadUrl = `/downloads/amz-extractor-v1.0.zip`;
      
      // Create a temporary download link
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'amz-extractor-v1.0.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success('Download started! Check your downloads folder.');
      
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Download failed. Please contact support.');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light/10 to-background dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            {/* Light mode logo */}
            <img 
              src="/lovable-uploads/21e93c14-f110-46be-9a78-e5ddc580d29f.png" 
              alt="AMZ Extractor Logo" 
              className="h-8 w-auto dark:hidden"
            />
            {/* Dark mode logo */}
            <img 
              src="/lovable-uploads/3a71676f-ab4f-464b-9ccf-41cecd50b2b0.png" 
              alt="AMZ Extractor Logo" 
              className="h-8 w-auto hidden dark:block"
            />
            <span className="text-lg font-semibold text-foreground">AMZ Extractor</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/features">Features</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/support">Support</Link>
            </Button>
            <DarkModeToggle />
          </div>
        </div>
      </header>

      {/* Success Content */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-10 h-10 text-success-foreground" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            🎉 Welcome to <span className="text-primary">AMZ Extractor!</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Your Amazon data extraction tool is ready to download! 
            Start extracting product data from any Amazon page in minutes.
          </p>

          {/* Purchase Confirmation */}
          <Card className="mb-8 text-left border-border">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-success" />
                Purchase Confirmed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Product:</span>
                  <p className="font-medium text-foreground">AMZ Extractor Chrome & Edge Extension</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Amount:</span>
                  <p className="font-medium text-foreground">$27.00 (One-time)</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Session ID:</span>
                  <p className="font-medium text-foreground">{sessionId || '#AMZ-SUCCESS'}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Date:</span>
                  <p className="font-medium text-foreground">{new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Browser Compatibility */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-4 py-2">
              <Chrome className="w-6 h-6 text-primary" />
              <span className="font-medium text-foreground">Chrome Compatible</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-4 py-2">
              <Monitor className="w-6 h-6 text-primary" />
              <span className="font-medium text-foreground">Edge Compatible</span>
            </div>
          </div>

          <Card className="mb-12 border-border">
            <CardHeader>
              <CardTitle className="text-2xl">What happens next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Check your email (within 5 minutes)</h3>
                    <p className="text-muted-foreground">You'll receive download instructions and installation guide at your email address.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Download & install AMZ Extractor</h3>
                    <p className="text-muted-foreground">Works on both Chrome and Microsoft Edge. Installation takes under 5 minutes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Start extracting Amazon data</h3>
                    <p className="text-muted-foreground">Visit any Amazon product page, click AMZ Extractor, and export data instantly.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-foreground">Check Your Email</h3>
                <p className="text-muted-foreground text-sm mb-4">Download instructions sent to your inbox</p>
                <Button variant="outline" size="sm" className="w-full" onClick={handleOpenEmail}>
                  Open Email App
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <Download className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-foreground">Download Now</h3>
                <p className="text-muted-foreground text-sm mb-4">Get AMZ Extractor for Chrome & Edge</p>
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground" 
                  size="sm"
                  onClick={handleDownload}
                  disabled={downloading}
                >
                  {downloading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                      Downloading...
                    </>
                  ) : (
                    'Download AMZ Extractor'
                  )}
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-foreground">Need Help?</h3>
                <p className="text-muted-foreground text-sm mb-4">Get support and installation help</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/support">Get Support</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Questions? We're here to help! Reach out to support@aiwriterpros.com
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
            >
              Back to homepage
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black py-12 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} AMZ Extractor. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Success;
