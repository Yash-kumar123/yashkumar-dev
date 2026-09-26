import React, { useState, useEffect } from 'react'
import { Terminal, Users, Cpu, Activity, MapPin, Database, Sparkles, CheckCircle2, Shield, Radio } from 'lucide-react'

// 1. DevSync AI Visual: Bright Studio Cloud Editor + Yjs Multiplayer + 3-Agent AI Pipeline
export function DevSyncVisual() {
  return (
    <div className="w-full h-full rounded-3xl bg-white border border-black/[0.08] overflow-hidden flex flex-col font-mono text-xs select-none shadow-soft-lg">
      {/* Top Window Bar */}
      <div className="bg-soft px-5 py-3 border-b border-black/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="text-[10px] text-dark-muted ml-2 font-semibold">devsync-ai // monorepo</span>
        </div>
        <div className="flex items-center gap-3 text-[10px]">
          <span className="flex items-center gap-1.5 text-aqua font-semibold">
            <Radio size={11} className="animate-pulse" />
            <span>Yjs CRDT SYNC</span>
          </span>
          <span className="px-2 py-0.5 rounded-full bg-black/[0.05] text-dark font-medium">2 PEERS</span>
        </div>
      </div>

      {/* Editor Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 font-mono text-[11px] leading-relaxed bg-white">
        <div className="space-y-1">
          <div className="text-dark-muted">// Real-time multiplayer synchronization pipeline</div>
          <div className="text-dark">
            <span className="text-sky font-semibold">import</span> * as Y <span className="text-sky font-semibold">from</span> <span className="text-emerald-600">'yjs'</span>
          </div>
          <div className="text-dark">
            <span className="text-sky font-semibold">const</span> ydoc = <span className="text-lavender font-semibold">new</span> Y.Doc()
          </div>
          <div className="text-dark">
            <span className="text-sky font-semibold">const</span> yText = ydoc.getText(<span className="text-emerald-600">'monaco-buffer'</span>)
          </div>

          {/* Simulated multiplayer cursor */}
          <div className="relative inline-block mt-2 pl-1.5 pr-2 py-0.5 bg-sky-light border-l-2 border-sky text-dark text-[10px] rounded-r">
            <span>ydoc.observe((event) =&gt; syncPeers(event))</span>
            <span className="absolute -top-4 -right-1 px-1.5 py-0.5 rounded text-[8px] bg-sky text-white font-bold shadow-sm">
              Yash (Host)
            </span>
          </div>
        </div>

        {/* 3-Agent AI Pipeline Bar */}
        <div className="pt-3 border-t border-black/[0.06] grid grid-cols-3 gap-2 text-center text-[10px]">
          <div className="p-2.5 rounded-xl bg-soft border border-black/[0.06] text-dark">
            <div className="text-[8px] text-dark-muted">AGENT 01</div>
            <div className="font-bold">PLANNER</div>
            <div className="text-[8px] text-emerald-600">● IDLE</div>
          </div>
          <div className="p-2.5 rounded-xl bg-sky-light border border-sky/30 text-dark">
            <div className="text-[8px] text-sky font-bold">AGENT 02</div>
            <div className="font-bold text-sky">CODER</div>
            <div className="text-[8px] text-sky animate-pulse font-semibold">● STREAMING</div>
          </div>
          <div className="p-2.5 rounded-xl bg-soft border border-black/[0.06] text-dark-muted">
            <div className="text-[8px] text-dark-muted">AGENT 03</div>
            <div className="font-bold">AUDITOR</div>
            <div className="text-[8px]">QUEUED</div>
          </div>
        </div>

        {/* Docker Terminal Snippet */}
        <div className="p-2.5 rounded-xl bg-soft border border-black/[0.06] text-[10px] text-dark-muted flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal size={12} className="text-emerald-600" />
            <span className="text-emerald-700 font-semibold">container:~/workspace$</span>
            <span className="text-dark">git commit -m "feat: real-time yjs sync"</span>
          </div>
          <span className="text-sky text-[9px] font-semibold">DOCKER ISOLATED</span>
        </div>
      </div>
    </div>
  )
}

