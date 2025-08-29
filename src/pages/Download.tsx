
import React, { useState } from 'react';
import { Download, CheckCircle, AlertCircle, Play, FileText, HelpCircle, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const DownloadPage = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold gradient-text">AI Writer Pros</span>
            </Link>
            <Link to="/success" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Success
            </Link>
          </div>
        </div>
      </header>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Download <span className="gradient-text">AI Writer Pros</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Get your Chrome extension and start extracting Amazon product data in minutes
              </p>
              
              {/* Download Button */}
              <div className="gradient-card rounded-xl p-8 mb-8 inline-block">
                <Button 
                  variant="hero" 
                  size="xl" 
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="mb-4"
                >
                  {isDownloading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Preparing Download...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Download AI Writer Pros Extension
                    </>
                  )}
                </Button>
                <p className="text-sm text-muted-foreground">
                  Version 1.0.0 • Compatible with Chrome 88+ • 2.4 MB
                </p>
              </div>
            </div>

            {/* Installation Guide */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-6">📥 Installation Guide</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Download the Extension</h3>
                      <p className="text-muted-foreground text-sm">Click the download button above to get the .crx file.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Open Chrome Extensions</h3>
                      <p className="text-muted-foreground text-sm">Go to chrome://extensions/ or Menu → More Tools → Extensions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Enable Developer Mode</h3>
                      <p className="text-muted-foreground text-sm">Toggle the "Developer mode" switch in the top right corner.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Drag & Drop</h3>
                      <p className="text-muted-foreground text-sm">Drag the downloaded .crx file into the Extensions page.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">You're Ready!</h3>
                      <p className="text-muted-foreground text-sm">Visit any Amazon product page and click the extension icon.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Tutorial Placeholder */}
              <div>
                <h2 className="text-2xl font-bold mb-6">🎥 Video Tutorial</h2>
                <div className="gradient-card rounded-xl p-8 text-center">
                  <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Play className="w-16 h-16 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">Installation Walkthrough</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Watch our step-by-step video guide for installing and using AI Writer Pros
                  </p>
                  <Button variant="outline">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Tutorial
                  </Button>
                </div>
              </div>
            </div>

            {/* Browser Compatibility */}
            <div className="gradient-card rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">🌐 Browser Compatibility</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Google Chrome</h3>
                  <p className="text-muted-foreground text-sm">Version 88 and above</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Microsoft Edge</h3>
                  <p className="text-muted-foreground text-sm">Chromium-based versions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Brave Browser</h3>
                  <p className="text-muted-foreground text-sm">Latest versions</p>
                </div>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">🔧 Troubleshooting</h2>
              <div className="space-y-4">
                <div className="gradient-card rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Extension won't install</h3>
                      <p className="text-muted-foreground text-sm">Make sure Developer mode is enabled and try dragging the file directly into the extensions page.</p>
                    </div>
                  </div>
                </div>
                
                <div className="gradient-card rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Extension icon not showing</h3>
                      <p className="text-muted-foreground text-sm">Click the puzzle piece icon in Chrome toolbar and pin AI Writer Pros for easy access.</p>
                    </div>
                  </div>
                </div>

                <div className="gradient-card rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Not working on Amazon</h3>
                      <p className="text-muted-foreground text-sm">Refresh the Amazon page and make sure you're on a product details page (not search results).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Resources */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Link to="/documentation" className="gradient-card rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <FileText className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Documentation</h3>
                <p className="text-muted-foreground text-sm">Complete user guide and API reference</p>
              </Link>

              <Link to="/support" className="gradient-card rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <HelpCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Get Support</h3>
                <p className="text-muted-foreground text-sm">Contact our support team for help</p>
              </Link>

              <div className="gradient-card rounded-xl p-6 text-center">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Getting Started</h3>
                <p className="text-muted-foreground text-sm">Quick start guide and best practices</p>
              </div>
            </div>

            {/* Support Contact */}
            <div className="text-center bg-muted/30 rounded-xl p-8">
              <h2 className="text-xl font-bold mb-4">Need Additional Help?</h2>
              <p className="text-muted-foreground mb-6">
                Our support team is ready to help you get up and running with AI Writer Pros.
              </p>
              <Link to="/support">
                <Button variant="primary">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;
