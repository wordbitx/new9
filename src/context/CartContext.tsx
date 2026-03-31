import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Product, CartItem, OrderDetails } from '@/types';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  currentOrder: OrderDetails | null;
  setCurrentOrder: (order: OrderDetails | null) => void;
  viewedProduct: Product | null;
  setViewedProduct: (product: Product | null) => void;
  isQuickViewOpen: boolean;
  setIsQuickViewOpen: (open: boolean) => void;
  isPaymentModalOpen: boolean;
  setIsPaymentModalOpen: (open: boolean) => void;
  isOrderConfirmationOpen: boolean;
  setIsOrderConfirmationOpen: (open: boolean) => void;
  isPaymentDisabledModalOpen: boolean;
  setIsPaymentDisabledModalOpen: (open: boolean) => void;
  isRedirectingModalOpen: boolean;
  setIsRedirectingModalOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<OrderDetails | null>(null);
  const [viewedProduct, setViewedProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isOrderConfirmationOpen, setIsOrderConfirmationOpen] = useState(false);
  const [isPaymentDisabledModalOpen, setIsPaymentDisabledModalOpen] = useState(false);
  const [isRedirectingModalOpen, setIsRedirectingModalOpen] = useState(false);

  const addToCart = useCallback((product: Product) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setItems(prev => prev.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const getCartTotal = useCallback(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [items]);

  const getCartCount = useCallback(() => {
    return items.reduce((count, item) => count + item.quantity, 0);
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        isCartOpen,
        setIsCartOpen,
        currentOrder,
        setCurrentOrder,
        viewedProduct,
        setViewedProduct,
        isQuickViewOpen,
        setIsQuickViewOpen,
        isPaymentModalOpen,
        setIsPaymentModalOpen,
        isOrderConfirmationOpen,
        setIsOrderConfirmationOpen,
        isPaymentDisabledModalOpen,
        setIsPaymentDisabledModalOpen,
        isRedirectingModalOpen,
        setIsRedirectingModalOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
