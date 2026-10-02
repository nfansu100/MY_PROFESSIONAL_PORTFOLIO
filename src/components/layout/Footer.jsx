import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUp, ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa6'
import { SiGithub } from 'react-icons/si'
import { contactInfo, socialLinks } from '../../data/social'
import { navigation } from '../../data/navigation'

const socialIcons = { github: SiGithub, linkedin: FaLinkedin, email: Mail }
const year = new Date().getFullYear()

export default function Footer() {
  const reduceMotion = useReducedMotion()

  return (
    <footer className="relative isolate overflow-hidden border-t border-cyan-300/20 bg-[#07131b] text-slate-300">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(34,211,238,0.12),transparent_38%),radial-gradient(ellipse_at_90%_100%,rgba(16,185,129,0.07),transparent_36%),repeating-linear-gradient(135deg,rgba(148,163,184,0.035)_0px,rgba(148,163,184,0.035)_1px,transparent_1px,transparent_28px)]"
      />
      <motion.div
        aria-hidden="true"
        initial={false}
        animate={reduceMotion ? undefined : { x: ['-25%', '125%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute left-0 top-0 h-px w-48 bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent"
      />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: reduceMotion ? 0 : 0.4, ease: 'easeOut' }}
        className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 pb-8 pt-12 sm:px-6 sm:pt-14 lg:grid-cols-[1.2fr_0.9fr_1fr] lg:gap-14 lg:px-8 lg:pb-10"
      >
        <section aria-labelledby="footer-identity-heading" className="max-w-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Portfolio</p>
          <h2 id="footer-identity-heading" className="mt-3 text-xl font-semibold text-white">
            Nfansu O. Barrow
          </h2>
          <p className="mt-1 text-sm font-medium text-cyan-100/80">Embedded Systems &amp; AI Engineer</p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            A portfolio of Embedded Systems & AI Journey.
          </p>
        </section>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Quick links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-5">
            {navigation.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="group flex min-h-10 items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                >
                  <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-cyan-300 opacity-40 transition-opacity group-hover:opacity-100" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="footer-connect-heading">
          <h2 id="footer-connect-heading" className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Connect
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {socialLinks.filter(({ type }) => socialIcons[type]).map(({ label, href, type }) => {
              const Icon = socialIcons[type]
              const isExternal = href.startsWith('https://')
              const accessibleLabel = type === 'email'
                ? `Email ${contactInfo.email}`
                : `Open ${label} profile in a new tab`

              return (
                <li key={type}>
                  <a
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    aria-label={accessibleLabel}
                    className="group inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/40 px-3 text-sm text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-slate-800/70 hover:text-white active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                  >
                    <Icon size={17} aria-hidden="true" className="text-cyan-200 transition-transform group-hover:-translate-y-0.5" />
                    <span>{type === 'email' ? 'Email' : label}</span>
                    {isExternal ? <ArrowUpRight size={14} aria-hidden="true" className="text-slate-500" /> : null}
                  </a>
                </li>
              )
            })}
          </ul>

          <p className="mt-5 flex items-start gap-2 text-sm leading-6 text-slate-400">
            <MapPin size={15} aria-hidden="true" className="mt-1 shrink-0 text-cyan-200" />
            <span>{contactInfo.location}</span>
          </p>
        </section>
      </motion.div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 px-4 py-5 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>&copy; {year} Nfansu O Barrow. All rights reserved.</p>
        <a
          href="#home"
          className="group inline-flex min-h-12 items-center gap-3 self-start rounded-xl border border-cyan-300/35 bg-cyan-300/10 px-5 text-base font-semibold text-cyan-100 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-200/70 hover:bg-cyan-300/15 hover:text-white active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 md:self-auto"
        >
          Back to top
          <ArrowUp size={19} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  )
}
