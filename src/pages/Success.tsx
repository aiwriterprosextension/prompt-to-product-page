
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Check, Download, Mail, ArrowRight, Shield, Clock, Chrome, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
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
              <Link to="/support">Support</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Success Content */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            🎉 Welcome to <span className="text-[#FF9900]">AMZ Extractor!</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Your Amazon data extraction tool is ready to download! 
            Start extracting product data from any Amazon page in minutes.
          </p>

          {/* Purchase Confirmation */}
          <Card className="mb-8 text-left">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-600" />
                Purchase Confirmed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Product:</span>
                  <p className="font-medium">AMZ Extractor Chrome & Edge Extension</p>
                </div>
                <div>
                  <span className="text-gray-600">Amount:</span>
                  <p className="font-medium">$27.00 (One-time)</p>
                </div>
                <div>
                  <span className="text-gray-600">Session ID:</span>
                  <p className="font-medium">{sessionId || '#AMZ-SUCCESS'}</p>
                </div>
                <div>
                  <span className="text-gray-600">Date:</span>
                  <p className="font-medium">{new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Browser Compatibility */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2">
              <Chrome className="w-6 h-6 text-blue-600" />
              <span className="font-medium">Chrome Compatible</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2">
              <Monitor className="w-6 h-6 text-blue-600" />
              <span className="font-medium">Edge Compatible</span>
            </div>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">What happens next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#FF9900] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Check your email (within 5 minutes)</h3>
                    <p className="text-gray-600">You'll receive download instructions and installation guide at your email address.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#FF9900] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Download & install AMZ Extractor</h3>
                    <p className="text-gray-600">Works on both Chrome and Microsoft Edge. Installation takes under 5 minutes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#FF9900] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Start extracting Amazon data</h3>
                    <p className="text-gray-600">Visit any Amazon product page, click AMZ Extractor, and export data instantly.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Mail className="w-8 h-8 text-[#FF9900] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Check Your Email</h3>
                <p className="text-gray-600 text-sm mb-4">Download instructions sent to your inbox</p>
                <Button variant="outline" size="sm" className="w-full">
                  Open Email App
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Download className="w-8 h-8 text-[#FF9900] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Download Now</h3>
                <p className="text-gray-600 text-sm mb-4">Get AMZ Extractor for Chrome & Edge</p>
                <Button className="w-full bg-[#FF9900] hover:bg-[#e6890f]" size="sm">
                  Download AMZ Extractor
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="w-8 h-8 text-[#FF9900] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-gray-600 text-sm mb-4">Get support and installation help</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/support">Get Support</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Questions? We're here to help! Reach out to support@aiwriterpros.com
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center text-[#FF9900] hover:text-[#e6890f] transition-colors"
            >
              Back to homepage
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
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

export default Success;
