import React, { useState } from 'react';
import { SITE_CONFIG } from '../../data/config';

interface SolutionsSectionProps {
  onDiscussSolution: (solutionName: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onDiscussSolution }) => {
  const [activeSolutionIdx, setActiveSolutionIdx] = useState<number>(0);
  const solutions = SITE_CONFIG.solutions;
  const current = solutions[activeSolutionIdx];

  return (
    <section id="solutions" className="py-24 md:py-32 bg-[#F1E9DC]/30 border-y border-[#E4DACE] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A38B70]" />
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#777269]">
              BUSINESS CAPABILITIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#272722] leading-[1.12]">
            Technology That Fits the Way You Work.
          </h2>

          <p className="text-base sm:text-lg text-[#777269] leading-relaxed">
            We architect purpose-aligned digital systems designed to solve operational bottlenecks, unify fragmented workflows, and support continuous organizational adaptation.
          </p>
        </div>

        {/* Interactive Split Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Solution Selector Sidebar */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#777269] mb-3">
              SELECT CAPABILITY DOMAIN
            </div>
            {solutions.map((sol, idx) => {
              const isSelected = activeSolutionIdx === idx;
              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveSolutionIdx(idx)}
                  className={`w-full text-left p-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-between border ${
                    isSelected
                      ? 'bg-[#FFFCF7] border-[#A38B70] shadow-xs text-[#272722]'
                      : 'bg-transparent border-transparent text-[#777269] hover:bg-[#F8F5EF] hover:text-[#272722]'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-medium">{sol.title}</span>
                  <span className={`text-xs font-mono ${isSelected ? 'text-[#A38B70]' : 'text-transparent'}`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Solution Deep Dive Card */}
          <div className="lg:col-span-8 bg-[#FFFCF7] border border-[#E4DACE] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E4DACE] gap-2">
              <div>
                <span className="text-xs font-mono text-[#A38B70] uppercase">
                  CAPABILITY PROFILE
                </span>
                <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#272722] mt-0.5">
                  {current.title}
                </h3>
              </div>
              <button
                onClick={() => onDiscussSolution(current.title)}
                className="self-start sm:self-auto px-4 py-2 text-xs font-semibold text-[#F8F5EF] bg-[#282923] rounded-lg hover:bg-[#3d3f37] transition-colors cursor-pointer"
              >
                Discuss This Capability
              </button>
            </div>

            {/* Problem & Approach Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-[#F8F5EF] border border-[#E4DACE] space-y-2">
                <div className="text-[11px] font-mono uppercase text-[#777269] tracking-wider">
                  OPERATIONAL CHALLENGE
                </div>
                <p className="text-xs sm:text-sm text-[#272722]/85 leading-relaxed">
                  {current.businessProblem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F5EF] border border-[#E4DACE] space-y-2">
                <div className="text-[11px] font-mono uppercase text-[#A38B70] tracking-wider">
                  TECHNICAL APPROACH
                </div>
                <p className="text-xs sm:text-sm text-[#272722]/85 leading-relaxed">
                  {current.approach}
                </p>
              </div>
            </div>

            {/* Supported Outcomes */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#777269]">
                TARGET ORGANIZATIONAL OUTCOMES
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {current.outcomes.map((out, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-white border border-[#E4DACE] text-xs font-medium text-[#272722] flex items-start gap-2"
                  >
                    <span className="text-[#A38B70] font-bold text-xs mt-0.5">·</span>
                    <span className="leading-snug">{out}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Highlights */}
            <div className="pt-4 border-t border-[#E4DACE] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-[#777269]">TOPOLOGY PATTERNS:</span>
                <div className="flex flex-wrap gap-1.5">
                  {current.architectureHighlights.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-[#F1E9DC] text-[10px] font-mono text-[#272722] border border-[#E4DACE]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#777269]">
                SCOPED TO ENTERPRISE WORKLOADS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
