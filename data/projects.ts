export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export const projects: ProjectItem[] = [
  {
  title: "Agentic SQL Explorer",
  description: "Natural language to SQL — ask questions about any Postgres, MySQL, or SQLite database and get back validated queries, results, Plotly charts, and plain-English explanations via a LangGraph multi-agent pipeline.",
  tech: ["LangGraph", "GPT-4o-mini", "FastAPI", "SQLAlchemy", "Plotly", "Streamlit"],
  github: "https://github.com/Rithub14/agentic_sql",
  demo: "https://agentic-sql-frontend.onrender.com/"
  },
  {
  title: "Spatial Context Agent",
  description: "Autonomous AI tour guide — photograph a landmark and get a streamed persona-driven narration via a CLIP → LangGraph → GPT-4o-mini pipeline, with live web search and DB-backed session memory.",
  tech: ["LangGraph", "CLIP (ViT-B/32)", "FastAPI", "pgvector", "GPT-4o-mini", "Docker"],
  github: "https://github.com/Rithub14/spatial-context-agent",
  },
  {
    title: "YouTube Comment Sentiment Analyzer",
    description: "End-to-end MLOps pipeline to fetch and analyze multilingual YouTube comment sentiment via a FastAPI backend and Chrome extension, with MLflow model registry and Kubernetes deployment.",
    tech: ["HuggingFace", "FastAPI", "MLflow", "Kubernetes", "DVC", "Python"],
    github: "https://github.com/Rithub14/yt-sentiment-analysis",
  },
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
