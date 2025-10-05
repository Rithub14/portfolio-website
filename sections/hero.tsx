"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/socials";

const containerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-6 pb-16 pt-24"
    >
      <div className="absolute inset-0 -z-10 bg-hero-gradient" />
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
        className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]"
      >
        <motion.div variants={containerVariants} className="flex flex-col items-start text-left">
          <p className="rounded-full border border-border/40 px-4 py-1 text-sm uppercase tracking-[0.3em] text-primary/80">
            Rizwan Aslam
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            AI Engineer crafting human-centered intelligent products.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
            I design, build, and ship reliable GenAI experiences that blend deep learning rigor with delightful UX. Let&apos;s ship the next breakthrough together.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#contact">Contact</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/assets/Muhammad_Rizwan_Aslam_Resume.pdf" download>
                Resume
              </a>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-5">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                className="transition-transform duration-200 hover:-translate-y-1 hover:opacity-90"
              >
                <Image
                  src={social.icon.dark}
                  alt={social.icon.alt}
                  width={36}
                  height={36}
                  className="h-9 w-9"
                />
              </Link>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="relative mx-auto flex h-full w-full max-w-xs justify-center lg:max-w-sm"
        >
          <div className="relative overflow-hidden rounded-3xl border border-transparent bg-background/10 p-3 shadow-xl backdrop-blur">
            <Image
              src="/assets/pic.png"
              alt="Muhammad Rizwan Aslam"
              width={360}
              height={420}
              className="h-auto w-full rounded-2xl object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
