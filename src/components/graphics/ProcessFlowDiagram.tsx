import React, { useState } from 'react';
import { SITE_CONFIG } from '../../data/config';

export const ProcessFlowDiagram: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const steps = SITE_CONFIG.process;
  const current = steps[selectedIdx];

  return (
    <div className="w-full bg-[#FFFCF7] border border-[#E4DACE] rounded-2xl p-6 sm:p-8 shadow-sm">
      {/* Top Connected Stepper */}
      <div className="relative mb-8 pb-4 border-b border-[#E4DACE]">
        <div className="hidden sm:block absolute top-4 left-6 right-6 h-[2px] bg-[#E4DACE] z-0" />
        
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-2">
          {steps.map((st, idx) => {
            const isSelected = selectedIdx === idx;
            const isPassed = selectedIdx > idx;

            return (
              <button
                key={st.number}
                onClick={() => setSelectedIdx(idx)}
                className={`flex flex-col items-center p-2 rounded-xl transition-all text-center group cursor-pointer ${
                  isSelected
                    ? 'bg-[#F1E9DC] sm:bg-transparent shadow-xs sm:shadow-none'
                    : 'hover:bg-[#F8F5EF] sm:hover:bg-transparent'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all mb-2 ${
                    isSelected
                      ? 'bg-[#282923] text-[#F8F5EF] ring-4 ring-[#D8C4A8]/40'
                      : isPassed
                      ? 'bg-[#D8C4A8] text-[#272722]'
                      : 'bg-white text-[#777269] border border-[#E4DACE]'
                  }`}
                >
                  {st.number}
                </div>
                <span
                  className={`text-xs font-medium tracking-tight ${
                    isSelected ? 'text-[#272722] font-semibold' : 'text-[#777269]'
                  }`}
                >
                  {st.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Phase Card Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#282923] text-[#F8F5EF]">
              PHASE {current.number}
            </span>
            <span className="text-xs font-mono text-[#A38B70] uppercase">
              STRUCTURED DELIVERY STAGE
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#272722]">
            {current.title}
          </h3>

          <p className="text-sm sm:text-base text-[#777269] leading-relaxed">
            {current.summary}
          </p>

          <p className="text-xs sm:text-sm text-[#272722]/85 leading-relaxed bg-[#F8F5EF] p-4 rounded-xl border border-[#E4DACE]">
            {current.details}
          </p>
        </div>

        <div className="lg:col-span-5 bg-[#F1E9DC]/50 rounded-xl p-5 border border-[#E4DACE] space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-[#777269]">
            KEY VERIFIED OUTPUTS
          </div>

          <div className="space-y-2">
            {current.keyOutputs.map((out, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white border border-[#E4DACE] text-xs font-medium text-[#272722]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#A38B70] mt-1.5 shrink-0" />
                <span>{out}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 text-[11px] font-mono text-[#777269] flex justify-between items-center">
            <span>GATE COMPLIANCE: REQUIRED</span>
            <span className="text-[#A38B70]">NEXT: {steps[(selectedIdx + 1) % steps.length].title} →</span>
          </div>
        </div>
      </div>
    </div>
  );
};
