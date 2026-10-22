import React, { useState } from 'react';
import { SITE_CONFIG } from '../../data/config';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([SITE_CONFIG.faqs[0].id]);

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-24 md:py-32 bg-[#F1E9DC]/30 border-y border-[#E4DACE] scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A38B70]" />
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#777269]">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#272722] leading-[1.12]">
            Clear Answers to Common Questions.
          </h2>

          <p className="text-base sm:text-lg text-[#777269] leading-relaxed">
            Honest assessments of how we structure engagements, estimate delivery milestones, and collaborate with your team.
          </p>
        </div>

        {/* Accessible Accordion */}
        <div className="space-y-3.5">
          {SITE_CONFIG.faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-[#FFFCF7] border border-[#E4DACE] rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#282923]"
                >
                  <span className="text-base sm:text-lg font-editorial font-bold text-[#272722]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs transition-transform duration-200 shrink-0 ${
                      isOpen ? 'bg-[#282923] text-[#F8F5EF] rotate-45' : 'bg-[#F1E9DC] text-[#272722]'
                    }`}
                  >
                    +
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-xs sm:text-sm text-[#777269] leading-relaxed border-t border-[#F1E9DC] pt-4 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
