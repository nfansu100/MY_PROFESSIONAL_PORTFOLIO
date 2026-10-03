import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Download, FileText, X } from 'lucide-react'
import { aboutProfile, areasOfInterest, curriculumVitae, technicalFocus } from '../../data/about'
import SectionHeading from '../common/SectionHeading'

const focusPreviewCount = 4
const interestPreviewCount = 3

function ListDialog({ content, onClose, reduceMotion }) {
  const dialogRef = useRef(null)
  const closeTimerRef = useRef(null)
  const closingRef = useRef(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!content || !dialog) return undefined

    closingRef.current = false
    setIsClosing(false)
    if (!dialog.open) dialog.showModal()

    return () => {
      window.clearTimeout(closeTimerRef.current)
      if (dialog.open) dialog.close()
    }
  }, [content])

  const requestClose = () => {
    if (closingRef.current) return
    closingRef.current = true
    setIsClosing(true)
    closeTimerRef.current = window.setTimeout(onClose, reduceMotion ? 0 : 180)
  }

  return (
    <AnimatePresence>
      {content ? (
        <motion.dialog
          key={content.title}
          ref={dialogRef}
          id="about-list-dialog"
          aria-labelledby="about-list-title"
          aria-describedby="about-list-description"
          onCancel={(event) => {
            event.preventDefault()
            requestClose()
          }}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              event.preventDefault()
              requestClose()
            }
          }}
          onClick={(event) => {
            if (event.target === dialogRef.current) requestClose()
          }}
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={
            isClosing
              ? { opacity: 0, y: 8, scale: 0.98 }
              : { opacity: 1, y: 0, scale: 1 }
          }
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: reduceMotion ? 0 : 0.18, ease: 'easeOut' }}
          className="m-auto max-h-[min(86dvh,48rem)] w-[calc(100%-2rem)] max-w-3xl overflow-hidden rounded-lg border border-slate-700 bg-slate-950 p-0 text-slate-100 shadow-2xl backdrop:bg-slate-950/75 backdrop:backdrop-blur-[2px]"
        >
          <div className="flex max-h-[min(86dvh,48rem)] min-h-0 flex-col">
            <header className="flex shrink-0 items-start justify-between gap-5 border-b border-slate-800 px-5 py-5 sm:px-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  About Nfansu
                </p>
                <h2 id="about-list-title" className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                  {content.title}
                </h2>
                <p id="about-list-description" className="mt-1 text-sm text-slate-400">
                  {content.description}
                </p>
              </div>
              <button
                type="button"
                autoFocus
                onClick={requestClose}
                aria-label="Close dialog"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-slate-700 text-slate-300 transition-colors hover:border-slate-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </header>
            <ul className="grid min-h-0 gap-3 overflow-y-auto overscroll-contain p-5 sm:grid-cols-2 sm:p-7">
              {content.items.map((item, index) => (
                <li
                  key={item}
                  className="flex min-h-20 items-center gap-4 rounded-md border border-slate-800 bg-slate-900/60 px-4 py-4"
                >
                  <span className="font-mono text-xs text-cyan-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-medium leading-6 text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.dialog>
      ) : null}
    </AnimatePresence>
  )
}

