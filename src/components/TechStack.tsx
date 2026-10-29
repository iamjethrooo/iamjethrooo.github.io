export default function TechStack({ technologies }: { technologies: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {technologies.map((technology) => (
        <li key={technology} className="rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-1 text-xs text-zinc-300">{technology}</li>
      ))}
    </ul>
  )
}
