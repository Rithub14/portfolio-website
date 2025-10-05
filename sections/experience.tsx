"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { experiences, type ExperienceType } from "@/data/experience";

const tabs: { label: string; value: ExperienceType }[] = [
  { label: "Professional", value: "professional" },
  { label: "Academic", value: "academic" }
];

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<ExperienceType>("professional");

  const filteredExperiences = useMemo(
    () => experiences.filter((item) => item.type === activeTab),
    [activeTab]
  );

  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10 flex flex-col items-center gap-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-semibold sm:text-5xl"
        >
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="max-w-2xl text-balance text-lg text-muted-foreground"
        >
          A snapshot of the roles and research chapters that shaped my approach to intelligent products.
        </motion.p>
        <div className="inline-flex rounded-full border border-border/60 bg-background/80 p-1 shadow-sm backdrop-blur">
          {tabs.map((tab) => {
            const active = tab.value === activeTab;
            return (
              <Button
                key={tab.value}
                variant={active ? "default" : "ghost"}
                size="sm"
                className="rounded-full px-5"
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.label}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="relative">
        <span className="absolute left-5 top-0 h-full border-l border-border/40" />
        <div className="space-y-8">
          {filteredExperiences.map((item, index) => (
            <motion.article
              key={`${item.role}-${index}`}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
              className="relative ml-12 rounded-2xl border border-border/40 bg-card/70 p-6 shadow-lg backdrop-blur"
            >
              <span className="absolute -left-12 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/90 text-sm font-semibold shadow-sm">
                {index + 1}
              </span>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <p className="text-sm uppercase tracking-wide text-primary">{item.organization}</p>
                </div>
                <span className="text-sm text-muted-foreground">{item.duration}</span>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
