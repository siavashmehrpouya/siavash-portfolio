export default function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
        Selected Work
      </p>

      <div className="mt-12 border-t border-zinc-200 pt-12">
        <p className="text-sm text-zinc-400">01</p>

        <h3 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900">
          CRM Transformation
        </h3>

        <p className="mt-2 text-zinc-500">Carbon</p>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-600">
          Led a cross-functional CRM implementation focused on improving
          operational efficiency, stakeholder visibility, and predictable
          software delivery.
        </p>

        <a
          href="#"
          className="mt-8 inline-block font-medium text-zinc-900 transition hover:translate-x-1"
        >
          Explore →
        </a>
      </div>
    </section>
  );
}