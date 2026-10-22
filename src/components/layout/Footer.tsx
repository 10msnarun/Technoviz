import React from 'react';
import { SITE_CONFIG } from '../../data/config';
import { TechnovinzLogo } from '../ui/TechnovinzLogo';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms, onOpenContact }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#282923] text-[#F8F5EF] pt-16 pb-12 border-t border-[#3d3f37] relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-35 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <TechnovinzLogo size="md" theme="light" />

            <p className="text-xs text-[#F8F5EF]/70 leading-relaxed max-w-sm">
              {SITE_CONFIG.brand.tagline} {SITE_CONFIG.brand.shortStatement}
            </p>

            <div className="pt-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#D8C4A8] block mb-1">
                LOCATION & TIMEZONE
              </span>
              <p className="text-xs text-[#F8F5EF]/80 font-mono">
                {SITE_CONFIG.contact.location}
              </p>
              <p className="text-[11px] text-[#F8F5EF]/50 font-mono mt-0.5">
                {SITE_CONFIG.contact.timezone}
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D8C4A8]">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="text-[#F8F5EF]/70 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              {SITE_CONFIG.navigation.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="text-[#F8F5EF]/70 hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D8C4A8]">
              PRACTICES
            </h4>
            <ul className="space-y-2 text-xs">
              {SITE_CONFIG.services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-[#F8F5EF]/70 hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#services" className="text-[#D8C4A8] hover:underline font-mono text-[11px]">
                  View all 8 practices →
                </a>
              </li>
            </ul>
          </div>

          {/* Configured Contact & Inquiries */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D8C4A8]">
              CONNECT & INQUIRE
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-[10px] text-[#F8F5EF]/50 font-mono block">Direct Inquiries:</span>
                <span className="font-mono text-[#D8C4A8]">{SITE_CONFIG.contact.inquiryEmail}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#F8F5EF]/50 font-mono block">General Contact:</span>
                <span className="font-mono text-[#F8F5EF]/80">{SITE_CONFIG.contact.supportEmail}</span>
              </div>
              <p className="text-[11px] text-[#F8F5EF]/60 italic pt-1">
                {SITE_CONFIG.contact.responseCommitment}
              </p>
            </div>

            <div className="pt-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#D8C4A8] block mb-2">
                NETWORKS
              </span>
              <div className="flex gap-3 text-xs">
                {SITE_CONFIG.socials.map((sc) => (
                  <a
                    key={sc.name}
                    href={sc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#F8F5EF]/70 hover:text-white transition-colors font-mono"
                  >
                    {sc.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal, Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F5EF]/60">
          <div className="flex items-center gap-2">
            <span>© {currentYear} {SITE_CONFIG.brand.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer text-xs"
            >
              Privacy Policy
            </button>
            <span className="text-white/20">·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer text-xs"
            >
              Terms of Service
            </button>
            <span className="text-white/20">·</span>
            <button
              onClick={onOpenContact}
              className="text-[#D8C4A8] hover:text-white transition-colors cursor-pointer font-mono"
            >
              Start Consultation
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
