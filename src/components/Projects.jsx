import { motion } from 'framer-motion'
import { Hammer } from 'lucide-react'
import GlassCard from './GlassCard.jsx'

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-accent-blue">
          Selected Work
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Projects
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <GlassCard className="flex flex-col items-center gap-4 px-6 py-16 text-center" hover={false}>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.06] text-accent-blue">
            <Hammer size={24} />
          </div>
          <h3 className="font-display text-xl font-semibold text-ink">
            No projects yet
          </h3>
          <p className="max-w-sm font-body text-sm leading-relaxed text-ink-muted">
            I'm currently building out my first projects — check back soon
            to see my work here.
          </p>
        </GlassCard>
      </motion.div>
    </section>
  )
}
