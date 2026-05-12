export default function Home() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }

    return (
        <section id='home' className="h-screen flex flex-col justify-center items-start space-y-6">

            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-100">
                Jethro Estangki
            </h1>

            <p className="text-blue-400/90 text-lg md:text-xl font-medium tracking-wide">
                Full-stack Engineer
            </p>

            <p className="text-zinc-400 max-w-xl leading-relaxed text-base md:text-lg">
                I build web applications with a focus on scalability, performance, and clean, maintainable architecture.
            </p>

            <div className="flex gap-4 pt-6">

                <button
                    onClick={() => scrollTo("projects")}
                    className="text-sm px-4 py-2 rounded-md bg-zinc-900 border border-zinc-800 hover:border-emerald-400 hover:text-emerald-400 transition"
                >
                    View Projects
                </button>

                <a
                    href="https://github.com/iamjethrooo"
                    target="_blank"
                    className="text-sm px-4 py-2 rounded-md border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition flex items-center gap-2"
                >
                    <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 .5C5.7.5.5 5.9.5 12.3c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 2 2.9 1.4 3.6 1.1.1-.8.4-1.4.7-1.7-2.5-.3-5.1-1.3-5.1-5.7 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 1.8-.4 2.7-.4s1.8.1 2.7.4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.1.8.8 1.3 1.9 1.3 3.2 0 4.4-2.6 5.4-5.1 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.9 18.3.5 12 .5z" />
                    </svg>
                    GitHub
                </a>

            </div>

            {/* subtle scroll cue */}
            <button
                onClick={() => scrollTo("about")}
                className="absolute bottom-10 text-xs text-zinc-600 animate-bounce [animation-duration:2s]"
            >
                scroll ↓
            </button>

        </section>
    )
}