export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Retrieval Augmented Generation (RAG) App",
    description: "A document intelligence app to query insights from PDFs, DOCX, CSVs and URLs.",
    tech: ["OpenAI", "LangChain", "Pinecone", "Streamlit"],
    github: "https://github.com/Rithub14/RAG",
    demo: "https://rag-all.streamlit.app/"
  },
  {
    title: "Comics Generator",
    description: "A Generative AI app to create an entire comic strip from a short scenario.",
    tech: ["OpenAI", "Stable Diffusion", "Streamlit"],
    github: "https://github.com/Rithub14/Comics",
    demo: "https://comics-ai.onrender.com/"
  },
  {
    title: "PSL Score Predictor",
    description: "A data-driven web app to forecast cricket innings outcomes using historical match data.",
    tech: ["Python", "Scikit-learn", "Streamlit"],
    github: "http://github.com/Rithub14/PSL-Score-Predictor",
  },
  {
    title: "Mango Image Analysis App",
    description: "A web app to classify different mango varieties based on UAV imagery.",
    tech: ["PyTorch", "Streamlit", "YOLO"],
    github: "https://github.com/Rithub14/FYP"
  }
];
