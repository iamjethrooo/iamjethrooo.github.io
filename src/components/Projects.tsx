import { useState } from "react"
import { projects } from "../data/projects"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  return (
    <>
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-start space-y-10"
      >
        <h2 className="text-xs uppercase tracking-widest text-zinc-500">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 w-full">

          {projects.map((project) => (
            <button
              onClick={() => setSelectedProject(project)}
              className="group border border-zinc-800 rounded-xl overflow-hidden
             bg-transparent hover:bg-zinc-900/20
             transition-all duration-300
             flex flex-col h-full"
            >

              {/* image */}
              <div className="overflow-hidden bg-black">
                <img
                  src={project.images[0]}
                  className="w-full h-48 object-cover
                 group-hover:scale-105 transition duration-500 opacity-90"
                />
              </div>

              {/* content */}
              <div className="p-4 flex flex-col flex-1">

                {/* top content */}
                <div>
                  <h3 className="text-sm font-medium text-white group-hover:text-blue-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mt-2">
                    {project.description}
                  </p>
                </div>

                {/* tags pinned bottom */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.stack.split(",").map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded-md
                     bg-zinc-900 border border-zinc-800
                     text-zinc-400"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
      {
        selectedProject && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6">
            <div className="w-full max-w-4xl rounded-2xl border border-zinc-800 bg-zinc-950 overflow-y-auto max-h-[90vh]">
              <img
                src={selectedProject.images[0]}
                className="w-full object-cover"
              />
              <div className="p-6 space-y-4">

                <div>
                  <h3 className="text-xl font-medium text-white">
                    {selectedProject.title}
                  </h3>

                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.split(",").map((s, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-1 rounded-md
                             bg-zinc-900 border border-zinc-800
                             text-zinc-400"
                    >
                      {s.trim()}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex gap-2 items-center">
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        className="text-sm text-white bg-blue-500/10 border border-blue-500/20
                 px-3 py-1.5 rounded-md hover:bg-blue-500/20 transition"
                      >
                        View Demo
                      </a>
                    )}

                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        className="text-sm text-blue-400 hover:text-blue-300"
                      >
                        View Repository
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-sm text-zinc-500 hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}
