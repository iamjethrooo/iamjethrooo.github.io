import { useEffect, useState } from "react"

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
]

export default function Navbar() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY

      links.forEach((link) => {
        const el = document.getElementById(link.id)
        console.log(el);
        if (!el) return

        const offsetTop = el.offsetTop - 120
        const offsetBottom = offsetTop + el.offsetHeight

        if (scrollY >= offsetTop && scrollY < offsetBottom) {
          setActive(link.id)
        }
      })
    }

    window.addEventListener("scroll", handler)
    handler()

    return () => window.removeEventListener("scroll", handler)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-zinc-950/70 border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">

          <div className="text-sm tracking-widest text-blue-400">
            jethro estangki
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`transition ${
                  active === link.id
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="md:hidden text-xs text-zinc-500">
            {active.toUpperCase()}
          </div>
        </div>
      </div>
    </header>
  )
}