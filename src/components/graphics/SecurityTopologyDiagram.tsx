import React, { useState } from 'react';
import { SITE_CONFIG } from '../../data/config';

export const SecurityTopologyDiagram: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState<number>(0);
  const principles = SITE_CONFIG.engineeringPrinciples;
  const current = principles[activePrinciple];

  return (
    <div className="w-full bg-[#1F201B] rounded-2xl border border-white/10 p-6 sm:p-8 text-[#F8F5EF] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-60 pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D8C4A8]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#D8C4A8]">
              SECURITY & RELIABILITY TOPOLOGY
            </span>
          </div>
          <h4 className="text-lg font-serif font-medium text-white mt-1">
            Engineered Validation Boundaries
          </h4>
        </div>
        <div className="text-xs font-mono text-white/50">
          STATUS: AUDITED // STRICT ENCLAVE
        </div>
      </div>

      {/* Principle Tabs */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {principles.map((p, idx) => (
          <button
            key={p.number}
            onClick={() => setActivePrinciple(idx)}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
              activePrinciple === idx
                ? 'bg-white/10 border-[#D8C4A8] text-white shadow-sm'
                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/8 hover:text-white'
            }`}
          >
            <div className="text-[10px] font-mono text-[#D8C4A8] mb-1">PRINCIPLE {p.number}</div>
            <div className="text-xs font-medium line-clamp-1">{p.title}</div>
          </button>
        ))}
      </div>

      {/* Active Principle Breakdown */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8C4A8]" />
            <span className="text-xs font-mono text-[#D8C4A8] uppercase tracking-wider">
              {current.summary}
            </span>
          </div>
          <h3 className="text-2xl font-serif text-white">{current.title}</h3>
          <p className="text-sm text-white/80 leading-relaxed">{current.details}</p>

          <div className="space-y-2 pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-white/50">
              VERIFIED ARCHITECTURAL CHECKS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {current.checks.map((chk, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2 text-xs text-white"
                >
                  <span className="text-[#D8C4A8] font-mono text-xs">✓</span>
                  <span>{chk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blueprint Visual Representation */}
        <div className="lg:col-span-5 bg-black/40 rounded-xl p-5 border border-white/10 space-y-3 font-mono text-xs">
          <div className="flex justify-between pb-2 border-b border-white/10 text-[11px] text-[#D8C4A8]">
            <span>SYSTEM ENCLAVE</span>
            <span>PORT 443 / TLS 1.3</span>
          </div>

          <div className="space-y-2 text-[11px]">
            <div className="p-2 rounded bg-white/5 border border-white/10 flex justify-between items-center">
              <span className="text-white/80">Edge WAF / Rate Limiter</span>
              <span className="text-[#D8C4A8]">ENFORCED</span>
            </div>
            <div className="p-2 rounded bg-white/5 border border-white/10 flex justify-between items-center">
              <span className="text-white/80">Container Read-Only FS</span>
              <span className="text-[#D8C4A8]">ACTIVE</span>
            </div>
            <div className="p-2 rounded bg-white/5 border border-white/10 flex justify-between items-center">
              <span className="text-white/80">Database Connection Pool</span>
              <span className="text-white/60">SSL STRICT</span>
            </div>
            <div className="p-2 rounded bg-white/5 border border-white/10 flex justify-between items-center">
              <span className="text-white/80">Automated Health Probe</span>
              <span className="text-[#D8C4A8]">/healthz 200 OK</span>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 text-[10px] text-white/50 flex justify-between">
            <span>OBSERVABILITY: 24/7 PROBING</span>
            <span>ZERO ANONYMOUS RPC</span>
          </div>
        </div>
      </div>
    </div>
  );
};
