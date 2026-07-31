"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stats = [
  {
    value: "5+",
    label: "Years Experience",
  },
  {
    value: "20+",
    label: "Projects",
  },
  {
    value: "PMP",
    label: "Certified",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-white" />

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-180px] h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="absolute -left-32 top-72 h-96 w-96 rounded-full bg-sky-100/40 blur-3xl" />

        <div className="absolute -right-32 bottom-20 h-[420px] w-[420px] rounded-full bg-violet-100/40 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:radial-gradient(#000_0.8px,transparent_0.8px)] [background-size:22px_22px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-16 px-6 pt-28 pb-24 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <motion.div
          variants={item}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm backdrop-blur"
        >
          <MapPin className="h-4 w-4 text-indigo-500" />
          Vancouver, Canada
          <span className="h-1 w-1 rounded-full bg-zinc-300" />
          <span className="text-emerald-600">
            Open to Opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-10 max-w-5xl text-6xl font-black leading-[0.92] tracking-tight text-zinc-950 md:text-8xl"
        >
          Siavash
          <br />
          Mehrpouya
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-7 text-xl font-medium text-zinc-600 md:text-2xl"
        >
          Technical Project Manager
          <span className="mx-3 text-zinc-300">•</span>
          Software Delivery
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600"
        >
          PMP-certified Technical Project Manager with 5+ years of
          experience delivering enterprise software, CRM, and digital
          transformation initiatives across cross-functional teams.
          Passionate about building products, improving delivery,
          and creating exceptional user experiences.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>

          <a
            href="https://www.linkedin.com/in/siavash-mehrpouya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-zinc-300 bg-white/70 px-6 py-3 text-sm font-semibold text-zinc-900 backdrop-blur transition-all duration-300 hover:border-zinc-900 hover:bg-white"
          >
            LinkedIn
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/70 px-6 py-3 text-sm font-semibold text-zinc-900 backdrop-blur transition-all duration-300 hover:border-zinc-900 hover:bg-white"
          >
            <Mail className="h-4 w-4" />
            Contact
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-20 grid max-w-3xl grid-cols-3 gap-8 border-t border-zinc-200 pt-10"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 22,
              }}
            >
              <h3 className="text-4xl font-bold tracking-tight text-zinc-900">
                {stat.value}
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="mt-24 flex items-center gap-3 text-sm text-zinc-400"
        >
          <div className="h-px w-12 bg-zinc-300" />

          <span>
            Building software, leading teams, and delivering products that
            create real impact.
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}