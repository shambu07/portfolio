export default function Hero() {
    return (
        <section className="py-20">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-12">

                {/* Tag */}
                <p className="text-yellow-300 text-sm font-semibold mb-3">
                    Backend • AI • Cloud • 4+ Years Experience
                </p>

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    I Build <span className="text-yellow-300">production-grade systems</span> <br />
                    that scale reliably.
                </h1>

                {/* Description */}
                <p className="text-gray-300 mt-6 max-w-3xl text-lg">
                    Backend & Applied AI Engineer specializing in APIs, event-driven integrations,
                    workflow automation, and cloud-native deployments using
                    Java, Python, Golang, Kafka, Docker, and Kubernetes.
                </p>

                {/* Tech highlight badges */}
                <div className="flex flex-wrap gap-3 mt-6 text-xs">
                    {[
                        "Spring Boot",
                        "Kafka + Camel",
                        "RAG / LLM Workflows",
                        "Docker + Kubernetes",
                        "AWS / Azure",
                        "System Reliability"
                    ].map((t) => (
                        <span
                            key={t}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80"
                        >
              {t}
            </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex gap-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-bold hover:opacity-90"
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15"
                    >
                        Contact Me
                    </a>
                </div>

                {/* Stats row (adds credibility instantly) */}
                <div className="flex gap-10 mt-10 text-sm text-white/60">
                    <span>✓ 4+ Years Experience</span>
                    <span>✓ 6+ Real Projects</span>
                    <span>✓ Backend + AI Specialist</span>
                </div>
            </div>
        </section>
    );
}
