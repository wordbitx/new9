import { Info, ArrowRight, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function PaymentDisabledModal() {
  const { 
    isPaymentDisabledModalOpen, 
    setIsPaymentDisabledModalOpen,
    setIsOrderConfirmationOpen,
  } = useCart();

  const handleContinue = () => {
    setIsPaymentDisabledModalOpen(false);
    setIsOrderConfirmationOpen(true);
  };

  return (
    <Dialog open={isPaymentDisabledModalOpen} onOpenChange={setIsPaymentDisabledModalOpen}>
      <DialogContent className="max-w-md bg-white">
        <div className="p-6 text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Info className="w-8 h-8 text-amber-600" />
          </div>

          <h2 className="text-2xl font-bold text-[#1a2f23] mb-3">
            Payment Information
          </h2>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <p className="text-amber-800 text-sm leading-relaxed">
              Automatic online payment is currently disabled. Please place your order and contact our support team to complete the payment.
            </p>
          </div>

          <div className="bg-[#f5f7f5] rounded-xl p-4 mb-6 text-left">
            <h3 className="font-semibold text-[#1a2f23] mb-2">Contact Support:</h3>
            <div className="space-y-2 text-sm">
              <p className="text-[#4a5a4a]">
                <span className="font-medium text-[#1a2f23]">Email:</span>{' '}
                <a href="mailto:info@lionxsoftsllc.com" className="text-[#2d7a4d] hover:underline">
                  info@lionxsoftsllc.com
                </a>
              </p>
              <p className="text-[#4a5a4a]">
                <span className="font-medium text-[#1a2f23]">Phone:</span>{' '}
                <a href="tel:+13215340179" className="text-[#2d7a4d] hover:underline">
                  +1 321 534 0179
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              variant="outline"
              onClick={() => setIsPaymentDisabledModalOpen(false)}
              className="flex-1 border-[#1a2f23]/20 text-[#1a2f23] bg-white hover:bg-[#f5f7f5]"
            >
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
            <Button 
              onClick={handleContinue}
              className="flex-1 bg-[#2d7a4d] hover:bg-[#3d9a6d] text-white flex items-center justify-center gap-2"
            >
              Continue with Order
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
