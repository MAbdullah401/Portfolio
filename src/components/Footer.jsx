export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-10 pt-4 sm:px-10">
      <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-center font-mono text-xs text-ink-faint sm:flex-row sm:text-left">
        <span>© {new Date().getFullYear()} MA.dev — © 2026 All rights reserved.</span>
      </div>
    </footer>
  )
}
