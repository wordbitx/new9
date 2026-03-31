import { useEffect, useRef } from 'react';
import { ArrowRight, Zap, Shield, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation on load
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo(imageRef.current, 
        { opacity: 0, scale: 0.92, x: 60 },
        { opacity: 1, scale: 1, x: 0, duration: 1.1 }
      )
      .fromTo(pillRef.current,
        { opacity: 0, scaleX: 0.2 },
        { opacity: 1, scaleX: 1, duration: 0.6 },
        '-=0.8'
      )
      .fromTo(contentRef.current?.querySelectorAll('.animate-item') || [],
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.06 },
        '-=0.5'
      )
      .fromTo(ctaRef.current?.querySelectorAll('button') || [],
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        '-=0.3'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: Zap, text: 'Instant Delivery' },
    { icon: Shield, text: 'Quality Guaranteed' },
    { icon: Clock, text: '24/7 Support' },
    { icon: Users, text: 'Trusted by Thousands' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="relative min-h-screen bg-[#1a2f23] overflow-hidden pt-24 md:pt-32"
      style={{
        background: 'radial-gradient(circle at 38% 45%, rgba(45,122,77,0.18), transparent 55%), #1a2f23'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
          {/* Content */}
          <div ref={contentRef} className="relative z-10 py-12 lg:py-0">
            {/* Pill Motif */}
            <div ref={pillRef} className="pill-motif mb-6 origin-left" />

            <h1 className="animate-item text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[0.95] mb-6">
              Digital solutions that{' '}
              <span className="text-gradient">empower</span>{' '}
              your growth.
            </h1>

            <p className="animate-item text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
              Premium digital products and services designed to accelerate your business. From marketing tools to development kits, delivered instantly to your inbox.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4 mb-12">
              <Button 
                asChild
                className="btn-primary text-base px-8 py-6"
              >
                <a href="#products">
                  Browse Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="btn-secondary text-base px-8 py-6"
              >
                <a href="#contact">
                  Contact Us
                </a>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="animate-item flex items-center gap-2 text-white/60"
                >
                  <feature.icon className="w-5 h-5 text-[#2d7a4d]" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Portal */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div 
              ref={imageRef}
              className="image-portal w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px]"
            >
              <img
                src="/images/sections/hero.jpg"
                alt="Digital collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#2d7a4d]/20 rounded-full blur-2xl" />
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#2d7a4d]/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a2f23] to-transparent" />
    </section>
  );
}
