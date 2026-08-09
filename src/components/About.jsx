import { motion } from 'framer-motion'
import GlassCard from './GlassCard.jsx'

const FOCUS = [
  'Building full stack web applications',
  'Optimizing sites for speed and SEO',
  'Turning designs into pixel-accurate code',
  'Shipping projects clients can maintain',
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 sm:px-10">
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent-blue">
            About
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            I build the web,{' '}
            <span className="text-accent-mint">one clean component at a time.</span>
          </h2>
          <p className="mt-5 font-body leading-relaxed text-ink-muted">
            I'm a full stack developer who enjoys taking an idea from a blank
            file to a live product. I work across React, Node.js, Python, and
            Django, focusing on clean code, fast load times, and interfaces
            that feel good to use — not just look good in a screenshot.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-3"
        >
          <GlassCard className="p-6 sm:p-8" hover={false}>
            <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-mint animate-pulse" />
              Currently focused on
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {FOCUS.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-sm text-ink-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
