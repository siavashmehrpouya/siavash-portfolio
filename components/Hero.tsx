"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
} from "lucide-react";

const container: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
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
    label: "Projects Delivered",
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

        <div className="absolute -left-40 top-72 h-[420px] w-[420px] rounded-full bg-sky-100/40 blur-3xl" />

        <div className="absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-violet-100/40 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:radial-gradient(#000_0.8px,transparent_0.8px)] [background-size:22px_22px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr]"
      >
        {/* Left Column */}
        <div>
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm backdrop-blur"
          >
            <MapPin className="h-4 w-4 text-indigo-500" />

            <span>Vancouver, Canada</span>

            <span className="h-1 w-1 rounded-full bg-zinc-300" />

            <span className="text-emerald-600">
              Open to Opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-10 text-6xl font-black leading-[0.9] tracking-tight text-zinc-950 md:text-8xl"
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
            experience delivering enterprise software, CRM,
            cross-functional delivery, and digital transformation
            initiatives.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>

            <a
              href="https://www.linkedin.com/in/siavash-mehrpouya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900"
            >
              LinkedIn
            </a>
                        <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-all hover:border-zinc-900 hover:shadow-lg"
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
                whileHover={{
                  y: -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 24,
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
            className="mt-20 flex items-center gap-3 text-sm text-zinc-400"
          >
            <div className="h-px w-12 bg-zinc-300" />

            <span>
              Building software, leading teams, and shipping products
              that create real impact.
            </span>
          </motion.div>
        </div>

        {/* Right Column */}
        <motion.div
          variants={item}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md">
            {/* Background Glow */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.45, 0.7, 0.45],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-indigo-200/50 via-sky-100/50 to-violet-200/50 blur-3xl"
            />

            {/* Image Card */}
            <motion.div
              whileHover={{
                y: -10,
                rotate: -1.5,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 22,
              }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white/80 p-4 shadow-[0_35px_90px_rgba(0,0,0,0.14)] backdrop-blur-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/profile-v2.jpg"
                  alt="Siavash Mehrpouya"
                  fill
                  priority
                  sizes="(max-width:1024px) 90vw, 420px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/5" />
              </div>
                            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-white/40" />
            </motion.div>

            {/* Floating Status */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-zinc-200 bg-white/90 px-6 py-3 shadow-xl backdrop-blur-xl"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />

                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>

              <span className="whitespace-nowrap text-sm font-semibold text-zinc-700">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Decorative Blob */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 6, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-10 top-14 hidden h-20 w-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-sky-400 opacity-20 blur-xl lg:block"
            />

            {/* Decorative Circle */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-8 bottom-24 hidden h-14 w-14 rounded-full bg-violet-300/40 blur-lg lg:block"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}