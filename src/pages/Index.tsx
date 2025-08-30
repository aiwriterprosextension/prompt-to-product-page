import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Toaster } from 'sonner';
import { QueryClient } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PurchaseButton from '@/components/PurchaseButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-lg font-semibold text-gray-900">
            AMZ Extractor
          </a>
          <div className="space-x-4">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Pricing</Button>
            <Button variant="ghost">Support</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Extract Amazon Product Data in Seconds
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AMZ Extractor makes it easy for affiliate marketers to pull product details instantly on Chrome & Edge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <PurchaseButton />
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View Features
            </Button>
          </div>
          <img
            src="/amz-extractor-preview.png"
            alt="AMZ Extractor in action"
            className="rounded-2xl shadow-lg max-w-full mx-auto"
          />
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-4">The Problem</h2>
              <p className="text-lg text-gray-700">
                Tired of manually copying product details from Amazon for your affiliate content? 
                Spending hours gathering data that could be extracted in seconds?
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-green-600 mb-4">The Solution</h2>
              <p className="text-lg text-gray-700">
                AMZ Extractor automates everything – one-click extraction of all the data you need for high-converting articles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Instant Data Extraction</h3>
              <p className="text-gray-700">
                Extract product titles, prices, images, descriptions, and more with a single click.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Chrome & Edge Support</h3>
              <p className="text-gray-700">
                Seamlessly integrates with both Google Chrome and Microsoft Edge browsers.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Universal Amazon Support</h3>
              <p className="text-gray-700">
                Works on all major Amazon marketplaces (.com, .ca, .co.uk, .de, .fr, etc.).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Simple, One-Time Pricing</h2>
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
            
            <p className="text-sm text-gray-500 mt-4">
              Secure payment processed by Stripe
            </p>
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

export default Index;
