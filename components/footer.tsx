"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function Footer() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer
      className={cn(
        "mt-16 border-t transition-all duration-300",
        scrolled ? "border-border/60 bg-background/90 backdrop-blur" : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-muted-foreground/80 sm:flex-row">
        <p className="text-center text-base text-foreground/70 sm:text-left">
          © {new Date().getFullYear()} Muhammad Rizwan Aslam. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="#experience" className="transition-colors hover:text-foreground">
            Experience
          </Link>
          <Link href="#skills" className="transition-colors hover:text-foreground">
            Skills
          </Link>
          <Link href="#projects" className="transition-colors hover:text-foreground">
            Projects
          </Link>
          <Link href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
