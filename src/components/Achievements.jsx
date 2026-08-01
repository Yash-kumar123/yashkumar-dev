import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { achievements } from '../data/portfolioData'

const colorClasses = {
  amber: { text: 'text-amber', border: 'border-amber/30', bg: 'bg-amber/10' },
  violet: { text: 'text-violet', border: 'border-violet/30', bg: 'bg-violet/10' },
  teal: { text: 'text-teal', border: 'border-teal/30', bg: 'bg-teal/10' },
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 md:px-10 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber font-mono text-xs tracking-widest uppercase">Achievements</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text mt-2">Milestones so far</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a, i) => {
            const c = colorClasses[a.color]
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`rounded-2xl border ${c.border} bg-card p-6`}
              >
                <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center mb-4`}>
                  <Trophy size={20} className={c.text} />
                </div>
                <h3 className="font-display font-bold text-text text-lg">{a.title}</h3>
                <p className="text-muted text-sm mt-2 leading-relaxed">{a.detail}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
