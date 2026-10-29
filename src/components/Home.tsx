import { ArrowDown, ArrowUpRight, FileText, Code2 } from "lucide-react"
import { profile } from "../data/profile"

export default function Home() {
  return (
    <section id="home" aria-labelledby="home-title" className="py-16 md:py-24">
      <div className="max-w-3xl">
        <h1 id="home-title" className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.08] text-zinc-100">
          Jethro Estangki<span className="text-blue-400">.</span>
        </h1>
        <p className="mt-5 text-base md:text-lg font-medium text-blue-300">
          Software Engineer <span aria-hidden="true">·</span> C# / .NET
        </p>
        <p className="mt-6 max-w-2xl text-base md:text-lg text-zinc-400 leading-relaxed">
          I build web applications with a focus on scalability, performance, and
          clean, maintainable architecture.
        </p>
        <div className="grid gap-3 mt-8 min-[380px]:flex min-[380px]:flex-wrap sm:mt-10">
          <a href="#projects" className="button-primary">
            View projects <ArrowDown size={16} aria-hidden="true" />
          </a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="button-secondary">
            <FileText size={16} aria-hidden="true" />View résumé
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm text-zinc-400 hover:text-blue-200">
          <Code2 size={16} aria-hidden="true" />GitHub
        </a>
      </div>
    </section>
  )
}
