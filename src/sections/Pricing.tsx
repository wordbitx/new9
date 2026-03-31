import { useEffect, useRef } from 'react';
import { Check, Star, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const { addToCart, setIsCartOpen } = useCart();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      const cards = cardsRef.current?.querySelectorAll('.pricing-card');
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const plans = [
    {
      id: 101,
      name: 'Starter',
      description: 'Digital Starter Kit',
      price: 29,
      features: [
        '5 Marketing Templates',
        'Basic Analytics Guide',
        'Content Calendar',
        'Email Support'
      ],
      highlighted: false
    },
    {
      id: 102,
      name: 'Professional',
      description: 'Growth System',
      price: 79,
      features: [
        '20+ Premium Templates',
        'Advanced Analytics',
        'Automation Tools',
        'Priority Support',
        'Monthly Updates'
      ],
      highlighted: true
    },
    {
      id: 103,
      name: 'Enterprise',
      description: 'Complete Solution',
      price: 99,
      features: [
        'Everything in Pro',
        'Custom Solutions',
        'Dedicated Manager',
        'White-label Options',
        'API Access'
      ],
      highlighted: false
    }
  ];

  const handleGetStarted = (plan: typeof plans[0]) => {
    const planProduct = {
      id: plan.id,
      name: `${plan.name} - ${plan.description}`,
      description: `Complete ${plan.name.toLowerCase()} package with premium features`,
      price: plan.price,
      category: 'Pricing Plans',
      image: '/images/sections/features.jpg',
      rating: 4.9,
      reviews: 150,
      features: plan.features
    };
    
    addToCart(planProduct as any);
    toast.success(`${plan.name} plan added to cart!`);
    setIsCartOpen(true);
  };

  return (
    <section 
      ref={sectionRef}
      id="pricing" 
      className="section-light py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="pill-motif mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2f23] mb-4">
            Pricing
          </h2>
          <p className="text-[#4a5a4a] max-w-2xl mx-auto text-lg">
            Start small. Scale when you are ready. Transparent pricing with no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div 
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card rounded-[28px] p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                plan.highlighted 
                  ? 'bg-[#1a2f23] text-white border-2 border-[#2d7a4d] relative' 
                  : 'bg-white border border-[#1a2f23]/10'
              }`}
            >
              {plan.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2d7a4d] text-white border-0">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Most Popular
                </Badge>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-[#1a2f23]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? 'text-white/60' : 'text-[#4a5a4a]'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-[#2d7a4d]' : 'text-[#2d7a4d]'}`}>
                  ${plan.price}
                </span>
                <span className={plan.highlighted ? 'text-white/60' : 'text-[#4a5a4a]'}>
                  /one-time
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlighted ? 'bg-[#2d7a4d]' : 'bg-[#2d7a4d]/10'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? 'text-white' : 'text-[#2d7a4d]'}`} />
                    </div>
                    <span className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-[#4a5a4a]'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => handleGetStarted(plan)}
                className={`w-full ${
                  plan.highlighted 
                    ? 'bg-[#2d7a4d] hover:bg-[#3d9a6d] text-white' 
                    : 'border-2 border-[#2d7a4d] text-[#2d7a4d] bg-white hover:bg-[#2d7a4d] hover:text-white'
                }`}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
