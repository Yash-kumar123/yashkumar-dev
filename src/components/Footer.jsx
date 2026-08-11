import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-line/40 bg-[#0a0a0a] py-12 px-6 md:px-12 text-muted text-xs font-mono">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-surface border border-line flex items-center justify-center font-display font-bold text-[10px] text-cyan">
            YK
          </span>
          <span>© {new Date().getFullYear()} {profile.name}. ALL RIGHTS RESERVED.</span>
        </div>

        <div className="flex items-center gap-6">
          <span>DESIGNED & ENGINEERED FOR HIGH IMPACT</span>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full border border-line flex items-center justify-center text-muted hover:text-cyan hover:border-cyan/50 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
