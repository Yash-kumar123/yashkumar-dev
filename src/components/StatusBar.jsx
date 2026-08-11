import { useEffect, useState } from 'react'
import { Clock, MapPin, Radio, Zap } from 'lucide-react'

export default function StatusBar() {
  const [timeStr, setTimeStr] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatted = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      })
      setTimeStr(formatted)
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full bg-void/90 backdrop-blur-md border-y border-white/10 py-2.5 px-6 md:px-12 font-mono text-[11px] text-ash flex flex-wrap items-center justify-between gap-4 select-none z-30 relative">
      {/* Left: Location & Live Clock */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-1.5 text-white font-medium">
          <MapPin size={12} className="text-cyan" />
          <span>Ghaziabad, IN</span>
        </div>

        <span className="text-white/20 hidden sm:inline">•</span>

        <div className="flex items-center gap-1.5 text-cyan">
          <Clock size={12} />
          <span className="tabular-nums font-semibold">{timeStr || '02:43:00 PM'} IST</span>
          <span className="text-[10px] text-ash">(UTC+5:30)</span>
        </div>
      </div>

      {/* Center: Live Status Indicator */}
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan">
        <span className="w-2 h-2 rounded-full bg-cyan animate-ping" />
        <span className="font-semibold tracking-wide uppercase text-[10px]">
          Open for Full-Time Roles &amp; Internships
        </span>
      </div>

      {/* Right: Currently Shipping */}
      <div className="hidden lg:flex items-center gap-2 text-silver">
        <Zap size={12} className="text-cyan" />
        <span>Currently Shipping: <strong className="text-white font-normal">Multi-Agent AI &amp; Real-Time Systems</strong></span>
      </div>
    </div>
  )
}
