export const gradients = {
  section: "bg-gradient-to-br from-background/40 via-background/60 to-background/30",
  card: "bg-gradient-to-br from-card/90 to-card/60"
};

export const motionConfig = {
  fadeInUp: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
