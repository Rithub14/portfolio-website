export interface SkillItem {
  title: string;
  description: string;
  tools: string[];
}

export const skills: SkillItem[] = [
  {
    title: "Machine Learning",
    description: "Deploying production-ready ML systems with monitoring and retraining loops.",
    tools: ["TensorFlow", "PyTorch", "Weights & Biases", "MLflow"]
  },
  {
    title: "Generative AI",
    description: "Architecting LLM applications, retrieval pipelines, and evaluation harnesses.",
    tools: ["OpenAI", "LangChain", "Semantic Kernel", "Vector Databases"]
  },
  {
    title: "Full-Stack Engineering",
    description: "Crafting responsive interfaces and resilient APIs with modern tooling.",
    tools: ["Next.js", "TypeScript", "Node.js", "GraphQL"]
  },
  {
    title: "Cloud & DevOps",
    description: "Automating infrastructure with IaC, CI/CD, and secure deployments.",
    tools: ["AWS", "Terraform", "Docker", "GitHub Actions"]
  }
];
