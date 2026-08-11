import { motion, AnimatePresence } from 'framer-motion'
import { X, Cpu, Server, Database, Layers, ArrowRight, Activity } from 'lucide-react'
import { playClickSound } from '../utils/audio'

export default function ArchitectureModal({ project, onClose }) {
  if (!project) return null

  // Architecture diagrams mapped per project
  const architectures = {
    'devsync-ai': {
      title: 'DevSync AI — System Architecture',
      subtitle: 'Real-time Collaborative AI Code Editor Flow',
      nodes: [
        { icon: Layers, label: 'React / Vite UI', desc: 'Monaco Editor & Yjs CRDT binding' },
        { icon: Server, label: 'WebSocket Engine', desc: 'Real-time document synchronization' },
        { icon: Cpu, label: 'FastAPI AI Gateway', desc: 'RAG context pipeline & CodeGen' },
        { icon: Database, label: 'Redis & Cloud DB', desc: 'Session state & transient buffers' },
      ],
      flow: ['Monaco UI', 'Yjs CRDT Docs', 'FastAPI Engine', 'OpenAI/Anthropic APIs'],
    },
    'dementia-backend': {
      title: 'Dementia Speech Analysis — System Architecture',
      subtitle: 'Acoustic & Feature Extraction Pipeline',
      nodes: [
        { icon: Layers, label: 'Audio Ingestion', desc: 'WAV/FLAC speech stream upload' },
        { icon: Cpu, label: 'MFCC & Pitch Extractor', desc: 'Librosa acoustic feature analysis' },
        { icon: Server, label: 'FastAPI Classifier', desc: 'Early acoustic biomarker detection' },
        { icon: Database, label: 'Clinical Data Store', desc: 'Encrypted patient diagnostic logs' },
      ],
      flow: ['Speech Audio', 'Librosa Spectrograms', 'Classification Engine', 'Clinical Report'],
    },
    'performance-evaluation': {
      title: 'Performance Evaluation Platform — Architecture',
      subtitle: 'Multi-Tenant Enterprise Evaluation Pipeline',
      nodes: [
        { icon: Layers, label: 'Next.js Frontend', desc: 'Role-based evaluation dashboards' },
        { icon: Server, label: 'Node.js REST API', desc: 'JWT authentication & RBAC middleware' },
        { icon: Cpu, label: 'Analytics Aggregator', desc: '360° metrics computation engine' },
        { icon: Database, label: 'MongoDB Cluster', desc: 'Multi-tenant schemas & audit logs' },
      ],
      flow: ['Dashboard UI', 'Express Router', 'Metrics Engine', 'MongoDB Store'],
    },
  }

  const arch = architectures[project.id] || {
    title: `${project.name} — Architecture Overview`,
    subtitle: 'High-Level Application Data Flow',
    nodes: [
      { icon: Layers, label: 'Frontend Client', desc: 'Interactive React User Interface' },
      { icon: Server, label: 'API Backend', desc: 'RESTful API & Business Logic' },
      { icon: Cpu, label: 'Processing Core', desc: 'Data Transformation & Processing' },
      { icon: Database, label: 'Database Tier', desc: 'Persistent Data Storage' },
    ],
    flow: ['User Request', 'API Gateway', 'Business Logic', 'Database'],
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl font-poppins">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl bg-[#0a0a0a] border border-cyan/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.25)] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-white/10 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2 text-cyan font-mono text-xs uppercase tracking-widest mb-1">
                <Activity size={14} className="animate-pulse" />
                SYSTEM ARCHITECTURE DIAGRAM
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{arch.title}</h3>
              <p className="text-ash text-sm font-mono mt-1">{arch.subtitle}</p>
            </div>

            <button
              onClick={() => {
                playClickSound()
                onClose()
              }}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:text-cyan hover:border-cyan/50 transition-all"
            >
              <X size={20} />
            </button>
          </div>

          {/* Architecture Node Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {arch.nodes.map((node, i) => {
              const IconComp = node.icon
              return (
                <div
                  key={node.label}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 relative group hover:border-cyan/50 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan mb-4 group-hover:scale-110 transition-transform">
                    <IconComp size={20} />
                  </div>
                  <span className="text-[10px] font-mono text-cyan block mb-1">STEP 0{i + 1}</span>
                  <h4 className="text-sm font-bold text-white font-display mb-1">{node.label}</h4>
                  <p className="text-xs text-ash leading-relaxed font-mono">{node.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Interactive Flow Pipeline */}
          <div className="p-5 rounded-2xl bg-black border border-white/10">
            <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider block mb-3">
              Data Pipeline &amp; Execution Stream
            </span>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              {arch.flow.map((step, idx) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="px-3 py-1.5 rounded-lg bg-cyan/10 border border-cyan/30 text-white font-medium">
                    {step}
                  </span>
                  {idx < arch.flow.length - 1 && (
                    <ArrowRight size={14} className="text-cyan animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
