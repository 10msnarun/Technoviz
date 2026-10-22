import React from 'react';
import { SITE_CONFIG } from '../../data/config';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const data = type === 'privacy' ? SITE_CONFIG.legal.privacyPolicy : SITE_CONFIG.legal.termsOfService;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FFFCF7] border border-[#E4DACE] rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-[#272722] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E4DACE]">
          <div>
            <span className="text-[11px] font-mono text-[#A38B70] uppercase">
              GOVERNANCE & COMPLIANCE
            </span>
            <h3 className="text-2xl font-editorial font-bold text-[#272722]">{data.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#777269] hover:text-[#272722] hover:bg-[#F1E9DC] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="text-xs font-mono text-[#777269] mb-6">
          EFFECTIVE DATE: {data.lastUpdated} · VERSION 1.0
        </div>

        <div className="space-y-6 text-sm text-[#272722]/85 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          {data.sections.map((sec, idx) => (
            <div key={idx} className="space-y-1.5">
              <h4 className="font-semibold text-[#272722] text-sm">{sec.heading}</h4>
              <p className="text-xs sm:text-sm text-[#777269]">{sec.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-[#E4DACE] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#F8F5EF] bg-[#282923] rounded-lg hover:bg-[#3d3f37] transition-colors cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
