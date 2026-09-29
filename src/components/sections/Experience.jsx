import { BriefcaseBusiness, CalendarRange } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import Badge from '../common/Badge'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Practical experience and leadership in technology and community work"
        description="A timeline of the experiences that shaped my technical foundation, leadership, and problem-solving capacity."
      />

      <div className="mt-10 space-y-6">
        {experience.map((item, index) => (
          <div key={item.title} className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            {index !== experience.length - 1 ? (
              <div className="absolute left-8 top-full h-6 w-px bg-slate-700" aria-hidden="true" />
            ) : null}

            <div className="flex flex-col gap-5 md:flex-row md:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-200">
                <BriefcaseBusiness size={18} />
              </div>

              <div className="flex-1">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-cyan-300">{item.organization}</p>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                    <CalendarRange size={12} />
                    {item.period}
                  </div>
                </div>

                <p className="mt-4 text-base leading-7 text-slate-300">{item.description}</p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <Badge key={tech} variant="muted">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
