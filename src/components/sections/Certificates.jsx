import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Award, ExternalLink, FileText, X } from 'lucide-react'
import Badge from '../common/Badge'
import SectionHeading from '../common/SectionHeading'
import { certificates } from '../../data/certificates'

function CertificateViewerModal({ certificate, onClose, reduceMotion }) {
  const triggerRef = useRef(null)

  useEffect(() => {
    if (!certificate) return undefined

    triggerRef.current = document.activeElement

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

      if (triggerRef.current && typeof triggerRef.current.focus === 'function') {
        triggerRef.current.focus()
      }
    }
  }, [certificate, onClose])

  if (!certificate) return null

  const isPdf = certificate.link?.toLowerCase().endsWith('.pdf')

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.18, ease: 'easeOut' }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-sm sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? {} : { opacity: 0, y: 12, scale: 0.985 }}
          transition={{ duration: reduceMotion ? 0 : 0.22, ease: 'easeOut' }}
          onClick={(event) => event.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-[28px] border border-slate-700/80 bg-slate-950 shadow-[0_28px_80px_rgba(2,6,23,0.88)] ring-1 ring-cyan-500/10"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate viewer"
            className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/80 text-slate-300 shadow-lg shadow-slate-950/50 transition-all duration-200 hover:border-cyan-400/50 hover:bg-slate-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:right-4 sm:top-4"
          >
            <X size={18} aria-hidden="true" />
          </button>

          <div className="border-b border-slate-800/90 bg-gradient-to-r from-slate-950 via-slate-950 to-cyan-500/5 px-5 pb-4 pt-14 sm:px-6 sm:pt-16">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cyan-300">Certificate</p>
                <h3 id="certificate-modal-title" className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  {certificate.title}
                </h3>
              </div>
              <Badge variant="accent">{certificate.date}</Badge>
            </div>
          </div>

          <div className="max-h-[calc(92vh-120px)] overflow-y-auto p-4 sm:p-6">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
              {isPdf ? (
                <div className="bg-slate-950">
                  <iframe
                    title={`${certificate.title} certificate`}
                    src={certificate.link}
                    className="block min-h-[420px] w-full bg-slate-950 sm:min-h-[560px]"
                  />
                </div>
              ) : (
                <img
                  src={certificate.link}
                  alt={`${certificate.title} certificate preview`}
                  className="block max-h-[70vh] w-full object-contain bg-slate-950"
                />
              )}
            </div>

            <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-cyan-200/80">Issued by</p>
                <p className="mt-2 text-base font-medium text-white">{certificate.issuer}</p>
              </div>

              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-200 transition-all duration-200 hover:border-cyan-300/60 hover:bg-cyan-500/10 hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                Open in new tab
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Certificates() {
  const reduceMotion = useReducedMotion()
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  return (
    <>
      <section id="certificates" className="relative overflow-hidden border-t border-white/10 bg-slate-950/35 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_32%),linear-gradient(180deg,rgba(15,23,42,0.76),rgba(15,23,42,0.90))]" aria-hidden="true" />
        <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] [background-size:42px_42px]" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Certificates"
            title="Evidence of ongoing learning in AI, web development, and technical fundamentals"
            description="Certificates help show my continued growth across computer vision, machine learning, MATLAB, and practical front-end skills."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certificates.map((certificate, index) => {
              const isPdf = certificate.link?.toLowerCase().endsWith('.pdf')

              return (
                <motion.article
                  key={certificate.id || certificate.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: reduceMotion ? 0 : 0.35, delay: reduceMotion ? 0 : index * 0.05, ease: 'easeOut' }}
                  whileHover={reduceMotion ? undefined : { y: -6 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-800/90 bg-slate-900/75 p-4 shadow-[0_18px_45px_rgba(2,6,23,0.35)] ring-1 ring-inset ring-white/5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900/80 hover:shadow-[0_22px_60px_rgba(34,211,238,0.10)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-slate-950/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

                  <div className="relative flex-1">
                    <div className="relative mb-5 overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-950/80">
                      {isPdf ? (
                        <div className="flex h-52 items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.8),rgba(15,23,42,0.95))]">
                          <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan-400/30 bg-slate-900/70 px-5 py-4 text-center shadow-[0_10px_30px_rgba(34,211,238,0.10)]">
                            <FileText className="h-8 w-8 text-cyan-200" aria-hidden="true" />
                            <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200">PDF</span>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={certificate.link}
                          alt={`${certificate.title} preview`}
                          className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      )}
                    </div>

                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-200">
                        <Award size={18} aria-hidden="true" />
                      </div>
                      <Badge variant="muted">{certificate.date}</Badge>
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-white">{certificate.title}</h3>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-cyan-300">{certificate.issuer}</p>
                    <p className="mt-4 text-sm leading-6 text-slate-300">{certificate.description}</p>
                  </div>

                  <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-slate-800 pt-4">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Credential</span>

                    <button
                      type="button"
                      onClick={() => setSelectedCertificate(certificate)}
                      className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-200 transition-all duration-200 hover:border-cyan-300/60 hover:bg-cyan-500/10 hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                    >
                      View certificate
                    </button>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <CertificateViewerModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        reduceMotion={reduceMotion}
      />
    </>
  )
}
