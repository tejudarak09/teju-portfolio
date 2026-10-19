"use client";

import { motion } from "framer-motion";
import { metricCards } from "@/lib/data";
import Sparkline from "./Sparkline";

const badgeTones: Record<string, string> = {
  gold: "border-gold/30 bg-gold/10 text-gold",
  green: "border-moss/30 bg-moss/10 text-moss",
  orange: "border-ember/30 bg-ember/10 text-ember",
};

export default function MetricCards() {
  return (
    <div
      className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      role="list"
      aria-label="Portfolio highlights"
    >
      {metricCards.map((card, i) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.title}
            role="listitem"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="rounded-2xl border border-line bg-card p-5 shadow-card transition-colors hover:border-gold/30"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-carddeep text-gold">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-[10px] font-semibold uppercase leading-tight tracking-[0.14em] text-mist">
                  {card.title}
                </p>
              </div>
              <span
                className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${badgeTones[card.badgeTone]}`}
              >
                {card.badge}
              </span>
            </div>
            <p className="mt-4 text-3xl font-bold tracking-tight text-white">
              {card.value}
            </p>
            <p className="mt-1 text-xs text-mist">{card.description}</p>
            <Sparkline seed={card.seed} className="mt-3 h-8 w-full" />
          </motion.div>
        );
      })}
    </div>
  );
}
