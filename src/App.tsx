import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { QueryClient } from './context/query-client';

import Index from "@/pages/Index";
import AmazonGenerator from "@/pages/AmazonGenerator";
import Download from "@/pages/Download";

function App() {
  return (
    <QueryClient>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/amazon-generator" element={<AmazonGenerator />} />
          <Route path="/download/:token" element={<Download />} />
        </Routes>
      </BrowserRouter>
    </QueryClient>
  );
}

export default App;
