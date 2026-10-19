"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, RotateCcw, TriangleAlert } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { demoErrorLogs, demoLogs, demoStages } from "@/lib/data";

type StageStatus = "pending" | "running" | "completed" | "error";

const statusStyles: Record<StageStatus, string> = {
  pending: "border-line bg-carddeep text-mist",
  running: "border-gold/60 bg-gold/10 text-gold",
  completed: "border-moss/50 bg-moss/10 text-moss",
  error: "border-red-500/50 bg-red-500/10 text-red-400",
};

const STEP_MS = 950;

export default function PipelineDemo() {
  const [statuses, setStatuses] = useState<StageStatus[]>(
    Array(demoStages.length).fill("pending")
  );
  const [logs, setLogs] = useState<string[]>([
    "[demo] press “Run Demo” to simulate a pipeline run. Nothing here executes a real pipeline.",
  ]);
  const [running, setRunning] = useState(false);
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  useEffect(() => clearTimers, []);

  const reset = () => {
    clearTimers();
    setStatuses(Array(demoStages.length).fill("pending"));
    setRunning(false);
    setLogs([
      "[demo] press “Run Demo” to simulate a pipeline run. Nothing here executes a real pipeline.",
    ]);
  };

  const appendLogs = (lines: string[]) =>
    setLogs((prev) => [...prev, ...lines]);

  const run = (withError: boolean) => {
    reset();
    setRunning(true);
    const failAt = withError ? 2 : -1; // TRANSFORM stage

    demoStages.forEach((stage, i) => {
      const startAt = 400 + i * STEP_MS;
      if (i > failAt && failAt !== -1) return;

      timers.current.push(
        window.setTimeout(() => {
          setStatuses((prev) =>
            prev.map((s, j) => (j === i ? "running" : s))
          );
          appendLogs([`── ${stage} ──`]);
        }, startAt)
      );

      timers.current.push(
        window.setTimeout(() => {
          if (i === failAt) {
            setStatuses((prev) =>
              prev.map((s, j) => (j === i ? "error" : s))
            );
            appendLogs(demoErrorLogs);
            setRunning(false);
          } else {
            setStatuses((prev) =>
              prev.map((s, j) => (j === i ? "completed" : s))
            );
            appendLogs(demoLogs[stage]);
            if (i === demoStages.length - 1) {
              appendLogs(["[demo] run finished successfully."]);
              setRunning(false);
            }
          }
        }, startAt + STEP_MS - 150)
      );
    });
  };

  return (
    <section aria-labelledby="demo-heading" className="mt-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl border border-line bg-card p-6 shadow-card sm:p-8"
      >
        <SectionLabel>Interactive Demonstration</SectionLabel>
        <h2
          id="demo-heading"
          className="mt-2 text-2xl font-bold tracking-tight text-white"
        >
          Pipeline demo
        </h2>
        <p className="mt-2 text-sm text-mist">
          Simulated, no real pipeline runs — mock data only, no backend or
          credentials involved.
        </p>

        {/* Stages */}
        <ol
          className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-stretch"
          aria-label="Pipeline stages"
        >
          {demoStages.map((stage, i) => (
            <li key={stage} className="flex flex-1 items-stretch gap-2">
              <motion.div
                animate={
                  statuses[i] === "running" ? { scale: [1, 1.04, 1] } : {}
                }
                transition={{ repeat: statuses[i] === "running" ? Infinity : 0, duration: 0.9 }}
                className={`flex flex-1 flex-col items-center justify-center rounded-xl border px-3 py-4 text-center transition-colors ${statusStyles[statuses[i]]}`}
                aria-label={`${stage}: ${statuses[i]}`}
              >
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">
                  Stage {i + 1}
                </span>
                <span className="mt-1 text-sm font-bold tracking-wide">
                  {stage}
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-wider opacity-80">
                  {statuses[i]}
                </span>
              </motion.div>
              {i < demoStages.length - 1 && (
                <div
                  className="hidden items-center sm:flex"
                  aria-hidden="true"
                >
                  <span className="text-mist/50">→</span>
                </div>
              )}
            </li>
          ))}
        </ol>

        {/* Controls */}
        <div className="mt-5 flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => run(false)}
            disabled={running}
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-4 py-2 text-sm font-bold text-ink transition-colors hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Play className="h-4 w-4" aria-hidden="true" />
            Run Demo
          </button>
          <button
            type="button"
            onClick={() => run(true)}
            disabled={running}
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-carddeep px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-ember/50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <TriangleAlert className="h-4 w-4" aria-hidden="true" />
            Simulate Error
          </button>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-carddeep px-4 py-2 text-sm font-semibold text-mist transition-colors hover:text-white"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Reset
          </button>
        </div>

        {/* Log panel */}
        <div className="mt-5">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-mist">
            Execution log
          </p>
          <div
            className="h-44 overflow-y-auto rounded-xl border border-line bg-black/50 p-4 font-mono text-xs leading-relaxed text-mist"
            role="log"
            aria-label="Demo execution log"
            aria-live="polite"
          >
            {logs.map((line, i) => (
              <p
                key={i}
                className={
                  line.includes("ERROR") || line.includes("halted")
                    ? "text-red-400"
                    : line.startsWith("──")
                      ? "mt-2 font-bold text-gold"
                      : line.includes("complete") || line.includes("passed") || line.includes("finished")
                        ? "text-moss"
                        : undefined
                }
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
