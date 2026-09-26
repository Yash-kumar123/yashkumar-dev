import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { initSmoothScroll } from './utils/smoothScroll'
import { ThemeProvider } from './context/ThemeContext'

import LoadingScreen from './components/LoadingScreen'
import ShaderAtmosphere from './components/three/ShaderAtmosphere'
import Navbar from './components/Navbar'
import StatusBar from './components/StatusBar'
import Hero from './components/Hero'
import About from './components/About'
import EngineeringPhilosophy from './components/EngineeringPhilosophy'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SECTIONS = [
  { id: 'hero', navId: 'hero' },
  { id: 'about', navId: 'about' },
  { id: 'philosophy', navId: 'philosophy' },
  { id: 'stack', navId: 'stack' },
  { id: 'projects', navId: 'work' },
  { id: 'achievements', navId: 'achievements' },
  { id: 'contact', navId: 'contact' },
]

function MainApp() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')

  // Initialize Lenis smooth scroll
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
    <div className="min-h-screen bg-light-bg dark:bg-darktheme-bg text-light-text dark:text-darktheme-text font-sans relative antialiased transition-colors duration-700 ease-in-out">
      {/* Short 1-Second Opening Sequence */}
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Multi-State Day/Night Shader Gradient Atmosphere */}
      <ShaderAtmosphere />

      {/* Floating Light/Dark Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Top Status & Metrics Bar */}
      <div className="pt-20">
        <StatusBar />
      </div>

      {/* Main Narrative Structure */}
      <main className="relative z-10">
        <Hero />
        <About />
        <EngineeringPhilosophy />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  )
}
