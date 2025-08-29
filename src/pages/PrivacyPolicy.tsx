
import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
              <span className="text-xl font-bold gradient-text">AI Writer Pros</span>
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
                <Shield className="w-8 h-8" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            {/* Policy Content */}
            <div className="space-y-8">
              <section className="gradient-card rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <Eye className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                  <p>When you purchase AI Writer Pros, we collect:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Email address for purchase confirmation and support</li>
                    <li>Payment information (processed securely by Stripe)</li>
                    <li>Name and billing address (if provided)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-foreground mt-6">Usage Information</h3>
                  <p>Our Chrome extension may collect:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Amazon product URLs you visit (for extraction functionality)</li>
                    <li>Extension usage statistics (anonymous)</li>
                    <li>Error logs for troubleshooting (no personal data)</li>
                  </ul>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use collected information to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Process your purchase and deliver the extension</li>
                    <li>Provide customer support and technical assistance</li>
                    <li>Send important updates about the extension</li>
                    <li>Improve our product and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                  
                  <div className="bg-success/10 border border-success/20 rounded-lg p-4 mt-6">
                    <p className="text-success-foreground font-medium">
                      <strong>Important:</strong> We never sell, rent, or share your personal information with third parties for marketing purposes.
                    </p>
                  </div>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Chrome Extension Permissions</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>AI Writer Pros requires the following Chrome permissions:</p>
                  
                  <div className="space-y-4">
                    <div className="border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">activeTab</h3>
                      <p className="text-sm">Allows the extension to access the current Amazon product page you're viewing to extract product data.</p>
                    </div>
                    
                    <div className="border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">storage</h3>
                      <p className="text-sm">Stores your preferences and settings locally in your browser. No data is sent to external servers.</p>
                    </div>
                    
                    <div className="border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">https://www.amazon.*/*</h3>
                      <p className="text-sm">Allows the extension to work on Amazon websites globally for product data extraction.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Stripe (Payment Processing)</h3>
                    <p className="text-sm">We use Stripe to process payments securely. Stripe's privacy policy governs how they handle your payment information.</p>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Email Service Provider</h3>
                    <p className="text-sm">We use a third-party email service to send purchase confirmations and support communications.</p>
                  </div>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We implement appropriate security measures to protect your information:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>SSL encryption for all data transmission</li>
                    <li>Secure storage of customer information</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited access to personal data by authorized personnel only</li>
                  </ul>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Access your personal information we hold</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request a copy of your data in a portable format</li>
                  </ul>
                  
                  <p className="mt-4">
                    To exercise these rights, please contact us at{' '}
                    <a href="mailto:privacy@aiwriterpros.com" className="text-primary hover:underline">
                      privacy@aiwriterpros.com
                    </a>
                  </p>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Cookie Policy</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Our website uses cookies to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Remember your preferences</li>
                    <li>Analyze website traffic and usage</li>
                    <li>Improve user experience</li>
                  </ul>
                  <p className="mt-4">
                    You can control cookie settings through your browser preferences.
                  </p>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                  </p>
                  <p>
                    We encourage you to review this privacy policy periodically for any changes.
                  </p>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>If you have any questions about this privacy policy, please contact us:</p>
                  <div className="space-y-2">
                    <p>Email: <a href="mailto:privacy@aiwriterpros.com" className="text-primary hover:underline">privacy@aiwriterpros.com</a></p>
                    <p>Support: <Link to="/support" className="text-primary hover:underline">Visit our support page</Link></p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
