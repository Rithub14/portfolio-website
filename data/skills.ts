export interface SkillItem {
  title: string;
  description: string;
  tools: string[];
}

export interface CertificationItem {
  name: string;
  provider: string;
  link?: string;
  summary: string;
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

export const certifications: CertificationItem[] = [
  {
    name: "AWS Certified Machine Learning Engineer – Associate",
    provider: "Amazon Web Services",
    summary: "Validated expertise across ML lifecycle including data engineering and deployment.",
    link: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/"
  },
  {
    name: "TensorFlow Developer Certificate",
    provider: "Google",
    summary: "Demonstrated applied ML modeling skills for computer vision and NLP workloads.",
    link: "https://developers.google.com/certification/tensorflow"
  },
  {
    name: "Azure AI Engineer Associate",
    provider: "Microsoft",
    summary: "Implemented responsible AI solutions leveraging Azure Cognitive Services and OpenAI."
  }
];
