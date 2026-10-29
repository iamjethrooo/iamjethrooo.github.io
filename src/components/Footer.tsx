import { profile } from "../data/profile"

export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 text-xs text-zinc-400">
      <span>© {new Date().getFullYear()} Jethro Estangki</span>
      <div className="flex flex-wrap gap-5">
        <a className="inline-flex items-center min-h-11 hover:text-blue-300" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="inline-flex items-center min-h-11 hover:text-blue-300" href={`mailto:${profile.email}`}>Email</a>
        <a className="inline-flex items-center min-h-11 hover:text-blue-300" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  )
}
