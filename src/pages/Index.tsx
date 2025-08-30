
import React from 'react';
import { ArrowRight, Check, Download, Globe, FileText, Zap, Shield, Star, Users, Chrome, Monitor } from 'lucide-react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    // For now, navigate to success page (Stripe integration will be added later)
    navigate('/success');
  };

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Universal Amazon Support",
      description: "Works on all major Amazon marketplaces - .com, .ca, .co.uk, .de, .fr, .es, .it, .in, .com.au, .co.jp"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "One-Click Data Extraction",
      description: "Extract complete product data including titles, prices, ASINs, images, reviews, and features in seconds"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Multiple Export Formats",
      description: "Export data as JSON for technical use or CSV for spreadsheets - perfect for any workflow"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Chrome + Edge Compatible",
      description: "Works seamlessly on both Chrome and Microsoft Edge browsers with identical functionality"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Affiliate Marketer",
      content: "AMZ Extractor has cut my product research time by 80%. I can create detailed reviews in minutes instead of hours!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Content Creator", 
      content: "Finally, a tool that actually works on both Chrome and Edge! The data extraction is incredibly accurate.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Digital Marketer",
      content: "Worth every penny. The time I save with AMZ Extractor pays for itself in just one product review.",
      rating: 5
    }
  ];

  const amazonMarketplaces = [
    "Amazon.com (US)", "Amazon.ca (Canada)", "Amazon.co.uk (UK)", 
    "Amazon.de (Germany)", "Amazon.fr (France)", "Amazon.es (Spain)",
    "Amazon.it (Italy)", "Amazon.in (India)", "Amazon.com.au (Australia)", "Amazon.co.jp (Japan)"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AMZ</span>
              </div>
              <span className="text-xl font-bold text-orange-600">AMZ Extractor</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <div className="relative group">
                <button className="text-muted-foreground hover:text-foreground transition-colors">Resources</button>
                <div className="absolute top-full left-0 mt-2 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px]">
                  <a href="/amazon-generator" className="block px-4 py-2 text-sm hover:bg-muted">Article Creator</a>
                  <a href="/documentation" className="block px-4 py-2 text-sm hover:bg-muted">User Guide</a>
                  <a href="/support" className="block px-4 py-2 text-sm hover:bg-muted">FAQ</a>
                </div>
              </div>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="/support" className="text-muted-foreground hover:text-foreground transition-colors">Support</a>
            </nav>
            <Button variant="outline" size="sm">
              Login
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-bg section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Extract Amazon Product Data{' '}
              <span className="text-orange-600">in Seconds</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              AMZ Extractor makes it easy for affiliate marketers to pull product details instantly 
              on Chrome & Microsoft Edge. One-click extraction of all the data you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                variant="hero" 
                size="xl"
                onClick={handlePurchase}
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              >
                Get AMZ Extractor - $27
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-muted-foreground">
                ✨ Chrome & Edge compatible • 30-day money-back guarantee
              </p>
            </div>
            <div className="flex justify-center items-center gap-6 mb-12">
              <div className="flex items-center gap-2">
                <Chrome className="w-6 h-6 text-blue-600" />
                <span className="text-sm font-medium">Chrome</span>
              </div>
              <div className="flex items-center gap-2">
                <Monitor className="w-6 h-6 text-blue-600" />
                <span className="text-sm font-medium">Microsoft Edge</span>
              </div>
            </div>
            <div className="gradient-border rounded-xl p-2 max-w-4xl mx-auto animate-float">
              <div className="bg-background rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange-600">500+</div>
                    <div className="text-muted-foreground">Active Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">50k+</div>
                    <div className="text-muted-foreground">Products Extracted</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">4.9★</div>
                    <div className="text-muted-foreground">User Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Tired of manually copying product details from Amazon for your affiliate content?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Spending hours copying and formatting product information</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Missing important details that could boost conversions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Losing productivity switching between tabs and tools</p>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="gradient-card rounded-xl p-8 border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">
                  AMZ Extractor automates everything
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Complete product titles and descriptions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Current prices and availability status</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>High-resolution product images with URLs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Customer reviews and ratings data</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Product ASINs and technical specifications</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Everything you need for <span className="text-orange-600">Amazon data extraction</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AMZ Extractor is packed with features designed specifically for affiliate marketers and content creators
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="testimonial-card text-center animate-slide-up hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="feature-icon w-fit mx-auto mb-4 text-orange-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amazon Marketplaces Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Works on <span className="text-orange-600">All Major Amazon Marketplaces</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Extract product data from any Amazon site worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {amazonMarketplaces.map((marketplace, index) => (
              <div key={index} className="bg-background rounded-lg p-4 text-center shadow-sm">
                <div className="text-sm font-medium">{marketplace}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join <span className="text-orange-600">500+ affiliate marketers</span> using AMZ Extractor
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              One-time payment, lifetime access. No subscriptions or hidden fees.
            </p>
            
            <div className="gradient-border rounded-xl p-2 max-w-md mx-auto">
              <div className="bg-background rounded-lg p-8 text-center">
                <div className="text-6xl font-bold text-orange-600 mb-4">$27</div>
                <div className="text-muted-foreground mb-6">One-time payment</div>
                
                <div className="space-y-3 mb-8 text-left">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Chrome & Microsoft Edge extension</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>All Amazon marketplaces supported</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>JSON & CSV export formats</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Lifetime updates included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Email support & installation guide</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>
                
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full mb-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                  onClick={handlePurchase}
                >
                  Get AMZ Extractor Now
                  <Download className="ml-2 w-5 h-5" />
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  🔒 Secure checkout with Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to extract Amazon data like a pro?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of affiliate marketers who are already saving hours with AMZ Extractor
          </p>
          <Button 
            variant="secondary" 
            size="xl"
            onClick={handlePurchase}
            className="bg-white text-orange-600 hover:bg-gray-50"
          >
            Get Started Today - $27
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AMZ</span>
                </div>
                <span className="text-xl font-bold text-orange-600">AMZ Extractor</span>
              </div>
              <p className="text-muted-foreground">
                The ultimate Chrome & Edge extension for Amazon data extraction.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-muted-foreground">
                <div><a href="#features">Features</a></div>
                <div><a href="#pricing">Pricing</a></div>
                <div><a href="/download">Download</a></div>
                <div>System Requirements</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-muted-foreground">
                <div><a href="/amazon-generator">Article Creator</a></div>
                <div><a href="/documentation">Installation Guide</a></div>
                <div>Video Tutorials</div>
                <div>Best Practices</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-muted-foreground">
                <div><a href="/documentation">Documentation</a></div>
                <div><a href="/support">FAQ</a></div>
                <div><a href="/contact">Contact</a></div>
                <div>support@aiwriterpros.com</div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 AMZ Extractor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
