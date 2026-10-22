import React from 'react';
import { SITE_CONFIG } from '../../data/config';
import { HeroEcosystemGraphic } from '../graphics/HeroEcosystemGraphic';

interface HeroSectionProps {
  onDiscussProject: () => void;
  onExploreExpertise: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDiscussProject,
  onExploreExpertise,
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Editorial background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            {/* Supporting label with Technovinz logo emblem */}
            <div className="inline-flex items-center gap-3">
              <img
                src={SITE_CONFIG.brand.brandSymbolImg}
                alt="Technovinz Emblem"
                className="w-7 h-7 rounded-md object-cover border border-[#E4DACE] shadow-xs"
                referrerPolicy="no-referrer"
              />
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#777269]">
                {SITE_CONFIG.brand.heroLabel}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-[#272722] tracking-tight leading-[1.08] text-balance">
              {SITE_CONFIG.brand.heroHeadline}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#777269] leading-relaxed max-w-xl">
              {SITE_CONFIG.brand.heroSupporting}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onDiscussProject}
                className="px-6 py-3 text-sm font-semibold tracking-wide text-[#F8F5EF] bg-[#282923] rounded-lg hover:bg-[#3d3f37] active:scale-[0.98] transition-all shadow-sm cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#282923]"
              >
                Discuss Your Project
              </button>
              <button
                onClick={onExploreExpertise}
                className="px-6 py-3 text-sm font-semibold text-[#272722] bg-[#FFFCF7] border border-[#E4DACE] rounded-lg hover:bg-[#F1E9DC] hover:border-[#A38B70] active:scale-[0.98] transition-all cursor-pointer"
              >
                Explore Our Expertise
              </button>
            </div>

            {/* Small Trust Statement */}
            <div className="pt-6 border-t border-[#E4DACE]/80 flex items-center gap-3 text-xs text-[#777269]">
              <span className="w-2 h-2 rounded-full bg-[#D8C4A8]" />
              <p className="font-medium italic">
                “{SITE_CONFIG.brand.trustStatement}”
              </p>
            </div>
          </div>

          {/* Right Column: Hero Graphic Ecosystem */}
          <div className="lg:col-span-6">
            <HeroEcosystemGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};
