import React, { useState } from 'react';
import { SITE_CONFIG } from '../../data/config';

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = SITE_CONFIG.techStack;

  const filteredCategories =
    selectedCategory === 'All'
      ? categories
      : categories.filter((c) => c.category === selectedCategory);

  return (
    <section className="py-24 md:py-32 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Split with Hardware Silicon Processor Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A38B70]" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#777269]">
                TOOLING PRAGMATISM
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#272722] leading-[1.12]">
              Built With the Right Tools for the Right Reasons.
            </h2>

            <p className="text-base sm:text-lg text-[#777269] leading-relaxed max-w-2xl">
              We choose mature, stable technologies with active maintenance ecosystems and well-understood operational tradeoffs. We select stacks to support your business requirements, not to chase ephemeral framework trends.
            </p>

            <p className="text-xs font-mono text-[#777269]">
              Note: Displayed domains represent verified areas of engineering focus and technical capability.
            </p>
          </div>

          <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-[#E4DACE] shadow-sm relative group">
            <img
              src={SITE_CONFIG.brand.aiProcessorImg}
              alt="Neural Processing Silicon Hardware"
              className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-between p-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#D8C4A8] bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">
                SILICON FABRIC // AI COMPUTE
              </span>
              <span className="text-[10px] font-mono text-white/70">
                FAB 2026
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#E4DACE]">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              selectedCategory === 'All'
                ? 'bg-[#282923] text-[#F8F5EF]'
                : 'bg-[#FFFCF7] text-[#777269] border border-[#E4DACE] hover:text-[#272722]'
            }`}
          >
            All Disciplines ({categories.length})
          </button>
          {categories.map((c) => (
            <button
              key={c.category}
              onClick={() => setSelectedCategory(c.category)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedCategory === c.category
                  ? 'bg-[#282923] text-[#F8F5EF]'
                  : 'bg-[#FFFCF7] text-[#777269] border border-[#E4DACE] hover:text-[#272722]'
              }`}
            >
              {c.category}
            </button>
          ))}
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-[#FFFCF7] border border-[#E4DACE] rounded-2xl p-6 hover:border-[#A38B70] shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F1E9DC]">
                  <h3 className="text-lg font-editorial font-bold text-[#272722]">
                    {cat.category}
                  </h3>
                  <span className="text-[10px] font-mono text-[#A38B70]">
                    {cat.skills.length} EXPERTISE AREAS
                  </span>
                </div>

                <p className="text-xs text-[#777269] mb-4 leading-relaxed">
                  {cat.description}
                </p>

                <div className="space-y-2">
                  {cat.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-[#F8F5EF] border border-[#E4DACE]/70 flex items-center justify-between"
                    >
                      <span className="text-xs font-semibold text-[#272722]">{skill.name}</span>
                      <span className="text-[10px] font-mono text-[#777269] ml-2 text-right">
                        {skill.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F1E9DC] text-[10px] font-mono text-[#777269] flex justify-between">
                <span>STABILITY: PRODUCTION TESTED</span>
                <span>TYPE-SAFE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
