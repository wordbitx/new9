import { useEffect, useRef, useState } from 'react';
import { 
  Share2, Headphones, UserCheck, FileText, Palette, Globe, 
  ShoppingCart, Search, Mail, Video, Briefcase, TrendingUp, 
  Facebook, Target, Users, Check, ArrowRight, Clock, DollarSign
} from 'lucide-react';
import { services } from '@/data/services';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Share2, Headphones, UserCheck, FileText, Palette, Globe, 
  ShoppingCart, Search, Mail, Video, Briefcase, TrendingUp, 
  Facebook, Target, Users
};

export function ServicesPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const { addToCart, setIsCartOpen } = useCart();
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.service-card');
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleOrderService = (service: typeof services[0]) => {
    const serviceProduct = {
      id: 100 + service.id,
      name: service.name,
      description: service.description,
      price: service.price,
      category: 'Virtual Services',
      image: '/images/sections/services.jpg',
      rating: 4.9,
      reviews: 50,
      features: service.features
    };
    addToCart(serviceProduct as any);
    setSelectedService(null);
    setIsCartOpen(true);
  };

  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  return (
    <section 
      ref={sectionRef}
      id="services-page" 
      className="section-light py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="pill-motif mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2f23] mb-4">
            Our Services
          </h2>
          <p className="text-[#4a5a4a] max-w-2xl mx-auto text-lg">
            Professional digital services to help you grow your business. From digital marketing to web development, we have got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <div 
              key={service.id}
              className="service-card bg-white rounded-[28px] p-6 border border-[#1a2f23]/10 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2d7a4d]/10 to-[#2d7a4d]/20 flex items-center justify-center mb-4 text-[#2d7a4d]">
                {getIcon(service.icon)}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#1a2f23] mb-2">
                {service.name}
              </h3>
              <p className="text-[#4a5a4a] text-sm mb-4 line-clamp-2">
                {service.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-2xl font-bold text-[#2d7a4d]">
                  ${service.price}
                </span>
                <span className="text-sm text-[#4a5a4a]">
                  {service.duration}
                </span>
              </div>

              {/* Features Preview */}
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-[#4a5a4a]">
                    <Check className="w-4 h-4 text-[#2d7a4d] flex-shrink-0" />
                    <span className="truncate">{feature}</span>
                  </li>
                ))}
                {service.features.length > 3 && (
                  <li className="text-sm text-[#2d7a4d]">
                    +{service.features.length - 3} more features
                  </li>
                )}
              </ul>

              {/* Actions */}
              <div className="flex gap-3">
                <Button 
                  variant="outline"
                  onClick={() => setSelectedService(service)}
                  className="flex-1 border-[#1a2f23]/20 text-[#1a2f23] hover:bg-[#f5f7f5]"
                >
                  View Details
                </Button>
                <Button 
                  onClick={() => handleOrderService(service)}
                  className="flex-1 bg-[#2d7a4d] hover:bg-[#3d9a6d] text-white"
                >
                  Order Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-lg bg-white max-h-[90vh] overflow-auto">
          {selectedService && (
            <>
              <DialogHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2d7a4d]/10 to-[#2d7a4d]/20 flex items-center justify-center mb-4 text-[#2d7a4d]">
                  {getIcon(selectedService.icon)}
                </div>
                <DialogTitle className="text-2xl font-bold text-[#1a2f23]">
                  {selectedService.name}
                </DialogTitle>
              </DialogHeader>

              <p className="text-[#4a5a4a] mb-6">
                {selectedService.description}
              </p>

              <div className="bg-[#f5f7f5] rounded-xl p-4 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#2d7a4d]" />
                    <span className="text-2xl font-bold text-[#2d7a4d]">${selectedService.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#4a5a4a]">
                    <Clock className="w-4 h-4" />
                    <span>{selectedService.duration}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-[#1a2f23] mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-[#4a5a4a]">
                      <Check className="w-4 h-4 text-[#2d7a4d] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <Button 
                  variant="outline"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 border-[#1a2f23]/20 text-[#1a2f23] hover:bg-[#f5f7f5]"
                >
                  Close
                </Button>
                <Button 
                  onClick={() => handleOrderService(selectedService)}
                  className="flex-1 bg-[#2d7a4d] hover:bg-[#3d9a6d] text-white flex items-center justify-center gap-2"
                >
                  Order Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
