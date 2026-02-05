import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
    const [query, setQuery] = useState("");
    const [tag, setTag] = useState("All");

    const allTags = useMemo(() => {
        const set = new Set();
        projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
        return ["All", ...Array.from(set)];
    }, []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();

        return projects.filter((p) => {
            const matchesQuery =
                !q ||
                p.title.toLowerCase().includes(q) ||
                p.desc.toLowerCase().includes(q) ||
                p.tags.some((t) => t.toLowerCase().includes(q));

            const matchesTag = tag === "All" || p.tags.includes(tag);

            return matchesQuery && matchesTag;
        });
    }, [query, tag]);

    return (
        <section id="projects" className="py-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-3xl font-bold">Projects</h2>
                    <p className="text-gray-400 text-sm mt-1">
                        Search + filter. Click a card for details.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search projects (Kafka, RAG, Cloud...)"
                        className="w-full sm:w-72 px-4 py-2 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-yellow-400/40"
                    />

                    <select
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-yellow-400/40"
                    >
                        {allTags.map((t) => (
                            <option key={t} value={t} className="bg-[#070A12]">
                                {t}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {filtered.length === 0 ? (
                <p className="text-gray-400">No projects found.</p>
            ) : (
                <div className="grid md:grid-cols-3 gap-6">
                    {filtered.map((p) => (
                        <Link
                            key={p.id}
                            to={`/projects/${p.id}`}
                            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-yellow-400/30 transition"
                        >
                            {/* IMAGE FIX: fixed height + object-cover */}
                            <div className="h-44 w-full overflow-hidden">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="h-full w-full object-cover group-hover:scale-[1.03] transition duration-300"
                                    loading="lazy"
                                />
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-semibold">{p.title}</h3>
                                <p className="text-gray-400 text-sm mt-1">{p.desc}</p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {p.tags.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs px-2 py-1 rounded bg-yellow-400/10 border border-yellow-400/20 text-yellow-200"
                                        >
                      {t}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
}
