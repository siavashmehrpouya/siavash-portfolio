import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MusicPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-32">
        <h1 className="text-5xl font-bold tracking-tight">
          Music
        </h1>

        <p className="mt-10 max-w-3xl text-lg leading-8 text-zinc-600">
          Music portfolio coming soon.
        </p>
      </main>

      <Footer />
    </>
  );
}