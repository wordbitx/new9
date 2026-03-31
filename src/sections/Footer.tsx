import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useLegal } from '@/context/LegalContext';

export function Footer() {
  const { openLegalPage } = useLegal();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Home', href: '#home' },
      { name: 'Products', href: '#products' },
      { name: 'Services', href: '#services-page' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Terms of Service', key: 'terms' as const },
      { name: 'Privacy Policy', key: 'privacy' as const },
      { name: 'Cookie Policy', key: 'cookies' as const },
      { name: 'Refund Policy', key: 'refund' as const },
      { name: 'Legal Information', key: 'legal' as const },
    ],
    categories: [
      { name: 'Digital Marketing', href: '#all-products' },
      { name: 'Content Creation', href: '#all-products' },
      { name: 'Development', href: '#all-products' },
      { name: 'Ebooks', href: '#all-products' },
      { name: 'Virtual Services', href: '#services-page' },
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer id="legal" className="bg-[#1a2f23] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2d7a4d] to-[#3d9a6d] flex items-center justify-center font-bold text-xl shadow-lg">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                  <path d="M12 2L4 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-8-5z"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg">LIONXSOFTS</div>
                <div className="text-xs text-white/60">Digital Solutions</div>
              </div>
            </div>
            <p className="text-white/60 mb-6 max-w-sm">
              Your trusted partner for premium digital products and services. Delivering quality solutions for business growth and success.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2d7a4d] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Categories</h4>
            <ul className="space-y-2">
              {footerLinks.categories.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => openLegalPage(link.key)}
                    className="text-white/60 hover:text-white transition-colors text-sm text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              {currentYear} LIONXSOFTS LLC. All rights reserved.
            </p>
            <p className="text-white/60 text-sm">
              11451 Via Varra, Broomfield, CO 80020
            </p>
            <p className="text-white/60 text-sm">
              Website:{' '}
              <a 
                href="https://lionxsoftsllc.com" 
                className="text-[#2d7a4d] hover:underline"
              >
                lionxsoftsllc.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
