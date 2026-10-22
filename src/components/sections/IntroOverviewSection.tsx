import React from 'react';
import { SITE_CONFIG } from '../../data/config';

export const IntroOverviewSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F1E9DC]/40 border-y border-[#E4DACE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Editorial Overview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A38B70]" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#777269]">
                CORE PHILOSOPHY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#272722] leading-[1.12] text-balance">
              Technology Should Move Your Business Forward.
            </h2>

            <p className="text-base sm:text-lg text-[#777269] leading-relaxed">
              Great software begins with a clear understanding of the problem. We combine product thinking, thoughtful design, and disciplined engineering to build digital solutions that make work simpler, experiences better, and businesses more adaptable.
            </p>

            {/* Abstract Geometric Linework SVG */}
            <div className="pt-4">
              <div className="p-4 rounded-xl bg-[#FFFCF7] border border-[#E4DACE] flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#A38B70] tracking-wider block">
                    FOUNDATIONAL ANCHOR
                  </span>
                  <span className="text-xs font-semibold text-[#272722]">
                    Deliberate Technical Discipline
                  </span>
                </div>
                <svg className="w-16 h-12 text-[#A38B70]" viewBox="0 0 64 48" fill="none">
                  <rect x="2" y="2" width="60" height="44" rx="4" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
                  <circle cx="32" cy="24" r="12" stroke="#282923" strokeWidth="1.5" />
                  <path d="M20 24 L44 24" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M32 12 L32 36" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Numbered Principles */}
          <div className="lg:col-span-7 space-y-4">
            {SITE_CONFIG.principles.map((pr) => (
              <div
                key={pr.number}
                className="p-6 sm:p-7 rounded-2xl bg-[#FFFCF7] border border-[#E4DACE] hover:border-[#A38B70] transition-all duration-200 group shadow-xs"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-10 h-10 rounded-xl bg-[#F8F5EF] border border-[#E4DACE] flex items-center justify-center font-mono text-sm font-bold text-[#272722] group-hover:bg-[#282923] group-hover:text-[#F8F5EF] transition-colors shrink-0">
                    {pr.number}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-editorial font-bold text-[#272722]">
                      {pr.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#A38B70]">
                      {pr.summary}
                    </p>
                    <p className="text-xs sm:text-sm text-[#777269] leading-relaxed pt-1">
                      {pr.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
