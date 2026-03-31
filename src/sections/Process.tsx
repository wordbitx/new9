import { useEffect, useRef } from 'react';
import { Calendar, FileText, Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Process() {
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

  const steps = [
    {
      icon: Calendar,
      title: 'Book a Call',
      description: 'Schedule a free 15-minute consultation to discuss your needs.'
    },
    {
      icon: FileText,
      title: 'Get a Plan',
      description: 'We build a customized plan tailored to your goals within 48 hours.'
    },
    {
      icon: Rocket,
      title: 'Receive Deliverables',
      description: 'Get your digital products and services delivered to your email—fast.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="process" 
      className="section-dark py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div ref={contentRef}>
            <div className="pill-motif mb-6" />
            
            <h2 className="animate-item text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              A simple process. Serious results.
            </h2>

            <p className="animate-item text-lg text-white/60 mb-10 leading-relaxed">
              We have streamlined our workflow to get you from idea to delivery as quickly as possible without compromising quality.
            </p>

            <div className="space-y-6 mb-10">
              {steps.map((step, index) => (
                <div key={index} className="animate-item flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2d7a4d] flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-white/60 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              asChild
              className="animate-item btn-primary"
            >
              <a href="#contact">
                Book a Call
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
                src="/images/sections/process.jpg"
                alt="Our process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
