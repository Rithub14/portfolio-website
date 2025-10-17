"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { socialLinks } from "@/data/socials";

export function ContactSection() {

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-16 text-center text-foreground">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="text-4xl font-semibold sm:text-5xl"
      >
        Contact
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="mt-4 text-balance text-lg text-muted-foreground"
      >
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
        className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
      >
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex w-full max-w-[240px] items-center gap-3 rounded-full border border-border/60 bg-surface/90 px-5 py-2.5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow"
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <Image
              src={link.icon.light}
              alt={link.icon.alt}
              width={30}
              height={30}
              className="h-8 w-8 dark:hidden"
            />
            <Image
              src={link.icon.dark}
              alt={link.icon.alt}
              width={30}
              height={30}
              className="hidden h-8 w-8 dark:block"
            />
            <span className="text-base font-medium">{link.name}</span>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
