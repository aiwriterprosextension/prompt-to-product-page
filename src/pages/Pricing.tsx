
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import PurchaseButton from '@/components/PurchaseButton';

const Pricing = () => {
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
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Simple, One-Time Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            No monthly fees, no hidden costs. Get lifetime access to AMZ Extractor for one low price.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">AMZ Extractor</h3>
              <div className="text-5xl font-bold text-[#FF9900] mb-2">$27</div>
              <p className="text-gray-600">One-time payment, lifetime access</p>
            </div>
            
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Compatible with Chrome & Microsoft Edge
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Universal Amazon marketplace support
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Complete data extraction (titles, prices, images, reviews)
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Multiple export formats (JSON/CSV)
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                30-day money-back guarantee
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Email support included
              </li>
            </ul>
            
            <PurchaseButton />
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              Secure payment processed by Stripe
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is this a one-time payment?</h3>
              <p className="text-gray-700">Yes! Pay once and get lifetime access to AMZ Extractor. No monthly subscriptions or hidden fees.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Which browsers are supported?</h3>
              <p className="text-gray-700">AMZ Extractor works on both Google Chrome and Microsoft Edge browsers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer refunds?</h3>
              <p className="text-gray-700">Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I get support?</h3>
              <p className="text-gray-700">Email support is included with your purchase. Contact us at support@aiwriterpros.com for assistance.</p>
            </div>
          </div>
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

export default Pricing;
