
import React, { useState } from 'react';
import { Book, Download, Play, ChevronRight, ArrowLeft, Search, ExternalLink, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const UserGuide = () => {
  const [activeSection, setActiveSection] = useState('getting-started');

  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      items: [
        'Installation Guide',
        'First Steps',
        'Basic Configuration',
        'Browser Setup'
      ]
    },
    {
      id: 'user-guide',
      title: 'User Guide',
      items: [
        'Extracting Product Data',
        'Export Formats',
        'Advanced Features',
        'Bulk Operations'
      ]
    },
    {
      id: 'amazon-sites',
      title: 'Amazon Sites',
      items: [
        'Supported Countries',
        'Regional Differences',
        'Multi-Language Support'
      ]
    },
    {
      id: 'data-formats',
      title: 'Data & Export',
      items: [
        'JSON Export',
        'CSV Format',
        'Text Content',
        'Custom Templates'
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      items: [
        'Common Issues',
        'Browser Compatibility',
        'Performance Tips',
        'Error Messages'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>User Guide - AI Writer Pros | Complete Amazon Extension Documentation</title>
        <meta name="description" content="Complete user guide for AI Writer Pros Amazon extension. Step-by-step tutorials, installation guide, data extraction tips, and troubleshooting help." />
        <meta name="keywords" content="AI Writer Pros user guide, Amazon extension tutorial, product data extraction guide, Chrome extension documentation, Amazon scraper manual" />
        <link rel="canonical" href="https://aiwriterpros.com/user-guide" />
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
              <h2 className="font-bold text-lg mb-4 text-foreground">User Guide</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search guide..."
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
                  AI Writer Pros <span className="gradient-text">User Guide</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Everything you need to know about extracting Amazon product data and creating content
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF Guide
                  </Button>
                  <Button variant="outline">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Video Tutorial
                  </Button>
                </div>
              </div>

              {/* Quick Start Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="gradient-card rounded-xl p-6">
                  <div className="w-12 h-12 feature-icon mb-4">
                    <span className="text-lg">🚀</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">5-Minute Setup</h3>
                  <p className="text-muted-foreground text-sm">Install and start extracting in minutes</p>
                </div>
                
                <div className="gradient-card rounded-xl p-6">
                  <div className="w-12 h-12 feature-icon mb-4">
                    <span className="text-lg">📊</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">Rich Data</h3>
                  <p className="text-muted-foreground text-sm">Extract 20+ data points per product</p>
                </div>
                
                <div className="gradient-card rounded-xl p-6">
                  <div className="w-12 h-12 feature-icon mb-4">
                    <span className="text-lg">⚡</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">Instant Export</h3>
                  <p className="text-muted-foreground text-sm">Multiple formats, ready to use</p>
                </div>
              </div>

              {/* Content Based on Active Section */}
              {activeSection === 'getting-started' && (
                <div className="space-y-8">
                  <section id="installation-guide">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Installation Guide</h2>
                    <div className="gradient-card rounded-xl p-6">
                      <p className="text-muted-foreground mb-6">
                        Follow these simple steps to install AI Writer Pros on your Chrome browser:
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm mr-4 mt-1">1</span>
                          <div>
                            <h4 className="font-semibold mb-1 text-foreground">Download the Extension</h4>
                            <p className="text-muted-foreground text-sm">Check your email for the download link after purchase. The file will be named "amz-extractor-v1.0.zip"</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm mr-4 mt-1">2</span>
                          <div>
                            <h4 className="font-semibold mb-1 text-foreground">Open Chrome Extensions</h4>
                            <p className="text-muted-foreground text-sm">Type "chrome://extensions/" in your address bar or go to Menu → More Tools → Extensions</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm mr-4 mt-1">3</span>
                          <div>
                            <h4 className="font-semibold mb-1 text-foreground">Enable Developer Mode</h4>
                            <p className="text-muted-foreground text-sm">Toggle the "Developer mode" switch in the top right corner of the extensions page</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm mr-4 mt-1">4</span>
                          <div>
                            <h4 className="font-semibold mb-1 text-foreground">Install Extension</h4>
                            <p className="text-muted-foreground text-sm">Drag and drop the .crx file into the extensions page, then click "Add extension" when prompted</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="flex-shrink-0 w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center text-sm mr-4 mt-1">✓</span>
                          <div>
                            <h4 className="font-semibold mb-1 text-foreground">You're Ready!</h4>
                            <p className="text-muted-foreground text-sm">The AI Writer Pros icon should now appear in your toolbar. Pin it for easy access.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="first-steps">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Your First Extraction</h2>
                    <div className="gradient-card rounded-xl p-6">
                      <p className="text-muted-foreground mb-4">
                        Ready to extract your first product? Here's how:
                      </p>
                      <ol className="space-y-3 text-sm">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-success mr-3" />
                          <span className="text-foreground">Navigate to any Amazon product page (e.g., amazon.com/dp/B08N5WRWNW)</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-success mr-3" />
                          <span className="text-foreground">Click the AI Writer Pros icon in your browser toolbar</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-success mr-3" />
                          <span className="text-foreground">Wait 2-3 seconds for data extraction to complete</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-success mr-3" />
                          <span className="text-foreground">Choose your export format (JSON, CSV, or Text)</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-success mr-3" />
                          <span className="text-foreground">Copy or download your extracted data</span>
                        </li>
                      </ol>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'user-guide' && (
                <div className="space-y-8">
                  <section id="extracting-product-data">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Extracting Product Data</h2>
                    <div className="gradient-card rounded-xl p-6">
                      <p className="text-muted-foreground mb-4">
                        AI Writer Pros extracts comprehensive product data from Amazon pages:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">Basic Information</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Product Title</li>
                            <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Brand Name</li>
                            <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />ASIN/Product ID</li>
                            <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Current Price</li>
                            <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />List Price</li>
                            <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Availability Status</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">Detailed Data</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Product Features</li>
                            <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Technical Specifications</li>
                            <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Customer Reviews (Rating & Count)</li>
                            <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Product Images URLs</li>
                            <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Category Information</li>
                            <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Shipping Details</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="export-formats">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Export Formats</h2>
                    <div className="space-y-4">
                      <div className="gradient-card rounded-lg p-6">
                        <h3 className="font-semibold mb-2 text-foreground flex items-center">
                          <span className="w-6 h-6 bg-primary text-primary-foreground rounded text-xs flex items-center justify-center mr-2">JS</span>
                          JSON Format
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">Structured data perfect for developers, APIs, and data processing</p>
                        <div className="bg-muted/50 rounded p-3 text-xs font-mono">
                          <pre className="text-foreground">{`{
  "title": "Echo Dot (5th Gen)",
  "brand": "Amazon",
  "asin": "B09B8V1LZ3",
  "price": "$49.99",
  "rating": 4.5,
  "features": [...],
  "images": [...]
}`}</pre>
                        </div>
                      </div>
                      <div className="gradient-card rounded-lg p-6">
                        <h3 className="font-semibold mb-2 text-foreground flex items-center">
                          <span className="w-6 h-6 bg-success text-success-foreground rounded text-xs flex items-center justify-center mr-2">CSV</span>
                          CSV Format
                        </h3>
                        <p className="text-muted-foreground text-sm">Spreadsheet-friendly format for data analysis and bulk operations</p>
                      </div>
                      <div className="gradient-card rounded-lg p-6">
                        <h3 className="font-semibold mb-2 text-foreground flex items-center">
                          <span className="w-6 h-6 bg-warning text-warning-foreground rounded text-xs flex items-center justify-center mr-2">TXT</span>
                          Plain Text
                        </h3>
                        <p className="text-muted-foreground text-sm">Ready-to-use content for blog posts, reviews, and content creation</p>
                      </div>
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

export default UserGuide;
