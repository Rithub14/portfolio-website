export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Autonomous QA Copilot",
    description: "LLM-driven assistant that synthesizes test cases and automates regression triage for web apps.",
    tech: ["Next.js", "OpenAI", "Playwright", "Redis"],
    github: "https://github.com/example/autonomous-qa",
    demo: "https://qa-copilot.example.com"
  },
  {
    title: "Realtime Vision Edge",
    description: "Edge-friendly computer vision pipeline with on-device model updates and streaming analytics dashboard.",
    tech: ["TensorRT", "Rust", "gRPC", "React"],
    github: "https://github.com/example/realtime-vision-edge"
  },
  {
    title: "InsightOps",
    description: "Cloud-native observability toolkit combining metrics, traces, and anomaly detection with AI summaries.",
    tech: ["Next.js", "AWS", "LangChain", "PostgreSQL"],
    demo: "https://insightops.example.com"
  },
  {
    title: "Generative Design Studio",
    description: "Interactive workspace that blends procedural generation with co-creation loops for product teams.",
    tech: ["Three.js", "TypeScript", "FastAPI", "OpenAI"],
    github: "https://github.com/example/generative-design-studio"
  }
];
