import { useEffect, useState } from 'react';
import { CartProvider } from '@/context/CartContext';
import { LegalProvider } from '@/context/LegalContext';
import { Header } from '@/components/Header';
import { CartDrawer } from '@/components/CartDrawer';
import { QuickViewModal } from '@/components/QuickViewModal';
import { PaymentModal } from '@/components/PaymentModal';
import { PaymentDisabledModal } from '@/components/PaymentDisabledModal';
import { RedirectingModal } from '@/components/RedirectingModal';
import { OrderConfirmationModal } from '@/components/OrderConfirmationModal';
import { Hero } from '@/sections/Hero';
import { Products } from '@/sections/Products';
import { Services } from '@/sections/Services';
import { ServicesPage } from '@/sections/ServicesPage';
import { Process } from '@/sections/Process';
import { Testimonials } from '@/sections/Testimonials';
import { Features } from '@/sections/Features';
import { Pricing } from '@/sections/Pricing';
import { CTA } from '@/sections/CTA';
import { Contact } from '@/sections/Contact';
import { AllProducts } from '@/sections/AllProducts';
import { LegalPages } from '@/sections/LegalPages';
import { Footer } from '@/sections/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#1B1B5C] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#7B3FE4] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <CartProvider>
      <LegalProvider>
        <div className="relative">
          {/* Grain Overlay */}
          <div className="grain-overlay" />
          
          {/* Header */}
          <Header variant="dark" />
          
          {/* Main Content */}
          <main>
            <Hero />
            <Products />
            <Services />
            <Process />
            <Testimonials />
            <Features />
            <Pricing />
            <CTA />
            <AllProducts />
            <ServicesPage />
            <Contact />
            <LegalPages />
          </main>
          
          {/* Footer */}
          <Footer />
          
          {/* Modals & Drawers */}
          <CartDrawer />
          <QuickViewModal />
          <PaymentModal />
          <RedirectingModal />
          <PaymentDisabledModal />
          <OrderConfirmationModal />
          
          {/* Toast Notifications */}
          <Toaster 
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#1B1B5C',
                color: '#fff',
                border: '1px solid rgba(123,63,228,0.3)',
              },
            }}
          />
        </div>
      </LegalProvider>
    </CartProvider>
  );
}

export default App;