function CVPreviewDialog({ cv, onClose, reduceMotion }) {
  const dialogRef = useRef(null)
  const closeTimerRef = useRef(null)
  const closingRef = useRef(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!cv || !dialog) return undefined

    closingRef.current = false
    setIsClosing(false)
    if (!dialog.open) dialog.showModal()

    return () => {
      window.clearTimeout(closeTimerRef.current)
      if (dialog.open) dialog.close()
    }
  }, [cv])

  const requestClose = () => {
    if (closingRef.current) return
    closingRef.current = true
    setIsClosing(true)
    closeTimerRef.current = window.setTimeout(onClose, reduceMotion ? 0 : 160)
  }

  return (
    <AnimatePresence>
      {cv ? (
        <motion.dialog
          key={cv.language}
          ref={dialogRef}
          id="cv-preview-dialog"
          aria-labelledby="cv-preview-title"
          aria-describedby="cv-preview-description"
          onCancel={(event) => {
            event.preventDefault()
            requestClose()
          }}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              event.preventDefault()
              requestClose()
            }
          }}
          onClick={(event) => {
            if (event.target === dialogRef.current) requestClose()
          }}
          initial={{ opacity: 0, y: 8, scale: 0.99 }}
          animate={
            isClosing
              ? { opacity: 0, y: 8, scale: 0.99 }
              : { opacity: 1, y: 0, scale: 1 }
          }
          exit={{ opacity: 0, y: 8, scale: 0.99 }}
          transition={{ duration: reduceMotion ? 0 : 0.16, ease: 'easeOut' }}
          className="m-auto h-[min(92dvh,64rem)] max-h-[calc(100dvh-1rem)] w-[calc(100%-1rem)] max-w-6xl overflow-hidden rounded-lg border border-slate-700 bg-slate-950 p-0 text-slate-100 shadow-2xl backdrop:bg-slate-950/80 backdrop:backdrop-blur-[2px]"
        >
          <div className="flex h-full min-h-0 flex-col">
            <header className="flex shrink-0 items-start justify-between gap-4 border-b border-slate-800 px-4 py-3 sm:px-6 sm:py-4">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                  Curriculum Vitae
                </p>
                <h2 id="cv-preview-title" className="mt-1 text-lg font-semibold text-white sm:text-xl">
                  {cv.language} CV
                </h2>
                <p id="cv-preview-description" className="mt-1 text-xs text-slate-400 sm:text-sm">
                  Use the document viewer to scroll through the CV.
                </p>
              </div>
              <button
                type="button"
                autoFocus
                onClick={requestClose}
                aria-label="Close CV preview"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-700 text-slate-300 transition-colors hover:border-slate-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </header>
            <div className="min-h-0 flex-1 overflow-hidden bg-slate-900">
              <iframe
                src={cv.url}
                title={`${cv.language} curriculum vitae PDF`}
                className="block h-full w-full border-0"
              />
            </div>
            <footer className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-slate-800 px-4 py-3 sm:px-6">
              <p className="min-w-0 break-all text-xs text-slate-400">{cv.fileName}</p>
              <a
                href={cv.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-md bg-cyan-300 px-3 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                Open CV in New Tab <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </footer>
          </div>
        </motion.dialog>
      ) : null}
    </AnimatePresence>
  )
}

