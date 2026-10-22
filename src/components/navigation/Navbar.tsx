import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../../data/config';
import { TechnovinzLogo } from '../ui/TechnovinzLogo';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['services', 'solutions', 'work', 'process', 'about', 'insights', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5EF]/90 backdrop-blur-md border-b border-[#E4DACE] shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single element wordmark + custom geometric mark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#272722]"
            aria-label="Technovinz Home"
          >
            <TechnovinzLogo size="md" theme="dark" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#777269]">
            <a
              href="#"
              className={`hover:text-[#272722] transition-colors whitespace-nowrap shrink-0 ${
                activeSection === 'home' ? 'text-[#272722] font-semibold' : ''
              }`}
            >
              Home
            </a>
            {SITE_CONFIG.navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`hover:text-[#272722] transition-colors whitespace-nowrap shrink-0 ${
                  activeSection === item.id ? 'text-[#272722] font-semibold' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenContact}
              className="px-4.5 py-2 text-xs font-semibold tracking-wide text-[#F8F5EF] bg-[#282923] rounded-lg hover:bg-[#3d3f37] active:scale-[0.98] transition-all whitespace-nowrap shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#282923]"
            >
              Start a Project
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#272722] hover:bg-[#F1E9DC] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F5EF] border-b border-[#E4DACE] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#272722] rounded-md hover:bg-[#F1E9DC]"
          >
            Home
          </a>
          {SITE_CONFIG.navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#777269] hover:text-[#272722] rounded-md hover:bg-[#F1E9DC]"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E4DACE]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-[#F8F5EF] bg-[#282923] rounded-lg"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
