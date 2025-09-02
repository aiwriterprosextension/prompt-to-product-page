
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient } from './context/query-client';
import GoogleAnalytics from './components/GoogleAnalytics';

import Index from "@/pages/Index";
import AmazonGenerator from "@/pages/AmazonGenerator";
import Download from "@/pages/Download";
import Success from "@/pages/Success";
import Features from "@/pages/Features";
import Pricing from "@/pages/Pricing";
import Support from "@/pages/Support";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import RefundPolicy from "@/pages/RefundPolicy";
import NotFound from "@/pages/NotFound";
import Documentation from "@/pages/Documentation";
import UserGuide from "@/pages/UserGuide";
import BestPractices from "@/pages/BestPractices";
import Sitemap from "@/pages/Sitemap";

function App() {
  return (
    <HelmetProvider>
      <QueryClient>
        <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/amazon-generator" element={<AmazonGenerator />} />
            <Route path="/download/:token" element={<Download />} />
            <Route path="/success" element={<Success />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/user-guide" element={<UserGuide />} />
            <Route path="/best-practices" element={<BestPractices />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClient>
    </HelmetProvider>
  );
}

export default App;
