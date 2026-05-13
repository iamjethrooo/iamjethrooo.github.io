export default function Contact() {
    return (
        <section id="contact" className="h-screen flex flex-col justify-center items-start space-y-8">

            <h2 className="text-xs uppercase tracking-widest text-zinc-500">
                Contact
            </h2>

            <p className="text-zinc-400 max-w-2xl leading-relaxed">
                Open to freelance work or full-time opportunities.
                If you’re building something interesting, feel free to reach out.
            </p>

            <div className="flex flex-col gap-6">

                {/* Email */}
                <a
                    href="mailto:estangkij@gmail.com"
                    className="flex items-center gap-10 justify-between px-8 py-3 rounded-md border border-zinc-800 hover:border-blue-400 transition group"
                >
                    <span className="text-zinc-300 group-hover:text-blue-400">
                        Email
                    </span>
                    <span className="text-zinc-500 text-sm">
                        let's talk →
                    </span>
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/iamjethrooo"
                    target="_blank"
                    className="flex items-center gap-10 justify-between px-8 py-3 rounded-md border border-zinc-800 hover:border-zinc-600 transition group"
                >
                    <span className="text-zinc-300 group-hover:text-white">
                        GitHub
                    </span>
                    <span className="text-zinc-500 text-sm">
                        code →
                    </span>
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/jethro-estangki/"
                    target="_blank"
                    className="flex items-center gap-10 justify-between px-8 py-3 rounded-md border border-zinc-800 hover:border-zinc-600 transition group"
                >
                    <span className="text-zinc-300 group-hover:text-white">
                        LinkedIn
                    </span>
                    <span className="text-zinc-500 text-sm">
                        profile →
                    </span>
                </a>

            </div>

        </section>

    )
}