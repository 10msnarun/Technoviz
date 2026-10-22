import React, { useState } from 'react';

interface ProjectMockupProps {
  type: 'ecommerce' | 'operations' | 'mobile';
  name: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type, name }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'architecture'>('preview');

  if (type === 'ecommerce') {
    return (
      <div className="w-full bg-[#FFFCF7] rounded-xl border border-[#E4DACE] shadow-sm overflow-hidden flex flex-col">
        {/* Browser Top Chrome */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#F1E9DC]/60 border-b border-[#E4DACE]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E4DACE]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E4DACE]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E4DACE]" />
            <span className="ml-3 text-[11px] font-mono text-[#777269] bg-white/70 px-2.5 py-0.5 rounded border border-[#E4DACE]">
              meridian-commerce.preview/store
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('preview')}
              className={`text-xs px-2.5 py-1 rounded font-medium transition-colors ${
                activeTab === 'preview'
                  ? 'bg-[#282923] text-[#F8F5EF]'
                  : 'text-[#777269] hover:text-[#272722]'
              }`}
            >
              Storefront UI
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`text-xs px-2.5 py-1 rounded font-medium transition-colors ${
                activeTab === 'architecture'
                  ? 'bg-[#282923] text-[#F8F5EF]'
                  : 'text-[#777269] hover:text-[#272722]'
              }`}
            >
              Inventory Architecture
            </button>
          </div>
        </div>

        {/* Content Area */}
        {activeTab === 'preview' ? (
          <div className="p-5 sm:p-6 bg-white space-y-4">
            {/* Header strip */}
            <div className="flex items-center justify-between pb-3 border-b border-[#F1E9DC]">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#A38B70] uppercase">
                  MERIDIAN ATELIER
                </span>
                <h4 className="text-sm font-semibold text-[#272722]">Architectural Goods & Vessels</h4>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#777269]">
                <span>CURRENCY: USD</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8C4A8]" />
                <span className="px-2 py-0.5 rounded bg-[#F8F5EF] border border-[#E4DACE]">
                  CART (02)
                </span>
              </div>
            </div>

            {/* Product Grid Mockup */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: 'Brutalist Travertine Plinth', sku: 'SKU-091', stock: 'In Stock (4)', price: '$420' },
                { title: 'Cast Bronze Vessel No. 4', sku: 'SKU-108', stock: 'Low Stock (2)', price: '$680' },
                { title: 'Linear Ceramic Sconce', sku: 'SKU-234', stock: 'In Stock (12)', price: '$310' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#F8F5EF] border border-[#E4DACE] hover:border-[#A38B70] transition-colors"
                >
                  <div className="h-24 rounded bg-gradient-to-br from-[#F1E9DC] to-[#E4DACE]/70 flex items-center justify-center mb-2.5 relative overflow-hidden">
                    <svg className="w-10 h-10 text-[#A38B70]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span className="absolute top-1.5 right-1.5 text-[9px] font-mono bg-white/80 px-1 rounded text-[#777269]">
                      EDGE CACHED
                    </span>
                  </div>
                  <div className="text-xs font-medium text-[#272722] truncate">{item.title}</div>
                  <div className="flex items-center justify-between mt-1 text-[11px] text-[#777269]">
                    <span className="font-mono">{item.sku}</span>
                    <span className="font-semibold text-[#272722]">{item.price}</span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-[#E4DACE]/60 flex items-center justify-between text-[10px]">
                    <span className="text-[#A38B70]">{item.stock}</span>
                    <span className="font-mono text-[#272722]">Instant Reserve →</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Operational Metrics Ribbon */}
            <div className="p-3 rounded-lg bg-[#F1E9DC]/40 border border-[#E4DACE] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-[#777269]">ORDER PROCESSING:</span>
                <span className="font-semibold text-[#272722]">Atomic Webhook Isolation</span>
              </div>
              <div className="flex items-center gap-4 font-mono text-[11px] text-[#777269]">
                <span>TTFB: 142ms</span>
                <span>AVAILABILITY: 99.98%</span>
                <span>CACHE HIT: 94.6%</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-5 sm:p-6 bg-[#282923] text-[#F8F5EF] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-[#D8C4A8]">ARCHITECTURE // RESERVATION WORKFLOW</span>
              <span className="text-xs font-mono text-white/50">ZERO-COLLISION CONCURRENCY</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded bg-white/5 border border-white/10">
                <div className="text-[10px] font-mono text-[#D8C4A8] mb-1">STEP 1: BROWSE</div>
                <div className="text-xs font-medium text-white mb-1">Edge CDN & Static ISR</div>
                <p className="text-[11px] text-white/70">
                  Catalog rendered at Edge with zero database load during traffic spikes.
                </p>
              </div>
              <div className="p-3 rounded bg-white/5 border border-white/10">
                <div className="text-[10px] font-mono text-[#D8C4A8] mb-1">STEP 2: CHECKOUT</div>
                <div className="text-xs font-medium text-white mb-1">Redis Distributed Lock</div>
                <p className="text-[11px] text-white/70">
                  Guarantees SKU inventory lock for 8 minutes to prevent double-booking.
                </p>
              </div>
              <div className="p-3 rounded bg-white/5 border border-white/10">
                <div className="text-[10px] font-mono text-[#D8C4A8] mb-1">STEP 3: SETTLE</div>
                <div className="text-xs font-medium text-white mb-1">Transactional Postgres</div>
                <p className="text-[11px] text-white/70">
                  Payment confirmation webhook commits order & triggers fulfillment dispatch.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (type === 'operations') {
    return (
      <div className="w-full bg-[#FFFCF7] rounded-xl border border-[#E4DACE] shadow-sm overflow-hidden flex flex-col">
        {/* Window Top Chrome */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#F1E9DC]/60 border-b border-[#E4DACE]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E4DACE]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E4DACE]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E4DACE]" />
            <span className="ml-3 text-[11px] font-mono text-[#777269] bg-white/70 px-2.5 py-0.5 rounded border border-[#E4DACE]">
              atlas-ops.internal/control-center
            </span>
          </div>
          <span className="text-xs font-mono text-[#A38B70]">ROLE: EXECUTIVE DIR</span>
        </div>

        <div className="p-5 sm:p-6 bg-white space-y-4">
          {/* Top Bar with KPI dials */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Active Workstreams', val: '28 Active', sub: '94% on track' },
              { label: 'Cycle Velocity', val: '3.8 Days', sub: '-14% reduction' },
              { label: 'Cross-Team Sync', val: '99.2%', sub: 'Zero audit gaps' },
              { label: 'Operational Health', val: 'Optimal', sub: 'No blocked tasks' },
            ].map((kpi, i) => (
              <div key={i} className="p-3 rounded-lg bg-[#F8F5EF] border border-[#E4DACE]">
                <div className="text-[10px] font-mono text-[#777269] uppercase">{kpi.label}</div>
                <div className="text-base font-semibold text-[#272722] mt-0.5">{kpi.val}</div>
                <div className="text-[10px] text-[#A38B70] mt-0.5">{kpi.sub}</div>
              </div>
            ))}
          </div>

          {/* Workflow Activity Split */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            {/* Visual Process Timeline */}
            <div className="sm:col-span-7 p-3.5 rounded-lg bg-[#F8F5EF] border border-[#E4DACE]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-[#272722]">Throughput Pipeline</span>
                <span className="text-[10px] font-mono text-[#777269]">LAST 14 DAYS</span>
              </div>
              <div className="space-y-2">
                {[
                  { name: 'Regional Compliance Verification', pct: 92, state: 'In Review' },
                  { name: 'Supply Logistics Reconciliation', pct: 78, state: 'Processing' },
                  { name: 'Cross-Domain Security Sign-Off', pct: 100, state: 'Completed' },
                ].map((row, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#272722] font-medium">{row.name}</span>
                      <span className="font-mono text-[#777269] text-[11px]">{row.state} ({row.pct}%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#E4DACE] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#A38B70] rounded-full transition-all"
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Event Feed */}
            <div className="sm:col-span-5 p-3.5 rounded-lg bg-[#F8F5EF] border border-[#E4DACE]">
              <div className="text-xs font-semibold text-[#272722] mb-3">Audit Activity Log</div>
              <div className="space-y-2 text-xs">
                <div className="p-2 rounded bg-white border border-[#E4DACE]/70">
                  <div className="flex justify-between text-[10px] text-[#777269] font-mono">
                    <span>OPS-SYNC</span>
                    <span>12m ago</span>
                  </div>
                  <div className="text-[#272722] font-medium mt-0.5">Automated batch dispatch OK</div>
                </div>
                <div className="p-2 rounded bg-white border border-[#E4DACE]/70">
                  <div className="flex justify-between text-[10px] text-[#777269] font-mono">
                    <span>RBAC-ALERT</span>
                    <span>48m ago</span>
                  </div>
                  <div className="text-[#272722] font-medium mt-0.5">Role escalation verified: Lead</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mobile Concept Mockup (Luma Connect)
  return (
    <div className="w-full bg-[#FFFCF7] rounded-xl border border-[#E4DACE] shadow-sm p-6 flex flex-col items-center">
      <div className="w-full flex items-center justify-between pb-3 mb-4 border-b border-[#E4DACE]">
        <span className="text-xs font-mono text-[#A38B70] uppercase">
          COORDINATED DEVICE ARCHITECTURE
        </span>
        <span className="text-xs font-mono text-[#777269]">TOUCH-FIRST ERGONOMICS</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
        {/* Device 1: Account & Identity */}
        <div className="w-56 bg-[#282923] text-[#F8F5EF] rounded-3xl p-3 border-2 border-[#444] shadow-xl">
          <div className="flex justify-between items-center mb-3 px-2 pt-1 text-[9px] font-mono text-[#D8C4A8]">
            <span>9:41</span>
            <div className="w-12 h-2 rounded-full bg-black/40" />
            <span>5G 100%</span>
          </div>

          <div className="p-3 bg-white/5 rounded-2xl border border-white/10 mb-2.5">
            <div className="text-[10px] text-[#D8C4A8] font-mono uppercase">LUMA ID</div>
            <div className="text-sm font-semibold text-white mt-0.5">Julian Vance</div>
            <div className="text-[10px] text-[#F8F5EF]/60">Enterprise Member Tier</div>
          </div>

          <div className="space-y-1.5 mb-3">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
              <span className="text-[11px] text-white">Biometric Vault</span>
              <span className="text-[9px] font-mono text-[#D8C4A8]">VERIFIED</span>
            </div>
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
              <span className="text-[11px] text-white">Service Requests</span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white">03 ACTIVE</span>
            </div>
          </div>

          <div className="w-16 h-1 rounded-full bg-white/30 mx-auto mt-2" />
        </div>

        {/* Device 2: Service Interaction & Offline Sync */}
        <div className="w-56 bg-[#F8F5EF] text-[#272722] rounded-3xl p-3 border-2 border-[#E4DACE] shadow-lg">
          <div className="flex justify-between items-center mb-3 px-2 pt-1 text-[9px] font-mono text-[#777269]">
            <span>9:41</span>
            <div className="w-12 h-2 rounded-full bg-[#E4DACE]" />
            <span>OFFLINE READY</span>
          </div>

          <div className="p-3 bg-white rounded-2xl border border-[#E4DACE] mb-2.5">
            <div className="text-[10px] text-[#A38B70] font-mono uppercase">SERVICE DISPATCH</div>
            <div className="text-xs font-semibold text-[#272722] mt-0.5">Consultation Scheduled</div>
            <div className="text-[10px] text-[#777269]">Tomorrow · 10:00 AM EST</div>
          </div>

          <div className="p-2.5 rounded-xl bg-[#F1E9DC] border border-[#E4DACE] space-y-1 mb-2">
            <div className="flex justify-between text-[10px]">
              <span className="font-medium text-[#272722]">Local SQLite Delta</span>
              <span className="font-mono text-[#A38B70]">SYNCED</span>
            </div>
            <div className="w-full h-1 bg-[#E4DACE] rounded-full overflow-hidden">
              <div className="w-full h-full bg-[#A38B70]" />
            </div>
          </div>

          <div className="w-16 h-1 rounded-full bg-[#272722]/30 mx-auto mt-3" />
        </div>
      </div>
    </div>
  );
};
