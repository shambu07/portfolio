import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// ✅ correct path (based on your folder)
import profileImg from "../assets/profile/shambup.jpeg";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    /* =========================
       Smooth scroll helper
    ========================== */
    const goToSection = (id) => {
        // If already on home → scroll directly
        if (location.pathname === "/") {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
            return;
        }

        // If on another page → navigate home then scroll
        navigate("/", { state: { scrollTo: id } });
    };

    /* =========================
       Scroll after navigation
    ========================== */
    useEffect(() => {
        if (location.pathname !== "/") return;

        const id = location.state?.scrollTo;
        if (!id) return;

        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 80);
    }, [location.pathname, location.state]);

    /* =========================
       Navbar UI
    ========================== */
    return (
        <>
            <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* ================= LEFT (profile + name) ================= */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setOpen(true)}
                            className="relative group"
                        >
                            <img
                                src={profileImg}
                                alt="Shambu"
                                className="h-10 w-10 rounded-full object-cover border border-white/20
                                           group-hover:border-yellow-400/40 transition"
                            />

                            {/* online dot */}
                            <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-yellow-400 border border-black" />
                        </button>

                        <Link
                            to="/"
                            className="font-extrabold text-lg tracking-tight hover:text-yellow-400 transition"
                        >
                            Shambu
                        </Link>
                    </div>

                    {/* ================= CENTER LINKS ================= */}
                    <div className="hidden md:flex gap-6 text-white/70 font-semibold">
                        <button onClick={() => goToSection("projects")} className="hover:text-white">Projects</button>
                        <button onClick={() => goToSection("skills")} className="hover:text-white">Skills</button>
                        <button onClick={() => goToSection("about")} className="hover:text-white">About</button>
                        <button onClick={() => goToSection("contact")} className="hover:text-white">Contact</button>
                    </div>

                    {/* ================= RIGHT BUTTON ================= */}
                    <button
                        onClick={() => goToSection("contact")}
                        className="px-4 py-2 rounded-xl text-sm font-bold border border-yellow-400/40
                                   bg-yellow-400/10 hover:bg-yellow-400/20 transition"
                    >
                        Hire Me
                    </button>
                </div>
            </nav>

            {/* ================= PROFILE MODAL ================= */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm
                               flex items-center justify-center p-4"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-3xl w-full"
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute -top-4 -right-4 bg-white/10 border border-white/20
                                       rounded-full w-10 h-10 text-white font-bold hover:bg-white/20"
                        >
                            ✕
                        </button>

                        <img
                            src={profileImg}
                            alt="Profile"
                            className="w-full max-h-[80vh] object-contain rounded-2xl border border-white/10"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
