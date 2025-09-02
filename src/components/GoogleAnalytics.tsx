
import React, { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId?: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ 
  measurementId = 'G-XXXXXXXXXX' // Replace with actual GA4 measurement ID
}) => {
  useEffect(() => {
    // Only load in production
    if (process.env.NODE_ENV !== 'production') {
      console.log('Google Analytics disabled in development mode');
      return;
    }

    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Initialize Google Analytics
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        page_title: document.title,
        page_location: window.location.href
      });
    `;
    document.head.appendChild(script2);

    // Make gtag available globally for tracking custom events
    (window as any).gtag = function() {
      (window as any).dataLayer.push(arguments);
    };

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [measurementId]);

  return null;
};

// Helper function to track custom events
export const trackEvent = (eventName: string, parameters?: object) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
  }
};

// Helper function to track page views
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'G-XXXXXXXXXX', {
      page_path: pagePath,
      page_title: pageTitle || document.title
    });
  }
};

export default GoogleAnalytics;
