"use client";

import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { certifications, skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-4xl font-semibold sm:text-5xl">Skills & Certifications</h2>
        <p className="mt-4 text-balance text-lg text-muted-foreground">
          A blend of applied engineering talents and proof points that back them up.
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
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{skill.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground/90">
                  {skill.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs uppercase tracking-wide"
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
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
          >
            <Card className="h-full border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl leading-tight">{cert.name}</CardTitle>
                <CardDescription className="uppercase tracking-wide text-xs text-primary">
                  {cert.provider}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex h-full flex-col justify-between gap-4 text-base text-muted-foreground">
                <p>{cert.summary}</p>
                {cert.link ? (
                  <Button asChild variant="ghost" size="sm" className="justify-start px-0 text-primary">
                    <a href={cert.link} target="_blank" rel="noreferrer">
                      Certificate
                    </a>
                  </Button>
                ) : null}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
