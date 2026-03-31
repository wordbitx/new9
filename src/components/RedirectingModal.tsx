import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export function RedirectingModal() {
  const { 
    isRedirectingModalOpen, 
    setIsRedirectingModalOpen,
    setIsPaymentDisabledModalOpen,
  } = useCart();

  useEffect(() => {
    if (isRedirectingModalOpen) {
      const timer = setTimeout(() => {
        setIsRedirectingModalOpen(false);
        setIsPaymentDisabledModalOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isRedirectingModalOpen, setIsRedirectingModalOpen, setIsPaymentDisabledModalOpen]);

  return (
    <Dialog open={isRedirectingModalOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-sm bg-white">
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-[#2d7a4d]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Loader2 className="w-8 h-8 text-[#2d7a4d] animate-spin" />
          </div>
          
          <h2 className="text-xl font-bold text-[#1a2f23] mb-2">
            Redirecting...
          </h2>
          
          <p className="text-[#4a5a4a] text-sm">
            Please wait while we redirect you to the payment gateway
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
