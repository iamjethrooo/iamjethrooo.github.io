import { timeline } from "../data/timeline"

export default function Timeline() {
  const professional = timeline.filter(({ type }) => type === "professional")
  const leadership = timeline.filter(({ type }) => type === "leadership")
  const education = timeline.filter(({ type }) => type === "education")

  return (
    <section id="timeline" aria-labelledby="experience-title" className="section-shell">
      <p className="eyebrow">01 / Experience</p>
      <h2 id="experience-title" className="section-title">Experience</h2>
      <h3 className="mt-8 text-xs font-medium uppercase tracking-widest text-blue-300">Professional experience</h3>
      <ul className="mt-5 space-y-6">
        {professional.map((item) => (
          <li key={item.title}>
            <div className="flex flex-col md:flex-row md:justify-between gap-2">
              <h4 className="text-xl font-medium text-zinc-100">{item.title}</h4>
              <p className="text-sm text-zinc-400 shrink-0">{item.date}</p>
            </div>
            <p className="text-sm text-blue-300 mt-1">{item.company}</p>
            <p className="text-sm text-zinc-300 leading-relaxed mt-4 max-w-3xl">{item.description}</p>
            {item.highlights && <ul className="list-disc pl-5 mt-4 space-y-2 text-sm leading-relaxed text-zinc-300 marker:text-blue-400">{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <h3 className="text-xs font-medium uppercase tracking-widest text-zinc-400">University leadership</h3>
        <ul className="mt-5 space-y-5">
          {leadership.map((item) => (
            <li key={item.title}>
              <div className="flex flex-col md:flex-row md:justify-between gap-1 md:gap-2">
                <h4 className="text-base font-medium text-zinc-200">{item.title}</h4>
                <p className="text-sm text-zinc-400 shrink-0">{item.date}</p>
              </div>
              <p className="mt-1 text-sm text-zinc-400">{item.company}</p>
              {item.description && <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">{item.description}</p>}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 border-t border-zinc-800 pt-6">
        <h3 className="text-sm font-medium text-zinc-400 mb-4">Education</h3>
        {education.map((item) => (
          <details key={item.title} className="education-details">
            <summary className="cursor-pointer py-3 text-sm leading-relaxed">
              <span className="font-medium text-zinc-200">{item.title}</span>
              <span className="block pl-4 text-zinc-400">{item.company} · {item.date} <span className="text-blue-300">· {item.award}</span></span>
            </summary>
            <p className="text-sm leading-relaxed text-zinc-400 pb-4 pl-4">{item.description}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
