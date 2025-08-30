
import React from 'react';
import { Check, Download, Mail, ArrowRight, Shield, Clock, Chrome, Monitor } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container-custom py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AMZ</span>
            </div>
            <span className="text-xl font-bold text-orange-600">AMZ Extractor</span>
          </Link>
        </div>
      </header>

      {/* Success Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-fade-in">
              <Check className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              🎉 Welcome to <span className="text-orange-600">AMZ Extractor!</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
              Your Amazon data extraction tool is ready to download! 
              Start extracting product data from any Amazon page in minutes.
            </p>

            {/* Purchase Confirmation */}
            <div className="gradient-card rounded-xl p-6 mb-8 text-left">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-600" />
                Purchase Confirmed
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Product:</span>
                  <p className="font-medium">AMZ Extractor Chrome & Edge Extension</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Amount:</span>
                  <p className="font-medium">$27.00 (One-time)</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Transaction ID:</span>
                  <p className="font-medium">#AMZ-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Date:</span>
                  <p className="font-medium">{new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            {/* Browser Compatibility */}
            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-4 py-2">
                <Chrome className="w-6 h-6 text-blue-600" />
                <span className="font-medium">Chrome Compatible</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-4 py-2">
                <Monitor className="w-6 h-6 text-blue-600" />
                <span className="font-medium">Edge Compatible</span>
              </div>
            </div>

            <div className="gradient-card rounded-xl p-8 mb-12 animate-slide-up">
              <h2 className="text-2xl font-bold mb-6">What happens next?</h2>
              
              <div className="space-y-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Check your email (within 5 minutes)</h3>
                    <p className="text-muted-foreground">You'll receive download instructions and installation guide at your email address.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Download & install AMZ Extractor</h3>
                    <p className="text-muted-foreground">Works on both Chrome and Microsoft Edge. Installation takes under 5 minutes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Start extracting Amazon data</h3>
                    <p className="text-muted-foreground">Visit any Amazon product page, click AMZ Extractor, and export data instantly.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="gradient-card rounded-xl p-6 text-center">
                <Mail className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Check Your Email</h3>
                <p className="text-muted-foreground text-sm mb-4">Download instructions sent to your inbox</p>
                <Button variant="outline" size="sm" className="w-full">
                  <a href="mailto:" className="flex items-center justify-center">
                    Open Email App
                  </a>
                </Button>
              </div>
              
              <div className="gradient-card rounded-xl p-6 text-center">
                <Download className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Download Now</h3>
                <p className="text-muted-foreground text-sm mb-4">Get AMZ Extractor for Chrome & Edge</p>
                <Link to="/download">
                  <Button variant="hero" size="sm" className="w-full bg-gradient-to-r from-orange-500 to-orange-600">
                    Download AMZ Extractor
                  </Button>
                </Link>
              </div>

              <div className="gradient-card rounded-xl p-6 text-center">
                <Clock className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-muted-foreground text-sm mb-4">Get support and installation help</p>
                <Link to="/support">
                  <Button variant="outline" size="sm" className="w-full">
                    Get Support
                  </Button>
                </Link>
              </div>
            </div>

            {/* Installation Quick Guide */}
            <div className="bg-muted/30 rounded-xl p-8 mb-12">
              <h2 className="text-xl font-bold mb-4">🚀 Quick Installation Guide</h2>
              <div className="text-left space-y-4">
                <h3 className="font-semibold text-lg">For Chrome:</h3>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Download the AMZ-Extractor.zip file</li>
                  <li>Extract all files to a folder</li>
                  <li>Open Chrome → Menu → Extensions → Enable "Developer Mode"</li>
                  <li>Click "Load Unpacked" and select the extracted folder</li>
                  <li>Pin AMZ Extractor to your toolbar</li>
                </ol>
                
                <h3 className="font-semibold text-lg mt-6">For Microsoft Edge:</h3>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Download the AMZ-Extractor.zip file</li>
                  <li>Extract all files to a folder</li>
                  <li>Open Edge → Menu → Extensions → Enable "Developer Mode"</li>
                  <li>Click "Load Unpacked" and select the extracted folder</li>
                  <li>Pin AMZ Extractor to your toolbar</li>
                </ol>
              </div>
            </div>

            {/* Email Delivery Notice */}
            <div className="bg-muted/30 rounded-xl p-8 mb-12">
              <h2 className="text-xl font-bold mb-4">📧 Email Delivery Notice</h2>
              <p className="text-muted-foreground mb-6">
                Your download link will be delivered to your email within 5 minutes. 
                If you don't see it, please check your spam folder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/support">
                  <Button variant="outline">
                    Contact Support
                  </Button>
                </Link>
                <Button variant="ghost">
                  Resend Email
                </Button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Questions? We're here to help! Reach out to support@aiwriterpros.com
              </p>
              <Link 
                to="/" 
                className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors"
              >
                Back to homepage
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;
