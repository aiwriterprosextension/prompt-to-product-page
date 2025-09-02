import React, { useState } from 'react';
import { Book, Download, Play, ChevronRight, ArrowLeft, Search, ExternalLink } from 'lucide-react';
import Button from '../components/Button';
import { Link                    <h2 className="text-2xl font-bold mb-4 text-foreground">What is AMZ Extractor?</h2>
                    <div className="gradient-card rounded-xl p-6">
                        <p className="text-muted-foreground mb-4">
                        AMZ Extractor is a powerful Chrome extension designed to extract comprehensive product data from Amazon pages. Built for content creators, affiliate marketers, and researchers, it transforms how you gather and utilize Amazon product information.rom 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      items: [
        'What is AMZ Extractor',
        'Key Features',
        'System Requirements'
      ]
    },
    {
      id: 'getting-started',
      title: 'Getting Started',
      items: [
        'Installation Guide',
        'First Steps',
        'Basic Configuration'
      ]
    },
    {
      id: 'features',
      title: 'Features',
      items: [
        'Data Extraction',
        'Export Options',
        'Browser Compatibility'
      ]
    },
    {
      id: 'api-reference',
      title: 'Technical Reference',
      items: [
        'Data Structure',
        'Export Formats',
        'Error Codes'
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      items: [
        'Common Issues',
        'Browser Problems',
        'Performance Tips'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - AMZ Extractor | Complete Amazon Extension Guide</title>
        <meta name="description" content="Complete documentation for AMZ Extractor Amazon extension. API reference, technical guides, troubleshooting, and comprehensive feature documentation." />
        <meta name="keywords" content="AMZ Extractor documentation, Amazon extension API, technical reference, developer guide, Chrome extension docs" />
        <link rel="canonical" href="https://aiwriterpros.com/documentation" />
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
              <Link to="/support" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Support
              </Link>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 border-r border-border bg-muted/30 min-h-screen p-6">
            <div className="mb-6">
              <h2 className="font-bold text-lg mb-4 text-foreground">Documentation</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search docs..."
                  className="w-full pl-9 pr-3 py-2 text-sm border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                />
              </div>
            </div>
            
            <nav className="space-y-2">
              {sections.map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    {section.title}
                  </button>
                  {activeSection === section.id && (
                    <div className="ml-4 mt-2 space-y-1">
                      {section.items.map((item, index) => (
                        <a
                          key={index}
                          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            <div className="max-w-4xl">
              {/* Hero */}
              <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4 text-foreground">
                  AMZ Extractor <span className="gradient-text">Documentation</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Comprehensive guides and technical reference for AMZ Extractor
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF Guide
                  </Button>
                  <Button variant="outline">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Tutorials
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    GitHub Repository
                  </Button>
                </div>
              </div>

              {/* Quick Navigation */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Link to="/user-guide" className="gradient-card rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 feature-icon mb-4">
                    <span className="text-lg">📚</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">User Guide</h3>
                  <p className="text-muted-foreground text-sm">Step-by-step tutorials and guides</p>
                </Link>
                
                <Link to="/best-practices" className="gradient-card rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 feature-icon mb-4">
                    <span className="text-lg">💡</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">Best Practices</h3>
                  <p className="text-muted-foreground text-sm">Tips and optimization strategies</p>
                </Link>
                
                <div className="gradient-card rounded-xl p-6">
                  <div className="w-12 h-12 feature-icon mb-4">
                    <span className="text-lg">🔧</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">Technical Reference</h3>
                  <p className="text-muted-foreground text-sm">API docs and technical specs</p>
                </div>
              </div>

              {/* Content Based on Active Section */}
              {activeSection === 'overview' && (
                <div className="space-y-8">
                  <section id="what-is-ai-writer-pros">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">What is AI Writer Pros?</h2>
                    <div className="gradient-card rounded-xl p-6">
                      <p className="text-muted-foreground mb-4">
                        AI Writer Pros is a powerful Chrome extension designed to extract comprehensive product data from Amazon pages. Built for content creators, affiliate marketers, and researchers, it transforms how you gather and utilize Amazon product information.
                      </p>
                      <h4 className="font-semibold mb-2 text-foreground">Perfect for:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Affiliate marketers creating product reviews</li>
                        <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Content creators writing comparison articles</li>
                        <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Researchers analyzing market trends</li>
                        <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />E-commerce professionals tracking competitors</li>
                        <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Bloggers needing accurate product information</li>
                      </ul>
                    </div>
                  </section>

                  <section id="key-features">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="gradient-card rounded-xl p-6">
                        <h3 className="font-semibold mb-3 text-foreground">🎯 Comprehensive Data Extraction</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Product titles and descriptions</li>
                          <li>• Pricing and availability</li>
                          <li>• Customer reviews and ratings</li>
                          <li>• Technical specifications</li>
                          <li>• Product images and videos</li>
                          <li>• ASIN and category information</li>
                        </ul>
                      </div>
                      
                      <div className="gradient-card rounded-xl p-6">
                        <h3 className="font-semibold mb-3 text-foreground">⚡ Multiple Export Formats</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• JSON for developers and APIs</li>
                          <li>• CSV for spreadsheet analysis</li>
                          <li>• Formatted text for content creation</li>
                          <li>• Custom templates available</li>
                          <li>• Bulk export capabilities</li>
                          <li>• One-click copy to clipboard</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="system-requirements">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">System Requirements</h2>
                    <div className="gradient-card rounded-xl p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">Supported Browsers</h4>
                          <ul className="text-sm text-muted-foreground space-y-2">
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-success rounded-full mr-2"></span>
                              Google Chrome 88+
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-success rounded-full mr-2"></span>
                              Microsoft Edge (Chromium)
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-success rounded-full mr-2"></span>
                              Brave Browser
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-warning rounded-full mr-2"></span>
                              Firefox (Coming 2024)
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">System Specs</h4>
                          <ul className="text-sm text-muted-foreground space-y-2">
                            <li>• 4GB RAM minimum</li>
                            <li>• 50MB available storage</li>
                            <li>• Internet connection required</li>
                            <li>• Developer mode access</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'getting-started' && (
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Installation Guide</h2>
                    <div className="gradient-card rounded-xl p-6">
                      <p className="text-muted-foreground mb-4">
                        Follow these steps to install AMZ Extractor on your Chrome browser:
                      </p>
                      <ol className="space-y-3 text-sm">
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                          <span className="text-foreground">Download the extension file from your purchase confirmation email</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                          <span className="text-foreground">Open Chrome and navigate to chrome://extensions/</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                          <span className="text-foreground">Enable "Developer mode" in the top right corner</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                          <span className="text-foreground">Drag and drop the .crx file into the extensions page</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">5</span>
                          <span className="text-foreground">Click "Add extension" when prompted</span>
                        </li>
                      </ol>
                    </div>
                  </section>
                </div>
              )}
              
              <div className="mt-12 text-center">
                <h2 className="text-xl font-bold mb-4 text-foreground">Need More Help?</h2>
                <p className="text-muted-foreground mb-6">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <Link to="/support">
                  <Button variant="primary">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documentation;
