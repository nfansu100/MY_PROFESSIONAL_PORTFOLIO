export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2025 Nfansu Barrow</p>
        <div className="flex flex-wrap gap-4">
          <a href="#home" className="transition-colors hover:text-white">Home</a>
          <a href="#projects" className="transition-colors hover:text-white">Projects</a>
          <a href="#contact" className="transition-colors hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}
