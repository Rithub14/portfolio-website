"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/socials";

const containerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-transparent px-6 pb-20 pt-32 dark:from-primary/20 dark:via-accent/10"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
        className="mx-auto grid w-full max-w-6xl items-center gap-12 text-foreground lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]"
      >
        <motion.div variants={containerVariants} className="flex flex-col items-start text-left">
          <p className="rounded-full border border-border/60 bg-surface/60 px-4 py-1 text-sm uppercase tracking-[0.3em] text-foreground/80 shadow-sm">
            Rizwan Aslam
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
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
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-surface/70 transition-transform duration-200 hover:-translate-y-1 hover:shadow-glow"
              >
                <Image
                  src={isDark ? social.icon.dark : social.icon.light}
                  alt={social.icon.alt}
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
              </Link>
            ))}
          </div>
        </motion.div>
        <motion.div variants={containerVariants} className="relative mx-auto flex justify-center">
          <Image
            src="/assets/pic.png"
            alt="Muhammad Rizwan Aslam"
            width={180}
            height={180}
            className="rounded-full object-cover"
            style={{ width: "15rem", height: "15rem" }}
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
