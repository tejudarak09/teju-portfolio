"use client";

import { motion } from "framer-motion";
import { secondaryStats } from "@/lib/data";

export default function StatCards() {
  return (
    <div
      className="mt-4 grid grid-cols-2 gap-4 xl:grid-cols-4"
      role="list"
      aria-label="Project counts"
    >
      {secondaryStats.map((stat, i) => (
        <motion.div
          key={stat.label}
          role="listitem"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35, delay: i * 0.05 }}
          className="rounded-2xl border border-line bg-carddeep px-4 py-5 text-center"
        >
          <p className="text-2xl font-bold text-white">{stat.value}</p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-mist">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
