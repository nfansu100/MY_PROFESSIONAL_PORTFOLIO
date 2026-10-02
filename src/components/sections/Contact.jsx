import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, BriefcaseBusiness, Mail, MapPin, MessageSquareText, Phone } from 'lucide-react'
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
    meta: 'Reach me directly',
  },
  {
    label: 'Phone',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
    icon: Phone,
    meta: 'Available for calls',
  },
  {
    label: 'Location',
    value: contactInfo.location,
    icon: MapPin,
    meta: 'Based in Morocco',
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
        className="pointer-events-none absolute inset-0 opacity-90 [background-image:linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] [background-size:44px_44px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_32%),linear-gradient(180deg,rgba(15,23,42,0.18),rgba(2,8,23,0.96))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_45%)] lg:block"
      />

      <motion.div
        aria-hidden="true"
        initial={false}
        animate={reduceMotion ? undefined : { x: ['-20%', '120%'] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute left-[-15%] top-[35%] h-px w-44 bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent"
      />
      <motion.div
        aria-hidden="true"
        initial={false}
        animate={reduceMotion ? undefined : { opacity: [0.3, 0.8, 0.3], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-[8%] left-[12%] hidden h-24 w-24 rounded-full border border-cyan-400/20 bg-cyan-400/5 blur-2xl lg:block"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something meaningful together"
          description="I welcome relevant engineering opportunities, collaborative projects, and thoughtful conversations around embedded systems and AI."
        />

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-10 xl:gap-14">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: reduceMotion ? 0 : 0.4, ease: 'easeOut' }}
            className="min-w-0"
          >
            <div className="flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-cyan-300" aria-hidden="true" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                Contact information
              </h3>
            </div>

            <div className="mt-5 space-y-3">
              {contactMethods.map(({ label, value, href, icon: Icon, meta }, index) => {
                const Wrapper = href ? 'a' : 'div'

                return (
                  <motion.div
                    key={label}
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: reduceMotion ? 0 : 0.35, delay: index * 0.06 }}
                  >
                    <Wrapper
                      href={href}
                      className="group flex min-w-0 items-center gap-3 rounded-2xl border border-slate-700/80 bg-slate-900/70 p-3.5 shadow-[0_15px_35px_rgba(15,23,42,0.24)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/45 hover:bg-slate-900/90 hover:shadow-[0_18px_45px_rgba(34,211,238,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-200 shadow-inner shadow-cyan-500/10 transition-transform duration-300 group-hover:scale-105 group-hover:text-cyan-100">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">{label}</span>
                        <span className="mt-1 block break-words text-sm font-medium text-white group-hover:text-cyan-100">
                          {value}
                        </span>
                        <span className="mt-1 block text-[11px] text-slate-400">{meta}</span>
                      </span>
                      {href ? <ArrowUpRight size={16} className="ml-auto shrink-0 text-slate-500 transition-colors duration-300 group-hover:text-cyan-300" aria-hidden="true" /> : null}
                    </Wrapper>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-500/10 text-emerald-300">
                  <BriefcaseBusiness size={16} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{contactInfo.availability}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-slate-400">Open to collaboration</p>
                </div>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Professional areas of interest">
                {contactInfo.interests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full border border-slate-700/80 bg-slate-900/60 px-2.5 py-1.5 text-[11px] font-medium text-slate-300"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                Professional profiles
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-3">
                {socialLinks.map(({ label, href, type }, index) => {
                  const Icon = socialIcons[type]
                  const isExternal = href.startsWith('https://')

                  return (
                    <motion.a
                      key={label}
                      href={href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: reduceMotion ? 0 : 0.3, delay: index * 0.05 }}
                      aria-label={type === 'email' ? `Email ${contactInfo.email}` : `Open ${label} profile`}
                      className="group flex min-w-0 items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/65 px-2 py-3 text-xs font-medium text-slate-200 shadow-[0_12px_25px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/45 hover:text-white hover:shadow-[0_16px_32px_rgba(14,165,233,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                    >
                      <Icon size={16} className="shrink-0 text-cyan-200 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
                      <span>{label}</span>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.08, ease: 'easeOut' }}
            className="min-w-0 rounded-[28px] border border-slate-200/80 bg-slate-50/95 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.28)] backdrop-blur-sm sm:p-7"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-800">Direct message</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950 sm:text-2xl">Send me a message</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Share a little context and I’ll get back to you by email.
                </p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-800/15 bg-cyan-800/5 text-cyan-900 shadow-inner shadow-cyan-500/10">
                <MessageSquareText size={18} aria-hidden="true" />
              </div>
            </div>

            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
