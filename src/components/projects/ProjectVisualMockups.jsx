import React, { useState, useEffect } from 'react'
import { Terminal, Users, Cpu, Activity, MapPin, Database, Sparkles, CheckCircle2, Shield, Radio } from 'lucide-react'

// 1. DevSync AI Visual: Code Editor + Multiplayer Cursors + 3-Agent AI Pipeline
export function DevSyncVisual() {
  const [activeTab, setActiveTab] = useState('editor')

  return (
    <div className="w-full h-full rounded-2xl bg-void/90 border border-white/[0.1] overflow-hidden flex flex-col font-mono text-xs select-none shadow-2xl">
      {/* Top Window Bar */}
      <div className="bg-[#111116] px-4 py-2.5 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="text-[10px] text-muted ml-2">devsync-ai // monorepo</span>
        </div>
        <div className="flex items-center gap-3 text-[10px]">
          <span className="flex items-center gap-1.5 text-cyan">
            <Radio size={10} className="animate-pulse" />
            <span>Yjs CRDT SYNC</span>
          </span>
          <span className="px-2 py-0.5 rounded bg-white/[0.06] text-primary">2 PEERS</span>
        </div>
      </div>

      {/* Editor Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-4 font-mono text-[11px] leading-relaxed">
        <div className="space-y-1">
          <div className="text-muted">// Real-time multiplayer synchronization pipeline</div>
          <div className="text-secondary">
            <span className="text-cyan">import</span> * as Y <span className="text-cyan">from</span> <span className="text-emerald-400">'yjs'</span>
          </div>
          <div className="text-secondary">
            <span className="text-cyan">const</span> ydoc = <span className="text-purple-400">new</span> Y.Doc()
          </div>
          <div className="text-secondary">
            <span className="text-cyan">const</span> yText = ydoc.getText(<span className="text-emerald-400">'monaco-buffer'</span>)
          </div>

          {/* Simulated multiplayer cursor */}
          <div className="relative inline-block mt-1 pl-1 pr-1 bg-cyan/20 border-l-2 border-cyan text-white text-[10px]">
            <span>ydoc.observe((event) =&gt; syncPeers(event))</span>
            <span className="absolute -top-4 -right-1 px-1.5 py-0.5 rounded text-[8px] bg-cyan text-black font-bold">
              Yash (Host)
            </span>
          </div>
        </div>

        {/* 3-Agent AI Pipeline Bar */}
        <div className="pt-3 border-t border-white/[0.08] grid grid-cols-3 gap-2 text-center text-[10px]">
          <div className="p-2 rounded-lg bg-white/[0.02] border border-cyan/30 text-cyan">
            <div className="text-[9px] text-muted">AGENT 01</div>
            <div className="font-semibold">PLANNER</div>
            <div className="text-[8px] text-emerald-400">● IDLE</div>
          </div>
          <div className="p-2 rounded-lg bg-cyan/10 border border-cyan text-white">
            <div className="text-[9px] text-cyan">AGENT 02</div>
            <div className="font-semibold">CODER</div>
            <div className="text-[8px] text-cyan animate-pulse">● STREAMING</div>
          </div>
          <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] text-secondary">
            <div className="text-[9px] text-muted">AGENT 03</div>
            <div className="font-semibold">AUDITOR</div>
            <div className="text-[8px] text-muted">QUEUED</div>
          </div>
        </div>

        {/* Docker Terminal Snippet */}
        <div className="p-2.5 rounded-lg bg-black border border-white/[0.06] text-[10px] text-muted flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal size={11} className="text-emerald-400" />
            <span className="text-emerald-400">container:~/workspace$</span>
            <span className="text-white">git commit -m "feat: real-time yjs sync"</span>
          </div>
          <span className="text-cyan text-[9px]">DOCKER ISOLATED</span>
        </div>
      </div>
    </div>
  )
}

