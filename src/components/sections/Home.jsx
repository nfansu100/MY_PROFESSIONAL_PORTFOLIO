import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { homeVisuals } from '../../data/home'

export default function Home() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end 35%'],
  })
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.02])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.78, 1], [1, 0.45, 0])
  const revealClip = useTransform(
    scrollYProgress,
    [0, 0.08, 0.58, 1],
    [
      'circle(0% at 68% 46%)',
      'circle(22% at 68% 46%)',
      'circle(88% at 68% 46%)',
      'circle(165% at 68% 46%)',
    ],
  )
  const revealScale = useTransform(scrollYProgress, [0, 1], [0.72, 1.04])
  const revealY = useTransform(scrollYProgress, [0, 1], [30, 0])
  const entranceInitial = reduceMotion ? false : { opacity: 0, y: 24 }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative isolate min-h-[85svh] overflow-hidden bg-slate-950"
    >
      <motion.img
        src={homeVisuals.background}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        style={reduceMotion ? { opacity: 0 } : { scale: backgroundScale, opacity: backgroundOpacity }}
        className="absolute inset-0 h-full w-full object-cover object-[50%_24%]"
      />
      <motion.img
        src={homeVisuals.foreground.src}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        style={
          reduceMotion
            ? { clipPath: 'circle(150% at 50% 48%)' }
            : { clipPath: revealClip, scale: revealScale, y: revealY }
        }
        className="absolute inset-0 h-full w-full origin-[68%_46%] object-cover object-[50%_24%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-slate-950/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-slate-950/10" />

      <div className="relative mx-auto flex min-h-[85svh] max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <motion.div
          initial={entranceInitial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: 'easeOut' }}
          className="flex max-w-3xl flex-col justify-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/85 sm:text-sm">
            Nfansu Barrow
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Embedded Systems &amp; AI Engineering Student
          </h1>
        </motion.div>

      </div>
    </section>
  )
}
