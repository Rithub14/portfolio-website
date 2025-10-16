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
    role: "Machine Learning Engineer",
    organization: "Freelance",
    duration: "Aug 2023 – Sep 2024",
    description: "Delivered end-to-end ML prototypes and MLOps pipelines for SMEs modernizing data-driven products."
  },
  {
    type: "professional",
    role: "Data Scientist Intern",
    organization: "Machine Learning 1",
    duration: "May 2023 – Jul 2023",
    description: "Scaled predictive analytics dashboards and optimized experimentation frameworks for growth teams."
  },
  {
    type: "professional",
    role: "Software Developer Intern",
    organization: "Abacus Consulting",
    duration: "May 2021 – Jul 2021",
    description: "Developed an automated text extraction pipeline, streamlined data integration and reduced manual effort."
  },
  {
    type: "academic",
    role: "M.Sc. Artificial Intelligence",
    organization: "Brandenburg University of Technology (BTU Cottbus)",
    duration: "2023 – 2026",
    description: "Specialized in AI, human-centered computing, and autonomous systems with applied research in LLM alignment."
  },
  {
    type: "academic",
    role: "B.Sc. Computer Science",
    organization: "COMSATS University Islamabad",
    duration: "2019 – 2023",
    description: "Graduated with honors focusing on large-scale web architectures and machine learning applications."
  }
];
