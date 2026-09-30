import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Education from './components/sections/Education'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Certificates from './components/sections/Certificates'
import Contact from './components/sections/Contact'
import { navigation } from './data/navigation'

const sectionComponents = {
  home: Home,
  about: About,
  education: Education,
  experience: Experience,
  skills: Skills,
  projects: Projects,
  certificates: Certificates,
  contact: Contact,
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        {navigation.map(({ href }) => {
          const sectionId = href.replace('#', '')
          const SectionComponent = sectionComponents[sectionId]

          return SectionComponent ? <SectionComponent key={href} /> : null
        })}
      </main>

      <Footer />
    </div>
  )
}

export default App
