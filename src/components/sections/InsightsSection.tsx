import React from 'react';
import { SITE_CONFIG, InsightArticle } from '../../data/config';

interface InsightsSectionProps {
  onReadArticle: (article: InsightArticle) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onReadArticle }) => {
  return (
    <section id="insights" className="py-24 md:py-32 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A38B70]" />
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#777269]">
              THOUGHT LEADERSHIP & ESSAYS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#272722] leading-[1.12]">
            Perspectives on Building Better Software.
          </h2>

          <p className="text-base sm:text-lg text-[#777269] leading-relaxed">
            Reflections from our engineering practice on architecture, automation, user experience, and building digital products that last.
          </p>
        </div>

        {/* 3 Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_CONFIG.articles.map((art, idx) => (
            <article
              key={art.id}
              onClick={() => onReadArticle(art)}
              className="bg-[#FFFCF7] border border-[#E4DACE] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#A38B70] hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <div className="space-y-4">
                {/* Visual Editorial Header Illustration */}
                <div className="h-40 rounded-xl bg-[#F8F5EF] border border-[#E4DACE] p-4 flex flex-col justify-between relative overflow-hidden group-hover:bg-[#F1E9DC]/60 transition-colors">
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#777269]">
                    <span>ESSAY // 0{idx + 1}</span>
                    <span className="text-[#A38B70]">{art.readingTime}</span>
                  </div>

                  {/* Abstract SVG diagram */}
                  <div className="flex items-center justify-center py-2">
                    {idx === 0 && (
                      <svg className="w-20 h-16 text-[#A38B70]" viewBox="0 0 80 50" fill="none">
                        <rect x="5" y="5" width="20" height="40" rx="3" stroke="#282923" strokeWidth="1.5" />
                        <rect x="30" y="5" width="20" height="40" rx="3" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
                        <rect x="55" y="5" width="20" height="40" rx="3" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
                        <line x1="15" y1="25" x2="65" y2="25" stroke="#D8C4A8" strokeWidth="1.5" />
                      </svg>
                    )}
                    {idx === 1 && (
                      <svg className="w-20 h-16 text-[#A38B70]" viewBox="0 0 80 50" fill="none">
                        <circle cx="20" cy="25" r="12" stroke="#282923" strokeWidth="1.5" />
                        <circle cx="60" cy="25" r="12" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M32 25 L48 25" stroke="#D8C4A8" strokeWidth="2" strokeDasharray="4 2" />
                        <polygon points="48,22 53,25 48,28" fill="#D8C4A8" />
                      </svg>
                    )}
                    {idx === 2 && (
                      <svg className="w-20 h-16 text-[#A38B70]" viewBox="0 0 80 50" fill="none">
                        <rect x="10" y="10" width="60" height="30" rx="4" stroke="#282923" strokeWidth="1.5" />
                        <line x1="10" y1="20" x2="70" y2="20" stroke="#E4DACE" strokeWidth="1" />
                        <line x1="30" y1="20" x2="30" y2="40" stroke="#E4DACE" strokeWidth="1" />
                        <rect x="35" y="24" width="28" height="10" rx="2" fill="#D8C4A8" fillOpacity="0.4" />
                      </svg>
                    )}
                  </div>

                  <div className="flex justify-between items-center text-[10px] font-mono text-[#777269]">
                    <span>{art.category}</span>
                    <span>{art.date}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-xl font-editorial font-bold text-[#272722] group-hover:text-[#A38B70] transition-colors leading-snug">
                  {art.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#777269] leading-relaxed">
                  {art.summary}
                </p>
              </div>

              {/* Read Link */}
              <div className="pt-4 mt-6 border-t border-[#F1E9DC] flex items-center justify-between text-xs font-semibold text-[#272722] group-hover:text-[#A38B70]">
                <span>Read Full Article</span>
                <span className="font-mono text-xs">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
