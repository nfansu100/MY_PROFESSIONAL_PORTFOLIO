import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Play, X } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import ProjectCard from '../projects/ProjectCard'
import { projects } from '../../data/projects'

function ProjectDemoModal({ project, onClose, reduceMotion }) {
  useEffect(() => {
    if (!project) return undefined

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
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.18, ease: 'easeOut' }}
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 p-3 backdrop-blur-sm sm:p-6"
          onClick={onClose}
        >
          <div className="flex min-h-full items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: reduceMotion ? 0 : 0.2, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-demo-title"
              className="relative w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-[28px] border border-slate-700/80 bg-slate-950 shadow-[0_25px_80px_rgba(2,6,23,0.9)] ring-1 ring-cyan-500/10"
            >
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project demo"
                className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/80 text-slate-300 shadow-lg shadow-slate-950/50 transition-all duration-200 hover:border-cyan-400/50 hover:bg-slate-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:right-4 sm:top-4"
              >
                <X size={18} aria-hidden="true" />
              </button>

              <div className="border-b border-slate-800/90 bg-gradient-to-r from-slate-950 via-slate-950 to-cyan-500/5 px-5 pb-4 pt-14 sm:px-6 sm:pt-16">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cyan-300">Project demo</p>
                <h3 id="project-demo-title" className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  {project.title}
                </h3>
              </div>

              <div className="p-4 sm:p-5">
                <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                  <video
                    key={project.demo}
                    className="block aspect-video max-h-[60vh] w-full bg-slate-950 object-contain"
                    src={project.demo}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                  />
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{project.description}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default function Projects() {
  const reduceMotion = useReducedMotion()
  const [activeProject, setActiveProject] = useState(null)

  return (
    <>
      <section id="projects" className="relative overflow-hidden border-t border-white/10 bg-slate-950/35 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_32%),linear-gradient(180deg,rgba(15,23,42,0.76),rgba(15,23,42,0.90))]" aria-hidden="true" />
        <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] [background-size:42px_42px]" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Projects"
            title="Applied engineering work across embedded systems, AI, and vision"
            description="A selection of project work that reflects my focus on intelligent systems, hardware interfacing, and practical problem solving."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} onOpenDemo={setActiveProject} />
            ))}
          </div>
        </div>
      </section>

      <ProjectDemoModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        reduceMotion={reduceMotion}
      />
    </>
  )
}
