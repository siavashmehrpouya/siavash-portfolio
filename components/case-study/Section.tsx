"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Section({
  title,
  children,
}: Props) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.65,
      }}
      className="mx-auto max-w-6xl px-6 py-16"
    >
      <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
        <div>
          <h2 className="sticky top-28 text-2xl font-bold tracking-tight text-zinc-900">
            {title}
          </h2>
        </div>

        <div className="max-w-3xl text-lg leading-8 text-zinc-600">
          {children}
        </div>
      </div>
    </motion.section>
  );
}