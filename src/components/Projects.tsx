import { useEffect, useRef, useState } from "react"
import { ArrowRight, ArrowUpRight, Code2, X } from "lucide-react"
import { publishedProjects } from "../data/projects"
import type { Project } from "../data/projects"
import TechStack from "./TechStack"

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link inline-flex items-center gap-1.5 min-h-11 text-sm"
          aria-label={`View ${project.title} source on GitHub`}
        >
          Source <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link inline-flex items-center gap-1.5 min-h-11 text-sm"
          aria-label={`Open ${project.title} live demo`}
        >
          Live demo <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      )}
      {!project.link && !project.demo && (
        <span className="text-xs text-zinc-400">
          {project.availability ?? "Source not publicly linked"}
        </span>
      )}
    </div>
  )
}

// Pointer activation does not focus buttons in every browser; retain the actual trigger.
type ProjectSelection = { project: Project; trigger: HTMLButtonElement }

function ProjectDialog({ project, trigger, onClose }: { project: Project; trigger: HTMLButtonElement; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [imageIndex, setImageIndex] = useState(0)
  const image = project.images[imageIndex]

  useEffect(() => {
    const dialog = dialogRef.current
    const previousOverflow = document.body.style.overflow

    dialog?.showModal()
    document.body.style.overflow = "hidden"

    return () => {
      dialog?.close()
      document.body.style.overflow = previousOverflow
      trigger.focus({ preventScroll: true })
    }
  }, [trigger])

  const handleNativeClose = () => {
    // Ignore a queued close event if Strict Mode has already reopened the dialog.
    if (!dialogRef.current?.open) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onClose={handleNativeClose}
    >
      <div className="sticky top-0 z-10 bg-zinc-950 border-b border-zinc-800 px-5 py-3 flex items-center justify-between gap-4">
        <p className="text-sm text-zinc-400">{project.category}</p>
        <button
          type="button"
          autoFocus
          onClick={onClose}
          aria-label="Close project details"
          className="button-quiet shrink-0"
        >
          <X size={18} aria-hidden="true" />Close
        </button>
      </div>
      <div className="p-5 md:p-8">
        <h2 id="project-dialog-title" className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100">
          {project.title}
        </h2>
        <p className="mt-4 text-zinc-300 leading-relaxed">{project.description}</p>
        <h3 className="mt-6 text-sm font-medium text-blue-300">Implementation</h3>
        <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{project.focus}</p>
        <div className="mt-5"><TechStack technologies={project.stack} /></div>
        {project.details && (
          <ul className="list-disc pl-5 mt-6 space-y-3 text-sm leading-relaxed text-zinc-300 marker:text-blue-400">
            {project.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        )}
        <div className="mt-3"><ProjectLinks project={project} /></div>
        {image && (
          <figure className="mt-6">
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-auto rounded-md border border-zinc-800"
              decoding="async"
            />
            <figcaption className="mt-2 text-xs text-zinc-400">
              {image.alt}
              {project.images.length > 1 ? ` · ${imageIndex + 1} of ${project.images.length}` : ""}
            </figcaption>
          </figure>
        )}
        {project.images.length > 1 && (
          <div role="group" className="mt-4 flex flex-wrap gap-2" aria-label="Choose a project screenshot">
            {project.images.map((screenshot, index) => (
              <button
                key={screenshot.src}
                type="button"
                aria-label={`Show screenshot ${index + 1}: ${screenshot.alt}`}
                aria-pressed={imageIndex === index}
                onClick={() => setImageIndex(index)}
                className={`button-secondary ${imageIndex === index ? "border-blue-300 text-blue-200" : ""}`}
              >
                Screenshot {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </dialog>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectSelection | null>(null)

  return (
    <section id="projects" aria-labelledby="projects-title" className="section-shell">
      <p className="eyebrow">02 / PROJECTS</p>
      <h2 id="projects-title" className="section-title">Projects</h2>
      {[true, false].map((featured) => (
        <div key={String(featured)} className={`grid gap-6 mt-8 ${featured ? "lg:grid-cols-3" : "md:grid-cols-2"}`}>
          {publishedProjects.filter((project) => Boolean(project.featured) === featured).map((project) => (
            <article
              key={project.slug}
              aria-labelledby={`${project.slug}-title`}
              className={`flex flex-col rounded-xl border overflow-hidden ${project.featured ? "border-blue-300/30 bg-zinc-900/40" : "border-zinc-800"}`}
            >
              {!project.featured && project.images[0] && (
                <button
                  type="button"
                  onClick={(event) => setSelectedProject({ project, trigger: event.currentTarget })}
                  aria-label={`View ${project.title} screenshots and details`}
                  aria-haspopup="dialog"
                  className="group block w-full bg-zinc-900 border-b border-zinc-800 overflow-hidden focus-visible:-outline-offset-4"
                >
                  <img
                    src={project.images[0].thumbnail ?? project.images[0].src}
                    alt={project.images[0].alt}
                    width={project.images[0].width}
                    height={project.images[0].height}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-video object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </button>
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-3 text-xs text-blue-300">
                  <p>{project.category}</p>
                  {project.featured && <Code2 size={18} aria-hidden="true" className="shrink-0" />}
                </div>
                <h3 id={`${project.slug}-title`} className="mt-3 text-xl font-medium tracking-tight text-zinc-100">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">{project.description}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">{project.focus}</p>
                <p className="mt-auto pt-5 text-xs leading-relaxed text-zinc-400">{project.stack.join(" · ")}</p>
                <div className="mt-4 pt-3 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                  <ProjectLinks project={project} />
                  <button
                    type="button"
                    onClick={(event) => setSelectedProject({ project, trigger: event.currentTarget })}
                    aria-haspopup="dialog"
                    aria-label={`Read ${project.title} details`}
                    className="button-quiet px-0"
                  >
                    Details <ArrowRight size={15} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ))}
      {selectedProject && (
        <ProjectDialog
          key={selectedProject.project.slug}
          project={selectedProject.project}
          trigger={selectedProject.trigger}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
