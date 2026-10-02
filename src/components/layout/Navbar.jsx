import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { navigation } from '../../data/navigation'

const NAV_OFFSET = 96

export default function Navbar() {
  const reduceMotion = useReducedMotion()
  const lastFocusedRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    if (!sections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(
          (entry) => entry.isIntersecting && entry.intersectionRatio > 0.12,
        )

        if (!visibleEntries.length) {
          return
        }

        const nextSection = visibleEntries
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top),
          )[0]

        if (nextSection) {
          setActiveSection(nextSection.target.id)
        }
      },
      {
        rootMargin: '-18% 0px -52% 0px',
        threshold: [0.15, 0.35, 0.55, 0.8],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = ''
      return undefined
    }

    document.body.style.overflow = 'hidden'

    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeydown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [isOpen])

  const handleNavClick = (event, item) => {
    event.preventDefault()

    const section = document.getElementById(item.id)
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
      window.history.pushState({}, '', item.href)
      window.scrollTo({
        top,
        behavior: reduceMotion ? 'auto' : 'smooth',
      })
    }

    setIsOpen(false)
    setActiveSection(item.id)
  }

  const onMenuToggle = () => {
    if (!isOpen) {
      lastFocusedRef.current = document.activeElement
    }

    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    if (!isOpen && lastFocusedRef.current) {
      lastFocusedRef.current.focus()
    }
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={reduceMotion ? false : { y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.45, ease: 'easeOut' }}
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled ? 'shadow-[0_10px_30px_rgba(15,23,42,0.35)]' : 'shadow-none'
        }`}
      >
        <div className="nav-technical-surface absolute inset-0" />

        <div
          className={`relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 ${
            isScrolled ? 'pt-3 pb-3' : 'pt-4 pb-4'
          }`}
        >
          <a
            href="#home"
            className="relative z-10 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300 transition-colors duration-200 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            onClick={(event) => handleNavClick(event, navigation[0])}
          >
            Nfansu Barrow
          </a>

          <nav className="relative hidden items-center md:flex" aria-label="Main navigation">
            <ul className="relative flex items-center gap-1 rounded-full border border-cyan-500/15 bg-slate-900/60 p-1.5 shadow-[inset_0_1px_0_rgba(148,163,184,0.08)] backdrop-blur-xl">
              {navigation.map((item) => {
                const isActive = activeSection === item.id

                return (
                  <li key={item.id} className="relative">
                    {isActive ? (
                      <motion.span
                        layoutId="active-nav-indicator"
                        className="absolute inset-0 rounded-full border border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_24px_rgba(34,211,238,0.14)]"
                        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                      />
                    ) : null}

                    <a
                      href={item.href}
                      onClick={(event) => handleNavClick(event, item)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`relative z-10 inline-flex items-center justify-center rounded-full px-3.5 py-2 text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                        isActive ? 'text-cyan-200' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <button
            type="button"
            className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/75 text-slate-200 shadow-[0_0_0_1px_rgba(15,23,42,0.4)] transition-all duration-200 hover:border-cyan-400/50 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.98] md:hidden"
            onClick={onMenuToggle}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-drawer"
          >
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.18, ease: 'easeInOut' }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation overlay"
              className="fixed inset-0 z-40 bg-slate-950/65 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.aside
              id="mobile-navigation-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="fixed right-0 top-0 z-50 h-full w-[82vw] max-w-sm border-l border-slate-800/90 bg-slate-950/95 shadow-[0_0_40px_rgba(15,23,42,0.55)] backdrop-blur-xl md:hidden"
            >
              <div className="nav-drawer-surface absolute inset-0" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-slate-800/80 px-4 py-4">
                  <div>
                    <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-slate-400">
                      Navigate
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-200">Portfolio sections</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close navigation menu"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    <X size={18} />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile navigation">
                  <ul className="space-y-2">
                    {navigation.map((item) => {
                      const isActive = activeSection === item.id

                      return (
                        <li key={item.id}>
                          <a
                            href={item.href}
                            onClick={(event) => handleNavClick(event, item)}
                            aria-current={isActive ? 'page' : undefined}
                            className={`flex items-center justify-between rounded-2xl border px-3 py-3 text-left text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                              isActive
                                ? 'border-cyan-400/30 bg-cyan-500/10 text-cyan-200 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.18)]'
                                : 'border-slate-800/80 bg-slate-900/50 text-slate-200 hover:border-slate-700 hover:bg-slate-900 hover:text-white'
                            }`}
                          >
                            <span>{item.label}</span>
                            {isActive ? (
                              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                            ) : null}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </nav>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}
