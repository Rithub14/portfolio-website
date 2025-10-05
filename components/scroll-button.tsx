"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const SECTION_IDS = ["home", "experience", "skills", "projects", "contact"] as const;
const SCROLL_THRESHOLD = 80;

export function ScrollButton() {
  const [sections, setSections] = useState<HTMLElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const resolveSections = () => {
      const resolved = SECTION_IDS.map((id) => document.getElementById(id)).filter(
        (el): el is HTMLElement => Boolean(el)
      );
      setSections(resolved);
      setMaxScroll(document.documentElement.scrollHeight - window.innerHeight);
    };

    resolveSections();

    window.addEventListener("resize", resolveSections);
    return () => window.removeEventListener("resize", resolveSections);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setMaxScroll(max);

      if (window.scrollY >= max - SCROLL_THRESHOLD) {
        setCurrentIndex(Math.max(sections.length - 1, 0));
        return;
      }

      let activeIndex = 0;
      sections.forEach((section, index) => {
        if (section.offsetTop - SCROLL_THRESHOLD <= scrollPosition) {
          activeIndex = index;
        }
      });
      setCurrentIndex(activeIndex);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const direction = useMemo(() => {
    if (!sections.length) return "down" as const;
    return currentIndex >= sections.length - 1 ? ("up" as const) : ("down" as const);
  }, [currentIndex, sections.length]);

  const handleClick = () => {
    if (!sections.length) return;

    if (direction === "down") {
      const next = sections[currentIndex + 1];
      next?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showButton = sections.length > 1 && maxScroll > SCROLL_THRESHOLD;

  return (
    <AnimatePresence>
      {showButton ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Button
            size="icon"
            variant="outline"
            className="h-12 w-12 rounded-full border-border/70 bg-background/80 shadow-lg backdrop-blur"
            onClick={handleClick}
            aria-label={direction === "down" ? "Scroll to next section" : "Scroll to top"}
          >
            {direction === "down" ? <ArrowDown className="h-5 w-5" /> : <ArrowUp className="h-5 w-5" />}
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
