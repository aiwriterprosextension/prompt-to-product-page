
import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight, Mail, MessageCircle, Book, Star, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

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
          q: 'How do I install the AI Writer Pros extension?',
          a: 'Download the .crx file, go to chrome://extensions/, enable Developer mode, and drag the file into the page. See our detailed installation guide for step-by-step instructions.'
        },
        {
          q: 'Which browsers are supported?',
          a: 'AI Writer Pros works with Google Chrome (v88+), Microsoft Edge (Chromium-based), and Brave Browser. Firefox support is planned for future releases.'
        },
        {
          q: 'Why do I need to enable Developer mode?',
          a: 'Since AI Writer Pros is distributed directly (not through Chrome Web Store), Developer mode is required to install the extension manually.'
        }
      ]
    },
    {
      id: 'usage',
      title: 'Using the Extension',
      questions: [
        {
          q: 'How do I extract product data from Amazon?',
          a: 'Navigate to any Amazon product page and click the AI Writer Pros icon in your browser toolbar. The extension will automatically detect and extract all available product information.'
        },
        {
          q: 'Which Amazon sites are supported?',
          a: 'AI Writer Pros works with all major Amazon domains including .com, .co.uk, .ca, .de, .fr, .it, .es, .com.au, .co.jp, and more.'
        },
        {
          q: 'What data formats can I export?',
          a: 'You can export extracted data in JSON, CSV, or plain text format. Each format is optimized for different use cases - JSON for developers, CSV for spreadsheets, and text for content creation.'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Issues',
      questions: [
        {
          q: 'The extension isn\'t working on Amazon pages',
          a: 'Try refreshing the page and ensure you\'re on a product details page (not search results or category pages). If issues persist, check that the extension is enabled and pinned to your toolbar.'
        },
        {
          q: 'Data extraction is incomplete or inaccurate',
          a: 'Some product pages have non-standard layouts. Try waiting a few seconds for the page to fully load before clicking the extension. Report persistent issues to our support team.'
        },
        {
          q: 'The extension conflicts with other tools',
          a: 'Disable other Amazon-related extensions temporarily to identify conflicts. AI Writer Pros is designed to work alongside most popular browser extensions.'
        }
      ]
    },
    {
      id: 'billing',
      title: 'Account & Billing',
      questions: [
        {
          q: 'How do I get a refund?',
          a: 'We offer a 30-day money-back guarantee. Contact our support team with your purchase details, and we\'ll process your refund within 5-7 business days.'
        },
        {
          q: 'Can I use the extension on multiple devices?',
          a: 'Yes! Your AI Writer Pros license allows installation on unlimited personal devices. Simply download and install the extension on each browser where you want to use it.'
        },
        {
          q: 'Is there a subscription fee?',
          a: 'No! AI Writer Pros is a one-time purchase of $27. There are no recurring fees, subscription costs, or hidden charges. You own the software forever.'
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
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
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Contact Options Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="gradient-card rounded-xl p-6 text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-muted-foreground text-sm mb-4">Get detailed help via email</p>
                <p className="text-sm text-primary">Response within 24 hours</p>
              </div>
              
              <div className="gradient-card rounded-xl p-6 text-center">
                <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-muted-foreground text-sm mb-4">Chat with our support team</p>
                <p className="text-sm text-primary">Available 9 AM - 6 PM EST</p>
              </div>

              <div className="gradient-card rounded-xl p-6 text-center">
                <Book className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Documentation</h3>
                <p className="text-muted-foreground text-sm mb-4">Comprehensive guides</p>
                <Link to="/documentation" className="text-sm text-primary hover:underline">
                  Browse docs →
                </Link>
              </div>
            </div>

            {/* FAQ Sections */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
              
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
                        <h3 className="text-lg font-semibold">{section.title}</h3>
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
                              <h4 className="font-medium mb-2">{qa.q}</h4>
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
              <h2 className="text-2xl font-bold mb-6">Still Need Help?</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Installation Help</option>
                    <option>Technical Issue</option>
                    <option>Billing Question</option>
                    <option>Feature Request</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
              <h2 className="text-2xl font-bold mb-8">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link to="/documentation" className="gradient-card rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <Book className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">User Guide</h3>
                  <p className="text-muted-foreground text-sm">Complete documentation and tutorials</p>
                </Link>

                <div className="gradient-card rounded-xl p-6">
                  <Star className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Best Practices</h3>
                  <p className="text-muted-foreground text-sm">Tips for getting the most out of AI Writer Pros</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
