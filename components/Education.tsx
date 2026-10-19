"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { certifications, education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="mt-14">
      <SectionLabel>Education & Certifications</SectionLabel>
      <h2
        id="education-heading"
        className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl"
      >
        Foundation
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl border border-line bg-card p-6"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mist">
              Education
            </p>
          </div>
          <p className="mt-4 text-lg font-bold text-white">
            {education.degree}
          </p>
          <p className="mt-1 text-sm text-mist">{education.field}</p>
          <p className="mt-3 text-sm text-mist">
            {education.school} · Graduated {education.years.split("–")[1]?.trim() ?? education.years}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35, delay: 0.07 }}
          className="rounded-2xl border border-line bg-card p-6"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <Award className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mist">
              Certifications
            </p>
          </div>
          <ul className="mt-4 space-y-2.5">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="flex items-center gap-2.5 rounded-xl border border-line bg-carddeep px-4 py-2.5 text-sm font-medium text-white/90"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  aria-hidden="true"
                />
                {cert}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
