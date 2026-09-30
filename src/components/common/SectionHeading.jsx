import { motion, useReducedMotion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: reduceMotion ? 0 : 0.35, ease: 'easeOut' }}
      className="max-w-3xl"
    >
      <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
        {eyebrow ? (
          <p className="text-sm font-semibold leading-none uppercase tracking-[0.16em] text-cyan-200 sm:text-base xl:text-lg">
            {eyebrow}
          </p>
        ) : null}
        <motion.span
          aria-hidden="true"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.08, ease: 'easeOut' }}
          className="h-px w-16 origin-left bg-gradient-to-r from-cyan-300/80 to-transparent sm:w-24 xl:w-28"
        />
      </div>
      <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl border-l border-cyan-300/45 pl-4 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}
