"use client";

import { motion } from "framer-motion";
import GlassDashboard from "./GlassDashboard";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
};

export default function CaseStudyHero({
  eyebrow,
  title,
  description,
  tags,
}: Props) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-100 blur-3xl opacity-70" />

        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-sky-100 blur-3xl opacity-60" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 py-28 lg:grid-cols-[1.1fr_0.9fr]">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
            {eyebrow}
          </p>

          <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-zinc-900 md:text-7xl">
            {title}
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-600">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <div className="flex justify-center lg:justify-end">
          <GlassDashboard />
        </div>

      </div>
    </section>
  );
}