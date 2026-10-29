import { ArrowUpRight, FileText, Download, Code2, ArrowRight, Mail } from "lucide-react"
import { profile } from "../data/profile"

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-shell">
      <p className="eyebrow">04 / Contact</p>
      <h2 id="contact-title" className="section-title">Contact</h2>
      <p className="section-intro">
        I’m looking for C#/.NET, backend, or full-stack roles, preferably remote.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-7 inline-flex items-center gap-3 text-lg sm:text-2xl font-medium text-blue-300 hover:text-blue-200 min-h-11 break-all"
      >
        <Mail size={22} className="shrink-0" aria-hidden="true" />
        {profile.email}
        <ArrowUpRight size={20} className="shrink-0" aria-hidden="true" />
      </a>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="button-primary">
          <FileText size={16} aria-hidden="true" />View résumé
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <a href={profile.resumePdf} className="button-secondary">
          <Download size={16} aria-hidden="true" />Download résumé (PDF)
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="button-secondary">
          <Code2 size={17} aria-hidden="true" />GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="button-secondary">
          <ArrowRight size={17} aria-hidden="true" />LinkedIn
        </a>
      </div>
    </section>
  )
}
