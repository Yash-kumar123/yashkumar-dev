import { motion } from 'framer-motion'
import { Cpu, Heart, Rocket, Hammer, Sparkles, Layers } from 'lucide-react'

const PRINCIPLES = [
  {
    number: '01',
    title: 'BUILD SYSTEMS THAT SCALE',
    summary: 'Decoupled architectures over monolithic lock-in.',
    detail: 'In DevSync AI, I decoupled the React 19 Monaco editor from the Python FastAPI AI worker so heavy LLM inference streams never freeze client-side keystrokes.',
    accent: 'bg-aqua-light text-aqua border-aqua/30',
    tag: 'ARCHITECTURE',
    icon: Cpu,
  },
  {
    number: '02',
    title: 'DESIGN FOR REAL PEOPLE',
    summary: 'Engineering precision means nothing if the interface lags.',
    detail: 'Whether achieving < 45ms cursor sync with Yjs CRDTs or extracting acoustic speech features in < 2 seconds for early dementia testing, responsiveness is non-negotiable.',
    accent: 'bg-sky-light text-sky border-sky/30',
    tag: 'LATENCY & UX',
    icon: Heart,
  },
  {
    number: '03',
    title: 'SHIP FUNCTIONAL PRODUCTS',
    summary: 'Production code that people can use beats endless tutorials.',
    detail: 'From multi-tenant enterprise review engines with query-level PostgreSQL isolation to interactive map vehicle booking on Rent-Vortex, I ship applications end to end.',
    accent: 'bg-mint-light text-mint border-mint/30',
    tag: 'EXECUTION',
    icon: Rocket,
  },
  {
    number: '04',
    title: 'LEARN THROUGH BUILDING',
    summary: 'Hackathons and complex systems teach what classrooms cannot.',
    detail: 'Reaching the national finals of Smart India Hackathon (SIH 2025) out of 500+ teams forged my ability to design, prototype, and debug distributed systems under pressure.',
    accent: 'bg-peach-light text-coral border-coral/30',
    tag: 'INNOVATION',
    icon: Hammer,
  },
]

export default function EngineeringPhilosophy() {
  return (
    <section id="philosophy" className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16 border-t border-black/[0.06] bg-soft/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-sky tracking-[0.25em] uppercase mb-3">
              <span className="text-dark font-bold">02 / PRINCIPLES</span>
              <span className="w-8 h-[2px] bg-sky/60" />
              <span>CORE MINDSET</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tightest text-dark uppercase">
              HOW I<br />THINK.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-dark-muted max-w-md font-sans leading-relaxed">
            The four foundational engineering principles that guide my architectural choices, performance SLAs, and product decisions.
          </p>
        </div>

        {/* Bento Grid Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRINCIPLES.map((p, idx) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 sm:p-10 rounded-4xl glass-bright-interactive relative group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-dark/20 group-hover:text-dark transition-colors">
                      {p.number}
                    </span>
                    <span className={`px-3 py-1 rounded-full font-mono text-[10px] font-bold tracking-wider uppercase border ${p.accent}`}>
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-dark tracking-tight">
                    {p.title}
                  </h3>

                  <p className="font-display text-sm font-semibold text-sky tracking-wide uppercase">
                    {p.summary}
                  </p>

                  <p className="font-sans text-sm text-dark-muted leading-relaxed pt-2">
                    {p.detail}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-dark-muted">
                  <span>SYSTEM STANDARD</span>
                  <span className="text-dark font-medium">VERIFIED IN PRODUCTION</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
