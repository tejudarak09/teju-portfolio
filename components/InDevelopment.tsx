"use client";

import { motion } from "framer-motion";
import { Hammer } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { inDevelopment } from "@/lib/data";

export default function InDevelopment() {
  return (
    <section aria-labelledby="indev-heading" className="mt-10">
      <SectionLabel>In Development</SectionLabel>
      <h2
        id="indev-heading"
        className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl"
      >
        Currently being built
      </h2>
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {inDevelopment.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
            className="rounded-2xl border border-dashed border-gold/30 bg-card p-6"
            aria-labelledby={`indev-${i}`}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ember/40 bg-ember/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ember">
              <Hammer className="h-3 w-3" aria-hidden="true" />
              In Development
            </span>
            <h3
              id={`indev-${i}`}
              className="mt-3 text-lg font-bold leading-snug text-white"
            >
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-mist">
              {p.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-line bg-carddeep px-2 py-0.5 text-[11px] font-medium text-mist"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