// 2. Performance Evaluation System Visual: Multi-Tenant RBAC & 3NF Hierarchies
export function PerformanceEvalVisual() {
  return (
    <div className="w-full h-full rounded-2xl bg-void/90 border border-white/[0.1] overflow-hidden flex flex-col font-mono text-xs select-none shadow-2xl">
      <div className="bg-[#111116] px-4 py-2.5 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield size={13} className="text-cyan" />
          <span className="text-[10px] text-primary font-semibold">RBAC TENANT GATEWAY</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-cyan/10 text-cyan text-[9px] border border-cyan/30">
          QUERY ISOLATION: ACTIVE
        </span>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
        {/* Hierarchy Tree Visualization */}
        <div className="space-y-2">
          <div className="text-[10px] text-muted uppercase tracking-wider">
            Self-Referencing manager_id Hierarchy (3NF)
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
            <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
              <div className="text-muted text-[8px]">TENANT A</div>
              <div className="text-white font-semibold">HR Executive</div>
              <div className="text-cyan text-[8px]">RBAC: ADMIN</div>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
              <div className="text-muted text-[8px]">MANAGER_ID: 104</div>
              <div className="text-white font-semibold">Team Lead</div>
              <div className="text-emerald-400 text-[8px]">RBAC: MANAGER</div>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
              <div className="text-muted text-[8px]">EMPLOYEE</div>
              <div className="text-white font-semibold">Engineer</div>
              <div className="text-purple-400 text-[8px]">RBAC: PEER</div>
            </div>
          </div>
        </div>

        {/* 5-Dimension Performance Review Vectors */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-[10px] text-muted">
            <span>5-Dimension Evaluation Vector</span>
            <span className="text-cyan">100% Normalized</span>
          </div>
          <div className="space-y-1.5 text-[9px]">
            {[
              { dim: 'Technical Execution', score: 95 },
              { dim: 'Architectural Ownership', score: 92 },
              { dim: 'Cross-Functional Comms', score: 88 },
            ].map((v) => (
              <div key={v.dim} className="space-y-0.5">
                <div className="flex justify-between text-secondary">
                  <span>{v.dim}</span>
                  <span className="text-cyan">{v.score}%</span>
                </div>
                <div className="w-full h-1 bg-white/[0.08] rounded-full overflow-hidden">
                  <div className="h-full bg-cyan" style={{ width: `${v.score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PostgreSQL Row Scoping Telemetry */}
        <div className="p-2 rounded-lg bg-black border border-white/[0.06] text-[10px] flex items-center justify-between">
          <span className="text-muted font-mono">SELECT * FROM reviews WHERE tenant_id = $1</span>
          <span className="text-emerald-400 text-[9px]">ENFORCED</span>
        </div>
      </div>
    </div>
  )
}

// 3. AI Dementia Detection Visual: Acoustic Waveform & Feature Extraction
export function DementiaDetectionVisual() {
  const [bars, setBars] = useState([40, 65, 80, 50, 95, 75, 60, 85, 45, 90, 70, 55, 65, 80])

  useEffect(() => {
    const timer = setInterval(() => {
      setBars((prev) => prev.map(() => Math.floor(25 + Math.random() * 70)))
    }, 400)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full h-full rounded-2xl bg-void/90 border border-white/[0.1] overflow-hidden flex flex-col font-mono text-xs select-none shadow-2xl">
      <div className="bg-[#111116] px-4 py-2.5 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity size={13} className="text-indigo-400" />
          <span className="text-[10px] text-primary font-semibold">LIBROSA ACOUSTIC STREAM</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 text-[9px] border border-indigo-500/30">
          LATENCY: &lt; 1.84s
        </span>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
        {/* Animated Waveform Bars */}
        <div>
          <div className="text-[10px] text-muted uppercase tracking-wider mb-2 flex justify-between">
            <span>Audio Feature Extraction (FFmpeg Transcode)</span>
            <span className="text-indigo-400">44.1 kHz</span>
          </div>
          <div className="h-16 flex items-end gap-1.5 p-2 rounded-xl bg-black border border-white/[0.06]">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-indigo-500 to-cyan rounded-t transition-all duration-300"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Extracted Speech Biomarkers */}
        <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <div className="text-muted text-[8px]">MFCC COEFF</div>
            <div className="font-semibold text-white">13 BANDS</div>
            <div className="text-emerald-400 text-[8px]">EXTRACTED</div>
          </div>
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <div className="text-muted text-[8px]">PITCH JITTER</div>
            <div className="font-semibold text-white">0.024 Hz</div>
            <div className="text-cyan text-[8px]">ANALYZED</div>
          </div>
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <div className="text-muted text-[8px]">SHIMMER AMPL</div>
            <div className="font-semibold text-white">1.82 dB</div>
            <div className="text-indigo-400 text-[8px]">CALCULATED</div>
          </div>
        </div>

        {/* Zero Data Loss Pipeline Guard */}
        <div className="p-2 rounded-lg bg-black border border-white/[0.06] text-[10px] flex items-center justify-between">
          <span className="text-muted">Multi-Part Stream Exception Handler</span>
          <span className="text-emerald-400 text-[9px]">100% FIDELITY</span>
        </div>
      </div>
    </div>
  )
}

// 4. Rent-Vortex Visual: Map Geolocation Pin + 3-Role Marketplace
export function RentVortexVisual() {
  return (
    <div className="w-full h-full rounded-2xl bg-void/90 border border-white/[0.1] overflow-hidden flex flex-col font-mono text-xs select-none shadow-2xl">
      <div className="bg-[#111116] px-4 py-2.5 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin size={13} className="text-teal-400" />
          <span className="text-[10px] text-primary font-semibold">GEOSPATIAL LEAFLET FLEET</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 text-[9px] border border-teal-500/30">
          MERN STACK
        </span>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
        {/* Mock Map Canvas with coordinates */}
        <div className="relative h-24 rounded-xl bg-[#091017] border border-white/[0.08] overflow-hidden p-3 flex flex-col justify-between">
          <div className="absolute inset-0 opacity-15 technical-grid" />
          <div className="relative z-10 flex justify-between items-center text-[10px]">
            <span className="text-teal-400 font-semibold">OpenStreetMap Stream</span>
            <span className="text-muted">28.6692° N, 77.4538° E</span>
          </div>

          {/* Interactive vehicle pin */}
          <div className="relative z-10 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-teal-400 animate-ping absolute" />
            <span className="w-3 h-3 rounded-full bg-teal-400 relative" />
            <div className="px-2 py-0.5 rounded bg-black/80 border border-teal-400/40 text-[9px] text-white">
              Fleet #402 · Available
            </div>
          </div>
        </div>

        {/* 3-Tier Access System */}
        <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <div className="text-muted text-[8px]">HOST</div>
            <div className="font-semibold text-white">Fleet Manager</div>
          </div>
          <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/30">
            <div className="text-teal-400 text-[8px]">RENTER</div>
            <div className="font-semibold text-white">Live Booking</div>
          </div>
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <div className="text-muted text-[8px]">ADMIN</div>
            <div className="font-semibold text-white">Audit Panel</div>
          </div>
        </div>

        <div className="p-2 rounded-lg bg-black border border-white/[0.06] text-[10px] flex items-center justify-between">
          <span className="text-muted">Optimized with React.memo &amp; Token Interceptors</span>
          <span className="text-teal-400 text-[9px]">60 FPS</span>
        </div>
      </div>
    </div>
  )
}

// 5. Pokédex Explorer Visual: Normalized Cache & Paginated REST API
export function PokedexVisual() {
  return (
    <div className="w-full h-full rounded-2xl bg-void/90 border border-white/[0.1] overflow-hidden flex flex-col font-mono text-xs select-none shadow-2xl">
      <div className="bg-[#111116] px-4 py-2.5 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Database size={13} className="text-amber-400" />
          <span className="text-[10px] text-primary font-semibold">POKEAPI CONTEXT PIPELINE</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 text-[9px] border border-amber-500/30">
          1000+ CACHED
        </span>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
        {/* Simulated Pokémon Card Preview */}
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
          <div>
            <div className="text-amber-400 font-bold text-sm">#006 CHARIZARD</div>
            <div className="text-muted text-[10px] mt-0.5">TYPE: FIRE / FLYING</div>
            <div className="flex gap-1.5 mt-2">
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[8px]">ATTACK: 84</span>
              <span className="px-2 py-0.5 rounded bg-cyan/20 text-cyan text-[8px]">SPEED: 100</span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-full border border-amber-400/40 bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold">
            🔥
          </div>
        </div>

        {/* State Management Architecture Comparison */}
        <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
          <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300">
            <div className="text-[8px] line-through">PROP DRILLING</div>
            <div>Refactored Out</div>
          </div>
          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
            <div className="text-[8px] font-bold">CONTEXT STATE</div>
            <div>Centralized Stream</div>
          </div>
        </div>

        <div className="p-2 rounded-lg bg-black border border-white/[0.06] text-[10px] flex items-center justify-between">
          <span className="text-muted">Chunked Paginated Data Fetching</span>
          <span className="text-amber-400 text-[9px]">ZERO PROP JANK</span>
        </div>
      </div>
    </div>
  )
}
