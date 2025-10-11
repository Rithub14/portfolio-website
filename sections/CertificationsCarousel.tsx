"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { animate, motion, useMotionValue } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { certifications } from "@/data/certifications";

const SPRING = { type: "spring", stiffness: 120, damping: 20 } as const;

export function CertificationsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [cardSpan, setCardSpan] = useState(0);

  const clamp = useCallback(
    (value: number) => Math.min(Math.max(value, constraints.left), constraints.right),
    [constraints.left, constraints.right]
  );

  const animateTo = useCallback(
    (target: number) => {
      const next = clamp(target);
      animationRef.current?.stop();
      animationRef.current = animate(x, next, SPRING);
    },
    [clamp, x]
  );

  useEffect(() => () => animationRef.current?.stop(), []);

  const updateMetrics = useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const firstCard = track.querySelector<HTMLElement>("[data-card]");
    const gap = parseFloat(getComputedStyle(track).columnGap || "0");
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 0;
    const span = cardWidth + gap;
    setCardSpan(span);

    const maxOffset = Math.max(track.scrollWidth - container.clientWidth, 0);
    setConstraints({ left: -maxOffset, right: 0 });

    if (x.get() < -maxOffset) {
      animateTo(-maxOffset);
    }
  }, [animateTo, x]);

  useEffect(() => {
    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    return () => window.removeEventListener("resize", updateMetrics);
  }, [updateMetrics]);

  const scrollBy = useCallback(
    (distance: number) => {
      animateTo(x.get() + distance);
    },
    [animateTo, x]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      scrollBy(-event.deltaY);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel as EventListener);
  }, [scrollBy]);

  const snapToNearest = useCallback(
    (direction?: "next" | "prev") => {
      if (!cardSpan) return;
      const current = x.get();
      const rawIndex = -current / cardSpan;
      let targetIndex = Math.round(rawIndex);
      if (direction === "next") targetIndex = Math.ceil(rawIndex + 0.0001);
      if (direction === "prev") targetIndex = Math.floor(rawIndex - 0.0001);

      const maxIndex = cardSpan
        ? Math.max(Math.round(Math.abs(constraints.left) / cardSpan), 0)
        : 0;
      const clampedIndex = Math.min(Math.max(targetIndex, 0), maxIndex);
      animateTo(-clampedIndex * cardSpan);
    },
    [animateTo, cardSpan, constraints.left, x]
  );

  const handlePrev = useCallback(() => {
    if (!cardSpan) {
      scrollBy(320);
      return;
    }
    snapToNearest("prev");
  }, [cardSpan, scrollBy, snapToNearest]);

  const handleNext = useCallback(() => {
    if (!cardSpan) {
      scrollBy(-320);
      return;
    }

    const atEnd = Math.abs(x.get() - constraints.left) <= cardSpan * 0.4;
    if (atEnd) {
      animateTo(0);
      return;
    }

    snapToNearest("next");
  }, [animateTo, cardSpan, constraints.left, scrollBy, snapToNearest, x]);

  const handleDragEnd = useCallback(() => {
    snapToNearest();
  }, [snapToNearest]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      handleNext();
    }, 4000);

    return () => window.clearInterval(interval);
  }, [handleNext]);

  const gradientOverlay = useMemo(
    () => (
      <>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background via-background/60 to-transparent dark:from-background/90" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background via-background/60 to-transparent dark:from-background/90" />
      </>
    ),
    []
  );

  return (
    <section className="mt-16 text-left text-foreground">
      <div className="mb-6 flex items-center justify-between px-2">
        <div>
          <h3 className="text-2xl font-semibold">Certifications</h3>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full border-none bg-gradient-to-r from-primary to-accent text-white shadow-sm hover:shadow-glow"
            onClick={handlePrev}
            aria-label="Scroll certifications left"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full border-none bg-gradient-to-r from-primary to-accent text-white shadow-sm hover:shadow-glow"
            onClick={handleNext}
            aria-label="Scroll certifications right"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="relative">
        {gradientOverlay}
        <div
          ref={containerRef}
          className="cursor-grab overflow-hidden px-2 active:cursor-grabbing"
          style={{ touchAction: "pan-y" }}
        >
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={constraints}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={`${cert.title}-${index}`}
                data-card
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...SPRING, delay: index * 0.05 }}
                className="w-[250px] shrink-0 rounded-xl border border-border/50 bg-surface/95 p-6 text-foreground shadow-sm transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] sm:w-[280px] md:w-[300px] lg:w-[320px]"
              >
                <div className="flex items-center gap-3">
                  {cert.logo ? (
                    <div className="relative h-9 w-9 overflow-hidden rounded-full border border-border/60 bg-background/80">
                      <Image src={cert.logo} alt={`${cert.provider} logo`} fill className="object-contain p-1.5" />
                    </div>
                  ) : null}
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                      {cert.provider}
                    </p>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                </div>
                <h4 className="mt-5 text-lg font-semibold leading-tight">{cert.title}</h4>
                {cert.description ? (
                  <p className="mt-3 text-sm text-muted-foreground">{cert.description}</p>
                ) : null}
                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Verified Credential
                  </span>
                  {cert.link ? (
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="h-8 gap-1 rounded-full px-3 text-primary hover:bg-primary/10 hover:text-primary"
                    >
                      <Link href={cert.link} target="_blank" rel="noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        View
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full border-none bg-gradient-to-r from-primary to-accent text-white shadow-sm hover:shadow-glow"
          onClick={handlePrev}
          aria-label="Scroll certifications left"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full border-none bg-gradient-to-r from-primary to-accent text-white shadow-sm hover:shadow-glow"
          onClick={handleNext}
          aria-label="Scroll certifications right"
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
