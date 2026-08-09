import { motion } from 'framer-motion'
import { ArrowRight, ArrowDownToLine } from 'lucide-react'
import TypingCode from './TypingCode.jsx'
import portrait from '../assets/portrait.png'

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-14 px-6 pt-28 sm:px-10 lg:flex-row lg:justify-between lg:gap-8 lg:pt-24">
      {/* cinematic portrait, centered behind the whole hero */}
      <img
  src={portrait}
  alt="Muhammad Abdullah"
  style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '85vh',
    width: 'auto',
    maxWidth: 'none',
    opacity: 0.55,
    pointerEvents: 'none',
    WebkitMaskImage:
      'radial-gradient(ellipse 60% 70% at center, black 40%, transparent 90%)',
    maskImage:
      'radial-gradient(ellipse 60% 70% at center, black 40%, transparent 90%)',
  }}
/>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-xl text-center lg:text-left"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.05] px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent-mint">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-mint" />
          Available for freelance work
        </span>

        <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Muhammad Abdullah
        </h1>
        <p className="mt-3 font-display text-xl text-accent-blue sm:text-2xl">
          Full Stack Developer
        </p>

        <p className="mt-6 font-body text-base leading-relaxed text-ink-muted sm:text-lg">
          I build complete web applications end to end — from React interfaces
          to Node.js and Django backends, backed by MongoDB — for businesses
          that want to look as good online as they do in person.
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
        className="w-full max-w-md"
      >
        <div className="animate-float">
          <TypingCode />
        </div>
      </motion.div>
    </section>
  )
}

