export interface CertificationItem {
  title: string;
  provider: string;
  date: string;
  link?: string;
  logo?: string;
  description?: string;
}

export const certifications: CertificationItem[] = [
  {
    title: "AWS Certified Machine Learning Engineer – Associate",
    provider: "Amazon Web Services",
    date: "Oct 2025",
    link: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    logo: "/assets/aws.png",
    description: "Validated ML engineering expertise across the AWS stack with real-world deployment scenarios."
  },
  {
    title: "TensorFlow Developer Certificate",
    provider: "Google",
    date: "Jun 2024",
    link: "https://www.tensorflow.org/certificate",
    logo: "/assets/tensorflow.png",
    description: "Demonstrated ability to build, train, and deploy deep learning models with TensorFlow."
  },
  {
    title: "Azure AI Engineer Associate",
    provider: "Microsoft",
    date: "Jan 2024",
    link: "https://learn.microsoft.com/certifications/azure-ai-engineer/",
    logo: "/assets/azure.png",
    description: "Designed responsible AI solutions leveraging Azure OpenAI, Cognitive Services, and ML Ops pipelines."
  },
  {
    title: "Certified Kubeflow Administrator",
    provider: "The Linux Foundation",
    date: "Aug 2023",
    link: "https://www.cncf.io/certification/cka/",
    logo: "/assets/kubeflow.png",
    description: "Operationalized ML workflows on Kubernetes with secure, reproducible model deployment practices."
  },
  {
    title: "MLOps Professional Certificate",
    provider: "Coursera x Google Cloud",
    date: "Apr 2023",
    logo: "/assets/google-cloud.png",
    description: "Built end-to-end model pipelines covering CI/CD, monitoring, and continuous training." 
  }
];
