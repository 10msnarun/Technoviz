import React from 'react';

export const HeroEcosystemGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none select-none">
      {/* Background architectural aura */}
      <div className="absolute -top-12 -right-12 w-96 h-96 bg-[#F1E9DC]/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-80 h-80 bg-[#D8C4A8]/30 rounded-full blur-2xl pointer-events-none" />

      {/* Main Composite Graphic Frame */}
      <div className="relative p-6 sm:p-8 rounded-2xl bg-[#FFFCF7] border border-[#E4DACE] shadow-[0_20px_50px_-15px_rgba(39,39,34,0.08)] overflow-hidden">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

        {/* Top bar info */}
        <div className="relative flex items-center justify-between pb-4 mb-5 border-b border-[#E4DACE]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D8C4A8]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E4DACE]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E4DACE]" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#777269] ml-2">
              ECOSYSTEM // ARCHITECTURE
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#777269]">
            <span>NODE 01</span>
            <span className="text-[#A38B70]">→</span>
            <span>PROD V2.4</span>
          </div>
        </div>

        {/* Floating Web Application Window */}
        <div className="relative z-10 bg-white rounded-xl border border-[#E4DACE] shadow-md p-4 mb-4 transition-transform duration-300 hover:translate-y-[-2px]">
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F1E9DC]">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#E4DACE]" />
              <div className="w-2 h-2 rounded-full bg-[#E4DACE]" />
              <div className="w-2 h-2 rounded-full bg-[#E4DACE]" />
              <div className="h-4 px-2.5 ml-2 rounded bg-[#F8F5EF] text-[10px] font-mono text-[#777269] flex items-center">
                console.technovinz.internal/telemetry
              </div>
            </div>
            <span className="text-[10px] font-mono text-[#A38B70] tracking-wide">
              LATENCY 12MS
            </span>
          </div>

          {/* Interactive Metric Cards inside mockup */}
          <div className="grid grid-cols-3 gap-2.5 mb-3">
            <div className="p-2.5 rounded-lg bg-[#F8F5EF] border border-[#E4DACE]/60">
              <div className="text-[10px] text-[#777269] font-medium">Throughput</div>
              <div className="text-sm sm:text-base font-semibold text-[#272722] font-mono mt-0.5">
                98.4<span className="text-[10px] text-[#777269] ml-0.5">req/s</span>
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#F8F5EF] border border-[#E4DACE]/60">
              <div className="text-[10px] text-[#777269] font-medium">Health Check</div>
              <div className="text-sm sm:text-base font-semibold text-[#272722] font-mono mt-0.5">
                100%<span className="text-[10px] text-[#A38B70] ml-0.5">pass</span>
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#F8F5EF] border border-[#E4DACE]/60">
              <div className="text-[10px] text-[#777269] font-medium">Active Nodes</div>
              <div className="text-sm sm:text-base font-semibold text-[#272722] font-mono mt-0.5">
                12<span className="text-[10px] text-[#777269] ml-0.5">instances</span>
              </div>
            </div>
          </div>

          {/* Mini Architectural Workflow Flowline */}
          <div className="p-3 rounded-lg bg-[#F1E9DC]/40 border border-[#E4DACE] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#282923] text-[#F8F5EF] flex items-center justify-center font-mono text-[10px] font-bold">
                API
              </div>
              <div>
                <div className="text-[11px] font-medium text-[#272722]">Event Gateway</div>
                <div className="text-[10px] text-[#777269]">Stateless router</div>
              </div>
            </div>

            {/* Connection SVG with animated stroke */}
            <svg className="w-16 h-4 text-[#A38B70]" viewBox="0 0 64 16">
              <line
                x1="0"
                y1="8"
                x2="60"
                y2="8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <polygon points="60,5 64,8 60,11" fill="currentColor" />
            </svg>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#D8C4A8] text-[#272722] flex items-center justify-center font-mono text-[10px] font-bold">
                DB
              </div>
              <div>
                <div className="text-[11px] font-medium text-[#272722]">PostgreSQL Cluster</div>
                <div className="text-[10px] text-[#777269]">Primary + Read Replica</div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlapping Lower Split: Mobile Mockup + Abstract Architectural Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
          {/* Floating Mobile Device Mockup */}
          <div className="sm:col-span-6 bg-[#282923] text-[#F8F5EF] rounded-2xl p-3.5 border border-[#444] shadow-lg relative">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
              <div className="text-[9px] font-mono text-[#D8C4A8] tracking-widest">MOBILE CLIENT</div>
              <div className="w-10 h-1.5 rounded-full bg-white/20" />
            </div>

            <div className="space-y-2">
              <div className="p-2 rounded bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-medium text-white">Biometric Identity</div>
                  <div className="text-[9px] text-[#F8F5EF]/60">Secure key enclave</div>
                </div>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#D8C4A8]/20 text-[#D8C4A8]">
                  ACTIVE
                </span>
              </div>

              <div className="p-2 rounded bg-white/5 border border-white/10">
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-[#F8F5EF]/80">Data Cache Sync</span>
                  <span className="font-mono text-[#D8C4A8]">99.8%</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[99.8%] h-full bg-[#D8C4A8]" />
                </div>
              </div>
            </div>
          </div>

          {/* Layered Architectural Diagram Box */}
          <div className="sm:col-span-6 p-3.5 rounded-xl bg-[#F8F5EF] border border-[#E4DACE] space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#777269] flex items-center justify-between">
              <span>CLOUD FABRIC</span>
              <span className="text-[#A38B70]">AWS / AZURE</span>
            </div>

            {/* Architecture stack bars */}
            <div className="space-y-1.5 text-xs">
              <div className="p-1.5 rounded bg-white border border-[#E4DACE] flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#272722]">Container Orchestration</span>
                <span className="text-[10px] font-mono text-[#777269]">Docker / ECS</span>
              </div>
              <div className="p-1.5 rounded bg-white border border-[#E4DACE] flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#272722]">Automated CI/CD Gates</span>
                <span className="text-[10px] font-mono text-[#777269]">Actions / Zero-DT</span>
              </div>
              <div className="p-1.5 rounded bg-white border border-[#E4DACE] flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#272722]">Semantic AI Workflows</span>
                <span className="text-[10px] font-mono text-[#777269]">Strict Schemas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative corner coordinates */}
        <div className="mt-4 pt-3 border-t border-[#E4DACE]/70 flex items-center justify-between text-[10px] font-mono text-[#777269]">
          <span>FIG 01 // CONNECTED DIGITAL ECOSYSTEM</span>
          <span>SYSTEM DISCIPLINE: 100%</span>
        </div>
      </div>
    </div>
  );
};
