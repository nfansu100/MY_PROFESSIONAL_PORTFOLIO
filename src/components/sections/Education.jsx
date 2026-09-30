import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BookOpenText, CalendarRange, GraduationCap, MapPin, X } from 'lucide-react'
import Badge from '../common/Badge'
import SectionHeading from '../common/SectionHeading'
import { education } from '../../data/education'

function EducationDetailsModal({ item, onClose, reduceMotion }) {
  useEffect(() => {
    if (!item) return undefined

    const previousOverflow = document.body.style.overflow
    const previousPaddingRight = document.body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [item, onClose])

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.18, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="education-modal-title"
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 px-5 py-5 sm:px-6">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Academic record
                </p>
                <h3 id="education-modal-title" className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  {item.program}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close education details"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 text-slate-300 transition-colors hover:border-slate-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-[min(80dvh,42rem)] overflow-y-auto p-5 sm:p-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="accent">{item.period}</Badge>
                <Badge variant="muted">{item.highlight}</Badge>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-300">
                <MapPin size={15} className="text-cyan-300" aria-hidden="true" />
                <span>{item.location}</span>
              </div>

              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200">
                  <BookOpenText size={15} aria-hidden="true" />
                  Institution
                </div>
                <p className="mt-3 text-base leading-7 text-slate-200">{item.institution}</p>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">{item.description}</p>

              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200">
                  <CalendarRange size={15} aria-hidden="true" />
                  Academic overview
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{item.details}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default function Education() {
  const reduceMotion = useReducedMotion()
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <section id="education" className="relative overflow-hidden border-t border-white/10 bg-slate-950/25 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_35%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic journey with a focus on engineering and intelligent systems"
          description="My education has developed a strong technical base from early STEM learning to specialization in embedded systems and AI engineering."
        />

        <div className="relative mt-12">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-cyan-300/70 to-transparent md:left-1/2 md:-translate-x-1/2 md:block" aria-hidden="true" />

          <div className="space-y-8 md:space-y-10">
            {education.map((item, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.article
                  key={item.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: reduceMotion ? 0 : 0.35, ease: 'easeOut' }}
                  className={`relative pl-9 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}
                >
                  <div className="absolute left-0 top-7 h-3.5 w-3.5 rounded-full border border-cyan-300/80 bg-cyan-300 shadow-[0_0_0_4px_rgba(34,211,238,0.12)] md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />

                  <div className={`relative rounded-2xl border border-slate-800 bg-slate-900/75 p-5 shadow-xl shadow-slate-950/25 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:shadow-cyan-500/10 motion-safe:hover:-translate-y-1 md:w-1/2 md:p-6 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-200">
                          <GraduationCap size={18} aria-hidden="true" />
                        </div>

                        <div>
                          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-cyan-200">
                            {item.highlight}
                          </p>
                          <h3 className="mt-1 text-xl font-semibold text-white">{item.program}</h3>
                        </div>
                      </div>

                      <Badge variant="muted">{item.period}</Badge>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-slate-400">
                      <MapPin size={12} className="text-cyan-300" aria-hidden="true" />
                      {item.location}
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{item.summary}</p>

                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-800 pt-4">
                      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-slate-400">
                        <CalendarRange size={12} className="text-cyan-300" aria-hidden="true" />
                        {item.period}
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedItem(item)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition-colors hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                      >
                        View details
                        <ArrowRight size={16} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>

      <EducationDetailsModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        reduceMotion={reduceMotion}
      />
    </section>
  )
}
