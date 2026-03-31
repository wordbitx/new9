import { useEffect, useRef } from 'react';
import { ArrowRight, Layers, FileCheck, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.fromTo(imageRef.current,
        { opacity: 0, x: 100, scale: 0.85 },
        { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'power2.out' }
      )
      .fromTo(contentRef.current?.querySelectorAll('.animate-item') || [],
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
        '-=0.5'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Layers,
      title: 'Modular Systems',
      description: 'Upgrade anytime with our flexible, scalable solutions.'
    },
    {
      icon: FileCheck,
      title: 'Clear Documentation',
      description: 'Comprehensive guides and smooth handoff process.'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Our team is here to help you every step of the way.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="section-dark py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div ref={contentRef}>
            <div className="pill-motif mb-6" />
            
            <h2 className="animate-item text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Built for speed. Designed to last.
            </h2>

            <p className="animate-item text-lg text-white/60 mb-10 leading-relaxed">
              Every product and service we offer is crafted with attention to detail, ensuring you get solutions that stand the test of time.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="animate-item flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2d7a4d] flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-white/60 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              asChild
              className="animate-item btn-primary"
            >
              <a href="#products">
                Explore Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div 
              ref={imageRef}
              className="image-portal w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]"
            >
              <img
                src="/images/sections/features.jpg"
                alt="Our features"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
