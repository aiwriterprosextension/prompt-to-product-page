
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Target, FileText, Upload, Download, Settings, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DataInputSection from '@/components/amazon-generator/DataInputSection';
import ArticleSettingsPanel from '@/components/amazon-generator/ArticleSettingsPanel';
import ArticlePreview from '@/components/amazon-generator/ArticlePreview';
import TemplateShowcase from '@/components/amazon-generator/TemplateShowcase';
import { toast } from 'sonner';

interface ArticleSettings {
  template: string;
  tone: string;
  targetKeywords: string;
  length: string;
  includeAffiliateLinks: boolean;
}

const AmazonGenerator = () => {
  const [productData, setProductData] = useState(null);
  const [generatedArticle, setGeneratedArticle] = useState('');
  const [settings, setSettings] = useState<ArticleSettings>({
    template: 'product-review',
    tone: 'professional',
    targetKeywords: '',
    length: 'medium',
    includeAffiliateLinks: false
  });

  const handleDataSubmit = (data: any) => {
    setProductData(data);
    toast.success('Product data loaded successfully!');
  };

  const generateArticle = () => {
    if (!productData) {
      toast.error('Please load product data first');
      return;
    }

    // This would integrate with the template processing
    setGeneratedArticle('Article generated successfully!');
    toast.success('Article generated successfully!');
  };

  return (
    <>
      <Helmet>
        <title>Amazon Product Article Generator - AI Writer Pros | Create SEO Articles from Amazon Data</title>
        <meta name="description" content="Transform Amazon product JSON data into high-converting, SEO-optimized articles. Generate product reviews, buying guides, and marketing content automatically." />
        <meta name="keywords" content="amazon article generator, product review generator, amazon affiliate articles, SEO content generator, amazon scraper extension" />
        
        <meta property="og:title" content="Amazon Product Article Generator - AI Writer Pros" />
        <meta property="og:description" content="Transform Amazon product data into SEO-optimized articles instantly" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aiwriterpros.com/amazon-generator" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amazon Product Article Generator" />
        <meta name="twitter:description" content="Generate SEO articles from Amazon data" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Amazon Product Article Generator",
            "description": "AI-powered tool to generate SEO articles from Amazon product data",
            "applicationCategory": "ContentManagementApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "creator": {
              "@type": "Organization",
              "name": "AI Writer Pros"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary-dark/5">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Transform Amazon Data Into{' '}
                <span className="gradient-text">High-Converting Articles</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Generate SEO-optimized product reviews, buying guides, and marketing content 
                from Amazon JSON data in seconds using our AI-powered templates.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground hover:shadow-xl hover:scale-[1.02] focus:ring-primary px-10 py-5 text-xl"
                onClick={() => document.getElementById('generator-tool')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Generating Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Our Amazon Article Generator?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="gradient-card hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="feature-icon mb-4 mx-auto w-fit">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Instant Generation</h3>
                  <p className="text-muted-foreground">
                    Transform JSON data into articles in seconds with our AI-powered templates
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="feature-icon mb-4 mx-auto w-fit">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">SEO Optimized</h3>
                  <p className="text-muted-foreground">
                    Built-in SEO best practices and keyword optimization for better rankings
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="feature-icon mb-4 mx-auto w-fit">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">5 Professional Templates</h3>
                  <p className="text-muted-foreground">
                    Product reviews, buying guides, feature articles, and more
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: "Extract Data",
                  description: "Use our Chrome extension to scrape Amazon product data",
                  icon: <Upload className="w-8 h-8" />
                },
                {
                  step: 2,
                  title: "Upload JSON",
                  description: "Paste or upload the JSON data to our generator",
                  icon: <FileText className="w-8 h-8" />
                },
                {
                  step: 3,
                  title: "Choose Template",
                  description: "Select from 5 professional article templates",
                  icon: <Settings className="w-8 h-8" />
                },
                {
                  step: 4,
                  title: "Generate & Export",
                  description: "Create polished articles ready for publication",
                  icon: <Download className="w-8 h-8" />
                }
              ].map((step, index) => (
                <Card key={index} className="gradient-card text-center p-6">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{step.step}</span>
                  </div>
                  <div className="text-primary mb-3">{step.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Generator Tool */}
        <section id="generator-tool" className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Amazon Article Generator Tool
              </h2>
              <p className="text-xl text-muted-foreground">
                Upload your Amazon product data and generate professional articles instantly
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Data Input */}
              <div className="lg:col-span-1">
                <DataInputSection onDataSubmit={handleDataSubmit} />
              </div>

              {/* Settings Panel */}
              <div className="lg:col-span-1">
                <ArticleSettingsPanel 
                  settings={settings} 
                  onSettingsChange={setSettings}
                  onGenerate={generateArticle}
                />
              </div>

              {/* Preview Panel */}
              <div className="lg:col-span-1">
                <ArticlePreview 
                  article={generatedArticle}
                  productData={productData}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Template Showcase */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Sample Templates
            </h2>
            <TemplateShowcase />
          </div>
        </section>
      </div>
    </>
  );
};

export default AmazonGenerator;
