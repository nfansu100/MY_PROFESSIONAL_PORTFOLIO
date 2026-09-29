import { GraduationCap, MapPin } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import Badge from '../common/Badge'
import { education } from '../../data/education'

export default function Education() {
  return (
    <section id="education" className="bg-slate-900/35 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic journey with a focus on engineering and intelligent systems"
          description="My education has developed a strong technical base from early STEM learning to specialization in embedded systems and AI engineering."
        />

        <div className="mt-10 space-y-6">
          {education.map((item) => (
            <div key={`${item.institution}-${item.period}`} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-200">
                    <GraduationCap size={18} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.program}</h3>
                    <p className="mt-1 text-sm text-cyan-300">{item.institution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="muted">{item.period}</Badge>
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                    <MapPin size={12} />
                    {item.location}
                  </div>
                </div>
              </div>

              <p className="mt-5 text-base leading-7 text-slate-300">{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
