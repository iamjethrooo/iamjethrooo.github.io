import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Timeline from "./components/Timeline"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import BackToTop from "./components/BackToTop"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="bg-zinc-950 text-zinc-200 min-h-screen flex flex-col">
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main" tabIndex={-1} className="w-full pt-16 max-w-5xl mx-auto px-6 md:px-10 flex-1">
        <Home />
        <Timeline />
        <Projects />
        <About />
        <Contact />
        <BackToTop />
      </main>
      <footer className="border-t border-zinc-800/80">
        <div className="px-6 py-6 md:px-10 max-w-5xl mx-auto"><Footer /></div>
      </footer>
    </div>
  )
}
