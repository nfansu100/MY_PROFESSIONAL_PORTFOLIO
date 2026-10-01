import { motion } from 'framer-motion'
import { ArrowUpRight, GitBranch, Play } from 'lucide-react'
import Badge from '../common/Badge'

export default function ProjectCard({ project, onOpenDemo }) {
  const hasImage = Boolean(project.image)

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-800/90 bg-slate-900/75 p-4 shadow-[0_18px_45px_rgba(2,6,23,0.35)] ring-1 ring-inset ring-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/80 hover:shadow-[0_22px_60px_rgba(34,211,238,0.10)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-slate-950/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

      <div className="relative flex-1">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200">
            {project.category}
          </span>

          {project.featured ? (
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-200">
              Featured
            </span>
          ) : null}
        </div>

        {hasImage ? (
          <div className="relative mb-5 overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-950/80">
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-900/20" aria-hidden="true" />
          </div>
        ) : null}

        <div className="relative mb-5 overflow-hidden rounded-2xl border border-slate-800/90 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.8),rgba(15,23,42,0.95))] p-4">
          <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] [background-size:22px_22px]" aria-hidden="true" />

          <div className="relative flex items-center justify-between gap-3">
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-cyan-200/80">Project</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
            </div>

            {project.demo !== '#' ? (
              <button
                type="button"
                onClick={() => onOpenDemo(project)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-200 transition-all duration-200 hover:border-cyan-300/60 hover:bg-cyan-500/15 hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                aria-label={`Open demo for ${project.title}`}
              >
                <Play size={15} className="ml-0.5 fill-current" aria-hidden="true" />
              </button>
            ) : null}
          </div>
        </div>

        <p className="text-sm leading-7 text-slate-300">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="muted">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-slate-800 pt-4">
        {project.github !== '#' ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors duration-200 hover:text-cyan-200"
          >
            <GitBranch size={16} aria-hidden="true" />
            GitHub
          </a>
        ) : (
          <span className="text-sm text-slate-500">Private</span>
        )}

        {project.demo !== '#' ? (
          <button
            type="button"
            onClick={() => onOpenDemo(project)}
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200 transition-all duration-200 hover:border-cyan-300/60 hover:bg-cyan-500/10 hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Demo
            <ArrowUpRight size={15} aria-hidden="true" />
          </button>
        ) : null}
      </div>
    </motion.article>
  )
}
