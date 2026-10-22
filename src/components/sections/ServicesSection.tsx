import React from 'react';
import { SITE_CONFIG, ServiceItem } from '../../data/config';
import { ServiceDiagram } from '../graphics/ServiceDiagram';

interface ServicesSectionProps {
  onSelectServiceModal: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceModal }) => {
  return (
    <section id="services" className="py-24 md:py-32 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A38B70]" />
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#777269]">
              ENGINEERING PRACTICES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#272722] leading-[1.12]">
            From First Concept to Reliable Software.
          </h2>

          <p className="text-base sm:text-lg text-[#777269] leading-relaxed">
            Our multi-disciplinary practices cover the complete digital lifecycle, ensuring architectural precision from initial requirements to continuous production releases.
          </p>
        </div>

        {/* 8 Distinctive Service Cards in Bento-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.services.map((svc) => (
            <div
              key={svc.id}
              onClick={() => onSelectServiceModal(svc)}
              className="bg-[#FFFCF7] rounded-2xl border border-[#E4DACE] p-6 flex flex-col justify-between hover:border-[#A38B70] hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <div className="space-y-4">
                {/* Top strip with number & diagram */}
                <div className="flex items-center justify-between pb-3 border-b border-[#F1E9DC]">
                  <span className="text-xs font-mono font-bold text-[#A38B70]">
                    PRACTICE {svc.number}
                  </span>
                  <span className="text-[10px] font-mono text-[#777269] uppercase tracking-wider group-hover:text-[#272722] transition-colors">
                    SPECIFICATION →
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-editorial font-bold text-[#272722] group-hover:text-[#A38B70] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs font-mono text-[#777269] mt-1">{svc.tagline}</p>
                </div>

                {/* Description */}
                <p className="text-xs text-[#777269] leading-relaxed">
                  {svc.description}
                </p>

                {/* Visual Architecture Diagram */}
                <div className="pt-2">
                  <ServiceDiagram type={svc.diagramType} />
                </div>
              </div>

              {/* Bottom tech badges */}
              <div className="pt-4 mt-4 border-t border-[#F1E9DC] flex flex-wrap gap-1">
                {svc.techFocus.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F8F5EF] text-[#777269] border border-[#E4DACE]/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
