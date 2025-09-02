
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Star, Users, Download, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import DarkModeToggle from '@/components/DarkModeToggle';
import CountdownTimer from '@/components/CountdownTimer';
import TestimonialsSection from '@/components/TestimonialsSection';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pricing - AMZ Extractor | Amazon Product Data Extraction Tool</title>
        <meta name="description" content="Get AMZ Extractor for just $27. Extract Amazon product data, images, and affiliate links from 18+ marketplaces. 30-day money-back guarantee." />
        <meta name="keywords" content="amz extractor price, amazon data extraction cost, product research tool pricing, amazon scraper price" />
        <link rel="canonical" href="https://amzextractor.com/pricing" />
        <meta property="og:title" content="AMZ Extractor Pricing - $27 Lifetime Access" />
        <meta property="og:description" content="Get lifetime access to AMZ Extractor for just $27. Extract Amazon product data across 18+ marketplaces with bulk extraction and export features." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

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
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Get lifetime access to AMZ Extractor with no monthly fees or hidden costs.
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl border-2 border-primary/20 p-8 relative overflow-hidden">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                🔥 Launch Special - Limited Time
              </div>
            </div>
            
            <div className="text-center pt-4">
              <h2 className="text-3xl font-bold text-foreground mb-4">AMZ Extractor Pro</h2>
              
              <div className="mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-3xl text-muted-foreground line-through">$54.00</span>
                  <span className="text-6xl font-bold text-primary">$27</span>
                </div>
                <p className="text-muted-foreground text-lg">One-time payment • Lifetime access</p>
                <p className="text-primary font-semibold">Save $27 (50% off)</p>
              </div>

              <div className="space-y-4 mb-8 text-left">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-4 flex-shrink-0" />
                  <span className="text-foreground">Extract from 18+ Amazon marketplaces</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-4 flex-shrink-0" />
                  <span className="text-foreground">Bulk extract 5-100 products at once</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-4 flex-shrink-0" />
                  <span className="text-foreground">Complete product data (titles, prices, images, reviews)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-4 flex-shrink-0" />
                  <span className="text-foreground">Auto-generate Amazon affiliate links</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-4 flex-shrink-0" />
                  <span className="text-foreground">Export to CSV, Excel, and JSON formats</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-4 flex-shrink-0" />
                  <span className="text-foreground">Works on Chrome & Microsoft Edge</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-4 flex-shrink-0" />
                  <span className="text-foreground">Lifetime updates included</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-4 flex-shrink-0" />
                  <span className="text-foreground">30-day money-back guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-4 flex-shrink-0" />
                  <span className="text-foreground">Priority email support</span>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-bold py-4 px-8 text-lg mb-6" asChild>
                <Link to="/pricing">
                  Get AMZ Extractor Now - $27 <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>

              <CountdownTimer />

              <div className="text-center mt-6 space-y-2">
                <p className="text-sm text-muted-foreground">
                  ✅ Instant download • ✅ Secure payment via Stripe • ✅ No recurring fees
                </p>
                <div className="flex items-center justify-center space-x-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">4.9/5 from 500+ customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof stats */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50M+</div>
              <div className="text-muted-foreground">Products Extracted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">18+</div>
              <div className="text-muted-foreground">Amazon Marketplaces</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid gap-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Is this really a one-time payment?
              </h3>
              <p className="text-muted-foreground">
                Yes! Pay $27 once and get lifetime access to AMZ Extractor with all future updates included. No monthly fees or hidden costs.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                What Amazon marketplaces are supported?
              </h3>
              <p className="text-muted-foreground">
                AMZ Extractor works on all major Amazon marketplaces including US, UK, Canada, Germany, France, Italy, Spain, Japan, Australia, and more.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Do I need any technical skills to use it?
              </h3>
              <p className="text-muted-foreground">
                Not at all! AMZ Extractor is designed for everyone. Simply install the extension, visit any Amazon page, and click extract. It's that simple.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Is there a money-back guarantee?
              </h3>
              <p className="text-muted-foreground">
                Yes! We offer a 30-day money-back guarantee. If you're not satisfied with AMZ Extractor for any reason, we'll refund your purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Amazon Research?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join 2,500+ successful Amazon sellers who use AMZ Extractor daily.
          </p>
          
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold py-4 px-8 text-lg" asChild>
            <Link to="/pricing">
              Get Started for $27 <ArrowRight className="w-5 h-5 ml-2" />
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

export default Pricing;
