export default function About() {
  const skills = [
    "Technical Project Management",
    "Agile",
    "Scrum",
    "Jira",
    "Azure DevOps",
    "CRM",
    "Leadership",
    "Stakeholder Management",
    "Cross-functional Teams",
    "Software Delivery",
  ];

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "20+", label: "Projects" },
    { value: "PMP", label: "Certified" },
    { value: "Vancouver", label: "Based in Canada" },
  ];

  const timeline = [
    "Structural Engineering",
    "Technical Project Management",
    "Software Delivery",
    "Building Digital Products",
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
        About
      </p>

      <div className="mt-12 max-w-4xl">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
          Engineering mindset.<br />
          Product thinking.<br />
          Human leadership.
        </h2>

        <div className="mt-10 space-y-8 text-lg leading-8 text-zinc-600">
          <p>I started my career as a structural engineer, where I learned to solve complex problems through analytical thinking and structured decision-making. As technology became a bigger part of the projects I worked on, my passion naturally shifted toward software delivery and project leadership.</p>
          <p>Today, I help cross-functional teams deliver software by creating clarity, aligning stakeholders, and building environments where engineering, product, and business teams can succeed together.</p>
          <p>Outside of work, I'm also a singer, songwriter, and music producer. Creating music has strengthened my creativity, communication, and collaboration—qualities that continue to influence how I lead teams and solve problems.</p>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-bold text-zinc-900">Core Expertise</h3>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h4 className="text-4xl font-bold text-zinc-900">{stat.value}</h4>
            <p className="mt-2 text-sm text-zinc-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
        <h3 className="text-2xl font-bold text-zinc-900">Career Journey</h3>
        <div className="mt-8 space-y-5">
          {timeline.map((step, index) => (
            <div key={step} className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-bold text-white">
                {index + 1}
              </div>
              <p className="text-lg text-zinc-700">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}