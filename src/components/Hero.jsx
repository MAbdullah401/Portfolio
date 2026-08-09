import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowDownToLine } from 'lucide-react'
import TypingCode from './TypingCode.jsx'
import portrait from '../assets/portrait.png'

export default function Hero() {
  const [fade, setFade] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      // Fully faded out by the time you've scrolled one viewport height down.
      const fadeDistance = window.innerHeight * 0.9
      const ratio = 1 - Math.min(window.scrollY / fadeDistance, 1)
      setFade(ratio)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="top" className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-14 px-6 pt-28 sm:px-10 lg:flex-row lg:justify-between lg:gap-8 lg:pt-24">
      {/* cinematic portrait, pinned to the viewport — fades with scroll instead of moving */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: 0.55 * fade,
          transition: 'opacity 0.15s linear',
        }}
      >
        <img
          src={portrait}
          alt="Muhammad Abdullah"
          className="h-[85vh] w-auto max-w-none sm:h-[90vh]"
          style={{ display: 'block' }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 max-w-xl text-center lg:text-left"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.05] px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent-mint">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-mint" />
          Available for freelance work
        </span>

        <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Muhammad Abdullah
        </h1>
        <p className="mt-3 font-display text-xl text-accent-blue sm:text-2xl">
          Full stack developer & UI/UX designer
        </p>

        <p className="mt-6 font-body text-base leading-relaxed text-ink-muted sm:text-lg">
          I design and build fast, modern websites for businesses that want to
          look as good online as they do in person — from first pixel to
          production deploy.
        </p>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
          <a
            href="#work"
            className="group flex items-center gap-2 rounded-full bg-accent-blue px-6 py-3 font-body text-sm font-medium text-base transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-glass-hover"
          >
            View my work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="glass glass-hover flex items-center gap-2 rounded-full px-6 py-3 font-body text-sm font-medium text-ink"
          >
            Get in touch
            <ArrowDownToLine size={16} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="animate-float">
          <TypingCode />
        </div>
      </motion.div>
    </section>
  )
}