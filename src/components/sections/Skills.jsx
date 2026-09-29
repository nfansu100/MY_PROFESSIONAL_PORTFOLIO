import SectionHeading from '../common/SectionHeading'
import Badge from '../common/Badge'
import { skills } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Skills"
        title="Technical capability organized around real engineering domains"
        description="Instead of arbitrary percentages, my skills are grouped around the areas relevant to embedded systems, AI, and practical software engineering."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((group) => (
          <div key={group.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="default">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
