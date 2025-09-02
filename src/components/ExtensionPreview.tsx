
import React from 'react';
import { Monitor, Chrome } from 'lucide-react';

const ExtensionPreview = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          See AMZ Extractor in Action
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Watch how AMZ Extractor transforms your Amazon research workflow
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Main Extension Screenshot - Now using uploaded image */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border dark:border-gray-700">
            <div className="mb-4">
              <div className="flex items-center justify-center">
                <Chrome className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Extension Interface</h3>
              </div>
            </div>
            <div className="aspect-[3/4] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600">
              <img 
                src="/lovable-uploads/d7b07260-b42e-411c-9968-d72e28d05c2f.png" 
                alt="AMZ Extractor browser extension interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Amazon Page with Extension */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border dark:border-gray-700">
            <div className="mb-4">
              <div className="flex items-center justify-center">
                <div className="w-6 h-6 bg-[#FF9900] rounded mr-2"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Amazon Integration</h3>
              </div>
            </div>
            <div className="aspect-[3/4] bg-gradient-to-br from-orange-50 to-amber-100 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-500">
              <div className="text-center text-gray-500 dark:text-gray-400 p-4">
                <Monitor className="w-12 h-12 mx-auto mb-2" />
                <p className="font-medium text-sm">Amazon Page with Extension</p>
                <p className="text-xs mt-1">Portrait: 600x800px</p>
                <p className="text-xs mt-1">Show: Amazon product page with extension active</p>
              </div>
            </div>
          </div>

          {/* Data Export Preview */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border dark:border-gray-700">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">Exported Data</h3>
            </div>
            <div className="aspect-[3/4] bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-500">
              <div className="text-center text-gray-500 dark:text-gray-400 p-4">
                <Monitor className="w-12 h-12 mx-auto mb-2" />
                <p className="font-medium text-sm">CSV/JSON Export View</p>
                <p className="text-xs mt-1">Portrait: 600x800px</p>
                <p className="text-xs mt-1">Show: Spreadsheet with extracted data</p>
              </div>
            </div>
          </div>

          {/* Multiple Products Extraction */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border dark:border-gray-700">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">Bulk Extraction</h3>
            </div>
            <div className="aspect-[3/4] bg-gradient-to-br from-purple-50 to-violet-100 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-500">
              <div className="text-center text-gray-500 dark:text-gray-400 p-4">
                <Monitor className="w-12 h-12 mx-auto mb-2" />
                <p className="font-medium text-sm">Bulk Extraction View</p>
                <p className="text-xs mt-1">Portrait: 600x800px</p>
                <p className="text-xs mt-1">Show: Multiple products being processed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border dark:border-blue-800">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Image Guidelines for SEO
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Specifications:</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Format: PNG or WebP for screenshots</li>
                <li>• Compression: Optimize for web (under 200KB)</li>
                <li>• Resolution: High-DPI ready (2x scaling)</li>
                <li>• Aspect ratio: 3:4 (portrait) for mobile-friendly display</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">SEO Optimization:</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Include "AMZ Extractor" in alt text</li>
                <li>• Add descriptive file names</li>
                <li>• Use schema markup for software images</li>
                <li>• Include captions with keywords</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtensionPreview;
