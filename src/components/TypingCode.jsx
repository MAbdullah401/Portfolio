import { useEffect, useState } from 'react'

const LINES = [
  { text: 'const developer = {', indent: 0 },
  { text: "name: 'Muhammad Abdullah',", indent: 1 },
  { text: "role: 'Web Developer',", indent: 1 },
  { text: "stack: ['React', 'Node.js', 'Python', 'MongoDB'],", indent: 1 },
  { text: 'focus: () => buildFast(),', indent: 1 },
  { text: 'availability: true,', indent: 1 },
  { text: '}', indent: 0 },
]

const FULL_TEXT = LINES.map((l) => '  '.repeat(l.indent) + l.text)

export default function TypingCode() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (lineIndex >= FULL_TEXT.length) {
      setDone(true)
      return
    }
    const currentLine = FULL_TEXT[lineIndex]
    if (charIndex < currentLine.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 28)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setLineIndex((l) => l + 1)
      setCharIndex(0)
    }, 180)
    return () => clearTimeout(t)
  }, [charIndex, lineIndex])

  const renderedLines = FULL_TEXT.slice(0, lineIndex).concat(
    lineIndex < FULL_TEXT.length ? [FULL_TEXT[lineIndex].slice(0, charIndex)] : []
  )

  const colorize = (line) => {
    if (line.includes(':')) {
      const [key, ...rest] = line.split(':')
      return (
        <>
          <span className="text-accent-blue">{key}</span>
          <span className="text-ink-muted">:</span>
          <span className="text-accent-mint">{rest.join(':')}</span>
        </>
      )
    }
    return <span className="text-ink-muted">{line}</span>
  }

  return (
    <div className="glass-panel w-full max-w-md overflow-hidden">
      <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-xs text-ink-faint">profile.js</span>
      </div>
      <pre className="min-h-[13rem] px-5 py-4 font-mono text-[13px] leading-6 sm:text-sm">
        {renderedLines.map((line, i) => (
          <div key={i}>
            {colorize(line)}
            {done === false && i === renderedLines.length - 1 && (
              <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-[2px] animate-blink bg-accent-blue" />
            )}
          </div>
        ))}
      </pre>
    </div>
  )
}
