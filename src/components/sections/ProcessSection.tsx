import React from 'react';
import { ProcessFlowDiagram } from '../graphics/ProcessFlowDiagram';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#F1E9DC]/30 border-y border-[#E4DACE] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A38B70]" />
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#777269]">
              METHODOLOGY & LIFECYCLE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#272722] leading-[1.12]">
            A Clear Path From Idea to Delivery.
          </h2>

          <p className="text-base sm:text-lg text-[#777269] leading-relaxed">
            We follow a structured five-stage delivery framework that replaces guesswork with validated engineering milestones, continuous communication, and clear deliverables.
          </p>
        </div>

        {/* Interactive 5-Step Process Component */}
        <ProcessFlowDiagram />
      </div>
    </section>
  );
};
