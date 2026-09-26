import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { initSmoothScroll } from './utils/smoothScroll'

import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import ShaderAtmosphere from './components/three/ShaderAtmosphere'
import Navbar from './components/Navbar'
import StatusBar from './components/StatusBar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import SystemDesignSection from './components/SystemDesignSection'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SECTIONS = [
  { id: 'hero', navId: 'hero' },
  { id: 'about', navId: 'about' },
  { id: 'stack', navId: 'stack' },
  { id: 'systems', navId: 'systems' },
  { id: 'projects', navId: 'work' },
  { id: 'achievements', navId: 'achievements' },
  { id: 'contact', navId: 'contact' },
]

export default function App() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')

  // Initialize Lenis smooth scroll with GSAP ScrollTrigger
  useEffect(() => {
    const cleanupLenis = initSmoothScroll()
    return () => {
      if (cleanupLenis) cleanupLenis()
    }
  }, [])

  // Section observer for Navbar active indicators
  useEffect(() => {
    if (loading) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matched = SECTIONS.find((s) => s.id === entry.target.id)
            if (matched) setActiveSection(matched.navId)
          }
        })
      },
      { rootMargin: '-25% 0px -40% 0px', threshold: 0 }
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [loading])

  return (
    <div className="min-h-screen bg-void text-primary font-sans selection:bg-cyan selection:text-void relative antialiased">
      {/* Cinematic Fast Loading Sequence */}
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Atmospheric Background Layers */}
      <ShaderAtmosphere />
      <div className="technical-noise" aria-hidden="true" />

      {/* High-Precision Desktop Custom Cursor */}
      <CustomCursor />

      {/* Floating Glass Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Top Status & Metrics Bar */}
      <div className="pt-20">
        <StatusBar />
      </div>

      {/* Main Narrative Structure */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <SystemDesignSection />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
