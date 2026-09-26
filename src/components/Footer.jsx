import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolioData'
import { scrollToTarget } from '../utils/smoothScroll'

export default function Footer() {
  const handleScrollTop = () => {
    scrollToTarget('#hero', 0)
  }

  return (
    <footer className="border-t border-black/[0.06] dark:border-white/[0.08] bg-light-bg dark:bg-darktheme-bg pt-12 pb-14 safe-bottom px-6 sm:px-10 lg:px-16 font-mono text-xs text-light-muted dark:text-darktheme-muted transition-colors duration-700">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Identity */}
        <div className="flex items-center gap-3.5 text-left">
          <div className="w-8 h-8 rounded-full bg-dark text-white dark:bg-darktheme-elevated dark:text-darktheme-text dark:border dark:border-white/10 flex items-center justify-center font-display font-bold text-xs">
            YK
          </div>
          <div>
            <div className="text-light-text dark:text-darktheme-text font-bold tracking-wider">
              {profile.name.toUpperCase()}
            </div>
            <div className="text-[10px] text-light-muted dark:text-darktheme-muted">
              FULL STACK / APPLIED AI ENGINEER · © {new Date().getFullYear()}
            </div>
          </div>
        </div>

        {/* Center: System Status Indicator */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-white/5 border border-black/[0.08] dark:border-white/10 text-[10px] text-light-text dark:text-darktheme-text font-semibold shadow-soft-sm">
          <span>SYSTEM ONLINE</span>
          <span className="w-2 h-2 rounded-full bg-light-mint dark:bg-darktheme-mint animate-pulse" />
        </div>

        {/* Links & Back To Top */}
        <div className="flex items-center gap-6 text-[11px]">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-light-text dark:hover:text-darktheme-text transition-colors font-medium"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-light-text dark:hover:text-darktheme-text transition-colors font-medium"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-light-text dark:hover:text-darktheme-text transition-colors font-medium"
          >
            Email
          </a>

          <button
            onClick={handleScrollTop}
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 text-light-text dark:text-darktheme-text hover:bg-black/[0.08] dark:hover:bg-white/10 transition-colors"
          >
            <span>TOP</span>
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
