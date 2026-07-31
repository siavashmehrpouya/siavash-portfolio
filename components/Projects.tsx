"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Carbon CRM Transformation",
    description:
      "Led CRM implementation and digital transformation initiatives across cross-functional business teams.",
    technologies: ["Jira", "CRM", "Agile", "Scrum", "AI"],
  },
  {
    title: "Enterprise Software Delivery",
    description:
      "Managed multiple enterprise software projects from planning through production deployment.",
    technologies: ["Roadmaps", "Sprint Planning", "QA", "Release"],
  },
  {
    title: "Digital Product Delivery",
    description:
      "Delivered customer-facing digital initiatives while coordinating engineering and business stakeholders.",
    technologies: ["Product", "Stakeholders", "Delivery"],
  },
  {
    title: "Telecommunications Infrastructure",
    description:
      "Managed infrastructure deployment projects with contractors, vendors, and cross-functional teams.",
    technologies: ["Infrastructure", "Planning", "Vendors"],
  },
  {
    title: "Music Production",
    description:
      "Songwriting, recording, production and creative direction for independent music releases.",
    technologies: ["Logic Pro", "Production", "Mixing"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white py-28 px-6"
    >
      <div className="mx-auto max-w-6xl">

              <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">
            Selected Work
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Projects I'm Proud Of
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            A selection of software delivery, digital transformation,
            infrastructure, and creative projects that reflect my experience
            leading teams, managing stakeholders, and delivering measurable
            outcomes.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-200/60"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-indigo-100 blur-3xl" />
              </div>

              <div className="relative">
                <div className="flex items-start justify-between gap-6">
                  <h3 className="text-2xl font-semibold text-zinc-900">
                    {project.title}
                  </h3>

                  <ArrowUpRight className="h-5 w-5 text-zinc-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <p className="mt-5 leading-7 text-zinc-600">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">

                                    {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 transition-colors duration-300 group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-500">
                    Professional Project
                  </span>

                  <button className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-black hover:shadow-lg">
                    View Details

                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}