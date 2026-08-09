import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <nav
        className={`glass flex w-full max-w-3xl items-center justify-between rounded-2xl px-5 py-3 transition-shadow duration-500 ${
          scrolled ? 'shadow-glass' : ''
        }`}
      >
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-ink">
          MA<span className="text-accent-blue">.</span>
        </a>

        <ul className="hidden gap-8 font-body text-sm text-ink-muted sm:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2 font-body text-sm text-ink transition-all hover:bg-white/[0.12] sm:block"
        >
          Let's talk
        </a>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="text-ink sm:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="glass absolute left-4 right-4 top-[4.5rem] rounded-2xl p-4 sm:hidden">
          <ul className="flex flex-col gap-4 font-body text-sm text-ink-muted">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
