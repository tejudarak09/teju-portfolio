"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mt-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl border border-line bg-card p-6 shadow-card sm:p-8"
      >
        <SectionLabel>About</SectionLabel>
        <h2
          id="about-heading"
          className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          Aspiring Data Engineer
        </h2>
        <div className="mt-5 flex gap-4">
          <Quote
            className="h-6 w-6 shrink-0 rotate-180 text-gold/60"
            aria-hidden="true"
          />
          <p className="max-w-3xl text-[15px] leading-relaxed text-mist">{about}</p>
        </div>
      </motion.div>
    </section>
  );
}
