import { motion } from 'framer-motion'
import GlassCard from './GlassCard.jsx'
import { Mail, MessageCircle, Linkedin, Briefcase } from 'lucide-react'

const SOCIALS = [
  { icon: Mail, label: 'Email', href: 'chmuhammadabdullah401@gmail.com' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/+923251679665' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  { icon: Briefcase, label: 'Upwork', href: 'https://www.upwork.com/freelancers/~01c18207d1fd43810e?mp_source=share' },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-28 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <GlassCard className="px-6 py-14 text-center sm:px-14" hover={false}>
          <span className="font-mono text-xs uppercase tracking-widest text-accent-blue">
            Contact
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Let's build something together
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-ink-muted">
            Have a project in mind or just want to say hello? My inbox is
            open — I usually reply within a day.
          </p>

          <a
            href="mailto:chmuhammadabdullah401@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-blue px-7 py-3 font-body text-sm font-medium text-base transition-transform hover:-translate-y-0.5 hover:shadow-glass-hover"
          >
            <Mail size={16} />
            Say hello
          </a>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 border-t border-white/[0.06] pt-8">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 font-body text-xs text-ink-muted transition-colors hover:border-white/[0.16] hover:text-ink"
              >
                <s.icon size={14} />
                {s.label}
              </a>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </section>
  )
}
