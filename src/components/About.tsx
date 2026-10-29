const skillGroups = [
  { title: "Professional · application development", technologies: ["C#", "ASP.NET Web Forms", "JavaScript", "HTML", "CSS"] },
  { title: "Professional · data & production", technologies: ["SQL Server", "T-SQL", "Stored procedures", "Query optimization", "Production debugging"] },
  { title: "Projects · .NET & desktop", technologies: [".NET 10", "WPF", "Entity Framework Core", "SQLite"] },
  { title: "Projects · web & backend", technologies: ["PHP", "MySQL", "JavaScript", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Redis"] },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-shell">
      <p className="eyebrow">03 / About & skills</p>
      <h2 id="about-title" className="section-title">About & skills</h2>
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] mt-8">
        <div className="text-zinc-400 leading-relaxed space-y-4 text-sm">
          <p>Most of my professional work has been in C# and ASP.NET Web Forms, working with business rules and existing SQL Server databases.</p>
          <p>My personal and university projects include a Windows desktop application, a Discord bot, and a university election system.</p>
          <p>Outside of code, you’ll find me training at my home gym or playing strategy games.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map(({ title, technologies }) => (
            <div key={title}>
              <h3 className="text-sm font-medium text-zinc-200 mb-3">{title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{technologies.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
