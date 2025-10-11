"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-4xl font-semibold sm:text-5xl">Projects</h2>
        <p className="mt-4 text-balance text-lg text-muted-foreground">
          Selected builds that highlight product sense, technical rigor, and love for delightful UX.
        </p>
      </motion.div>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.06 }}
            whileHover={{ y: -6 }}
          >
            <Card className="h-full border-border/50 hover:shadow-lg hover:shadow-blue-500/10">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gradient-to-r from-primary/20 to-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                {project.github ? (
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </Link>
                  </Button>
                ) : null}
                {project.demo ? (
                  <Button asChild variant="default" size="sm">
                    <Link href={project.demo} target="_blank" rel="noreferrer">
                      Live Demo
                    </Link>
                  </Button>
                ) : null}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
