import { useEffect, useMemo, useState } from "react";

const skillGroups = [
    {
        title: "Top Skills",
        skills: [
            "Java",
            "Python",
            "Golang",
            "Spring Boot",
            "Kafka",
            "Apache Camel",
            "RAG",
            "LangGraph",
            "Docker",
            "Kubernetes",
            "AWS",
            "Azure",
        ],
    },
    {
        title: "Languages",
        skills: ["Java", "Python", "Golang", "JavaScript", "TypeScript", "SQL"],
    },
    {
        title: "Backend & APIs",
        skills: [
            "Spring Boot",
            "Spring MVC",
            "Spring Security",
            "JPA/Hibernate",
            "Spring JDBC",
            "FastAPI",
            "Flask",
            "REST APIs",
            "Microservices",
            "JWT",
            "RBAC",
        ],
    },
    {
        title: "Integration & Messaging",
        skills: [
            "Apache Camel",
            "Apache Kafka",
            "RabbitMQ",
            "JMS",
            "Event-driven Architecture",
            "Workflow Automation",
            "DLQ",
            "Retry Patterns",
            "Self-healing Workflows",
        ],
    },
    {
        title: "AI / Applied GenAI",
        skills: [
            "LLMs",
            "RAG Pipelines",
            "LangChain",
            "LangGraph",
            "Agentic Workflows",
            "Embeddings",
            "Vector DBs (FAISS, Pinecone, Chroma)",
            "Prompt Engineering",
            "AI API Integration",
            "MCP (Module Context Protocol)",
        ],
    },
    {
        title: "Cloud & DevOps",
        skills: [
            "AWS (EC2, IAM basics)",
            "Azure",
            "Docker",
            "Kubernetes",
            "CI/CD",
            "Jenkins",
            "GitHub Actions",
            "ArgoCD",
            "Terraform",
            "Ansible",
            "IaC",
        ],
    },
    {
        title: "Databases & Caching",
        skills: ["PostgreSQL", "MySQL", "SQL Server", "H2", "MongoDB", "Redis", "Oracle (basic)"],
    },
    {
        title: "Reliability & Observability",
        skills: [
            "Logging",
            "Monitoring",
            "Metrics",
            "Health Checks",
            "Error Handling",
            "Failure Recovery",
            "Production Debugging",
            "Performance Tuning",
        ],
    },
    {
        title: "Frontend (supporting)",
        skills: ["React", "TypeScript", "Material UI", "HTML5", "CSS3"],
    },
    {
        title: "Tools",
        skills: ["Git", "GitHub", "Postman", "Maven", "IntelliJ", "Eclipse", "Agile/Scrum"],
    },
];

export default function Skills() {
    const [query, setQuery] = useState("");

    const filteredGroups = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return skillGroups;

        return skillGroups
            .map((g) => ({
                ...g,
                skills: g.skills.filter((s) => s.toLowerCase().includes(q)),
            }))
            .filter((g) => g.skills.length > 0);
    }, [query]);

    useEffect(() => {
        const els = document.querySelectorAll(".skill-reveal, .skill-chip");
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
            { threshold: 0.15 }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <section id="skills" className="py-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                <div className="skill-reveal">
                    <h2 className="text-3xl font-extrabold">Skills</h2>
                    <p className="text-white/60 font-semibold text-sm mt-1">
                        Recruiter-friendly keywords (searchable)
                    </p>

                    {/* ✅ ADDED SUMMARY */}
                    <p className="text-white/50 mt-4 max-w-2xl leading-relaxed">
                        Core technologies I use to design scalable backend systems, AI pipelines,
                        integrations, automation workflows, and cloud deployments.
                    </p>
                </div>

                <div className="skill-reveal">
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search skills (Kafka, RAG, Spring...)"
                        className="w-full md:w-80 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white font-semibold outline-none focus:border-yellow-400/40"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {filteredGroups.map((group, i) => (
                    <div
                        key={group.title}
                        className="skill-reveal rounded-3xl border border-white/10 bg-white/5 p-5"
                        style={{ animationDelay: `${i * 0.10}s` }}
                    >
                        <h3 className="text-yellow-300 font-extrabold mb-4 text-sm tracking-wide">
                            {group.title}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill, idx) => (
                                <span
                                    key={skill}
                                    className="skill-chip px-3 py-1 text-[11px] rounded-full
                    bg-white/5 border border-white/10 text-white/80 font-extrabold
                    hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400/10
                    transition duration-200"
                                    style={{ animationDelay: `${i * 0.1 + idx * 0.03}s` }}
                                >
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {filteredGroups.length === 0 && (
                <div className="mt-8 text-white/70 font-semibold">No matching skills found.</div>
            )}
        </section>
    );
}
