"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ChevronDown,
  ExternalLink,
  Hammer,
  Mail,
} from "lucide-react";
import { GithubIcon } from "./icons";
import SectionLabel from "./SectionLabel";
import {
  projects,
  moreProjects,
  profile,
  type Project,
  type MoreProject,
} from "@/lib/data";

type Linkable = Pick<Project, "link" | "linkLabel" | "title">;

function LinkButton({ project }: { project: Linkable }) {
  if (!project.link) {
    return (
      <a
        href={`mailto:${profile.email}?subject=${encodeURIComponent(
          `Code request: ${project.title}`
        )}`}
        className="inline-flex items-center gap-2 rounded-xl border border-line bg-carddeep px-4 py-2 text-sm font-semibold text-mist transition-colors hover:border-gold/40 hover:text-white"
      >
        <Mail className="h-4 w-4" aria-hidden="true" />
        {project.linkLabel ?? "GitHub"}
      </a>
    );
  }
  const isDemo = project.linkLabel === "Live Demo";
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-xl border border-line bg-carddeep px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-gold/50 hover:text-gold"
    >
      {isDemo ? (
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      ) : (
        <GithubIcon className="h-4 w-4" />
      )}
      {project.linkLabel ?? "GitHub"}
    </a>
  );
}

function CaseStudy({ project }: { project: Project }) {
  const cs = project.caseStudy;
  if (!cs) return null;
  const blocks: { title: string; body: React.ReactNode }[] = [
    { title: "Overview", body: <p>{cs.overview}</p> },
    { title: "Problem", body: <p>{cs.problem}</p> },
    { title: "Data source", body: <p>{cs.dataSource}</p> },
    { title: "Ingestion", body: <p>{cs.ingestion}</p> },
    { title: "Transformation", body: <p>{cs.transformation}</p> },
    { title: "Storage", body: <p>{cs.storage}</p> },
  ];

  return (
    <div className="mt-5 space-y-5 border-t border-line pt-5 text-sm leading-relaxed text-mist">
      {blocks.map((b) => (
        <div key={b.title}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            {b.title}
          </p>
          <div className="mt-1.5">{b.body}</div>
        </div>
      ))}

      {/* Architecture diagram */}
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
          Architecture
        </p>
        <ol
          className="mt-3 space-y-0"
          aria-label={`${project.title} architecture`}
        >
          {cs.architecture.map((stage, i) => (
            <li key={stage}>
              <div className="rounded-xl border border-line bg-ink px-4 py-2.5 font-mono text-xs text-white/90">
                {stage}
              </div>
              {i < cs.architecture.length - 1 && (
                <div className="flex justify-center py-1" aria-hidden="true">
                  <ArrowDown className="h-4 w-4 text-gold" />
                </div>
              )}
            </li>
          ))}
        </ol>
        {cs.architectureNote && (
          <p className="mt-2 text-xs italic text-mist/70">{cs.architectureNote}</p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            Data-quality checks
          </p>
          <ul className="mt-1.5 list-disc space-y-1 pl-5">
            {cs.dqChecks.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            Sample outputs
          </p>
          <ul className="mt-1.5 list-disc space-y-1 pl-5">
            {cs.outputs.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
          Technologies used
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {cs.techUsed.map((t) => (
            <span
              key={t}
              className="rounded-md border border-line bg-carddeep px-2 py-0.5 text-[11px] font-medium text-white/90"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            Challenges & lessons
          </p>
          <ul className="mt-1.5 list-disc space-y-1 pl-5">
            {cs.challenges.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            Future improvements
          </p>
          <ul className="mt-1.5 list-disc space-y-1 pl-5">
            {cs.future.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        <LinkButton project={project} />
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const inDev = project.inDevelopment === true;
  const showDetails = !inDev && !!project.caseStudy;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 2) * 0.07 }}
      className="rounded-2xl border border-line bg-card p-6 shadow-card transition-colors hover:border-gold/25"
      aria-labelledby={`project-${project.id}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold">
            {project.category}
          </span>
          {inDev && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ember/40 bg-ember/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ember">
              <Hammer className="h-3 w-3" aria-hidden="true" />
              In Development
            </span>
          )}
        </div>
        <span className="font-mono text-xs text-mist/60">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3
        id={`project-${project.id}`}
        className="mt-3 text-lg font-bold leading-snug text-white"
      >
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-mist">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-line bg-carddeep px-2 py-0.5 text-[11px] font-medium text-mist"
          >
            {tag}
          </span>
        ))}
      </div>

      {inDev && project.scopeBullets && (
        <ul className="mt-4 space-y-1.5" aria-label="Planned scope">
          {project.scopeBullets.map((s) => (
            <li
              key={s}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-mist"
            >
              <span
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                aria-hidden="true"
              />
              {s}
            </li>
          ))}
        </ul>
      )}

      {!inDev && project.results.length > 0 && (
        <dl className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {project.results.map((r) => (
            <div
              key={r.label}
              className="rounded-xl border border-line bg-ink px-3 py-2.5"
            >
              <dt className="order-2 mt-0.5 text-[10px] uppercase tracking-wider text-mist/80">
                {r.label}
              </dt>
              <dd className="order-1 text-base font-bold text-gold">
                {r.value}
              </dd>
            </div>
          ))}
        </dl>
      )}

      {showDetails && (
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={`case-study-${project.id}`}
            className="inline-flex items-center gap-2 rounded-xl bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold/20"
          >
            {open ? "Hide Details" : "View Details"}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
          <LinkButton project={project} />
        </div>
      )}

      <AnimatePresence initial={false}>
        {showDetails && open && (
          <motion.div
            id={`case-study-${project.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <CaseStudy project={project} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function MoreProjectCard({
  project,
  index,
}: {
  project: MoreProject;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
      className="rounded-2xl border border-line bg-card p-5 shadow-card transition-colors hover:border-gold/25"
      aria-labelledby={`more-project-${project.id}`}
    >
      <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold">
        More Work
      </span>
      <h3
        id={`more-project-${project.id}`}
        className="mt-2.5 text-base font-bold leading-snug text-white"
      >
        {project.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-mist">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-line bg-carddeep px-2 py-0.5 text-[11px] font-medium text-mist"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.results.length > 0 && (
        <dl className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {project.results.map((r) => (
            <div
              key={r.label}
              className="rounded-xl border border-line bg-ink px-3 py-2"
            >
              <dt className="mt-0.5 text-[10px] uppercase tracking-wider text-mist/80">
                {r.label}
              </dt>
              <dd className="text-sm font-bold text-gold">{r.value}</dd>
            </div>
          ))}
        </dl>
      )}
      <div className="mt-3">
        <LinkButton project={project} />
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="mt-14">
      <SectionLabel>Featured Projects</SectionLabel>
      <h2
        id="projects-heading"
        className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl"
      >
        Work that speaks in numbers
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-mist">
        Featured below are the current CV projects — completed builds with
        verified results, plus in-development work clearly marked. Expand any
        completed card for the full case study.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      <div className="mt-12">
        <SectionLabel>More Projects</SectionLabel>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
          Also built
        </h3>
        <p className="mt-2 max-w-2xl text-sm text-mist">
          Additional completed projects with real data and verified results.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
          {moreProjects.map((p, i) => (
            <MoreProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
