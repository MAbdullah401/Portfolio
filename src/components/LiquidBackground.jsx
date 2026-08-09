export default function LiquidBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-base noise">
      <div className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-accent-blue/30 blur-[110px] animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-accent-violet/25 blur-[110px] animate-blob-delay" />
      <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-accent-mint/20 blur-[110px] animate-blob" />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at top, black 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
