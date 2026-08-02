"use client";

import { motion } from "framer-motion";

type Result = {
  title: string;
  description: string;
};

type Props = {
  items: Result[];
};

export default function ResultsGrid({
  items,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.55,
            delay: index * 0.15,
          }}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          className="group rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-colors duration-300 hover:border-indigo-200 hover:shadow-2xl"
        >
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-2xl transition-transform duration-300 group-hover:rotate-12">
            ✦
          </div>

          <h3 className="text-xl font-bold text-zinc-900">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-zinc-600">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}