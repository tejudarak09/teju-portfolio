"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { education, journeyEntries } from "@/lib/data";

export default function Journey() {
  return (
    <section aria-labelledby="journey-heading" className="mt-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl border border-line bg-card p-6 shadow-card sm:p-8"
      >
        <SectionLabel>Engineering Journey</SectionLabel>
        <h2
          id="journey-heading"
          className="mt-2 text-2xl font-bold tracking-tight text-white"
        >
          From classroom to pipelines
        </h2>

        {/* Education */}
        <div className="mt-6 flex items-start gap-4 rounded-xl border border-line bg-carddeep p-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold text-white">
                {education.degree} — {education.field}
              </p>
              <span className="rounded-full border border-moss/30 bg-moss/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-moss">
                Education
              </span>
            </div>
            <p className="mt-1 text-sm text-mist">
              {education.school} · {education.years}
            </p>
          </div>
        </div>

        {/* Timeline */}
        <ol className="mt-6 space-y-0" aria-label="Project development timeline">
          {journeyEntries.map((entry, i) => (
            <li key={entry.title} className="relative flex gap-4 pb-6 last:pb-0">
              {i < journeyEntries.length - 1 && (
                <span
                  className="absolute left-[5px] top-4 h-full w-px bg-line"
                  aria-hidden="true"
                />
              )}
              <span
                className="relative mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gold"
                aria-hidden="true"
              />
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-semibold text-white">{entry.title}</p>
                  <span className="text-xs text-mist/70">{entry.year}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-mist">
                  {entry.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-line bg-ink px-2 py-0.5 text-[11px] font-medium text-mist"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-xs text-mist/70">
          Personal learning projects — not professional employment.
        </p>
      </motion.div>
    </section>
  );
}
