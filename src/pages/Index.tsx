
import React from 'react';
import { ArrowRight, Check, Download, Globe, FileText, Zap, Shield, Star, Users } from 'lucide-react';
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
      description: "Works on Amazon sites in all countries - .com, .co.uk, .de, .fr, and more"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "One-Click Extraction",
      description: "Extract complete product data including title, price, images, reviews in seconds"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Multiple Export Formats",
      description: "Export data as JSON, CSV, or formatted text - perfect for any workflow"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "No Monthly Fees",
      description: "One-time purchase, lifetime access. No subscriptions or hidden costs"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Affiliate Marketer",
      content: "This extension has cut my product research time by 80%. I can create detailed reviews in minutes instead of hours!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Content Creator",
      content: "Finally, a tool that actually works! The data extraction is incredibly accurate and saves me so much manual work.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Digital Marketer", 
      content: "Worth every penny. The time I save with this extension pays for itself in just one product review.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold gradient-text">AI Writer Pros</span>
            </div>
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
              <span className="gradient-text">in Seconds</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The Chrome extension that transforms how affiliate marketers create content. 
              One-click extraction of everything you need for compelling product reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                variant="hero" 
                size="xl"
                onClick={handlePurchase}
                className="w-full sm:w-auto"
              >
                Get Extension Now - $27
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-muted-foreground">
                ✨ 30-day money-back guarantee
              </p>
            </div>
            <div className="gradient-border rounded-xl p-2 max-w-4xl mx-auto animate-float">
              <div className="bg-background rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold gradient-text">500+</div>
                    <div className="text-muted-foreground">Active Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text">50k+</div>
                    <div className="text-muted-foreground">Products Extracted</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text">4.9★</div>
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
                Tired of manually copying product details from Amazon?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Spending hours copying and formatting product information</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Missing important details that could boost conversions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Losing productivity switching between tabs and tools</p>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="gradient-card rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  One-click extraction of everything you need
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success" />
                    <span>Complete product titles and descriptions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success" />
                    <span>Current prices and availability</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success" />
                    <span>High-resolution product images</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success" />
                    <span>Customer reviews and ratings</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success" />
                    <span>Key features and specifications</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Everything you need to create <span className="gradient-text">winning content</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our Chrome extension is packed with features designed specifically for affiliate marketers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="testimonial-card text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="feature-icon w-fit mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join <span className="gradient-text">500+ affiliate marketers</span> who trust AI Writer Pros
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
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-semibold">
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
      <section className="section-padding">
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
                <div className="text-6xl font-bold gradient-text mb-4">$27</div>
                <div className="text-muted-foreground mb-6">One-time payment</div>
                
                <div className="space-y-3 mb-8 text-left">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0" />
                    <span>Chrome extension download</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0" />
                    <span>Lifetime updates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0" />
                    <span>Email support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>
                
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full mb-4"
                  onClick={handlePurchase}
                >
                  Get Extension Now
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
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to transform your content creation?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of affiliate marketers who are already creating better content faster
          </p>
          <Button 
            variant="secondary" 
            size="xl"
            onClick={handlePurchase}
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
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <span className="text-xl font-bold gradient-text">AI Writer Pros</span>
              </div>
              <p className="text-muted-foreground">
                The ultimate Chrome extension for Amazon affiliate marketers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Features</div>
                <div>Pricing</div>
                <div>Download</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Documentation</div>
                <div>FAQ</div>
                <div>Contact</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>Refund Policy</div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 AI Writer Pros. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
