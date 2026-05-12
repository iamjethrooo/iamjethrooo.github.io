import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Timeline from "./components/Timeline"
import Projects from "./components/Projects"
import Loader from "./components/Loader"
import Contact from "./components/Contact"
import BackToTop from "./components/BackToTop"
import Footer from "./components/Footer"

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <div className="bg-zinc-950 text-zinc-200 min-h-screen flex flex-col">
      <Navbar />

      <main className="pt-20 max-w-5xl mx-auto px-6 md:px-10 space-y-12 pb-12 flex-1">
        <Home />
        <About />
        <Timeline />
        <Projects />
        <Contact />

      </main>

      <BackToTop />
      <footer className="border-t border-zinc-800">
        <div className="h-14 flex items-center justify-between px-6 md:px-10 max-w-5xl mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  )
}