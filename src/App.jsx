import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ProjectDetails from "./pages/ProjectDetails"; // ✅ move to separate file

function Home() {
    return (
        <>
            <Hero />
            <Skills />
            <Projects />
            <About />
            <Contact />
        </>
    );
}

export default function App() {
    return (
        <div className="min-h-screen bg-[#070A12] text-white">
            <Navbar />

            <main className="w-full">
                <div className="max-w-6xl mx-auto px-6">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects/:id" element={<ProjectDetails />} />
                    </Routes>
                </div>
            </main>

            <Footer />
        </div>
    );
}
