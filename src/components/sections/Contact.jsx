import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa6'
import { SiGithub } from 'react-icons/si'
import SectionHeading from '../common/SectionHeading'
import ContactForm from '../contact/ContactForm'
import { contactInfo, socialLinks } from '../../data/social'

const contactMethods = [
  {
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
    icon: Phone,
  },
  {
    label: 'Location',
    value: contactInfo.location,
    icon: MapPin,
  },
]

const socialIcons = { github: SiGithub, linkedin: FaLinkedin, email: Mail }

export default function Contact() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-white/10 bg-slate-950 py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(103,163,177,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(103,163,177,0.07)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_82%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_72%,rgba(34,211,238,0.09),transparent_55%),linear-gradient(180deg,rgba(15,23,42,0.24),rgba(2,8,23,0.96))]"
      />
      <motion.div
        aria-hidden="true"
        initial={false}
        animate={reduceMotion ? undefined : { x: ['-12vw', '112vw'] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute left-0 top-[36%] h-px w-40 bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something meaningful together"
          description="I welcome relevant engineering opportunities, collaborative projects, and thoughtful conversations around embedded systems and AI."
        />

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-10 xl:gap-14">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: 'easeOut' }}
            className="min-w-0"
          >
            <div className="flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-cyan-300" aria-hidden="true" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                Contact information
              </h3>
            </div>

            <div className="mt-5 space-y-3">
              {contactMethods.map(({ label, value, href, icon: Icon }) => {
                const Wrapper = href ? 'a' : 'div'

                return (
                  <Wrapper
                    key={label}
                    href={href}
                    className="group flex min-w-0 items-center gap-3 rounded-md border border-slate-800 bg-slate-900/65 p-3.5 transition-colors hover:border-cyan-400/40 hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-cyan-500/25 bg-cyan-500/10 text-cyan-200">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-[0.12em] text-slate-400">{label}</span>
                      <span className="mt-1 block break-words text-sm font-medium text-white group-hover:text-cyan-100">
                        {value}
                      </span>
                    </span>
                    {href ? <ArrowUpRight size={16} className="ml-auto shrink-0 text-slate-500 group-hover:text-cyan-300" aria-hidden="true" /> : null}
                  </Wrapper>
                )
              })}
            </div>

            <div className="mt-5 border-l-2 border-emerald-400/70 pl-4">
              <p className="text-sm font-semibold text-white">{contactInfo.availability}</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">Areas of interest</p>
              <ul className="mt-2 flex flex-wrap gap-2" aria-label="Professional areas of interest">
                {contactInfo.interests.map((interest) => (
                  <li key={interest} className="rounded-sm border border-slate-700/80 px-2 py-1 text-xs text-slate-300">
                    {interest}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                Professional profiles
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {socialLinks.map(({ label, href, type }) => {
                  const Icon = socialIcons[type]
                  const isExternal = href.startsWith('https://')

                  return (
                    <a
                      key={label}
                      href={href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      aria-label={type === 'email' ? `Email ${contactInfo.email}` : `Open ${label} profile`}
                      className="group flex min-w-0 items-center justify-center gap-2 rounded-md border border-slate-800 bg-slate-900/65 px-2 py-3 text-xs font-medium text-slate-200 transition-all hover:-translate-y-0.5 hover:border-cyan-400/45 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                    >
                      <Icon size={16} className="shrink-0 text-cyan-200 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
                      <span>{label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 0.06, ease: 'easeOut' }}
            className="min-w-0 rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-[0_20px_55px_rgba(2,6,23,0.22)] sm:p-7"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-800">Direct message</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950 sm:text-2xl">Send me a message</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Share a little context and I’ll get back to you by email.
                </p>
              </div>
              <div className="hidden h-10 w-10 items-center justify-center rounded-md border border-cyan-800/15 bg-cyan-800/5 text-cyan-900 sm:flex">
                <Send size={18} aria-hidden="true" />
              </div>
            </div>

            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
