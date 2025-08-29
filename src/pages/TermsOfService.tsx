
import React from 'react';
import { ArrowLeft, FileText, Scale, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
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
                <Scale className="w-8 h-8" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            {/* Terms Content */}
            <div className="space-y-8">
              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    By purchasing, downloading, installing, or using AI Writer Pros ("the Extension"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Extension.
                  </p>
                  <p>
                    These Terms constitute a legally binding agreement between you and AI Writer Pros ("we," "us," or "our").
                  </p>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">2. License Agreement</h2>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="text-lg font-semibold text-foreground">License Grant</h3>
                  <p>
                    Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to use AI Writer Pros for your personal or commercial use.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-foreground">License Restrictions</h3>
                  <p>You may NOT:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Reverse engineer, decompile, or disassemble the Extension</li>
                    <li>Modify, adapt, or create derivative works</li>
                    <li>Distribute, sell, lease, or sublicense the Extension</li>
                    <li>Remove or alter any copyright notices or proprietary markings</li>
                    <li>Use the Extension for illegal or unauthorized purposes</li>
                  </ul>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">3. Acceptable Use Policy</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>You agree to use AI Writer Pros only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe upon the rights of others</li>
                    <li>Use the Extension to spam, harass, or abuse others</li>
                    <li>Attempt to circumvent Amazon's terms of service</li>
                    <li>Extract data for commercial resale without proper authorization</li>
                    <li>Use the Extension in a way that could damage our reputation</li>
                  </ul>
                  
                  <div className="bg-warning/10 border border-warning/20 rounded-lg p-4 mt-4">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-warning mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-warning-foreground text-sm">
                        <strong>Important:</strong> Users are responsible for complying with Amazon's Terms of Service and any applicable laws regarding data extraction and use.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">4. Intellectual Property Rights</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    AI Writer Pros and all related materials, including but not limited to software, documentation, trademarks, and copyrights, are owned by us or our licensors.
                  </p>
                  <p>
                    Your purchase grants you a license to use the Extension but does not transfer any ownership rights to you.
                  </p>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">5. User Obligations</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>As a user of AI Writer Pros, you agree to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Provide accurate information during purchase</li>
                    <li>Keep your license information secure and confidential</li>
                    <li>Use the Extension responsibly and ethically</li>
                    <li>Report any bugs or security vulnerabilities</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Respect the intellectual property rights of others</li>
                  </ul>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">6. Service Availability</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    While we strive to provide reliable service, we cannot guarantee that AI Writer Pros will be available at all times or will work perfectly with all versions of Chrome or all Amazon pages.
                  </p>
                  <p>
                    We reserve the right to modify, suspend, or discontinue the Extension at any time with or without notice.
                  </p>
                  <p>
                    Updates and improvements may be released periodically, and we encourage users to keep the Extension updated.
                  </p>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    To the fullest extent permitted by law, AI Writer Pros and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
                  </p>
                  <p>
                    Our total liability for any claims arising from or relating to the Extension shall not exceed the amount you paid for the Extension.
                  </p>
                  <p>
                    Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so these limitations may not apply to you.
                  </p>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">8. Disclaimer of Warranties</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    AI Writer Pros is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied.
                  </p>
                  <p>We disclaim all warranties, including but not limited to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Merchantability and fitness for a particular purpose</li>
                    <li>Non-infringement of third-party rights</li>
                    <li>Accuracy, completeness, or reliability of extracted data</li>
                    <li>Compatibility with all systems and browsers</li>
                    <li>Uninterrupted or error-free operation</li>
                  </ul>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="text-lg font-semibold text-foreground">Termination by You</h3>
                  <p>You may terminate this agreement at any time by uninstalling the Extension and ceasing all use.</p>
                  
                  <h3 className="text-lg font-semibold text-foreground">Termination by Us</h3>
                  <p>We may terminate or suspend your license immediately if you:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Violate these Terms</li>
                    <li>Use the Extension for illegal purposes</li>
                    <li>Attempt to reverse engineer or redistribute the Extension</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-foreground">Effect of Termination</h3>
                  <p>Upon termination, you must immediately cease using the Extension and delete all copies.</p>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
                  </p>
                  <p>
                    Any disputes arising from these Terms shall be resolved through binding arbitration in accordance with the rules of [Arbitration Organization].
                  </p>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify users of significant changes by posting the updated Terms on our website and updating the "Last updated" date.
                  </p>
                  <p>
                    Your continued use of the Extension after changes are posted constitutes acceptance of the modified Terms.
                  </p>
                </div>
              </section>

              <section className="gradient-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>If you have any questions about these Terms, please contact us:</p>
                  <div className="space-y-2">
                    <p>Email: <a href="mailto:legal@aiwriterpros.com" className="text-primary hover:underline">legal@aiwriterpros.com</a></p>
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

export default TermsOfService;
