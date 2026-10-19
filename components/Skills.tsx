"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="mt-14">
      <SectionLabel>Technical Expertise</SectionLabel>
      <h2
        id="skills-heading"
        className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl"
      >
        Tools I can discuss and demonstrate
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
            className="rounded-2xl border border-line bg-card p-5"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              {cat.title}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-line bg-carddeep px-2.5 py-1 text-xs font-medium text-white/90 transition-colors hover:border-gold/40 hover:text-gold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
