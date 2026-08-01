import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 md:px-10 py-8 text-center">
      <p className="text-muted text-xs">
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS &amp; Framer Motion.
      </p>
    </footer>
  )
}
