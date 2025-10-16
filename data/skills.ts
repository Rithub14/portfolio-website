export interface SkillItem {
  title: string;
  description: string;
  tools: string[];
}

export const skills: SkillItem[] = [
  {
    title: "Machine Learning & Data Science",
    description: "Core ML engineering, data processing and model development.",
    tools: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "PyTorch", "TensorFlow", "HuggingFace", "OpenCV", "MLflow", "Weights & Biases"]
  },
  {
    title: "Generative AI & LLM Engineering",
    description: "Large Language Models, RAG and generative pipelines.",
    tools: ["OpenAI", "Retrieval-Augmented Generation (RAG)", "Agentic AI", "LangChain", "LangGraph", "Vector Databases"]
  },
  {
    title: "Cloud, DevOps & MLOps",
    description: "Scalable deployment, automation and infrastructure.",
    tools: ["AWS (SageMaker, Bedrock, S3)", "Docker", "Kubernetes", "GitHub Actions", "CI/CD pipelines"]
  },
  {
    title: "Full-Stack & Development Tools",
    description: "API development, frontend integration and tooling.",
    tools: ["FastAPI", "Streamlit", "SQL", "Redis", "Pytest", "Pydantic", "Poetry", "Git", "VS Code", "Jupyter"]
  }
];
