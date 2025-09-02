
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, CheckCircle, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LeadMagnet = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate email submission
    console.log('Lead magnet email submitted:', email);
    
    toast({
      title: "Success!",
      description: "Your free guide has been sent to your email.",
    });
    
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Download className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Free Amazon FBA Research Guide
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get our comprehensive 25-page guide on Amazon product research, including advanced strategies, 
            competitor analysis techniques, and profitable niche identification methods.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start space-x-3 text-left">
              <CheckCircle className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Product Research Strategies</h4>
                <p className="text-sm text-muted-foreground">Advanced techniques to find profitable products</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 text-left">
              <CheckCircle className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Competitor Analysis</h4>
                <p className="text-sm text-muted-foreground">How to analyze and outperform competitors</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 text-left">
              <CheckCircle className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Niche Selection</h4>
                <p className="text-sm text-muted-foreground">Identify profitable niches with low competition</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 text-left">
              <CheckCircle className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Data Analysis Tools</h4>
                <p className="text-sm text-muted-foreground">Master the tools that professionals use</p>
              </div>
            </div>
          </div>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" className="bg-primary hover:bg-primary-dark text-primary-foreground">
                  Get Free Guide
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                No spam. Unsubscribe at any time. Your email is safe with us.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-primary mb-4">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Check your email!</span>
              </div>
              <p className="text-muted-foreground">
                We've sent your free Amazon FBA Research Guide to your inbox.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
