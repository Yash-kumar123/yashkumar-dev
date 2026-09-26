import { motion } from 'framer-motion'
import { Terminal, Shield, Award, Cpu, Code2, Globe, ArrowUpRight } from 'lucide-react'
import { profile, about, education, stats } from '../data/portfolioData'

const JOURNEY_STEPS = [
  {
    year: '2026',
    title: 'DevSync AI & Enterprise Systems',
    desc: 'Architected real-time multiplayer IDE using Yjs CRDTs and 3-agent AI orchestration. Shipped multi-tenant RBAC platform.',
  },
  {
    year: '2025',
    title: 'SIH National Finals & Cognitive Audio',
    desc: 'Reached national finals in Smart India Hackathon (500+ teams). Engineered sub-2s speech feature extraction backend for dementia detection.',
  },
  {
    year: '2024',
    title: 'Distributed Platforms & MERN Ecosystem',
    desc: 'Constructed Rent-Vortex with Leaflet geospatial booking and multi-role marketplace workflows under tight hackathon sprints.',
  },
  {
    year: '2023',
    title: 'Engineering Genesis at ABESIT',
    desc: 'B.Tech in Computer Science & Engineering. Deep dive into algorithms, systems programming, and full-stack engineering.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16 border-t border-white/[0.07] bg-void arch-dots">
      <div className="max-w-7xl mx-auto">
        {/* Section Header Label */}
        <div className="flex items-center gap-3 font-mono text-xs text-cyan tracking-[0.25em] uppercase mb-14">
          <span className="text-paper font-bold">01</span>
          <span className="w-8 h-[1px] bg-cyan/50" />
          <span>WHO I AM // EDITORIAL NARRATIVE</span>
        </div>

        {/* Top Grid: Statement & Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Huge Architectural Statement */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-display text-5xl sm:text-7xl font-black tracking-tighter text-paper uppercase leading-[0.92]">
              I BUILD<br />
              SYSTEMS<br />
              <span className="text-cyan">THAT WORK.</span>
            </h2>

            <p className="text-lg sm:text-xl text-muted font-sans leading-relaxed tracking-tight">
              I am a Computer Science engineer at ABESIT who would rather ship real, resilient software that solves bottlenecks than complete another sandbox tutorial.
            </p>

            <div className="space-y-4 text-sm sm:text-base text-muted/90 font-sans leading-relaxed">
              <p>
                Over the past two years, I have architected and deployed production-grade applications: a real-time collaborative cloud IDE powered by Yjs CRDTs and a 3-agent AI orchestration pipeline; an acoustic biomarker extraction engine processing speech in under two seconds to identify early signs of cognitive decline; and an enterprise multi-tenant review system enforcing row-level PostgreSQL security across arbitrary corporate hierarchies.
              </p>
              <p>
                In 2025, my team reached the national finals of the <strong>Smart India Hackathon (SIH)</strong>, beating out hundreds of collegiate engineering teams nationwide. My focus is centered on distributed architectures, applied AI (RAG, agent workflows, vector search), and engineering interactive user experiences with zero compromise on latency.
              </p>
            </div>
          </div>

          {/* Right Column: Formal Portrait Frame with HUD Metadata */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group max-w-sm mx-auto lg:mx-0">
              <div className="p-2.5 rounded-3xl liquid-glass border-white/[0.08] relative overflow-hidden group-hover:border-cyan/40 transition-colors duration-500 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-surface aspect-[4/5] max-h-[460px]">
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80" />

                  {/* Micro Metadata Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl liquid-glass bg-void/85 border-white/[0.1] font-mono text-[10px] space-y-1">
                    <div className="flex justify-between items-center text-paper font-semibold">
                      <span>{profile.name.toUpperCase()}</span>
                      <span className="text-cyan">CSE '27</span>
                    </div>
                    <div className="text-muted flex justify-between">
                      <span>{education.school.split('(')[0]}</span>
                      <span>{profile.location.split(',')[0]}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Precision Corner Brackets */}
              <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan/70 pointer-events-none" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan/70 pointer-events-none" />
            </div>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto lg:mx-0 font-mono text-xs">
              <div className="p-4 rounded-2xl liquid-glass border-white/[0.06]">
                <div className="text-muted text-[10px] uppercase tracking-wider mb-1">EDUCATION</div>
                <div className="text-paper font-medium">{education.degree}</div>
                <div className="text-muted text-[10px] mt-0.5">{education.years}</div>
              </div>
              <div className="p-4 rounded-2xl liquid-glass border-white/[0.06]">
                <div className="text-muted text-[10px] uppercase tracking-wider mb-1">NATIONAL BENCHMARK</div>
                <div className="text-cyan font-semibold">SIH '25 Finalist</div>
                <div className="text-muted text-[10px] mt-0.5">Top 500+ National Teams</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Engineering Journey Timeline */}
        <div className="border-t border-white/[0.08] pt-14">
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-xs text-muted tracking-widest uppercase">
              Engineering Progression Timeline
            </span>
            <span className="font-mono text-[10px] text-cyan">2023 — 2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {JOURNEY_STEPS.map((step) => (
              <div
                key={step.year}
                className="p-6 rounded-2xl liquid-glass border-white/[0.06] hover:border-white/[0.15] transition-all space-y-3 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-lg font-bold text-cyan">{step.year}</span>
                  <span className="w-2 h-2 rounded-full bg-white/[0.2] group-hover:bg-cyan transition-colors" />
                </div>
                <h4 className="font-display font-bold text-sm text-paper">{step.title}</h4>
                <p className="font-sans text-xs text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
