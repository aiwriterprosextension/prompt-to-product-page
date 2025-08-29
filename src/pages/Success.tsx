
import React from 'react';
import { Check, Download, Mail, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container-custom py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold gradient-text">AI Writer Pros</span>
          </Link>
        </div>
      </header>

      {/* Success Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-8 animate-fade-in">
              <Check className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Welcome to <span className="gradient-text">AI Writer Pros!</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 animate-slide-up">
              Your payment was successful. You now have lifetime access to the AI Writer Pros Chrome extension.
            </p>

            <div className="gradient-card rounded-xl p-8 mb-12 animate-slide-up">
              <h2 className="text-2xl font-bold mb-6">What happens next?</h2>
              
              <div className="space-y-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Check your email</h3>
                    <p className="text-muted-foreground">You'll receive download instructions and your license key within 5 minutes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Download the extension</h3>
                    <p className="text-muted-foreground">Install the Chrome extension using the download link in your email.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Start extracting data</h3>
                    <p className="text-muted-foreground">Visit any Amazon product page and click the extension icon to extract data instantly.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="gradient-card rounded-xl p-6 text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Check Your Email</h3>
                <p className="text-muted-foreground text-sm mb-4">Download instructions sent to your inbox</p>
                <Button variant="outline" size="sm" className="w-full">
                  Open Email
                </Button>
              </div>
              
              <div className="gradient-card rounded-xl p-6 text-center">
                <Download className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Download Extension</h3>
                <p className="text-muted-foreground text-sm mb-4">Get the Chrome extension file</p>
                <Button variant="primary" size="sm" className="w-full">
                  Download Now
                </Button>
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-8 mb-12">
              <h2 className="text-xl font-bold mb-4">Need help getting started?</h2>
              <p className="text-muted-foreground mb-6">
                Our quick setup guide will have you extracting Amazon product data in under 2 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  View Setup Guide
                </Button>
                <Button variant="ghost">
                  Contact Support
                </Button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Questions? We're here to help! Reach out to our support team anytime.
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
        </div>
      </section>
    </div>
  );
};

export default Success;
