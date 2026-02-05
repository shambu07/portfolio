import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

function HighlightedParagraph({ parts }) {
    return (
        <p className="text-white/70 leading-relaxed">
            {parts.map((p, idx) =>
                    p.highlight ? (
                        <span
                            key={idx}
                            className="text-yellow-200 font-semibold bg-yellow-400/10 border border-yellow-400/20 px-2 py-0.5 rounded-lg"
                        >
            {p.text}
          </span>
                    ) : (
                        <span key={idx}>{p.text}</span>
                    )
            )}
        </p>
    );
}

export default function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);
    const [activeImg, setActiveImg] = useState(null);

    // Close modal on ESC
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") setActiveImg(null);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    if (!project) {
        return <div className="py-20 text-center text-white/70">Project not found</div>;
    }

    const hasWhatIBuilt = Array.isArray(project.whatIBuilt) && project.whatIBuilt.length > 0;
    const hasHowItWorks = Array.isArray(project.howItWorks) && project.howItWorks.length > 0;
    const hasTechStack = Array.isArray(project.techStack) && project.techStack.length > 0;
    const hasScreenshots = Array.isArray(project.screenshots) && project.screenshots.length > 0;

    // Only show special sections for Nexbridge One
    const isSoloProject = project.id === "nexbridge-one";
    const hasOverview =
        isSoloProject &&
        project.overview &&
        Array.isArray(project.overview.paragraphs) &&
        project.overview.paragraphs.length > 0;

    return (
        <div className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                {/* BACK */}
                <Link to="/" className="text-yellow-300 font-semibold hover:underline">
                    ← Back
                </Link>

                {/* TITLE + BADGE */}
                <div className="mt-6">
                    <div className="flex flex-wrap items-center gap-3">
                        <h1 className="text-4xl font-extrabold tracking-tight">{project.title}</h1>

                        {isSoloProject && (
                            <span className="px-3 py-1 text-xs font-extrabold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                SOLE DEVELOPER • END-TO-END
              </span>
                        )}
                    </div>

                    {project.role && <p className="text-white/70 mt-2 font-semibold">{project.role}</p>}
                    <p className="text-white/60 mt-2">{project.desc}</p>
                </div>

                {/* COVER IMAGE */}
                <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
                    <div className="w-full aspect-[16/9] flex items-center justify-center">
                        <img
                            src={project.image}
                            alt="cover"
                            className="w-full h-full object-contain"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* TAGS */}
                {project.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-5">
                        {project.tags.map((t) => (
                            <span
                                key={t}
                                className="px-3 py-1 rounded-full text-xs bg-yellow-400/10 border border-yellow-400/20 text-yellow-200"
                            >
                {t}
              </span>
                        ))}
                    </div>
                )}

                {/* ✅ OVERVIEW (Nexbridge One only) */}
                {hasOverview && (
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-3">{project.overview.title || "Overview"}</h2>

                        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-3">
                            {project.overview.paragraphs.map((para, idx) => (
                                <HighlightedParagraph key={idx} parts={para.parts} />
                            ))}
                        </div>
                    </section>
                )}

                {/* OWNERSHIP (Nexbridge One only) */}
                {isSoloProject && (
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-3">Ownership</h2>

                        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                            <ul className="space-y-2 text-white/70">
                                <li>• Built entirely by me as a self-directed project</li>
                                <li>• Designed complete architecture & integrations</li>
                                <li>• Implemented backend services, security, and workflows</li>
                                <li>• Built monitoring, retry engine, and self-healing logic</li>
                                <li>• Developed full React dashboard UI</li>
                                <li>• Owned design → coding → testing → deployment end-to-end</li>
                            </ul>
                        </div>
                    </section>
                )}

                {/* WHAT I BUILT */}
                {hasWhatIBuilt && (
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-3">What I built</h2>
                        <ul className="space-y-2 text-white/70">
                            {project.whatIBuilt.map((x, idx) => (
                                <li key={idx}>• {x}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* HOW IT WORKS */}
                {hasHowItWorks && (
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-3">How it works</h2>
                        <div className="space-y-4">
                            {project.howItWorks.map((s, idx) => (
                                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="font-semibold">{s.step}</div>
                                    <div className="text-white/60">{s.detail}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* TECH STACK */}
                {hasTechStack && (
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-3">Tech Stack</h2>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((t, idx) => (
                                <span key={idx} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10">
                  {t}
                </span>
                            ))}
                        </div>
                    </section>
                )}

                {/* SCREENSHOTS */}
                {hasScreenshots && (
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-3">Screenshots</h2>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {project.screenshots.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImg(img)}
                                    className="group rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:scale-105 transition"
                                >
                                    <div className="w-full aspect-[16/9] flex items-center justify-center">
                                        <img
                                            src={img}
                                            className="w-full h-full object-contain"
                                            loading="lazy"
                                            alt=""
                                        />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </section>
                )}

                {/* LINKS */}
                <div className="mt-12 flex gap-4">
                    {project.links?.demo && (
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-xl bg-yellow-400 text-black font-bold"
                        >
                            Live Demo
                        </a>
                    )}

                    {project.links?.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10"
                        >
                            GitHub
                        </a>
                    )}
                </div>

                {/* CTA SECTION (Nexbridge One only) */}
                {isSoloProject && (
                    <section className="mt-16">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                            <h3 className="text-xl font-bold mb-3">
                                Interested in integration automation or data movement?
                            </h3>

                            <p className="text-white/70 max-w-2xl mx-auto">
                                I’m open to collaborating with companies that need reliable data pipelines,
                                integrations, or bidirectional sync workflows. Available for consulting,
                                custom builds, or full-time roles.
                            </p>

                            <Link
                                to="/#contact"
                                className="inline-block mt-6 px-6 py-3 rounded-xl bg-yellow-400 text-black font-bold hover:scale-105 transition"
                            >
                                Let’s Connect
                            </Link>
                        </div>
                    </section>
                )}
            </div>

            {/* IMAGE MODAL */}
            {activeImg && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center p-6 z-50"
                    onClick={() => setActiveImg(null)}
                >
                    <img
                        src={activeImg}
                        className="max-h-[90vh] max-w-[95vw] object-contain rounded-2xl"
                        onClick={(e) => e.stopPropagation()}
                        alt=""
                    />
                </div>
            )}
        </div>
    );
}
