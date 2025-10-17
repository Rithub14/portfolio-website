"use client";

import { motion } from "framer-motion";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/data/skills";
import { CertificationsCarousel } from "@/sections/CertificationsCarousel";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16 text-foreground w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-4xl font-semibold sm:text-5xl">Skills & Certifications</h2>
        <p className="mt-4 text-balance text-lg text-muted-foreground">
        </p>
      </motion.div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
          >
            <Card className="h-full hover:shadow-lg hover:shadow-blue-500/10">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{skill.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {skill.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-gradient-to-r from-primary/20 to-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary transition-shadow duration-200 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <CertificationsCarousel />
    </section>
  );
}
