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
      className="relative isolate overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-transparent px-6 pb-20 pt-32 dark:from-primary/20 dark:via-accent/10"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
        className="mx-auto grid w-full max-w-6xl items-center gap-12 text-foreground lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]"
      >
        <motion.div
          variants={containerVariants}
          className="flex flex-col items-start text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl"
          >
            AI Engineer — Building intelligent systems that learn and deliver impact.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            I engineer scalable ML solutions that bridge deep learning research with real-world deployment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button asChild size="lg">
              <a
                href="https://drive.google.com/file/d/1x0MPv31ktPOp6ZOjL1nwCwFEDfwFrpoi/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </Button>
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-surface/70 transition-transform duration-200 hover:-translate-y-1 hover:shadow-glow"
              >
                <Image
                  src={social.icon.light}
                  alt={social.icon.alt}
                  width={24}
                  height={24}
                  className="h-6 w-6 dark:hidden"
                />
                <Image
                  src={social.icon.dark}
                  alt={social.icon.alt}
                  width={24}
                  height={24}
                  className="hidden h-6 w-6 dark:block"
                />
              </Link>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto flex justify-center"
        >
          <Image
            src="/assets/rizwan_pic.png"
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
