export default function Badge({ children, variant = 'default' }) {
  const variants = {
    default: 'border-slate-700 bg-slate-900/70 text-slate-200',
    accent: 'border-cyan-400/30 bg-cyan-500/10 text-cyan-200',
    muted: 'border-slate-700/80 bg-slate-800 text-slate-300',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  )
}
