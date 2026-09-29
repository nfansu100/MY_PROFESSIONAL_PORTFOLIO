import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Skills from './components/sections/Skills'
import Certificates from './components/sections/Certificates'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        <Home />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
