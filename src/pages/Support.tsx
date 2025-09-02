
import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight, Mail, MessageCircle, Book, Star, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>(['installation']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const faqSections = [
    {
      id: 'installation',
      title: 'Installation & Setup',
      questions: [
        {
          q: 'How do I install the AMZ Extractor extension?',
          a: 'Download the .crx file from your purchase confirmation email, go to chrome://extensions/, enable Developer mode, and drag the file into the page. The extension will install automatically and appear in your toolbar.'
        },
        {
          q: 'Which browsers are supported?',
          a: 'AMZ Extractor works with Google Chrome (v88+), Microsoft Edge (Chromium-based), Brave Browser, and Opera. Firefox support is planned for 2024.'
        },
        {
          q: 'Why do I need to enable Developer mode?',
          a: 'Since AMZ Extractor is distributed directly (not through Chrome Web Store), Developer mode is required to install the extension manually. This ensures you get the latest version with all features.'
        },
        {
          q: 'Can I install on multiple computers?',
          a: 'Yes! Your license allows installation on all your personal devices. Simply download the extension file on each computer and follow the same installation process.'
        }
      ]
    },
    {
      id: 'usage',
      title: 'Using the Extension',
      questions: [
        {
          q: 'How do I extract product data from Amazon?',
          a: 'Navigate to any Amazon product page and click the AMZ Extractor icon in your browser toolbar. The extension automatically detects and extracts all available product information including title, price, features, reviews, and specifications.'
        },
        {
          q: 'Which Amazon sites are supported?',
          a: 'AMZ Extractor works with all major Amazon domains: .com, .co.uk, .ca, .de, .fr, .it, .es, .com.au, .co.jp, .in, .com.mx, .com.br, and more.'
        },
        {
          q: 'What data formats can I export?',
          a: 'Export in JSON (structured data for developers), CSV (spreadsheet compatible), or formatted text (ready for content creation). Each format is optimized for different workflows.'
        },
        {
          q: 'How accurate is the extracted data?',
          a: 'AMZ Extractor uses advanced parsing algorithms with 98%+ accuracy. The extension continuously updates to handle Amazon\'s layout changes and new product formats.'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Issues',
      questions: [
        {
          q: 'The extension isn\'t working on Amazon pages',
          a: 'Ensure you\'re on a product details page (not search results). Refresh the page, check that the extension is enabled and pinned to your toolbar. Clear browser cache if issues persist.'
        },
        {
          q: 'Data extraction is incomplete or inaccurate',
          a: 'Some product pages have non-standard layouts. Wait 3-5 seconds for the page to fully load before extracting. Report persistent issues with specific URLs to our support team.'
        },
        {
          q: 'The extension conflicts with other tools',
          a: 'Disable other Amazon-related extensions temporarily. AMZ Extractor is compatible with most tools but may conflict with similar product scrapers or Amazon assistants.'
        },
        {
          q: 'Extension not showing in toolbar',
          a: 'Click the puzzle piece icon in Chrome toolbar and pin AMZ Extractor. If not visible, go to chrome://extensions/ and ensure the extension is enabled.'
        }
      ]
    },
    {
      id: 'billing',
      title: 'Account & Billing',
      questions: [
        {
          q: 'How do I get a refund?',
          a: 'We offer a 30-day money-back guarantee. Contact support with your purchase details for a full refund, no questions asked. Refunds are processed within 5-7 business days.'
        },
        {
          q: 'Can I use the extension on multiple devices?',
          a: 'Yes! Your AMZ Extractor license allows installation on unlimited personal devices. Download and install on each browser where you want to use it.'
        },
        {
          q: 'Is there a subscription fee?',
          a: 'No! AMZ Extractor is a one-time purchase of $27. No recurring fees, subscription costs, or hidden charges. You own the software forever with free updates.'
        },
        {
          q: 'Do I get updates and new features?',
          a: 'Yes! All updates, bug fixes, and new features are included free for life. Updates are delivered automatically through the extension.'
        }
      ]
    }
  ];

  const filteredSections = faqSections.map(section => ({
    ...section,
    questions: section.questions.filter(
      qa => qa.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            qa.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.questions.length > 0);

  return (
    <>
      <Helmet>
        <title>Support - AMZ Extractor | Amazon Product Data Extraction Help</title>
        <meta name="description" content="Get help with AMZ Extractor Amazon extension. Installation guides, troubleshooting, FAQ, and expert support for product data extraction and content creation." />
        <meta name="keywords" content="AMZ Extractor support, Amazon extension help, product data extraction support, Chrome extension troubleshooting, Amazon scraper help" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="border-b border-border bg-background">
          <div className="container-custom py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/21e93c14-f110-46be-9a78-e5ddc580d29f.png" 
                  alt="AI Writer Pros" 
                  className="w-8 h-8 dark:hidden"
                />
                <img 
                  src="/lovable-uploads/3a71676f-ab4f-464b-9ccf-41cecd50b2b0.png" 
                  alt="AI Writer Pros" 
                  className="w-8 h-8 hidden dark:block"
                />
                <span className="text-xl font-bold gradient-text">AI Writer Pros</span>
              </Link>
              <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Home
              </Link>
            </div>
          </div>
        </header>

        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Hero Section */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  We're Here to <span className="gradient-text">Help</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Find answers to common questions or get in touch with our support team
                </p>
                
                {/* Search Bar */}
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for answers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  />
                </div>
              </div>

              {/* Contact Options Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="gradient-card rounded-xl p-6 text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-foreground">Email Support</h3>
                  <p className="text-muted-foreground text-sm mb-4">Get detailed help via email</p>
                  <p className="text-sm text-primary">Response within 24 hours</p>
                </div>
                
                <div className="gradient-card rounded-xl p-6 text-center">
                  <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-foreground">Live Chat</h3>
                  <p className="text-muted-foreground text-sm mb-4">Chat with our support team</p>
                  <p className="text-sm text-primary">Available 9 AM - 6 PM EST</p>
                </div>

                <div className="gradient-card rounded-xl p-6 text-center">
                  <Book className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-foreground">Documentation</h3>
                  <p className="text-muted-foreground text-sm mb-4">Comprehensive guides</p>
                  <Link to="/documentation" className="text-sm text-primary hover:underline">
                    Browse docs →
                  </Link>
                </div>
              </div>

              {/* FAQ Sections */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-foreground">Frequently Asked Questions</h2>
                
                {filteredSections.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
                    <Button 
                      variant="outline" 
                      onClick={() => setSearchQuery('')}
                      className="mt-4"
                    >
                      Clear Search
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredSections.map((section) => (
                      <div key={section.id} className="gradient-card rounded-xl p-6">
                        <button
                          onClick={() => toggleSection(section.id)}
                          className="flex items-center justify-between w-full text-left"
                        >
                          <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                          {expandedSections.includes(section.id) ? (
                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-muted-foreground" />
                          )}
                        </button>
                        
                        {expandedSections.includes(section.id) && (
                          <div className="mt-6 space-y-4">
                            {section.questions.map((qa, index) => (
                              <div key={index} className="border-l-2 border-primary pl-4">
                                <h4 className="font-medium mb-2 text-foreground">{qa.q}</h4>
                                <p className="text-muted-foreground text-sm">{qa.a}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Form */}
              <div className="gradient-card rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Still Need Help?</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Subject</label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground">
                      <option>Installation Help</option>
                      <option>Technical Issue</option>
                      <option>Billing Question</option>
                      <option>Feature Request</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="Describe your issue or question in detail..."
                    ></textarea>
                  </div>
                  
                  <Button variant="hero" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Resources Section */}
              <div>
                <h2 className="text-2xl font-bold mb-8 text-foreground">Additional Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link to="/user-guide" className="gradient-card rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <Book className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold mb-2 text-foreground">User Guide</h3>
                    <p className="text-muted-foreground text-sm">Complete documentation and tutorials</p>
                  </Link>

                  <Link to="/best-practices" className="gradient-card rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <Star className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold mb-2 text-foreground">Best Practices</h3>
                    <p className="text-muted-foreground text-sm">Tips for getting the most out of AMZ Extractor</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Support;
