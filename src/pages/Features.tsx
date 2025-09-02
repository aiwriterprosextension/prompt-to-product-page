
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap, Download, Globe, Target, Users, FileText, ArrowRight, Chrome, Monitor, Database, Shield } from 'lucide-react';
import DarkModeToggle from '@/components/DarkModeToggle';

const Features = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light/10 to-background dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
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
            Powerful Amazon Data Extraction Features
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
            Everything you need to extract, organize, and export Amazon product data efficiently.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Core Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-xl shadow-lg border border-border">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Bulk Extraction</h3>
              <p className="text-muted-foreground">Extract 5-100 products simultaneously from search results or category pages.</p>
            </div>
            <div className="p-6 bg-card rounded-xl shadow-lg border border-border">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Affiliate Link Generation</h3>
              <p className="text-muted-foreground">Automatically convert product URLs to your Amazon Associates affiliate links.</p>
            </div>
            <div className="p-6 bg-card rounded-xl shadow-lg border border-border">
              <Database className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Multiple Export Formats</h3>
              <p className="text-muted-foreground">Export data as JSON, CSV, or Excel files for easy integration with your tools.</p>
            </div>
            <div className="p-6 bg-card rounded-xl shadow-lg border border-border">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Global Marketplace Support</h3>
              <p className="text-muted-foreground">Works across 18+ Amazon marketplaces worldwide (.com, .co.uk, .de, .fr, etc.).</p>
            </div>
            <div className="p-6 bg-card rounded-xl shadow-lg border border-border">
              <Chrome className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Browser Compatibility</h3>
              <p className="text-muted-foreground">Compatible with both Google Chrome and Microsoft Edge browsers.</p>
            </div>
            <div className="p-6 bg-card rounded-xl shadow-lg border border-border">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Privacy Focused</h3>
              <p className="text-muted-foreground">All data processing happens locally on your machine. No data sent to external servers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Points */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">What Data Can You Extract?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Product Information</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-3" />
                  <span className="text-foreground">Product titles and descriptions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-3" />
                  <span className="text-foreground">Current and original prices</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-3" />
                  <span className="text-foreground">High-resolution product images</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-3" />
                  <span className="text-foreground">Product ratings and review counts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-3" />
                  <span className="text-foreground">Key product features and specifications</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Additional Data</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-3" />
                  <span className="text-foreground">Brand information</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-3" />
                  <span className="text-foreground">Availability status</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-3" />
                  <span className="text-foreground">Category and subcategory</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-3" />
                  <span className="text-foreground">Product URLs (standard and affiliate)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-3" />
                  <span className="text-foreground">Prime shipping information</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Start Extracting?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of marketers, creators, and sellers who are saving hours with AMZ Extractor.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold py-4 px-8 text-lg" asChild>
            <Link to="/pricing">
              Get AMZ Extractor Now <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
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

export default Features;
