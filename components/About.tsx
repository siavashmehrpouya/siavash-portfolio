export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
        About
      </p>

      <div className="mt-12 max-w-4xl">

        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
          Engineering mindset.
          <br />
          Product thinking.
          <br />
          Human leadership.
        </h2>

        <div className="mt-10 space-y-8 text-lg leading-8 text-zinc-600">

          <p>
            I started my career as a structural engineer, where I learned to
            solve complex problems through analytical thinking and structured
            decision-making. As technology became a bigger part of the projects
            I worked on, my passion naturally shifted toward software delivery
            and project leadership.
          </p>

          <p>
            Today, I help cross-functional teams deliver software by creating
            clarity, aligning stakeholders, and building environments where
            engineering, product, and business teams can succeed together.
          </p>

          <p>
            Outside of work, I'm also a singer, songwriter, and music producer.
            Creating music has strengthened my creativity, communication, and
            collaboration—qualities that continue to influence how I lead teams
            and solve problems.
          </p>

        </div>

      </div>
    </section>
  );
}