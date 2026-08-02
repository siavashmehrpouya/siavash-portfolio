"use client";

import { motion } from "framer-motion";

export default function GlassDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{
        rotateX: 4,
        rotateY: -4,
        y: -6,
      }}
      className="relative w-full max-w-md"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div className="rounded-[32px] border border-white/50 bg-white/70 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-2xl">

        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-zinc-900">
            Sprint Progress
          </h3>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            LIVE
          </span>
        </div>

        <div className="mt-8">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-zinc-500">
              Progress
            </span>

            <span className="font-semibold">
              82%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-zinc-200">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "82%" }}
              transition={{
                duration: 1.2,
                delay: 0.4,
              }}
              className="h-full rounded-full bg-indigo-600"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-5">

          <div className="rounded-2xl bg-zinc-50 p-5">
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Release
            </p>

            <h4 className="mt-2 text-lg font-bold text-emerald-600">
              READY
            </h4>
          </div>

          <div className="rounded-2xl bg-zinc-50 p-5">
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Velocity
            </p>

            <h4 className="mt-2 text-lg font-bold">
              32 pts
            </h4>
          </div>

          <div className="rounded-2xl bg-zinc-50 p-5">
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Teams
            </p>

            <h4 className="mt-2 text-lg font-bold">
              8
            </h4>
          </div>

          <div className="rounded-2xl bg-zinc-50 p-5">
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Status
            </p>

            <h4 className="mt-2 text-lg font-bold text-indigo-600">
              On Track
            </h4>
          </div>

        </div>
      </div>
    </motion.div>
  );
}