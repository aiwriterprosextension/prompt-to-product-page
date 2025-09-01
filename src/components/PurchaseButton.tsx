
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const PurchaseButton = () => {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { priceId: 'price_amz_extractor' }
      });

      if (error) {
        throw error;
      }

      if (data?.url) {
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank');
        toast.success('Opening checkout...');
      }
    } catch (error) {
      console.error('Error creating checkout:', error);
      toast.error('Failed to start checkout process');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button 
      onClick={handlePurchase}
      disabled={loading}
      size="lg"
      className="w-full sm:w-auto bg-[#FF9900] hover:bg-[#e6890f] text-white font-bold py-4 px-8 text-lg"
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          Install AMZ Extractor Now <ArrowRight className="w-5 h-5 ml-2" />
        </>
      )}
    </Button>
  );
};

export default PurchaseButton;
