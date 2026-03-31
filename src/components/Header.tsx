import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Phone, Mail } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface HeaderProps {
  variant?: 'dark' | 'light';
}

export function Header({ variant = 'dark' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services-page' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Legal', href: '#legal' },
  ];

  const isDark = variant === 'dark';
  const bgClass = isScrolled 
    ? (isDark ? 'bg-[#1a2f23]/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-sm')
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      {/* Top Bar */}
      <div className="bg-[#2d7a4d] text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+13215340179" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+1 321 534 0179</span>
            </a>
            <a href="mailto:info@lionxsoftsllc.com" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@lionxsoftsllc.com</span>
            </a>
          </div>
          <div className="text-white/80">
            Digital Products Delivered to Your Email
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`${isScrolled ? '' : 'bg-[#1a2f23]/90 backdrop-blur-sm'} transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#2d7a4d] to-[#3d9a6d] flex items-center justify-center font-bold text-lg md:text-xl shadow-lg">
                <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor">
                  <path d="M12 2L4 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-8-5z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className={`font-bold text-base md:text-lg leading-tight ${isDark || !isScrolled ? 'text-white' : 'text-[#1a2f23]'}`}>
                  LIONXSOFTS
                </div>
                <div className={`text-xs ${isDark || !isScrolled ? 'text-white/60' : 'text-[#4a5a4a]'}`}>
                  Digital Solutions
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={isDark || !isScrolled ? 'nav-link' : 'nav-link-light'}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className={`relative p-2 rounded-full transition-colors ${isDark || !isScrolled ? 'hover:bg-white/10' : 'hover:bg-[#1a2f23]/10'}`}
              >
                <ShoppingCart className={`w-5 h-5 md:w-6 md:h-6 ${isDark || !isScrolled ? 'text-white' : 'text-[#1a2f23]'}`} />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#2d7a4d] text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {getCartCount()}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-full transition-colors ${isDark || !isScrolled ? 'hover:bg-white/10' : 'hover:bg-[#1a2f23]/10'}`}
              >
                {isMobileMenuOpen ? (
                  <X className={`w-6 h-6 ${isDark || !isScrolled ? 'text-white' : 'text-[#1a2f23]'}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${isDark || !isScrolled ? 'text-white' : 'text-[#1a2f23]'}`} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={`lg:hidden py-4 border-t ${isDark || !isScrolled ? 'border-white/10 bg-[#1a2f23]/95 backdrop-blur-md' : 'border-[#1a2f23]/10 bg-white/95 backdrop-blur-md'}`}>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-3 px-4 rounded-lg transition-colors ${
                      isDark || !isScrolled 
                        ? 'text-white hover:bg-white/10' 
                        : 'text-[#1a2f23] hover:bg-[#1a2f23]/10'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <div className={`pt-4 mt-2 border-t ${isDark || !isScrolled ? 'border-white/10' : 'border-[#1a2f23]/10'} space-y-3`}>
                  <a href="tel:+13215340179" className={`flex items-center gap-2 py-2 px-4 ${isDark || !isScrolled ? 'text-white/80' : 'text-[#4a5a4a]'}`}>
                    <Phone className="w-4 h-4" />
                    <span>+1 321 534 0179</span>
                  </a>
                  <a href="mailto:info@lionxsoftsllc.com" className={`flex items-center gap-2 py-2 px-4 ${isDark || !isScrolled ? 'text-white/80' : 'text-[#4a5a4a]'}`}>
                    <Mail className="w-4 h-4" />
                    <span>info@lionxsoftsllc.com</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
