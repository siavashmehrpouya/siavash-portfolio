import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <Navbar />

      <Hero />

      <section className="py-24 md:py-32">
        <Projects />
      </section>

      <section className="py-24 md:py-32">
        <About />
      </section>

      <Footer />
    </main>
  );
}