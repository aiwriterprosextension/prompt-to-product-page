
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const Sitemap = () => {
  const sitePages = [
    { path: '/', title: 'Home', description: 'AMZ Extractor - Amazon Product Data Extraction Tool' },
    { path: '/features', title: 'Features', description: 'Complete feature list and capabilities' },
    { path: '/pricing', title: 'Pricing', description: 'Pricing plans and purchase options' },
    { path: '/support', title: 'Support', description: 'Customer support and help center' },
    { path: '/contact', title: 'Contact', description: 'Get in touch with our team' },
    { path: '/documentation', title: 'Documentation', description: 'Comprehensive guides and API docs' },
    { path: '/user-guide', title: 'User Guide', description: 'Step-by-step tutorials and help' },
    { path: '/best-practices', title: 'Best Practices', description: 'Tips and optimization strategies' },
    { path: '/privacy', title: 'Privacy Policy', description: 'Privacy policy and data protection' },
    { path: '/terms', title: 'Terms of Service', description: 'Terms of service and usage agreement' },
    { path: '/refund', title: 'Refund Policy', description: 'Refund policy and procedures' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sitemap - AMZ Extractor | Site Navigation</title>
        <meta name="description" content="Complete sitemap for AMZ Extractor. Find all pages including features, pricing, documentation, support, and legal pages." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://amzextractor.com/sitemap" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Sitemap
            </h1>
            <p className="text-xl text-muted-foreground">
              Navigate through all pages on AMZ Extractor
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {sitePages.map((page) => (
              <div key={page.path} className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow">
                <Link to={page.path} className="block">
                  <h2 className="text-xl font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                    {page.title}
                  </h2>
                  <p className="text-muted-foreground mb-3">
                    {page.description}
                  </p>
                  <p className="text-sm text-primary font-mono">
                    {page.path}
                  </p>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-muted/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              XML Sitemap
            </h2>
            <p className="text-muted-foreground mb-4">
              For search engines and automated crawlers, our XML sitemap is available at:
            </p>
            <code className="bg-card px-3 py-2 rounded border text-sm">
              https://amzextractor.com/sitemap.xml
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
