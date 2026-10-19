"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { hero, profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="dashboard" aria-labelledby="hero-heading" className="pt-24 lg:pt-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          {hero.label}
        </p>
        <h1
          id="hero-heading"
          className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl"
        >
          {hero.heading}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-mist">
          {hero.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-amber-300"
          >
            Explore Projects
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={profile.resumePath}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-card px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-gold/50"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
        </div>

        <div className="mt-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-moss/30 bg-moss/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-moss">
            <span className="h-1.5 w-1.5 rounded-full bg-moss" aria-hidden="true" />
            {hero.statusBadge}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
