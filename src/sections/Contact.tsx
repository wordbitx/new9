import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(infoRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(formRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: '11451 Via Varra, Broomfield, CO 80020'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 321 534 0179',
      href: 'tel:+13215340179'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@lionxsoftsllc.com',
      href: 'mailto:info@lionxsoftsllc.com'
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon - Fri: 9AM - 6PM MST'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="section-light py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div ref={infoRef}>
            <div className="pill-motif mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2f23] mb-4">
              Contact
            </h2>
            <p className="text-[#4a5a4a] mb-10 text-lg">
              Questions? Partnerships? Just want to say hi? Send us a message and we will get back to you within one business day.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2d7a4d]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#2d7a4d]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#4a5a4a] mb-1">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-[#1a2f23] font-medium hover:text-[#2d7a4d] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#1a2f23] font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white rounded-[28px] p-6 lg:p-8 border border-[#1a2f23]/10"
          >
            <h3 className="text-xl font-bold text-[#1a2f23] mb-6">Send a Message</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#1a2f23] mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 rounded-xl border-[#1a2f23]/10 focus:border-[#2d7a4d] focus:ring-[#2d7a4d]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a2f23] mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 rounded-xl border-[#1a2f23]/10 focus:border-[#2d7a4d] focus:ring-[#2d7a4d]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a2f23] mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="rounded-xl border-[#1a2f23]/10 focus:border-[#2d7a4d] focus:ring-[#2d7a4d] resize-none"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#2d7a4d] hover:bg-[#3d9a6d] text-white flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
