import React from 'react';
import { SITE_CONFIG } from '../../data/config';

interface EngagementModelsSectionProps {
  onFindApproach: (modelName: string) => void;
}

export const EngagementModelsSection: React.FC<EngagementModelsSectionProps> = ({ onFindApproach }) => {
  return (
    <section className="py-24 md:py-32 bg-[#F1E9DC]/30 border-y border-[#E4DACE] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A38B70]" />
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#777269]">
              COLLABORATION FRAMEWORKS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#272722] leading-[1.12]">
            Flexible Ways to Build Together.
          </h2>

          <p className="text-base sm:text-lg text-[#777269] leading-relaxed">
            Every partnership is structured around your team’s internal capabilities, delivery urgency, and governance requirements. We tailor our engagement model to match how you work best.
          </p>

          <p className="text-xs font-mono text-[#777269]">
            We do not publish fixed rate menus because scope, regulatory posture, and architecture vary. We provide transparent, itemized estimates following technical discovery.
          </p>
        </div>

        {/* 3 Polished Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SITE_CONFIG.engagementModels.map((model) => (
            <div
              key={model.id}
              className="bg-[#FFFCF7] border border-[#E4DACE] rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-[#A38B70] hover:shadow-md transition-all duration-300 group"
            >
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-mono text-[#A38B70] uppercase tracking-wider">
                    STRUCTURED MODEL
                  </span>
                  <h3 className="text-2xl font-editorial font-bold text-[#272722] mt-1">
                    {model.title}
                  </h3>
                  <p className="text-xs font-mono text-[#777269] mt-1">{model.subtitle}</p>
                </div>

                <p className="text-xs sm:text-sm text-[#777269] leading-relaxed">
                  {model.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#777269] block">
                    ENGAGEMENT ATTRIBUTES
                  </span>
                  <div className="space-y-2">
                    {model.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#272722]">
                        <span className="text-[#A38B70] font-bold">·</span>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#F8F5EF] border border-[#E4DACE] text-xs text-[#777269]">
                  <span className="font-semibold text-[#272722] block mb-0.5">Best Suited For:</span>
                  {model.fitFor}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F1E9DC]">
                <button
                  onClick={() => onFindApproach(model.title)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-[#272722] bg-[#F1E9DC] hover:bg-[#282923] hover:text-[#F8F5EF] rounded-lg transition-colors cursor-pointer text-center"
                >
                  Find the Right Approach →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
