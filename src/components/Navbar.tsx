import { useEffect, useState } from "react"

const links = [
  { id: "home", label: "Home" },
  { id: "timeline", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About & skills" },
  { id: "contact", label: "Contact" },
]

export default function Navbar() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + 160
      const current = [...links].reverse().find(({ id }) => {
        const section = document.getElementById(id)
        return section && section.offsetTop <= marker
      })
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4
      setActive(atBottom ? "contact" : current?.id ?? "home")
    }
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)
    updateActiveSection()
    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/95 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="h-14 md:h-16 flex items-center justify-between gap-4">
          <a href="#home" aria-label="Jethro Estangki / dev, home" className="text-sm font-medium tracking-wide text-blue-300 min-h-11 inline-flex items-center">jethro estangki<span className="text-zinc-400"> / dev</span></a>
          <nav aria-label="Main navigation" className="hidden md:flex gap-5 text-sm">
            {links.map(({ id, label }) => (
              <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} className={`nav-link ${active === id ? "text-blue-300" : "text-zinc-400"}`}>{label}</a>
            ))}
          </nav>
          <a href="#contact" className="md:hidden text-sm text-blue-300 min-h-11 inline-flex items-center">Contact</a>
        </div>
        <nav aria-label="Mobile navigation" className="md:hidden grid grid-cols-4 border-t border-zinc-800 text-xs">
          {links.filter(({ id }) => id !== "contact").map(({ id, label }) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} className={`nav-link justify-center ${active === id ? "text-blue-300" : "text-zinc-400"}`}>{label === "About & skills" ? "Skills" : label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
