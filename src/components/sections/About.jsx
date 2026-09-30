import { ArrowUpRight, Download, FileText } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { aboutProfile, areasOfInterest, curriculumVitae, technicalFocus } from '../../data/about'
import SectionHeading from '../common/SectionHeading'

export default function About() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      id="about"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduceMotion ? 0 : 0.45, ease: 'easeOut' }}
      className="relative border-t border-white/10 bg-slate-900/35 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Final-year Master’s student in Embedded Systems & AI Engineering"
          description="At ENSAF, Fès, I work at the intersection of embedded computing and artificial intelligence."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-16">
          <div>
            <div className="border-l-2 border-cyan-300/70 pl-5 sm:pl-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Professional profile
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                {aboutProfile.summary}
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-white">Technical Focus</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {technicalFocus.map((item) => (
                  <li
                    key={item}
                    className="flex min-h-14 items-center gap-3 border-b border-slate-700/70 px-1 py-3 text-sm font-medium text-slate-200"
                  >
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold text-white">Areas of Interest</h3>
              <ul className="mt-3 divide-y divide-slate-700/70 border-y border-slate-700/70">
                {areasOfInterest.map((interest, index) => (
                  <li key={interest} className="flex items-center gap-4 py-3.5">
                    <span className="font-mono text-xs text-cyan-300">0{index + 1}</span>
                    <span className="text-sm text-slate-200">{interest}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-700/70 pt-6">
              <div className="flex items-start gap-3">
                <FileText className="mt-0.5 shrink-0 text-cyan-300" size={19} aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-white">Curriculum Vitae</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    View or download my CV in English or French.
                  </p>
                </div>
              </div>

              <ul className="mt-4 divide-y divide-slate-700/70">
                {curriculumVitae.map((cv) => (
                  <li key={cv.language} className="flex flex-wrap items-center justify-between gap-3 py-3">
                    <span className="text-sm font-medium text-slate-200">{cv.language}</span>
                    <div className="flex items-center gap-4">
                      <a
                        href={cv.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-200 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                      >
                        View <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                      <a
                        href={cv.url}
                        download={cv.fileName}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                      >
                        Download <Download size={15} aria-hidden="true" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </motion.section>
  )
}
