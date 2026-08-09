export default function GlassCard({ children, className = '', hover = true }) {
  return (
    <div className={`glass-panel ${hover ? 'glass-hover' : ''} ${className}`}>
      {children}
    </div>
  )
}
