import { motion } from 'framer-motion'
import { ArrowRight, Download, GitBranch, MapPin, Sparkles } from 'lucide-react'
import { socialLinks } from '../../data/social'
import Badge from '../common/Badge'

const focusAreas = ['Embedded Systems', 'AI', 'Computer Vision', 'IoT', 'Embedded Linux']

export default function Home() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),transparent_35%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            <Sparkles size={12} />
            Engineering Portfolio
          </div>

          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
            Nfansu O Barrow
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Embedded Systems & AI Engineering Student
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Building intelligent systems at the intersection of embedded computing, artificial
            intelligence, computer vision, and edge deployment.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {focusAreas.map((item) => (
              <Badge key={item} variant="accent">
                {item}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
            >
              Explore My Work
              <ArrowRight size={18} />
            </a>
            <a
              href="https://nfansu100.github.io/portfolio/myData/myCVs/English%20Version.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-slate-500 hover:bg-slate-800"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-300">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-2 transition-colors hover:border-cyan-500/50 hover:text-white"
              >
                {link.type === 'github' ? <GitBranch size={16} /> : null}
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
          className="flex items-center"
        >
          <div className="w-full rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-[0_24px_50px_rgba(15,23,42,0.6)]">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                Current Focus
              </span>
              <MapPin className="text-cyan-300" size={18} />
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Academic path</p>
                <p className="mt-2 text-lg font-semibold text-white">ENSAF, Fès</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Core interests</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['AI', 'Embedded Linux', 'Computer Vision', 'Edge AI', 'Raspberry Pi'].map((item) => (
                    <Badge key={item} variant="default">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300">
                Combining hardware awareness with intelligent software design to build impactful,
                efficient systems for real-world deployment.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
