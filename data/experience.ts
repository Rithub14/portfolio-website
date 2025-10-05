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
    description: "Designing intelligent copilots for automotive engineering workflows with emphasis on GenAI reliability."
  },
  {
    type: "professional",
    role: "Machine Learning Consultant",
    organization: "Freelance",
    duration: "Jan 2023 – Sep 2024",
    description: "Delivered end-to-end ML prototypes and MLOps pipelines for SMEs modernizing data-driven products."
  },
  {
    type: "professional",
    role: "Data Scientist",
    organization: "Tech Startup",
    duration: "Aug 2021 – Dec 2022",
    description: "Scaled predictive analytics dashboards and optimized experimentation frameworks for growth teams."
  },
  {
    type: "academic",
    role: "M.Sc. Computer Science",
    organization: "Technical University of Munich",
    duration: "2022 – 2024",
    description: "Specialized in AI, human-centered computing, and autonomous systems with applied research in LLM alignment."
  },
  {
    type: "academic",
    role: "B.Sc. Software Engineering",
    organization: "National University of Sciences and Technology",
    duration: "2018 – 2022",
    description: "Graduated with honors focusing on large-scale web architectures and machine learning applications."
  }
];
