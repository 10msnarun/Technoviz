import React from 'react';
import { SITE_CONFIG } from '../../data/config';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Statement, and Approach */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A38B70]" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#777269]">
                PRACTICE IDENTITY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#272722] leading-[1.12]">
              Small Details. Strong Foundations. Better Outcomes.
            </h2>

            <p className="text-base sm:text-lg text-[#777269] leading-relaxed">
              {SITE_CONFIG.brand.name} brings together design thinking and software engineering to help organizations turn complex requirements into practical digital products. Our approach emphasizes clear communication, deliberate technical choices, and solutions designed around the people who use them.
            </p>

            {/* Studio Environment Image */}
            <div className="rounded-2xl overflow-hidden border border-[#E4DACE] shadow-sm relative group">
              <img
                src={SITE_CONFIG.brand.heroStudioImg}
                alt={`${SITE_CONFIG.brand.name} Engineering Studio`}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#F8F5EF] bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                  {SITE_CONFIG.brand.name} ENGINEERING ENVIRONMENT
                </span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFCF7] border border-[#E4DACE] space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A38B70] block">
                ORGANIZATIONAL MANDATE
              </span>
              <p className="text-xs text-[#777269] leading-relaxed">
                We believe durable technology happens when product designers and backend engineers collaborate from the earliest problem definition. We do not toss mockups over a wall; we architect systems with unified intent.
              </p>
            </div>
          </div>

          {/* Right Column: 5 Values */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#777269] mb-2">
              GUIDING OPERATIONAL VALUES
            </div>

            {SITE_CONFIG.aboutValues.map((val, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FFFCF7] border border-[#E4DACE] hover:border-[#A38B70] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono text-[#A38B70] font-bold mt-1">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-editorial font-bold text-[#272722]">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#777269] mt-1 leading-relaxed">
                      {val.description}
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
