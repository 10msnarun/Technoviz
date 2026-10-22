import React from 'react';
import { SITE_CONFIG } from '../../data/config';
import { SecurityTopologyDiagram } from '../graphics/SecurityTopologyDiagram';

export const QualitySecuritySection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#282923] text-[#F8F5EF] relative overflow-hidden">
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Split with Real Infrastructure Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8C4A8]" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#D8C4A8]">
                ENGINEERING INTEGRITY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-white leading-[1.12]">
              Reliable by Design.
            </h2>

            <p className="text-base sm:text-lg text-[#F8F5EF]/80 leading-relaxed max-w-xl">
              Reliability is not an afterthought added before launch; it is engineered into every component boundary, data model, and release pipeline from day one.
            </p>
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 shadow-lg relative group">
            <img
              src={SITE_CONFIG.brand.cloudInfrastructureImg}
              alt="Cloud Server and Hardware Infrastructure"
              className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-between p-3.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#D8C4A8] bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs border border-white/10">
                CLOUD FABRIC // HARDWARE TIER
              </span>
              <span className="text-[10px] font-mono text-white/70">
                EDGE PROBING: ACTIVE
              </span>
            </div>
          </div>
        </div>

        {/* Dark Architectural Topology Component */}
        <SecurityTopologyDiagram />

        {/* Clear Disclaimer Note */}
        <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[#F8F5EF]/70 leading-relaxed max-w-4xl">
          <p className="font-mono text-[11px] text-[#D8C4A8] mb-1">
            SPECIFICATION CLASSIFICATION & LIMITS:
          </p>
          <p>{SITE_CONFIG.securityDisclaimer}</p>
        </div>
      </div>
    </section>
  );
};
