
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download, Globe, Zap, Shield, Clock, Chrome, Monitor, FileText } from 'lucide-react';
import PurchaseButton from '@/components/PurchaseButton';

const Features = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold text-gray-900">
            AMZ Extractor
          </Link>
          <div className="space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/features">Features</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/pricing">Pricing</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/support">Support</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Amazon Data Extraction
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AMZ Extractor is packed with features that make extracting Amazon product data fast, accurate, and effortless.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Core Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Zap className="w-12 h-12 text-[#FF9900] mb-6" />
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Instant Data Extraction</h3>
              <p className="text-gray-700 mb-4">
                Extract product titles, prices, images, descriptions, and more with a single click. No more manual copying and pasting.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Product titles and descriptions</li>
                <li>• Current and original prices</li>
                <li>• Product images (all variants)</li>
                <li>• Customer reviews and ratings</li>
                <li>• Product specifications</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex gap-3 mb-6">
                <Chrome className="w-6 h-6 text-blue-600" />
                <Monitor className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Universal Browser Support</h3>
              <p className="text-gray-700 mb-4">
                Works seamlessly on both Google Chrome and Microsoft Edge browsers. Install once, use everywhere.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Google Chrome compatibility</li>
                <li>• Microsoft Edge support</li>
                <li>• Easy installation process</li>
                <li>• Automatic updates</li>
                <li>• Cross-platform functionality</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Globe className="w-12 h-12 text-[#FF9900] mb-6" />
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Global Amazon Support</h3>
              <p className="text-gray-700 mb-4">
                Works on all major Amazon marketplaces worldwide. Extract data from any Amazon domain effortlessly.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Amazon.com (United States)</li>
                <li>• Amazon.co.uk (United Kingdom)</li>
                <li>• Amazon.de (Germany)</li>
                <li>• Amazon.fr (France)</li>
                <li>• Amazon.ca (Canada) + more</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Export Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Export & Integration</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <FileText className="w-12 h-12 text-[#FF9900] mb-6" />
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">Multiple Export Formats</h3>
              <p className="text-gray-700 mb-6">
                Export your extracted data in the format that works best for your workflow. Perfect for content creation and analysis.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>JSON format for developers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>CSV format for spreadsheets</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Formatted text for articles</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Clipboard integration</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Clock className="w-12 h-12 text-[#FF9900] mb-6" />
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">Time-Saving Automation</h3>
              <p className="text-gray-700 mb-6">
                Automate your data collection workflow and save hours of manual work. Perfect for affiliate marketers and content creators.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Batch processing capability</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Auto-detect product variants</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Smart data formatting</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>One-click extraction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Support */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Security & Support</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Shield className="w-12 h-12 text-[#FF9900] mb-6 mx-auto" />
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Secure & Private</h3>
              <p className="text-gray-700">
                Your data stays private. AMZ Extractor processes everything locally on your browser without sending data to external servers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Download className="w-12 h-12 text-[#FF9900] mb-6 mx-auto" />
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Lifetime Access</h3>
              <p className="text-gray-700">
                One-time purchase gives you lifetime access to AMZ Extractor with free updates and email support included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Ready to Start Extracting?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Join thousands of affiliate marketers and content creators who save hours daily with AMZ Extractor.
          </p>
          <PurchaseButton />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} AMZ Extractor. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Features;
