import { Cpu, GraduationCap, Sparkles } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title="Engineering student focused on intelligent embedded systems"
        description="I am a dedicated Embedded Systems and AI engineering student passionate about bridging hardware and software into practical, high-impact solutions."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-base leading-7 text-slate-300">
          <p>
            Hello, I’m Nfansu O Barrow, a student currently pursuing a specialization in Embedded
            Systems and AI Engineering at ENSAF in Fès. My work is centered on designing systems
            that combine embedded computing, computer vision, machine learning, and real-time
            performance.
          </p>
          <p>
            I am especially interested in embedded systems development, AI-driven applications,
            computer vision, machine learning, and edge computing. My projects and academic work
            have allowed me to explore practical design processes across multiple domains, from
            embedded hardware to intelligent software pipelines.
          </p>
          <p>
            Through internship experience and academic projects, I have developed a strong interest
            in creating solutions that are not only technically useful but also relevant to real
            operational needs, including healthcare, vision-based automation, and connected devices.
          </p>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <div className="mb-3 flex items-center gap-3 text-cyan-300">
              <GraduationCap size={18} />
              <span className="font-semibold text-white">Academic direction</span>
            </div>
            <p className="text-sm leading-6 text-slate-300">
              Specialized engineering path in Embedded Systems and AI, with a strong focus on
              intelligent system design and deployment.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <div className="mb-3 flex items-center gap-3 text-cyan-300">
              <Cpu size={18} />
              <span className="font-semibold text-white">Current focus</span>
            </div>
            <p className="text-sm leading-6 text-slate-300">
              Embedded Linux, computer vision, edge AI, Raspberry Pi, ESP32-based projects, and
              practical engineering problem solving.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <div className="mb-3 flex items-center gap-3 text-cyan-300">
              <Sparkles size={18} />
              <span className="font-semibold text-white">Engineering approach</span>
            </div>
            <p className="text-sm leading-6 text-slate-300">
              I value hands-on learning, experimentation, and building systems that connect real
              hardware with meaningful data-driven intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
