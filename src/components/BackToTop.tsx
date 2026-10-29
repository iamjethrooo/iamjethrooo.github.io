import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null
  return (
    <a href="#home" aria-label="Back to top" className="fixed bottom-4 right-4 z-30 inline-flex items-center justify-center w-11 h-11 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-blue-400 hover:text-blue-300 transition-colors"><ArrowUp size={18} aria-hidden="true" /></a>
  )
}
