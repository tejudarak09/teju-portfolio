"use client";

import { useEffect, useState } from "react";
import { Download, MapPin, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { navItems, profile } from "@/lib/data";

function ProfilePhoto() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-card text-lg font-bold tracking-wide text-gold"
        role="img"
        aria-label="Profile photo placeholder"
      >
        {profile.initials}
      </div>
    );
  }
  return (
    <img
      src="/profile.jpg"
      alt="Tejasvi Darak"
      onError={() => setFailed(true)}
      className="h-14 w-14 rounded-2xl border border-line object-cover"
    />
  );
}

function SidebarBody({ onNavigate }: { onNavigate?: () => void }) {
  const [active, setActive] = useState("dashboard");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onNavigate?.();
  };

  return (
    <div className="flex h-full flex-col bg-panel">
      {/* Profile */}
      <div className="px-6 pb-6 pt-8">
        <div className="flex items-start justify-between">
          <ProfilePhoto />
          <span className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-moss">
            <span className="h-1.5 w-1.5 rounded-full bg-moss" aria-hidden="true" />
            Open
          </span>
        </div>
        <h2 className="mt-4 text-sm font-bold tracking-wide text-white">
          {profile.name}
        </h2>
        <p className="mt-1 text-xs font-medium text-gold">{profile.role}</p>
        <p className="mt-1.5 flex items-center gap-1 text-xs text-mist">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {profile.location}
        </p>
      </div>

      {/* Nav */}
      <nav aria-label="Portfolio sections" className="flex-1 px-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => go(item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "bg-gold/10 font-semibold text-gold"
                      : "font-medium text-mist hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 ${isActive ? "text-gold" : "text-mist"}`}
                    aria-hidden="true"
                  />
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute right-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom links */}
      <div className="space-y-2.5 border-t border-line px-4 py-5">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-line bg-card px-4 py-2.5 text-sm font-medium text-mist transition-colors hover:border-gold/40 hover:text-white"
        >
          <LinkedinIcon className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-line bg-card px-4 py-2.5 text-sm font-medium text-mist transition-colors hover:border-gold/40 hover:text-white"
        >
          <GithubIcon className="h-4 w-4" />
          GitHub
        </a>
        <a
          href={profile.resumePath}
          download
          className="flex items-center justify-center gap-2 rounded-xl bg-gold px-4 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-amber-300"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Download Resume
        </a>
        <p className="pt-1 text-center text-[10px] uppercase tracking-wider text-mist/60">
          Last updated · Current
        </p>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="fixed inset-y-0 left-0 z-40 hidden w-[240px] border-r border-line lg:block"
        aria-label="Sidebar"
      >
        <SidebarBody />
      </aside>

      {/* Mobile top bar */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-line bg-panel/95 px-4 py-3 backdrop-blur lg:hidden">
        <span className="text-sm font-bold tracking-wide text-white">
          {profile.name}
        </span>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          className="rounded-lg border border-line bg-card p-2 text-white"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile slide-over */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 left-0 w-[280px] max-w-[85vw] border-r border-line">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="absolute right-3 top-3 z-10 rounded-lg border border-line bg-card p-1.5 text-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <SidebarBody onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
