export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[82vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
      <p className="text-lg font-medium text-zinc-600">
        Technical Project Manager · Vancouver, Canada
      </p>

      <h1 className="mt-5 text-6xl font-black uppercase tracking-tight text-zinc-950 md:text-7xl">
        SIAVASH MEHRPOUYA
      </h1>

      <h2 className="mt-10 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-zinc-900 md:text-6xl">
        Helping teams turn complex software initiatives into successful delivery.
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-500">
        PMP-certified Technical Project Manager specializing in software delivery,
        Agile execution, stakeholder alignment, and cross-functional leadership.
      </p>

      <div className="mt-12 flex items-center gap-8 text-base">
        <a
          href="/resume.pdf"
          download
          className="font-medium text-zinc-900 transition hover:text-zinc-500"
        >
          Download Resume →
        </a>

        <a
          href="https://www.linkedin.com/in/siavash-mehrpouya-pmp-m-sc-384b14a3/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-zinc-900 transition hover:text-zinc-500"
        >
          LinkedIn ↗
        </a>

        <a
          href="mailto:siavash.mehrpouya@gmail.com"
          className="font-medium text-zinc-900 transition hover:text-zinc-500"
        >
          Contact ↗
        </a>
      </div>
    </section>
  );
}