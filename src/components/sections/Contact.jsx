import { ArrowUpRight, GitBranch, MapPin, Send } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'

const contactLinks = [
  {
    label: 'GitHub',
    value: 'nfansu100',
    href: 'https://github.com/nfansu100',
    icon: GitBranch,
  },
  {
    label: 'Location',
    value: 'Fès, Morocco',
    href: '#home',
    icon: MapPin,
  },
  {
    label: 'Portfolio',
    value: 'Current portfolio',
    href: 'https://nfansu100.github.io/portfolio/',
    icon: Send,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build meaningful systems together"
        description="I’m open to technical opportunities, collaborative projects, and conversations around embedded systems, AI, and intelligent edge solutions."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {contactLinks.map(({ label, value, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-colors hover:border-cyan-500/40 hover:bg-slate-900"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-200">
                <Icon size={18} />
              </div>
              <ArrowUpRight size={18} className="text-slate-500 transition-colors group-hover:text-cyan-300" />
            </div>

            <p className="mt-6 text-sm uppercase tracking-[0.18em] text-slate-400">{label}</p>
            <p className="mt-2 text-lg font-semibold text-white">{value}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
