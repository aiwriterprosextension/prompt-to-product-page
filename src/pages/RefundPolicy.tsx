
import React from 'react';
import { ArrowLeft, DollarSign, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold gradient-text">AMZ Extractor</span>
            </Link>
            <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 feature-icon mx-auto mb-6">
                <DollarSign className="w-8 h-8" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
              <p className="text-xl text-muted-foreground mb-6">
                30-Day Money-Back Guarantee
              </p>
              <div className="inline-flex items-center bg-success/10 border border-success/20 rounded-lg px-4 py-2">
                <CheckCircle className="w-5 h-5 text-success mr-2" />
                <span className="text-success font-medium">100% Risk-Free Purchase</span>
              </div>
            </div>

            {/* Policy Content */}
            <div className="space-y-8">
              <section className="gradient-card rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">30-Day Money-Back Guarantee</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    We stand behind AMZ Extractor with a complete 30-day money-back guarantee. If for any reason you're not satisfied with your purchase, we'll refund your money—no questions asked.
                  </p>
                  
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-3">What this means for you:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                        <span>Try AMZ Extractor risk-free for 30 full days</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                        <span>Full refund if you're not completely satisfied</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                        <span>No complicated forms or lengthy processes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                        <span>Professional and courteous support team</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">How to Request a Refund</h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>Requesting a refund is simple and straightforward:</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Contact Our Support Team</h3>
                        <p className="text-sm">Email us at <a href="mailto:refunds@aiwriterpros.com" className="text-primary hover:underline">refunds@aiwriterpros.com</a> or use our support form.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Provide Purchase Details</h3>
                        <p className="text-sm">Include your email address used for purchase and transaction ID (if available).</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Receive Confirmation</h3>
                        <p className="text-sm">We'll confirm your refund request within 24 hours and process it immediately.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Refund Processed</h3>
                        <p className="text-sm">Your refund will appear in your account within 5-7 business days.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-6">
                    <Link to="/support">
                      <Button variant="primary" size="lg">
                        Request Refund
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Eligible Refund Conditions</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>You are eligible for a full refund if:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You request the refund within 30 days of purchase</li>
                    <li>You purchased directly from our official website</li>
                    <li>You can provide proof of purchase (email confirmation)</li>
                    <li>The extension doesn't work as advertised</li>
                    <li>You experience technical issues we cannot resolve</li>
                    <li>You're simply not satisfied with the product</li>
                  </ul>
                  
                  <div className="bg-success/10 border border-success/20 rounded-lg p-4 mt-6">
                    <p className="text-success font-medium">
                      <strong>No questions asked:</strong> We respect your decision and won't ask you to justify why you want a refund.
                    </p>
                  </div>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Processing Timeframes</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                      <p className="text-sm">We respond to refund requests within <strong>24 hours</strong></p>
                    </div>
                    
                    <div className="border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Processing Time</h3>
                      <p className="text-sm">Refunds are processed within <strong>1-2 business days</strong></p>
                    </div>
                    
                    <div className="border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Bank Processing</h3>
                      <p className="text-sm">Banks typically take <strong>5-7 business days</strong> to show the refund</p>
                    </div>
                    
                    <div className="border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">International</h3>
                      <p className="text-sm">International refunds may take <strong>7-10 business days</strong></p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Partial Refunds</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>In rare cases, partial refunds may be offered for:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Extensions purchased more than 30 days ago (case-by-case basis)</li>
                    <li>Technical issues that partially affect functionality</li>
                    <li>Specific feature-related concerns</li>
                  </ul>
                  
                  <p className="mt-4">
                    Our support team will work with you to find the best solution for your specific situation.
                  </p>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Exceptional Circumstances</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We understand that exceptional circumstances may occur. We will consider refunds beyond the 30-day period for:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Medical emergencies or extended hospitalization</li>
                    <li>Deployment for military personnel</li>
                    <li>Other documented exceptional circumstances</li>
                  </ul>
                  
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-4">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-primary-foreground text-sm">
                        Please contact our support team to discuss your specific situation. We're here to help and will work with you to find a fair solution.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>For refund requests or questions about our refund policy:</p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <strong className="w-20 text-foreground">Email:</strong>
                      <a href="mailto:refunds@aiwriterpros.com" className="text-primary hover:underline">refunds@aiwriterpros.com</a>
                    </div>
                    <div className="flex items-center">
                      <strong className="w-20 text-foreground">Support:</strong>
                      <Link to="/support" className="text-primary hover:underline">Submit a support ticket</Link>
                    </div>
                    <div className="flex items-center">
                      <strong className="w-20 text-foreground">Hours:</strong>
                      <span>Monday - Friday, 9 AM - 6 PM EST</span>
                    </div>
                  </div>
                  
                  <p className="mt-6 text-center">
                    <strong className="text-foreground">We're committed to your satisfaction.</strong><br />
                    Your success with AMZ Extractor is our top priority.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
