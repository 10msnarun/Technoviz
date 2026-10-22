import React from 'react';

interface ServiceDiagramProps {
  type: 'pipeline' | 'layers' | 'grid' | 'network';
}

export const ServiceDiagram: React.FC<ServiceDiagramProps> = ({ type }) => {
  if (type === 'pipeline') {
    return (
      <div className="w-full h-24 rounded-lg bg-[#F8F5EF] border border-[#E4DACE]/70 p-3 flex items-center justify-between">
        <div className="flex flex-col items-center">
          <div className="w-7 h-7 rounded-md bg-[#282923] text-[#F8F5EF] flex items-center justify-center font-mono text-[10px]">
            IN
          </div>
          <span className="text-[9px] font-mono text-[#777269] mt-1">Payload</span>
        </div>
        <div className="flex-1 mx-2 relative">
          <div className="h-[2px] bg-[#E4DACE] w-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-white text-[9px] font-mono text-[#A38B70] border border-[#E4DACE]">
            Schema Validate
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-7 h-7 rounded-md bg-[#D8C4A8] text-[#272722] flex items-center justify-center font-mono text-[10px]">
            API
          </div>
          <span className="text-[9px] font-mono text-[#777269] mt-1">Transform</span>
        </div>
        <div className="flex-1 mx-2 relative">
          <div className="h-[2px] bg-[#E4DACE] w-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-white text-[9px] font-mono text-[#A38B70] border border-[#E4DACE]">
            Dispatch
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-7 h-7 rounded-md bg-[#A38B70] text-[#F8F5EF] flex items-center justify-center font-mono text-[10px]">
            OUT
          </div>
          <span className="text-[9px] font-mono text-[#777269] mt-1">Response</span>
        </div>
      </div>
    );
  }

  if (type === 'layers') {
    return (
      <div className="w-full h-24 rounded-lg bg-[#F8F5EF] border border-[#E4DACE]/70 p-2.5 flex flex-col justify-between">
        <div className="p-1.5 rounded bg-white border border-[#E4DACE] flex justify-between items-center text-[10px]">
          <span className="font-semibold text-[#272722]">Presentation Tier</span>
          <span className="font-mono text-[#777269]">Client React / SSR</span>
        </div>
        <div className="p-1.5 rounded bg-[#F1E9DC]/60 border border-[#E4DACE] flex justify-between items-center text-[10px]">
          <span className="font-semibold text-[#272722]">Domain Business Rules</span>
          <span className="font-mono text-[#A38B70]">Stateless Core</span>
        </div>
        <div className="p-1.5 rounded bg-white border border-[#E4DACE] flex justify-between items-center text-[10px]">
          <span className="font-semibold text-[#272722]">Data & Persistence</span>
          <span className="font-mono text-[#777269]">Postgres / Redis</span>
        </div>
      </div>
    );
  }

  if (type === 'network') {
    return (
      <div className="w-full h-24 rounded-lg bg-[#F8F5EF] border border-[#E4DACE]/70 p-3 relative flex items-center justify-center overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 200 60">
          {/* Connecting lines */}
          <line x1="30" y1="30" x2="100" y2="15" stroke="#E4DACE" strokeWidth="1.5" />
          <line x1="30" y1="30" x2="100" y2="45" stroke="#E4DACE" strokeWidth="1.5" />
          <line x1="100" y1="15" x2="170" y2="30" stroke="#E4DACE" strokeWidth="1.5" />
          <line x1="100" y1="45" x2="170" y2="30" stroke="#E4DACE" strokeWidth="1.5" />
          <line x1="100" y1="15" x2="100" y2="45" stroke="#D8C4A8" strokeWidth="1" strokeDasharray="3 2" />

          {/* Node 1 */}
          <circle cx="30" cy="30" r="10" fill="#282923" />
          <text x="30" y="33" textAnchor="middle" fill="#F8F5EF" fontSize="8" fontFamily="monospace">
            SRC
          </text>

          {/* Node 2 & 3 */}
          <circle cx="100" cy="15" r="9" fill="#D8C4A8" />
          <text x="100" y="18" textAnchor="middle" fill="#272722" fontSize="7" fontFamily="monospace">
            MOD
          </text>
          <circle cx="100" cy="45" r="9" fill="#F1E9DC" stroke="#A38B70" strokeWidth="1" />
          <text x="100" y="48" textAnchor="middle" fill="#272722" fontSize="7" fontFamily="monospace">
            VEC
          </text>

          {/* Node 4 */}
          <circle cx="170" cy="30" r="10" fill="#A38B70" />
          <text x="170" y="33" textAnchor="middle" fill="#F8F5EF" fontSize="8" fontFamily="monospace">
            SINK
          </text>
        </svg>
      </div>
    );
  }

  // Grid type
  return (
    <div className="w-full h-24 rounded-lg bg-[#F8F5EF] border border-[#E4DACE]/70 p-2.5 grid grid-cols-3 gap-2">
      <div className="rounded bg-white border border-[#E4DACE] p-1.5 flex flex-col justify-between">
        <span className="text-[9px] font-mono text-[#777269]">CACHE</span>
        <span className="text-[11px] font-bold text-[#272722] font-mono">1.2ms</span>
      </div>
      <div className="rounded bg-white border border-[#E4DACE] p-1.5 flex flex-col justify-between">
        <span className="text-[9px] font-mono text-[#777269]">P99</span>
        <span className="text-[11px] font-bold text-[#272722] font-mono">38ms</span>
      </div>
      <div className="rounded bg-white border border-[#E4DACE] p-1.5 flex flex-col justify-between">
        <span className="text-[9px] font-mono text-[#777269]">CPU</span>
        <span className="text-[11px] font-bold text-[#A38B70] font-mono">18%</span>
      </div>
    </div>
  );
};
