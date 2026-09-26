import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ShieldCheck, ExternalLink, X, Calendar, CheckCircle } from 'lucide-react'
import { achievements, certificates } from '../data/portfolioData'

export default function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="achievements" className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16 border-t border-white/[0.07] bg-void">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-cyan tracking-[0.25em] uppercase mb-3">
              <span className="text-paper font-bold">03</span>
              <span className="w-8 h-[1px] bg-cyan/50" />
              <span>RECOGNITION</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-paper uppercase">
              ACHIEVEMENTS<br />&amp; TIMELINE
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted max-w-sm font-sans leading-relaxed">
            National hackathon milestones, verified credentials, and competitive engineering benchmarks.
          </p>
        </div>

        {/* Featured Certificate Card Spotlight */}
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="mb-14 p-6 sm:p-8 rounded-3xl liquid-glass border-cyan/30 bg-cyan/[0.03] relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan font-mono text-xs tracking-wider">
                  <ShieldCheck size={16} />
                  <span>VERIFIED NATIONAL CREDENTIAL · {cert.date}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-paper">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-muted">
                  Issuer: <span className="text-paper font-medium">{cert.issuer}</span>
                </p>
                <p className="text-sm text-muted/90 font-sans max-w-2xl leading-relaxed pt-1">
                  {cert.description}
                </p>
                <div className="text-xs font-mono text-cyan pt-1">
                  {cert.stats}
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(cert)}
                data-cursor="cta"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-semibold tracking-wider bg-cyan text-void hover:bg-cyan-bright transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                <ExternalLink size={13} />
                <span>VIEW CERTIFICATE</span>
              </button>
            </div>
          </div>
        ))}

        {/* Vertical Engineering Timeline */}
        <div className="relative border-l border-white/[0.1] pl-6 sm:pl-10 space-y-12 my-8 font-mono">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Pin Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-void border-2 border-cyan group-hover:scale-125 transition-transform" />

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="font-mono text-base font-bold text-cyan tracking-widest">
                    {item.year}
                  </span>
                  <span className="px-2.5 py-0.5 rounded font-mono text-[10px] bg-white/[0.04] border border-white/[0.08] text-muted">
                    {item.badge}
                  </span>
                  <span className="text-muted">
                    {item.org}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-paper group-hover:text-cyan transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-muted font-sans leading-relaxed max-w-3xl">
                  {item.detail}
                </p>

                {item.tags && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg font-mono text-[11px] bg-white/[0.02] border border-white/[0.06] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal Viewer */}
      {selectedCert && (
        <AnimatePresence>
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 bg-void/90 backdrop-blur-2xl">
            <div
              className="fixed inset-0"
              onClick={() => setSelectedCert(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-3xl liquid-glass bg-void/95 border-white/[0.12] rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                <div>
                  <h4 className="font-display font-bold text-xl text-paper">{selectedCert.title}</h4>
                  <span className="font-mono text-xs text-cyan">{selectedCert.issuer}</span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-muted hover:text-paper"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="rounded-xl overflow-hidden bg-black/60 border border-white/[0.08] mb-4 aspect-[4/3] flex items-center justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>

              <div className="text-center font-mono text-xs text-muted">
                {selectedCert.stats}
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </section>
  )
}
