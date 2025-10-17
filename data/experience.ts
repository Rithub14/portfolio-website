export type ExperienceType = "professional" | "academic";

export interface ExperienceItem {
  type: ExperienceType;
  role: string;
  organization: string;
  duration: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    type: "professional",
    role: "AI Engineer",
    organization: "IAV GmbH",
    duration: "Oct 2024 – Present",
    description: "Building multi-agent and RAG-based AI systems with memory and document understanding for enterprise workflows."
  },
  {
    type: "professional",
    role: "Machine Learning Engineer",
    organization: "Freelance",
    duration: "Aug 2023 – Sep 2024",
    description: "Delivered end-to-end AI and ML solutions for data-driven products and automation."
  },
  {
    type: "professional",
    role: "Data Scientist Intern",
    organization: "Machine Learning 1",
    duration: "May 2023 – Jul 2023",
    description: "Developed automated data extraction and annotation pipelines to improve ML model training and data processing efficiency."
  },
  {
    type: "professional",
    role: "Software Developer Intern",
    organization: "Abacus Consulting",
    duration: "May 2021 – Jul 2021",
    description: "Built and optimized Spring Boot systems for secure automation and workflow reliability."
  },
  {
    type: "academic",
    role: "M.Sc. Artificial Intelligence",
    organization: "Brandenburg University of Technology (BTU Cottbus)",
    duration: "2023 – 2026",
    description: "Focused on research-driven AI, exploring deep learning, generative models and applied machine learning systems."
  },
  {
    type: "academic",
    role: "B.Sc. Computer Science",
    organization: "COMSATS University Islamabad",
    duration: "2019 – 2023",
    description: "Built a strong foundation in computer science fundamentals, software engineering and algorithmic problem-solving."
  }
];
