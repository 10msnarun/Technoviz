import React from 'react';
import { ServiceItem } from '../../data/config';
import { ServiceDiagram } from '../graphics/ServiceDiagram';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectService,
}) => {
  if (!service) return null;

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
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#282923] text-[#F8F5EF]">
              PRACTICE {service.number}
            </span>
            <span className="text-xs font-mono text-[#A38B70] uppercase">
              DELIVERABLE SPECIFICATION
            </span>
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

        <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#272722] mb-2">
          {service.title}
        </h3>
        <p className="text-xs font-mono text-[#A38B70] mb-4">{service.tagline}</p>
        <p className="text-sm sm:text-base text-[#777269] leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Visual architecture diagram */}
        <div className="mb-6">
          <div className="text-[11px] font-mono text-[#777269] uppercase mb-2">
            ARCHITECTURAL SCHEMATIC
          </div>
          <ServiceDiagram type={service.diagramType} />
        </div>

        {/* Deliverables List */}
        <div className="mb-6 space-y-2">
          <div className="text-[11px] font-mono text-[#777269] uppercase">
            CORE DELIVERABLES & ARTIFACTS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {service.deliverables.map((item, i) => (
              <div
                key={i}
                className="p-2.5 rounded-lg bg-[#F8F5EF] border border-[#E4DACE] text-xs text-[#272722] flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#A38B70]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Focus */}
        <div className="mb-8">
          <div className="text-[11px] font-mono text-[#777269] uppercase mb-2">
            PRIMARY TECHNOLOGIES & TOOLS
          </div>
          <div className="flex flex-wrap gap-1.5">
            {service.techFocus.map((tech, i) => (
              <span
                key={i}
                className="text-xs font-mono px-2.5 py-1 rounded bg-[#F1E9DC] border border-[#E4DACE] text-[#272722]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-[#E4DACE] flex items-center justify-between gap-3">
          <span className="text-xs text-[#777269]">
            Ready to scope requirements for this practice?
          </span>
          <button
            onClick={() => {
              onClose();
              onSelectService(service.title);
            }}
            className="px-4 py-2 text-xs font-semibold text-[#F8F5EF] bg-[#282923] rounded-lg hover:bg-[#3d3f37] transition-colors cursor-pointer"
          >
            Inquire About {service.title}
          </button>
        </div>
      </div>
    </div>
  );
};
