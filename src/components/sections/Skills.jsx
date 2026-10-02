import { motion, useReducedMotion } from 'framer-motion'
import {
  Code2,
  Cpu,
  CircuitBoard,
  Terminal,
  Workflow,
  Eye,
  Server,
  Shield,
  Wrench,
  Users,
} from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import Badge from '../common/Badge'
import { skills } from '../../data/skills'

const skillIcons = {
  programming: Code2,
  protocols: CircuitBoard,
  'embedded-platforms': Cpu,
  'embedded-linux-rtos': Terminal,
  'modeling-simulation': Workflow,
  'ai-computer-vision': Eye,
  'web-backend': Server,
  standards: Shield,
  tools: Wrench,
  'soft-skills': Users,
}

export default function Skills() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="skills" className="relative overflow-hidden border-t border-white/10 bg-slate-950/35 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_32%),linear-gradient(180deg,rgba(15,23,42,0.76),rgba(15,23,42,0.90))]" aria-hidden="true" />
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] [background-size:42px_42px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technical capability organized around real engineering domains"
          description="Instead of arbitrary percentages, my skills are grouped around the areas relevant to embedded systems, AI, and practical software engineering."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, index) => {
            const Icon = skillIcons[group.id] || Code2

            return (
              <motion.article
                key={group.id}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: reduceMotion ? 0 : 0.35, delay: reduceMotion ? 0 : index * 0.08, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-[28px] border border-slate-800/90 bg-slate-900/75 p-5 shadow-[0_18px_45px_rgba(2,6,23,0.35)] ring-1 ring-inset ring-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/80 hover:shadow-[0_22px_60px_rgba(34,211,238,0.10)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-slate-950/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-200 transition-all duration-200 group-hover:border-cyan-300/60 group-hover:bg-cyan-500/15 group-hover:text-cyan-100">
                      <Icon size={18} aria-hidden="true" />
                    </div>

                    <span className="inline-flex rounded-full border border-slate-700 bg-slate-950/80 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-slate-300">
                      Domain
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">{group.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{group.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="muted">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
