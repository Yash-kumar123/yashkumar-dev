import { motion } from 'framer-motion'
import { MapPin, GraduationCap } from 'lucide-react'
import { about, profile, education } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-10 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[0.4fr_0.6fr] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-amber font-mono text-xs tracking-widest uppercase">About Me</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text mt-2">
            Building things end to end
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-text/90 leading-relaxed text-base md:text-lg">{about}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-3 rounded-xl border border-line bg-card px-4 py-3 flex-1">
              <MapPin size={18} className="text-amber shrink-0" />
              <span className="text-sm text-text/90">{profile.location}</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-line bg-card px-4 py-3 flex-1">
              <GraduationCap size={18} className="text-violet shrink-0" />
              <span className="text-sm text-text/90">
                {education.degree} · {education.years}
              </span>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-line bg-card px-4 py-3">
            <span className="text-sm text-muted">{education.school}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
