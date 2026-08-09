import { motion } from 'framer-motion'
import { Code2, Server, Wrench } from 'lucide-react'
import GlassCard from './GlassCard.jsx'

const GROUPS = [
  {
    icon: Code2,
    title: 'Frontend',
    items: ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    icon: Server,
    title: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs'],
  },
  {
    icon: Wrench,
    title: 'Database & Tools',
    items: ['SQL', 'MongoDB', 'Git & GitHub', 'Vite', 'Responsive design'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-accent-blue">
          Skills
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Tools I reach for
        </h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <GlassCard className="h-full p-6">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-accent-blue">
                <group.icon size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-xs text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
