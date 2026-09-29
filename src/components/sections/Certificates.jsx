import { Award } from 'lucide-react'
import Badge from '../common/Badge'
import SectionHeading from '../common/SectionHeading'
import { certificates } from '../../data/certificates'

export default function Certificates() {
  return (
    <section id="certificates" className="bg-slate-900/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certificates"
          title="Evidence of ongoing learning in AI, web development, and technical fundamentals"
          description="Certificates help show my continued growth across computer vision, machine learning, MATLAB, and practical front-end skills."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate) => (
            <article key={certificate.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-200">
                  <Award size={18} />
                </div>
                <Badge variant="muted">{certificate.date}</Badge>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">{certificate.title}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-cyan-300">{certificate.issuer}</p>
              <p className="mt-4 text-sm leading-6 text-slate-300">{certificate.description}</p>

              {certificate.link !== '#' ? (
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
                >
                  View certificate
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
