import { timeline } from "../data/timeline"

export default function Timeline() {
  const typeIcon = {
    ship: "🚀",
    build: "🧠"
  }

  return (
    <section
      id="timeline"
      className="h-screen flex flex-col justify-center items-start"
    >
      <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-12">
        Experience Timeline
      </h2>

      <div className="space-y-14 w-full">

        {timeline.map((item, i) => (
          <div key={i} className="flex gap-5 group">

            {/* rail */}
            <div className="relative flex flex-col items-center">
              <div className="w-2.5 h-2.5 bg-blue-400 rounded-full mt-2" />
              {i !== timeline.length - 1 && (
                <div className="w-px flex-1 bg-zinc-800 mt-2" />
              )}
            </div>

            {/* content */}
            <div className="pb-10 w-full transition group-hover:translate-x-[2px]">

              {/* meta */}
              <p className="text-[11px] text-zinc-600 tracking-wide">
                {item.date}
              </p>

              {/* title row */}
              <div className="flex items-center gap-2 mt-1">
                <span>{typeIcon[item.type]}</span>

                <h3 className="text-base font-medium text-white leading-snug">
                  {item.title}
                </h3>

                <span className="text-zinc-500 font-normal">
                  · {item.company}
                </span>
              </div>

              {/* award */}
              {item.award && (
                <p className="text-[11px] text-blue-300 mt-1">
                  🎓 {item.award}
                </p>
              )}

              {/* description */}
              <p className="text-sm text-zinc-400 leading-relaxed mt-3">
                {item.description}
              </p>

              {/* stack */}
              <div className="flex gap-2 mt-4 flex-wrap">
                {item.stack.map((s, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2 py-1 rounded-md
                               bg-zinc-900 border border-zinc-800
                               text-zinc-400"
                  >
                    {s}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  )
}