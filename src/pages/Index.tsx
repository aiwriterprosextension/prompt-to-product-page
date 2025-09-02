
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap, Download, Globe, Target, Users, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PurchaseButton from '@/components/PurchaseButton';
import SocialProofNotifications from '@/components/SocialProofNotifications';
import DarkModeToggle from '@/components/DarkModeToggle';
import CountdownTimer from '@/components/CountdownTimer';
import TestimonialsSection from '@/components/TestimonialsSection';
import ExtensionPreview from '@/components/ExtensionPreview';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light/10 to-background dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <SocialProofNotifications />
      
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-border transition-colors duration-300">
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
              <Link to="/" className="dark:text-gray-300 dark:hover:text-white">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/features" className="dark:text-gray-300 dark:hover:text-white">Features</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/pricing" className="dark:text-gray-300 dark:hover:text-white">Pricing</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/support" className="dark:text-gray-300 dark:hover:text-white">Support</Link>
            </Button>
            <DarkModeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Extract Amazon Product Data in Seconds
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Stop wasting hours on manual research. AMZ Extractor pulls product info, images, and affiliate links in one click—across 18+ marketplaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-primary-foreground font-bold py-4 px-8 text-lg" asChild>
              <Link to="/pricing">
                Install AMZ Extractor Now <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-border text-muted-foreground hover:bg-accent" asChild>
              <Link to="/features">View Features</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-8">
            No signup required. Start extracting in seconds.
          </p>
        </div>
      </section>

      {/* Extension Preview */}
      <ExtensionPreview />

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-muted/30 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-2xl shadow-md border border-border">
              <Zap className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-primary mb-3">🚀 Bulk Extract 5–100 Products</h3>
              <p className="text-muted-foreground">
                Process multiple products simultaneously. Extract entire category pages or search results in one go.
              </p>
            </div>
            <div className="p-6 bg-card rounded-2xl shadow-md border border-border">
              <Target className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-primary mb-3">⚡ Auto-Generate Affiliate Links</h3>
              <p className="text-muted-foreground">
                Automatically converts product URLs to your affiliate links. Compatible with Amazon Associates program.
              </p>
            </div>
            <div className="p-6 bg-card rounded-2xl shadow-md border border-border">
              <FileText className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-primary mb-3">📊 Export to CSV, Excel, JSON</h3>
              <p className="text-muted-foreground">
                Export your data in multiple formats for easy integration with your content workflow and tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">Who It's For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <Users className="w-16 h-16 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Affiliate Marketers</h3>
              <p className="text-muted-foreground">Build high-converting product comparison pages faster</p>
            </div>
            <div className="p-6">
              <FileText className="w-16 h-16 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Content Creators</h3>
              <p className="text-muted-foreground">Create product reviews and buying guides with accurate data</p>
            </div>
            <div className="p-6">
              <Globe className="w-16 h-16 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Ecom Sellers</h3>
              <p className="text-muted-foreground">Research competitor products and pricing strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-muted/30 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Install the Extension</h3>
              <p className="text-muted-foreground">Download and install AMZ Extractor on Chrome or Edge</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Navigate to Any Amazon Page</h3>
              <p className="text-muted-foreground">Visit any product page or search results on Amazon</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Click "Extract"</h3>
              <p className="text-muted-foreground">Click the extension icon and watch the magic happen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-muted/30 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Launch Offer - 50% Off for Early Adopters</h2>
          <div className="bg-card rounded-2xl shadow-xl p-8 max-w-md mx-auto border border-border">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">AMZ Extractor</h3>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl text-muted-foreground line-through">$39</span>
                <span className="text-5xl font-bold text-primary">$19</span>
              </div>
              <p className="text-muted-foreground">Lifetime access</p>
            </div>
            
            <ul className="text-left space-y-3 mb-6">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-success mr-3" />
                <span className="text-foreground">Compatible with Chrome & Microsoft Edge</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-success mr-3" />
                <span className="text-foreground">Universal Amazon marketplace support</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-success mr-3" />
                <span className="text-foreground">Complete data extraction (titles, prices, images, reviews)</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-success mr-3" />
                <span className="text-foreground">Multiple export formats (JSON/CSV)</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-success mr-3" />
                <span className="text-foreground">30-day money-back guarantee</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-success mr-3" />
                <span className="text-foreground">Email support included</span>
              </li>
            </ul>
            
            <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-bold py-4 px-8 text-lg mb-4" asChild>
              <Link to="/pricing">
                Install AMZ Extractor Now <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <CountdownTimer />
            
            <p className="text-sm text-muted-foreground mt-4">
              Secure payment processed by Stripe
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black py-12 text-center transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gray-400 mb-4">
            &copy; {new Date().getFullYear()} AMZ Extractor. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300">Terms of Service</Link>
            <Link to="/refund" className="hover:text-gray-300">Refund Policy</Link>
            <Link to="/support" className="hover:text-gray-300">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
