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
    title: "AWS Certified Solutions Architect - Associate",
    provider: "Amazon Web Services",
    date: "Jun 2025",
    link: "https://drive.google.com/file/d/1-Ema6O0Y41KYU6X3FWuiZu2SLmme0Xc0/view?usp=sharing",
    logo: "/assets/aws.png",
    description:
      "Demonstrated ability to design, deploy, and optimize scalable cloud architectures for AI/ML workloads on AWS.",
  },
  {
    title: "Deep Learning Specialization",
    provider: "DeepLearning.AI",
    date: "Oct 2023",
    link: "https://drive.google.com/file/d/1G8JMgm7ivhzt6MNDch0BPtDmEqLEKVzv/view?usp=sharing",
    logo: "/assets/aws.png",
    description:
      "Mastered foundational and advanced deep learning techniques, including CNNs, RNNs, and sequence modeling.",
  },
  {
    title: "Machine Learning Specialization",
    provider: "DeepLearning.AI",
    date: "Aug 2023",
    link: "https://drive.google.com/file/d/1kl4dSbbAWwA4BWZEkmdm2rYlqZf8wKG4/view?usp=sharing",
    logo: "/assets/aws.png",
    description:
      "Built a solid foundation in supervised, unsupervised, and applied ML systems with real-world case studies.",
  },
  {
    title: "Python for Data Science and Machine Learning",
    provider: "Udemy",
    date: "Jul 2022",
    link: "https://drive.google.com/file/d/1yN633pWN1KzJehDIc4l7vwBPy6YiaZNm/view?usp=sharing",
    logo: "/assets/aws.png",
    description:
      "Gained practical experience in data analysis, visualization, and model building using Python’s ML ecosystem.",
  },
  {
    title: "Python for Data Structures and Algorithms",
    provider: "Udemy",
    date: "Sep 2022",
    link: "https://drive.google.com/file/d/19BIB6p96vaFsMUNMGBoVFYivhlZzig5B/view?usp=sharing",
    logo: "/assets/aws.png",
    description:
      "Strengthened problem-solving and algorithmic thinking skills essential for efficient AI and ML development.",
  },
];