export default function About() {
  const sectionRef = useRef(null)
  const cvTriggerRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const [activeList, setActiveList] = useState(null)
  const [activeCv, setActiveCv] = useState(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const gridY = useTransform(scrollYProgress, [0, 1], [12, -12])
  const gridOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.28, 0.72, 0.72, 0.28])

  useEffect(() => {
    if (!activeCv) cvTriggerRef.current?.focus()
  }, [activeCv])

  useEffect(() => {
    if (!activeList && !activeCv) return undefined

    const body = document.body
    const previousOverflow = body.style.overflow
    const previousPaddingRight = body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`

    return () => {
      body.style.overflow = previousOverflow
      body.style.paddingRight = previousPaddingRight
    }
  }, [activeList, activeCv])

  const openList = (type) => {
    setActiveList(
      type === 'focus'
        ? {
            title: 'Technical Focus',
            description: 'Technical domains I aspire work across.',
            items: technicalFocus,
          }
        : {
            title: 'Areas of Interest',
            description: 'Topics I am currently exploring.',
            items: areasOfInterest,
          },
    )
  }

  const closeList = () => {
    setActiveList(null)
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative isolate overflow-hidden border-t border-white/10 bg-slate-950 py-20"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={reduceMotion ? { opacity: 0.5 } : { y: gridY, opacity: gridOpacity }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(103, 163, 177, 0.075) 1px, transparent 1px), linear-gradient(90deg, rgba(103, 163, 177, 0.075) 1px, transparent 1px)',
            backgroundPosition: 'center top',
            backgroundSize: '52px 52px',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
          }}
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/85 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-slate-900/40"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Embedded Systems & AI Engineering"
          description="Final-year Master’s student at ENSAF, Fès, focused on bridging embedded computing with artificial intelligence."
        />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: reduceMotion ? 0 : 0.38, delay: reduceMotion ? 0 : 0.08, ease: 'easeOut' }}
          className="mt-8 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-12"
        >
          <article className="min-w-0 rounded-md border border-slate-800 bg-slate-950/85 p-5 sm:p-6 md:col-span-2 xl:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-cyan-300" aria-hidden="true" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                Professional Profile
              </h3>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-7">
              {aboutProfile.summary}
            </p>
          </article>

          <section
            aria-labelledby="technical-focus-title"
            className="min-w-0 rounded-md border border-slate-800 bg-slate-950/85 p-5 sm:p-6 md:col-span-1 xl:col-span-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">01 / Expertise</p>
                <h3 id="technical-focus-title" className="mt-1 text-lg font-semibold text-white">
                  Technical Focus
                </h3>
              </div>
              {technicalFocus.length > focusPreviewCount ? (
                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-controls="about-list-dialog"
                  onClick={() => openList('focus')}
                  className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium text-cyan-200 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                >
                  View all <ChevronDown size={15} aria-hidden="true" />
                </button>
              ) : null}
            </div>
              <ul className="mt-5 grid auto-rows-fr gap-3 sm:grid-cols-2">
              {technicalFocus.slice(0, focusPreviewCount).map((item, index) => (
                <li
                  key={item}
                  className="group flex min-h-20 min-w-0 items-start gap-3 rounded-md border border-slate-800 bg-slate-900/90 p-3.5 transition-[background-color,border-color,transform] duration-200 hover:border-cyan-300/40 hover:bg-slate-900 motion-safe:hover:-translate-y-0.5 active:translate-y-0 sm:p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-slate-700 bg-slate-950/60 font-mono text-[10px] text-cyan-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="min-w-0 break-words pt-0.5 text-sm font-medium leading-5 text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section
            aria-labelledby="areas-interest-title"
            className="min-w-0 rounded-md border border-slate-800 bg-slate-950/85 p-5 sm:p-6 md:col-span-1 xl:col-span-7"
          >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">02 / Direction</p>
                  <h3 id="areas-interest-title" className="mt-1 text-lg font-semibold text-white">
                    Areas of Interest
                  </h3>
                </div>
                {areasOfInterest.length > interestPreviewCount ? (
                  <button
                    type="button"
                    aria-haspopup="dialog"
                    aria-controls="about-list-dialog"
                    onClick={() => openList('interests')}
                    className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium text-cyan-200 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                  >
                    View all <ChevronDown size={15} aria-hidden="true" />
                  </button>
                ) : null}
              </div>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {areasOfInterest.slice(0, interestPreviewCount).map((interest, index) => (
                  <li
                    key={interest}
                    className="group flex min-h-16 min-w-0 items-start gap-3 rounded-md border border-slate-800 bg-slate-900/90 px-3.5 py-3 transition-[background-color,border-color,transform] duration-200 hover:border-cyan-300/40 hover:bg-slate-900 motion-safe:hover:-translate-y-0.5 active:translate-y-0 sm:px-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-slate-700 bg-slate-950/60 font-mono text-[10px] text-cyan-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="min-w-0 break-words pt-0.5 text-sm leading-5 text-slate-200">{interest}</span>
                  </li>
                ))}
              </ul>
          </section>

          <section className="flex min-w-0 flex-col rounded-md border border-slate-800 bg-slate-950/85 p-5 transition-[border-color,background-color] duration-200 hover:border-cyan-300/35 hover:bg-slate-900/90 md:col-span-2 md:grid md:grid-cols-2 md:items-center md:gap-6 sm:p-6 xl:col-span-5 xl:grid-cols-1">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                  <FileText size={18} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-white">Curriculum Vitae</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    View or download my latest CV.
                  </p>
                </div>
              </div>
              <ul className="mt-5 grid gap-2 border-y border-slate-700/80 py-2 md:mt-0 md:grid-cols-2 xl:grid-cols-1">
                {curriculumVitae.map((cv) => (
                  <li key={cv.language} className="flex min-w-0 flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 py-2.5 last:border-0 xl:gap-3">
                    <span className="text-sm font-medium text-slate-200">{cv.language}</span>
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        aria-haspopup="dialog"
                        aria-controls="cv-preview-dialog"
                        onClick={(event) => {
                          cvTriggerRef.current = event.currentTarget
                          setActiveCv(cv)
                        }}
                        className="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-slate-600 px-3 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-cyan-300/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                      >
                        View CV <ArrowUpRight size={14} aria-hidden="true" />
                      </button>
                      <a
                        href={cv.url}
                        download={cv.fileName}
                        className="inline-flex min-h-9 items-center gap-1.5 rounded-md bg-cyan-300 px-3 py-2 text-xs font-semibold text-slate-950 transition-colors hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                      >
                        <Download size={14} aria-hidden="true" /> Download
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
          </section>
        </motion.div>
      </div>
      <ListDialog
        content={activeList}
        onClose={closeList}
        reduceMotion={reduceMotion}
      />
      <CVPreviewDialog
        cv={activeCv}
        onClose={() => setActiveCv(null)}
        reduceMotion={reduceMotion}
      />
    </section>
  )
}
