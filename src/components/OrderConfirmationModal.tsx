import { CheckCircle, ShoppingBag, Mail, Phone, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function OrderConfirmationModal() {
  const { 
    isOrderConfirmationOpen, 
    setIsOrderConfirmationOpen,
    currentOrder,
    clearCart
  } = useCart();

  const [copied, setCopied] = useState(false);

  const handleCopyOrderNumber = () => {
    if (currentOrder?.orderNumber) {
      navigator.clipboard.writeText(currentOrder.orderNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleContinueShopping = () => {
    setIsOrderConfirmationOpen(false);
    clearCart();
  };

  if (!currentOrder) return null;

  return (
    <Dialog open={isOrderConfirmationOpen} onOpenChange={setIsOrderConfirmationOpen}>
      <DialogContent className="max-w-lg bg-white max-h-[90vh] overflow-auto">
        <div className="p-6">
          {/* Success Icon */}
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-[#1a2f23] mb-2">
              Thank You For Your Order!
            </h2>
            <p className="text-[#4a5a4a]">
              Your order has been successfully placed. Please contact our support team to complete the payment.
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-[#f5f7f5] rounded-xl p-4 mb-6">
            <h3 className="font-semibold text-[#1a2f23] mb-4">Order Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[#4a5a4a]">Order Number:</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-semibold text-[#1a2f23]">{currentOrder.orderNumber}</span>
                  <button 
                    onClick={handleCopyOrderNumber}
                    className="text-[#2d7a4d] hover:text-[#3d9a6d] transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4a5a4a]">Total Amount:</span>
                <span className="font-semibold text-[#2d7a4d]">${currentOrder.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4a5a4a]">Payment Status:</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                  Pending
                </span>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="mb-6">
            <h3 className="font-semibold text-[#1a2f23] mb-3">Items Ordered</h3>
            <div className="space-y-3">
              {currentOrder.items.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-3 bg-[#f5f7f5] rounded-lg">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[#1a2f23] truncate">{item.name}</p>
                    <p className="text-sm text-[#4a5a4a]">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-semibold text-[#2d7a4d]">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Instructions */}
          <div className="bg-[#2d7a4d]/5 border border-[#2d7a4d]/20 rounded-xl p-4 mb-6">
            <h3 className="font-semibold text-[#1a2f23] mb-3">Payment Instructions</h3>
            <p className="text-sm text-[#4a5a4a] mb-3">
              Please contact our support team to complete your payment:
            </p>
            <div className="space-y-2">
              <a 
                href="mailto:info@lionxsoftsllc.com" 
                className="flex items-center gap-2 text-sm text-[#2d7a4d] hover:underline"
              >
                <Mail className="w-4 h-4" />
                info@lionxsoftsllc.com
              </a>
              <a 
                href="tel:+13215340179" 
                className="flex items-center gap-2 text-sm text-[#2d7a4d] hover:underline"
              >
                <Phone className="w-4 h-4" />
                +1 321 534 0179
              </a>
            </div>
            <p className="text-sm text-[#4a5a4a] mt-3">
              Please mention your order number when contacting support.
            </p>
          </div>

          {/* Actions */}
          <Button 
            onClick={handleContinueShopping}
            className="w-full bg-[#2d7a4d] hover:bg-[#3d9a6d] text-white flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Continue Shopping
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
