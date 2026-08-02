import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-zinc-50 text-zinc-900 pt-24">
        <Projects />
      </main>

      <Footer />
    </>
  );
}