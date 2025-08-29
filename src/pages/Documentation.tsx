
import React, { useState } from 'react';
import { Book, Download, Play, ChevronRight, ArrowLeft, Search } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('getting-started');

  const sections = [
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
      id: 'user-guide',
      title: 'User Guide',
      items: [
        'Extracting Product Data',
        'Export Formats',
        'Advanced Features'
      ]
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      items: [
        'Optimizing Extraction',
        'Content Creation Tips',
        'Workflow Integration'
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      items: [
        'Common Issues',
        'Browser Compatibility',
        'Performance Tips'
      ]
    }
  ];

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
            <h2 className="font-bold text-lg mb-4">Documentation</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search docs..."
                className="w-full pl-9 pr-3 py-2 text-sm border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
              <h1 className="text-4xl font-bold mb-4">
                AI Writer Pros <span className="gradient-text">Documentation</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Everything you need to know about using AI Writer Pros effectively
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
              </div>
            </div>

            {/* Quick Start Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="gradient-card rounded-xl p-6">
                <div className="w-12 h-12 feature-icon mb-4">
                  <span className="text-lg">🚀</span>
                </div>
                <h3 className="font-semibold mb-2">Quick Start</h3>
                <p className="text-muted-foreground text-sm">Get up and running in under 5 minutes</p>
              </div>
              
              <div className="gradient-card rounded-xl p-6">
                <div className="w-12 h-12 feature-icon mb-4">
                  <span className="text-lg">📖</span>
                </div>
                <h3 className="font-semibold mb-2">User Guide</h3>
                <p className="text-muted-foreground text-sm">Comprehensive usage instructions</p>
              </div>
              
              <div className="gradient-card rounded-xl p-6">
                <div className="w-12 h-12 feature-icon mb-4">
                  <span className="text-lg">💡</span>
                </div>
                <h3 className="font-semibold mb-2">Best Practices</h3>
                <p className="text-muted-foreground text-sm">Tips from successful users</p>
              </div>
            </div>

            {/* Content Based on Active Section */}
            {activeSection === 'getting-started' && (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Installation Guide</h2>
                  <div className="gradient-card rounded-xl p-6">
                    <p className="text-muted-foreground mb-4">
                      Follow these steps to install AI Writer Pros on your Chrome browser:
                    </p>
                    <ol className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                        <span>Download the extension file from your purchase confirmation email</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                        <span>Open Chrome and navigate to chrome://extensions/</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                        <span>Enable "Developer mode" in the top right corner</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                        <span>Drag and drop the .crx file into the extensions page</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">5</span>
                        <span>Click "Add extension" when prompted</span>
                      </li>
                    </ol>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">First Steps</h2>
                  <div className="gradient-card rounded-xl p-6">
                    <p className="text-muted-foreground mb-4">
                      Once installed, follow these steps to extract your first product:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-primary mr-2" />
                        Navigate to any Amazon product page
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-primary mr-2" />
                        Click the AI Writer Pros icon in your browser toolbar
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-primary mr-2" />
                        Wait for the data extraction to complete
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-primary mr-2" />
                        Choose your preferred export format
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-primary mr-2" />
                        Copy or download the extracted data
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            )}

            {activeSection === 'user-guide' && (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Extracting Product Data</h2>
                  <div className="gradient-card rounded-xl p-6">
                    <p className="text-muted-foreground mb-4">
                      AI Writer Pros automatically extracts the following data from Amazon product pages:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <ul className="space-y-2">
                        <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Product Title</li>
                        <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Price Information</li>
                        <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Product Images</li>
                        <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Customer Reviews</li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Product Features</li>
                        <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Specifications</li>
                        <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />Brand Information</li>
                        <li className="flex items-center"><ChevronRight className="w-4 h-4 text-primary mr-2" />ASIN/Product ID</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Export Formats</h2>
                  <div className="space-y-4">
                    <div className="gradient-card rounded-lg p-4">
                      <h3 className="font-semibold mb-2">JSON Format</h3>
                      <p className="text-muted-foreground text-sm">Structured data perfect for developers and advanced users</p>
                    </div>
                    <div className="gradient-card rounded-lg p-4">
                      <h3 className="font-semibold mb-2">CSV Format</h3>
                      <p className="text-muted-foreground text-sm">Spreadsheet-friendly format for data analysis</p>
                    </div>
                    <div className="gradient-card rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Plain Text</h3>
                      <p className="text-muted-foreground text-sm">Ready-to-use content for blog posts and reviews</p>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* Add more content sections as needed */}
            
            <div className="mt-12 text-center">
              <h2 className="text-xl font-bold mb-4">Need More Help?</h2>
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
  );
};

export default Documentation;
