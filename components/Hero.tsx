export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">

      <div className="rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-600">
        📍 Vancouver, Canada
      </div>

      <h1 className="mt-8 text-6xl font-black tracking-tight text-zinc-950 md:text-8xl">
        SIAVASH
        <br />
        MEHRPOUYA
      </h1>

      <p className="mt-8 text-xl font-medium uppercase tracking-[0.3em] text-zinc-500">
        Technical Project Manager
      </p>

      <h2 className="mt-8 max-w-5xl text-4xl font-semibold leading-tight text-zinc-900 md:text-6xl">
        Delivering software.
        <br />
        Aligning people.
        <br />
        Building products that ship.
      </h2>

      <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-500">
        PMP-certified Technical Project Manager with a background in engineering,
        software delivery, Agile execution, and cross-functional leadership.
        Passionate about turning complexity into successful outcomes.
      </p>

      <div className="mt-14 flex flex-wrap justify-center gap-4">

        <a
          href="/resume.pdf"
          download
          className="rounded-full bg-black px-7 py-3 font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-zinc-800"
        >
          Download Resume
        </a>

        <a
          href="https://www.linkedin.com/in/siavash-mehrpouya-pmp-m-sc-384b14a3/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-zinc-300 px-7 py-3 font-medium transition duration-300 hover:-translate-y-1 hover:bg-zinc-100"
        >
          LinkedIn
        </a>

        <a
          href="mailto:siavash.mehrpouya@gmail.com"
          className="rounded-full border border-zinc-300 px-7 py-3 font-medium transition duration-300 hover:-translate-y-1 hover:bg-zinc-100"
        >
          Contact
        </a>

      </div>

      <div className="mt-24 animate-bounce text-3xl text-zinc-400">
        ↓
      </div>

    </section>
  );
}