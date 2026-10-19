"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import SectionLabel from "./SectionLabel";
import { contact, footerNote, profile } from "@/lib/data";

export default function Contact() {
  const buttons: {
    label: string;
    href: string;
    icon: ComponentType<{ className?: string }>;
    primary: boolean;
    external?: boolean;
    download?: boolean;
  }[] = [
    {
      label: "Email",
      href: `mailto:${profile.email}`,
      icon: Mail,
      primary: false,
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      icon: LinkedinIcon,
      primary: false,
      external: true,
    },
    {
      label: "GitHub",
      href: profile.github,
      icon: GithubIcon,
      primary: false,
      external: true,
    },
    {
      label: "Resume",
      href: profile.resumePath,
      icon: Download,
      primary: true,
      download: true,
    },
  ];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="mt-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl border border-line bg-card p-8 text-center shadow-card sm:p-12"
      >
        <div className="mx-auto max-w-xl">
          <SectionLabel>Contact</SectionLabel>
          <h2
            id="contact-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white"
          >
            {contact.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            {contact.text}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {buttons.map((b) => {
              const Icon = b.icon;
              return (
                <a
                  key={b.label}
                  href={b.href}
                  {...(b.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  {...(b.download ? { download: true } : {})}
                  aria-label={`${b.label}${
                    b.label === "Email" ? `: ${profile.email}` : ""
                  }`}
                  className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${
                    b.primary
                      ? "bg-gold font-bold text-ink hover:bg-amber-300"
                      : "border border-line bg-carddeep text-white hover:border-gold/50 hover:text-gold"
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {b.label}
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
      <footer className="mt-10 border-t border-line pt-6 text-center">
        <p className="text-xs text-mist/70">{footerNote}</p>
      </footer>
    </section>
  );
}
