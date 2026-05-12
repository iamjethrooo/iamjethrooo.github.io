export default function About() {
    return (
        <section id='about' className="h-screen flex flex-col justify-center items-start space-y-6">

            <h2 className="text-xs uppercase tracking-widest text-zinc-500">
                About Me
            </h2>

            <p className="text-zinc-300 leading-relaxed text-base md:text-lg max-w-3xl">
                I am a full-stack developer focused on building reliable web systems with clean architecture,
                performance awareness, and practical UI design.
            </p>

            <p className="text-zinc-400 leading-relaxed max-w-3xl">
                I’ve built and maintained web systems used in real environments, working across full-stack development
                with a focus on reliability, performance, and usability under real constraints.
            </p>

            <p className="text-zinc-400 leading-relaxed max-w-3xl">
                Outside of programming, I spend time training at my home gym, playing strategy-based games,
                and occasionally building side projects just for experimentation.
                I like activities that require focus, pattern recognition, and consistency.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
                {["C#", "ASP.NET WebForms", "PHP", "JavaScript", "SQL", "Linux"].map((tech) => (
                    <span
                        key={tech}
                        className="text-xs px-2 py-1 border border-zinc-800 rounded-md text-zinc-400"
                    >
                        {tech}
                    </span>
                ))}
            </div>

        </section>
    )
}