import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function CartDrawer() {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal,
    setIsPaymentModalOpen,
    setCurrentOrder
  } = useCart();

  const handleCheckout = () => {
    const subtotal = getCartTotal();
    const tax = subtotal * 0.08;
    const order = {
      orderNumber: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      total: subtotal + tax,
      subtotal,
      tax,
      status: 'pending' as const,
      date: new Date().toISOString(),
      items: [...items]
    };
    setCurrentOrder(order);
    setIsCartOpen(false);
    setIsPaymentModalOpen(true);
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg bg-white flex flex-col">
        <SheetHeader className="space-y-2.5 pb-4 border-b border-[#1a2f23]/10">
          <SheetTitle className="flex items-center gap-2 text-[#1a2f23]">
            <ShoppingBag className="w-5 h-5" />
            Shopping Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <div className="w-20 h-20 bg-[#f5f7f5] rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="w-10 h-10 text-[#4a5a4a]" />
            </div>
            <h3 className="text-lg font-semibold text-[#1a2f23] mb-2">Your cart is empty</h3>
            <p className="text-[#4a5a4a] mb-6">Browse our products and add items to your cart</p>
            <Button 
              onClick={() => setIsCartOpen(false)}
              className="bg-[#2d7a4d] hover:bg-[#3d9a6d] text-white"
            >
              Browse Products
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto py-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex gap-4 p-3 bg-[#f5f7f5] rounded-xl"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-[#1a2f23] truncate">{item.name}</h4>
                      <p className="text-sm text-[#4a5a4a]">{item.category}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-semibold text-[#2d7a4d]">${item.price.toFixed(2)}</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:bg-[#2d7a4d] hover:text-white transition-colors text-[#1a2f23]"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium text-[#1a2f23]">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:bg-[#2d7a4d] hover:text-white transition-colors text-[#1a2f23]"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#4a5a4a] hover:text-red-500 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#1a2f23]/10 pt-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#4a5a4a]">Subtotal</span>
                  <span className="text-[#1a2f23]">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#4a5a4a]">Tax (8%)</span>
                  <span className="text-[#1a2f23]">${(getCartTotal() * 0.08).toFixed(2)}</span>
                </div>
                <Separator className="bg-[#1a2f23]/10" />
                <div className="flex justify-between font-semibold">
                  <span className="text-[#1a2f23]">Total</span>
                  <span className="text-[#2d7a4d] text-lg">${(getCartTotal() * 1.08).toFixed(2)}</span>
                </div>
              </div>

              <Button 
                onClick={handleCheckout}
                className="w-full bg-[#2d7a4d] hover:bg-[#3d9a6d] text-white flex items-center justify-center gap-2"
              >
                Proceed to Checkout
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
