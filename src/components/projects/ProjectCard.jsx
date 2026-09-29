import { ArrowUpRight, GitBranch } from 'lucide-react'
import Badge from '../common/Badge'

export default function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.7)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_20px_40px_rgba(14,116,144,0.18)]">
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

      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="muted">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3">
        {project.github !== '#' ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
          >
            <GitBranch size={16} />
            GitHub
          </a>
        ) : null}

        {project.demo !== '#' ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition-colors hover:text-white"
          >
            Demo
            <ArrowUpRight size={16} />
          </a>
        ) : null}
      </div>
    </article>
  )
}
