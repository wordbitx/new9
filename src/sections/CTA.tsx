import { useEffect, useRef } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
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

  return (
    <section 
      ref={sectionRef}
      className="section-dark py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div ref={contentRef}>
            <div className="pill-motif mb-6" />
            
            <h2 className="animate-item text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready when you are.
            </h2>

            <p className="animate-item text-lg text-white/60 mb-8 leading-relaxed">
              Tell us what you are building. We will reply within one business day with a customized plan to help you achieve your goals.
            </p>

            <div className="animate-item flex flex-wrap gap-4">
              <Button 
                asChild
                className="btn-primary"
              >
                <a href="#contact">
                  Start a Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="btn-secondary"
              >
                <a href="mailto:info@lionxsoftsllc.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div 
              ref={imageRef}
              className="image-portal w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]"
            >
              <img
                src="/images/sections/cta.jpg"
                alt="Ready to start"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
