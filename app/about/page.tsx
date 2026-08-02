import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-zinc-50 text-zinc-900 pt-24">
        <About />
      </main>

      <Footer />
    </>
  );
}