
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Gift, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has already been shown
    const popupShown = localStorage.getItem('exitIntentShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    let isExiting = false;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the page
      if (e.clientY <= 0 && !isExiting && !hasShown) {
        isExiting = true;
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Add some delay before enabling exit intent
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 10000); // Wait 10 seconds before enabling

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-foreground">
            Wait! Don't Leave Empty Handed
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-primary" />
          </div>
          
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Get 10% Extra Off!
          </h3>
          
          <p className="text-muted-foreground mb-6">
            Use code <strong className="text-primary">SAVE10</strong> at checkout and get AMZ Extractor for just <strong className="text-primary">$24.30</strong> (normally $27)
          </p>
          
          <div className="space-y-3">
            <Button asChild className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
              <Link to="/pricing" onClick={handleClose}>
                Claim My Discount <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={handleClose}
              className="w-full text-muted-foreground hover:text-foreground"
            >
              No thanks, I'll pay full price
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-4">
            * Limited time offer. Expires in 24 hours.
          </p>
        </div>
        
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
