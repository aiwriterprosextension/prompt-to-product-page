
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import PurchaseButton from '@/components/PurchaseButton';
import DarkModeToggle from '@/components/DarkModeToggle';
import CountdownTimer from '@/components/CountdownTimer';

const Pricing = () => {
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
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Simple, One-Time Pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            No monthly fees, no hidden costs. Get lifetime access to AMZ Extractor for one low price.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl p-8 max-w-md mx-auto border border-border">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">AMZ Extractor</h3>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl text-muted-foreground line-through">$39</span>
                <span className="text-5xl font-bold text-primary">$19</span>
              </div>
              <p className="text-muted-foreground">One-time payment, lifetime access</p>
            </div>
            
            <ul className="text-left space-y-3 mb-8">
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
            
            <PurchaseButton />
            
            <CountdownTimer />
            
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Secure payment processed by Stripe
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Is this a one-time payment?</h3>
              <p className="text-muted-foreground">Yes! Pay once and get lifetime access to AMZ Extractor. No monthly subscriptions or hidden fees.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Which browsers are supported?</h3>
              <p className="text-muted-foreground">AMZ Extractor works on both Google Chrome and Microsoft Edge browsers.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Do you offer refunds?</h3>
              <p className="text-muted-foreground">Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">How do I get support?</h3>
              <p className="text-muted-foreground">Email support is included with your purchase. Contact us at support@aiwriterpros.com for assistance.</p>
            </div>
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

export default Pricing;