// 2. Performance Evaluation System Visual: Multi-Tenant RBAC & 3NF Hierarchies
export function PerformanceEvalVisual() {
  return (
    <div className="w-full h-full rounded-3xl bg-white border border-black/[0.08] overflow-hidden flex flex-col font-mono text-xs select-none shadow-soft-lg">
      <div className="bg-soft px-5 py-3 border-b border-black/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield size={14} className="text-sky" />
          <span className="text-[10px] text-dark font-bold">RBAC TENANT GATEWAY</span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-sky-light text-sky text-[9px] border border-sky/30 font-semibold">
          QUERY ISOLATION: ACTIVE
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
        {/* Hierarchy Tree Visualization */}
        <div className="space-y-2">
          <div className="text-[10px] text-dark-muted uppercase tracking-wider font-semibold">
            Self-Referencing manager_id Hierarchy (3NF)
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
            <div className="p-2.5 rounded-xl bg-soft border border-black/[0.06]">
              <div className="text-dark-muted text-[8px]">TENANT A</div>
              <div className="text-dark font-bold">HR Executive</div>
              <div className="text-sky text-[8px] font-semibold">RBAC: ADMIN</div>
            </div>
            <div className="p-2.5 rounded-xl bg-soft border border-black/[0.06]">
              <div className="text-dark-muted text-[8px]">MANAGER_ID: 104</div>
              <div className="text-dark font-bold">Team Lead</div>
              <div className="text-emerald-600 text-[8px] font-semibold">RBAC: MANAGER</div>
            </div>
            <div className="p-2.5 rounded-xl bg-soft border border-black/[0.06]">
              <div className="text-dark-muted text-[8px]">EMPLOYEE</div>
              <div className="text-dark font-bold">Engineer</div>
              <div className="text-lavender text-[8px] font-semibold">RBAC: PEER</div>
            </div>
          </div>
        </div>

        {/* 5-Dimension Performance Review Vectors */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-[10px] text-dark-muted font-semibold">
            <span>5-Dimension Evaluation Vector</span>
            <span className="text-sky">100% Normalized</span>
          </div>
          <div className="space-y-1.5 text-[9px]">
            {[
              { dim: 'Technical Execution', score: 95 },
              { dim: 'Architectural Ownership', score: 92 },
              { dim: 'Cross-Functional Comms', score: 88 },
            ].map((v) => (
              <div key={v.dim} className="space-y-0.5">
                <div className="flex justify-between text-dark">
                  <span>{v.dim}</span>
                  <span className="text-sky font-bold">{v.score}%</span>
                </div>
                <div className="w-full h-1.5 bg-black/[0.06] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-sky to-aqua" style={{ width: `${v.score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PostgreSQL Row Scoping Telemetry */}
        <div className="p-2.5 rounded-xl bg-soft border border-black/[0.06] text-[10px] flex items-center justify-between">
          <span className="text-dark-muted font-mono">SELECT * FROM reviews WHERE tenant_id = $1</span>
          <span className="text-emerald-600 text-[9px] font-bold">ENFORCED</span>
        </div>
      </div>
    </div>
  )
}

// 3. AI Dementia Detection Visual: Bright Acoustic Waveform & Feature Extraction
export function DementiaDetectionVisual() {
  const [bars, setBars] = useState([40, 65, 80, 50, 95, 75, 60, 85, 45, 90, 70, 55, 65, 80])

  useEffect(() => {
    const timer = setInterval(() => {
      setBars((prev) => prev.map(() => Math.floor(25 + Math.random() * 70)))
    }, 400)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full h-full rounded-3xl bg-white border border-black/[0.08] overflow-hidden flex flex-col font-mono text-xs select-none shadow-soft-lg">
      <div className="bg-soft px-5 py-3 border-b border-black/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity size={14} className="text-lavender" />
          <span className="text-[10px] text-dark font-bold">LIBROSA ACOUSTIC STREAM</span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-lavender-light text-lavender text-[9px] border border-lavender/30 font-semibold">
          LATENCY: &lt; 1.84s
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
        {/* Animated Waveform Bars */}
        <div>
          <div className="text-[10px] text-dark-muted uppercase tracking-wider mb-2 flex justify-between font-semibold">
            <span>Audio Feature Extraction (FFmpeg Transcode)</span>
            <span className="text-lavender">44.1 kHz</span>
          </div>
          <div className="h-16 flex items-end gap-1.5 p-2 rounded-2xl bg-soft border border-black/[0.06]">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-lavender to-aqua rounded-t-sm transition-all duration-300"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Extracted Speech Biomarkers */}
        <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
          <div className="p-2.5 rounded-xl bg-soft border border-black/[0.06]">
            <div className="text-dark-muted text-[8px]">MFCC COEFF</div>
            <div className="font-bold text-dark">13 BANDS</div>
            <div className="text-emerald-600 text-[8px] font-semibold">EXTRACTED</div>
          </div>
          <div className="p-2.5 rounded-xl bg-soft border border-black/[0.06]">
            <div className="text-dark-muted text-[8px]">PITCH JITTER</div>
            <div className="font-bold text-dark">0.024 Hz</div>
            <div className="text-sky text-[8px] font-semibold">ANALYZED</div>
          </div>
          <div className="p-2.5 rounded-xl bg-soft border border-black/[0.06]">
            <div className="text-dark-muted text-[8px]">SHIMMER AMPL</div>
            <div className="font-bold text-dark">1.82 dB</div>
            <div className="text-lavender text-[8px] font-semibold">CALCULATED</div>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-soft border border-black/[0.06] text-[10px] flex items-center justify-between">
          <span className="text-dark-muted">Multi-Part Stream Exception Handler</span>
          <span className="text-emerald-600 text-[9px] font-bold">100% FIDELITY</span>
        </div>
      </div>
    </div>
  )
}

// 4. Rent-Vortex Visual: Map Geolocation Pin + 3-Role Marketplace
export function RentVortexVisual() {
  return (
    <div className="w-full h-full rounded-3xl bg-white border border-black/[0.08] overflow-hidden flex flex-col font-mono text-xs select-none shadow-soft-lg">
      <div className="bg-soft px-5 py-3 border-b border-black/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-coral" />
          <span className="text-[10px] text-dark font-bold">GEOSPATIAL LEAFLET FLEET</span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-coral-light text-coral text-[9px] border border-coral/30 font-semibold">
          MERN STACK
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
        {/* Mock Map Canvas */}
        <div className="relative h-24 rounded-2xl bg-sky-light border border-sky/20 overflow-hidden p-3.5 flex flex-col justify-between bright-grid">
          <div className="relative z-10 flex justify-between items-center text-[10px]">
            <span className="text-sky font-bold">OpenStreetMap Stream</span>
            <span className="text-dark-muted">28.6692° N, 77.4538° E</span>
          </div>

          <div className="relative z-10 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-coral animate-ping absolute" />
            <span className="w-3 h-3 rounded-full bg-coral relative" />
            <div className="px-2.5 py-0.5 rounded-full bg-white shadow-soft-sm text-[9px] text-dark font-semibold">
              Fleet #402 · Available Now
            </div>
          </div>
        </div>

        {/* 3-Tier Access System */}
        <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
          <div className="p-2.5 rounded-xl bg-soft border border-black/[0.06]">
            <div className="text-dark-muted text-[8px]">HOST</div>
            <div className="font-bold text-dark">Fleet Admin</div>
          </div>
          <div className="p-2.5 rounded-xl bg-coral-light border border-coral/30">
            <div className="text-coral text-[8px] font-bold">RENTER</div>
            <div className="font-bold text-dark">Live Booking</div>
          </div>
          <div className="p-2.5 rounded-xl bg-soft border border-black/[0.06]">
            <div className="text-dark-muted text-[8px]">ADMIN</div>
            <div className="font-bold text-dark">Audit View</div>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-soft border border-black/[0.06] text-[10px] flex items-center justify-between">
          <span className="text-dark-muted">Optimized with React.memo &amp; Token Interceptors</span>
          <span className="text-coral text-[9px] font-bold">60 FPS</span>
        </div>
      </div>
    </div>
  )
}

// 5. Pokédex Explorer Visual: Normalized Cache & Paginated REST API
export function PokedexVisual() {
  return (
    <div className="w-full h-full rounded-3xl bg-white border border-black/[0.08] overflow-hidden flex flex-col font-mono text-xs select-none shadow-soft-lg">
      <div className="bg-soft px-5 py-3 border-b border-black/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Database size={14} className="text-peach" />
          <span className="text-[10px] text-dark font-bold">POKEAPI CONTEXT PIPELINE</span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-peach-light text-peach text-[9px] border border-peach/30 font-semibold">
          1000+ CACHED
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
        {/* Simulated Pokémon Card Preview */}
        <div className="p-4 rounded-2xl bg-peach-light border border-peach/20 flex items-center justify-between">
          <div>
            <div className="text-dark font-black text-sm">#006 CHARIZARD</div>
            <div className="text-dark-muted text-[10px] mt-0.5">TYPE: FIRE / FLYING</div>
            <div className="flex gap-2 mt-2">
              <span className="px-2.5 py-0.5 rounded-full bg-white shadow-soft-sm text-[8px] text-dark font-bold">ATTACK: 84</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white shadow-soft-sm text-[8px] text-sky font-bold">SPEED: 100</span>
            </div>
          </div>
          <div className="w-14 h-14 rounded-full bg-white shadow-soft-sm flex items-center justify-center text-xl">
            🔥
          </div>
        </div>

        {/* State Management Architecture Comparison */}
        <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
          <div className="p-2.5 rounded-xl bg-soft border border-black/[0.06] text-dark-muted">
            <div className="text-[8px] line-through">PROP DRILLING</div>
            <div>Refactored Out</div>
          </div>
          <div className="p-2.5 rounded-xl bg-mint-light border border-mint/30 text-dark">
            <div className="text-[8px] font-bold text-mint">CONTEXT STATE</div>
            <div className="font-semibold">Centralized Stream</div>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-soft border border-black/[0.06] text-[10px] flex items-center justify-between">
          <span className="text-dark-muted">Chunked Paginated Data Fetching</span>
          <span className="text-peach text-[9px] font-bold">ZERO PROP JANK</span>
        </div>
      </div>
    </div>
  )
}
