import { motion } from 'framer-motion'
import { profile, education } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16 border-t border-black/[0.06] dark:border-white/[0.08] transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        {/* Section Header Label */}
        <div className="flex items-center gap-3 font-mono text-xs text-light-sky dark:text-darktheme-sky tracking-[0.25em] uppercase mb-14 transition-colors duration-700">
          <span className="text-light-text dark:text-darktheme-text font-bold">01 / ABOUT</span>
          <span className="w-8 h-[2px] bg-light-sky/60 dark:bg-darktheme-sky/60" />
          <span>ARCHITECTURAL PERSPECTIVE</span>
        </div>

        {/* Editorial Composition: Large Statement + Asymmetric Frame Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Huge Headline & Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-display text-5xl sm:text-7xl font-black tracking-tightest text-light-text dark:text-darktheme-text uppercase leading-[0.92] transition-colors duration-700">
              I BUILD<br />
              DIGITAL<br />
              <span className="text-iridescent">SYSTEMS.</span>
            </h2>

            <p className="text-lg sm:text-xl text-light-subtext dark:text-darktheme-subtext font-sans leading-relaxed tracking-tight transition-colors duration-700">
              I am a Computer Science engineer at ABESIT who would rather ship real software that solves bottlenecks than complete another sandbox tutorial.
            </p>

            <div className="space-y-4 text-sm sm:text-base text-light-muted dark:text-darktheme-muted font-sans leading-relaxed transition-colors duration-700">
              <p>
                Over the past two years, I have architected and deployed production-grade applications: a real-time collaborative cloud IDE powered by Yjs CRDTs and a 3-agent AI orchestration pipeline; an acoustic biomarker extraction engine processing speech in under two seconds to identify early signs of cognitive decline; and an enterprise multi-tenant review system enforcing row-level PostgreSQL security across arbitrary corporate hierarchies.
              </p>
              <p>
                In 2025, my team reached the national finals of the <strong className="text-light-text dark:text-darktheme-text">Smart India Hackathon (SIH)</strong>, beating out hundreds of collegiate engineering teams nationwide. My focus is centered on distributed architectures, applied AI (RAG, agent workflows, vector search), and engineering interactive user experiences with zero compromise on latency.
              </p>
            </div>
          </div>

          {/* Right Column: Asymmetric Editorial Portrait Frame with Floating HUD */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group max-w-sm mx-auto lg:mx-0">
              {/* Asymmetric Rounded Editorial Frame */}
              <div className="p-3 rounded-4xl glass-panel-interactive card-revolve card-float relative overflow-hidden transition-all duration-500 shadow-soft-lg group-hover:shadow-soft-xl">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-h-[460px] bg-light-secondary dark:bg-darktheme-secondary">
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle warm overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* Floating Metadata Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 dark:bg-darktheme-surface/90 backdrop-blur-md border border-white/80 dark:border-white/10 font-mono text-[10px] space-y-1 shadow-soft-sm transition-colors duration-700">
                    <div className="flex justify-between items-center text-light-text dark:text-darktheme-text font-semibold text-xs">
                      <span>{profile.name.toUpperCase()}</span>
                      <span className="text-light-sky dark:text-darktheme-sky">CSE '27</span>
                    </div>
                    <div className="text-light-muted dark:text-darktheme-muted flex justify-between">
                      <span>{education.school.split('(')[0]}</span>
                      <span>{profile.location.split(',')[0]}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Pastel Corner Highlights */}
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-light-peach/60 dark:bg-darktheme-peach/40 blur-md pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-light-aqua/50 dark:bg-darktheme-aqua/30 blur-md pointer-events-none" />
            </div>

            {/* Oversized Verified Personal Metrics */}
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0 font-mono">
              <div className="p-5 rounded-3xl glass-panel-interactive card-revolve card-float-alt">
                <div className="text-light-muted dark:text-darktheme-muted text-[10px] uppercase tracking-wider mb-1">DEGREE PROGRAM</div>
                <div className="text-light-text dark:text-darktheme-text font-bold text-sm">{education.degree}</div>
                <div className="text-light-muted dark:text-darktheme-muted text-[10px] mt-0.5">{education.years}</div>
              </div>
              <div className="p-5 rounded-3xl glass-panel-interactive card-revolve card-float">
                <div className="text-light-muted dark:text-darktheme-muted text-[10px] uppercase tracking-wider mb-1">NATIONAL RECOGNITION</div>
                <div className="text-light-sky dark:text-darktheme-sky font-bold text-sm">SIH 2025 Finalist</div>
                <div className="text-light-muted dark:text-darktheme-muted text-[10px] mt-0.5">Top Tier Engineering</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
