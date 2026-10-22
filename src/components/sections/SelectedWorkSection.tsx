import React from 'react';
import { SITE_CONFIG, ShowcaseProject } from '../../data/config';
import { ProjectMockup } from '../graphics/ProjectMockup';

interface SelectedWorkSectionProps {
  onDiscussConcept: (conceptName: string) => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({ onDiscussConcept }) => {
  return (
    <section id="work" className="py-24 md:py-32 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A38B70]" />
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#777269]">
              ILLUSTRATIVE CASE STUDIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#272722] leading-[1.12]">
            Good Engineering. Thoughtful Experiences.
          </h2>

          <p className="text-base sm:text-lg text-[#777269] leading-relaxed">
            The following representative concept systems showcase our architectural execution, interface craft, and domain modeling. Each demonstrates how we translate complex user journeys into structured digital products.
          </p>

          <div className="p-3 rounded-lg bg-[#F8F5EF] border border-[#E4DACE] text-xs text-[#777269] font-mono inline-block">
            NOTICE: These exhibits are proposed architectural concepts designed to illustrate engineering approach, not completed client engagements.
          </div>
        </div>

        {/* Project List */}
        <div className="space-y-20">
          {SITE_CONFIG.projects.map((proj, idx) => (
            <div
              key={proj.id}
              className="p-6 sm:p-10 rounded-3xl bg-[#FFFCF7] border border-[#E4DACE] hover:border-[#A38B70] shadow-sm transition-all duration-300 space-y-8"
            >
              {/* Project Meta Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E4DACE] gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-[#A38B70]">
                      PROJECT {proj.number}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#F1E9DC] text-[#272722] border border-[#E4DACE]">
                      {proj.badge}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs font-mono text-[#777269]">{proj.category}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-editorial font-bold text-[#272722]">
                    {proj.name}
                  </h3>
                </div>

                <button
                  onClick={() => onDiscussConcept(proj.name)}
                  className="self-start sm:self-auto px-4.5 py-2.5 text-xs font-semibold text-[#F8F5EF] bg-[#282923] rounded-lg hover:bg-[#3d3f37] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Explore Concept Architecture
                </button>
              </div>

              {/* Showcase Split: Domain Photography Context + Interactive UI Mockup */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                <div className="lg:col-span-5 rounded-xl overflow-hidden border border-[#E4DACE] shadow-xs relative group/img min-h-[260px] lg:min-h-full">
                  <img
                    src={proj.image}
                    alt={`${proj.name} Concept Environment`}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#F8F5EF] bg-black/40 px-2.5 py-1 rounded backdrop-blur-xs border border-white/10">
                      EXHIBIT // {proj.category}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-center">
                  <ProjectMockup type={proj.previewType} name={proj.name} />
                </div>
              </div>

              {/* Project Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-[#777269]">
                    CONCEPT PROPOSITION & ARCHITECTURAL APPROACH
                  </h4>
                  <p className="text-sm sm:text-base text-[#272722]/85 leading-relaxed">
                    {proj.longDescription}
                  </p>

                  <div className="pt-2">
                    <div className="text-xs font-mono uppercase text-[#A38B70] mb-2">
                      KEY ARCHITECTURAL HIGHLIGHTS
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#777269]">
                      {proj.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-[#A38B70]">→</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#F8F5EF] rounded-2xl p-6 border border-[#E4DACE] space-y-5">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#777269] block mb-3">
                      SYSTEM METRICS & SPECIFICATIONS
                    </span>
                    <div className="space-y-2.5">
                      {proj.metrics.map((m, i) => (
                        <div key={i} className="flex justify-between items-center text-xs pb-1.5 border-b border-[#E4DACE]/70">
                          <span className="text-[#777269]">{m.label}</span>
                          <span className="font-mono font-semibold text-[#272722]">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#777269] block mb-2">
                      TECHNOLOGY IMPLEMENTATION
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-white border border-[#E4DACE] text-[11px] font-mono text-[#272722]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
