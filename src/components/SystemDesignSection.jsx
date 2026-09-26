import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Terminal, ArrowRight, ShieldCheck, Sparkles, Network } from 'lucide-react'
import SystemArchitectureCanvas from './three/SystemArchitectureCanvas'

const NODE_DETAILS = {
  frontend: {
    title: 'Client Layer // React 19 & Monaco',
    badge: 'FRONTEND RUNTIME',
    desc: 'Decoupled presentation layer utilizing Monaco Editor and Yjs bindings. Offloads all heavy calculations to background microservices so typing never lags.',
    metrics: 'Zero Main-Thread Freezes · 60 FPS Layouts',
  },
  backend: {
    title: 'Gateway Layer // Node.js & Express',
    badge: 'API GATEWAY',
    desc: 'High-throughput async gateway enforcing JWT RBAC middleware, connection lifecycle routing, and multi-tenant security headers.',
    metrics: 'Sub-30ms Response Latency · 100% Stateless Tokens',
  },
  realtime: {
    title: 'Distributed State // Yjs CRDT & WebSockets',
    badge: 'MULTIPLAYER FABRIC',
    desc: 'Mathematical conflict-free state convergence. Syncs multi-user character inserts and live cursor coordinates over compact binary WebSockets.',
    metrics: '< 45ms P99 Sync Latency · Zero Resolution Conflicts',
  },
  ai: {
    title: 'Agentic Core // FastAPI & ChromaDB',
    badge: 'AI MICROSERVICE',
    desc: 'Autonomous 3-agent orchestration (Planner, Coder, Auditor) combining OpenAI, Claude, Gemini, and local Ollama with code vector grounding.',
    metrics: 'Streaming Async Generators · Local Vector Indexes',
  },
  database: {
    title: 'Persistence Tier // PostgreSQL & MongoDB',
    badge: 'DATA LAYER',
    desc: 'Normalized 3NF relational modeling with recursive hierarchy trees alongside spatial GeoJSON collections for map queries.',
    metrics: 'Query-Level Isolation · Zero Cross-Tenant Leaks',
  },
  cloud: {
    title: 'Container Runtime // Docker & Turborepo',
    badge: 'SANDBOX INFRA',
    desc: 'Ephemeral Docker execution environments for user code execution with automated Git commit intelligence and monorepo isolation.',
    metrics: 'Strict Resource Quotas · Independent Service Deploys',
  },
}

export default function SystemDesignSection() {
  const [activeNode, setActiveNode] = useState({ id: 'realtime' })

  const currentDetails = NODE_DETAILS[activeNode?.id] || NODE_DETAILS.realtime

  return (
    <section id="systems" className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16 border-t border-white/[0.07] bg-surface arch-grid">
      <div className="max-w-7xl mx-auto">
        {/* Section Top Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-cyan tracking-[0.25em] uppercase mb-4">
          <Network size={14} />
          <span>SYSTEM ARCHITECTURE // INTERACTIVE CANVAS</span>
        </div>

        {/* Editorial Signature Headline */}
        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-paper uppercase leading-[0.95]">
            I DON'T JUST WRITE CODE.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-paper to-violet-bright">
              I DESIGN SYSTEMS.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted max-w-2xl font-sans leading-relaxed">
            Real software doesn't fail at syntax — it fails at architecture. Here is how I decompose complex distributed problems into resilient, decoupled modules.
          </p>
        </div>

        {/* 3D System Interactive Core Visualizer & Dynamic Telemetry Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center liquid-glass p-6 sm:p-10 rounded-3xl border-white/[0.08] relative overflow-hidden">
          {/* 3D Three.js Interactive Canvas (Left 7 Columns) */}
          <div className="lg:col-span-7 relative">
            <SystemArchitectureCanvas
              activeNode={activeNode}
              onSelectNode={(node) => setActiveNode(node || { id: 'realtime' })}
            />

            {/* Instruction tooltip */}
            <div className="absolute bottom-2 left-2 flex items-center gap-2 font-mono text-[10px] text-muted p-2 rounded-xl bg-void/85 border border-white/[0.06] pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              <span>ORBIT / CLICK OR HOVER SATELLITE NODES</span>
            </div>
          </div>

          {/* Right Column: Architectural Deep Dive for Selected Node (Right 5 Columns) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode?.id || 'default'}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-2xl bg-void/90 border border-white/[0.08] relative space-y-5"
              >
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <span className="px-3 py-1 rounded-full font-mono text-[10px] font-semibold tracking-wider text-cyan bg-cyan/10 border border-cyan/30 uppercase">
                    {currentDetails.badge}
                  </span>
                  <span className="font-mono text-[10px] text-muted">
                    STATUS // ACTIVE
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-paper mb-2">
                    {currentDetails.title}
                  </h3>
                  <p className="text-muted text-sm font-sans leading-relaxed">
                    {currentDetails.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  <div className="text-[10px] font-mono text-muted uppercase tracking-wider">
                    KEY BENCHMARK / SLA
                  </div>
                  <div className="font-mono text-xs font-semibold text-cyan">
                    {currentDetails.metrics}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-muted">
                  <ShieldCheck size={14} className="text-cyan" />
                  <span>Integrated in DevSync AI &amp; Enterprise Platforms</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
