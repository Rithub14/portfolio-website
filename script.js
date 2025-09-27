const projects = [
  {
    title: 'Retrieval-Augmented Generation Assistant',
    description:
      'Streamlit-powered RAG workflow that ingests documents and URLs, chunks content, stores embeddings in Pinecone, and answers questions with LangChain + GPT-3.5.',
    techStack: ['LangChain', 'OpenAI', 'Pinecone', 'Streamlit'],
    links: {
      github: 'https://github.com/rizwanaslam',
      demo: 'https://rizwanaslam.dev'
    }
  },
  {
    title: 'Comic AI',
    description:
      'AI comic strip generator that translates user scenarios into six-panel stories using OpenAI for narrative text and Stable Diffusion for visual styling.',
    techStack: ['OpenAI', 'Stable Diffusion', 'Streamlit'],
    links: {
      github: 'https://github.com/rizwanaslam',
      demo: 'https://rizwanaslam.dev'
    }
  },
  {
    title: 'Mango Variety Identification',
    description:
      'Custom deep learning pipeline leveraging YOLOv5/YOLOv7/Detectron2 to classify mango varieties from UAV imagery with a Streamlit interface for exploration.',
    techStack: ['PyTorch', 'YOLOv5', 'YOLOv7', 'Detectron2', 'Streamlit'],
    links: {
      github: 'https://github.com/rizwanaslam',
      demo: 'https://rizwanaslam.dev'
    }
  }
];

const experiences = [
  {
    title: 'MSc Artificial Intelligence',
    organization: 'Brandenburg University of Technology (BTU Cottbus)',
    location: 'Cottbus, Germany',
    period: '2023 — 2025 (Expected)',
    type: 'education',
    achievements: ['Pursuing advanced coursework in artificial intelligence and generative AI', 'Expected graduation in 2025']
  },
  {
    title: 'Data Science Intern',
    organization: 'Machine Learning 1',
    location: 'Lahore, Pakistan',
    period: 'May 2023 — Jul 2023',
    type: 'experience',
    achievements: [
      'Engineered an automated text extraction system processing 1K+ multi-format documents for 30 resume templates',
      'Annotated computer vision datasets with LabelImg to improve object detection model training'
    ]
  },
  {
    title: 'BSc Computer Science',
    organization: 'COMSATS University Islamabad',
    location: 'Lahore, Pakistan',
    period: '2019 — 2023',
    type: 'education',
    achievements: ['Completed Computer Science degree with emphasis on machine learning fundamentals']
  },
  {
    title: 'Software Developer Intern',
    organization: 'ABACUS Consulting',
    location: 'Lahore, Pakistan',
    period: 'May 2021 — Jul 2021',
    type: 'experience',
    achievements: [
      'Built Spring Boot service to generate and read secure QR codes for streamlined transactions',
      'Led testing and debugging cycles to harden the QR code workflow before launch'
    ]
  }
];

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: '💻',
    items: ['Python', 'SQL', 'Java']
  },
  {
    title: 'Libraries &amp; Frameworks',
    icon: '🧰',
    items: [
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Scikit-learn',
      'OpenCV',
      'PyTorch',
      'HuggingFace',
      'LangChain',
      'Streamlit',
      'Spring Boot'
    ]
  },
  {
    title: 'Tools',
    icon: '🛠️',
    items: ['Git', 'Docker', 'VS Code', 'Jupyter Notebook', 'Google Colab']
  },
  {
    title: 'Cloud Platforms',
    icon: '☁️',
    items: ['AWS SageMaker', 'AWS Bedrock']
  },
  {
    title: 'Soft Skills',
    icon: '🤝',
    items: ['Time management', 'Problem-solving', 'Critical thinking', 'Collaboration']
  },
  {
    title: 'Certifications',
    icon: '🎓',
    items: [
      'Machine Learning Specialization — DeepLearning.AI',
      'Deep Learning Specialization — DeepLearning.AI',
      'Python for Data Science &amp; ML Bootcamp — Udemy'
    ]
  }
];

const selectors = {
  projectsGrid: document.getElementById('projects-grid'),
  timeline: document.getElementById('timeline'),
  skillsGrid: document.getElementById('skills-grid'),
  navToggle: document.querySelector('.nav-toggle'),
  navLinks: document.querySelector('.nav-links'),
  themeToggle: document.querySelector('.theme-toggle'),
  backToTop: document.getElementById('back-to-top'),
  contactForm: document.getElementById('contact-form')
};

function renderProjects() {
  if (!selectors.projectsGrid) return;

  const fragment = document.createDocumentFragment();
  projects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('data-animate', 'fade-in');

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tech-stack">
        ${project.techStack.map((tech) => `<span>${tech}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="${project.links.github}" target="_blank" rel="noopener">GitHub</a>
        <a href="${project.links.demo}" target="_blank" rel="noopener">Live Demo</a>
      </div>
    `;

    fragment.appendChild(card);
  });

  selectors.projectsGrid.appendChild(fragment);
}

function renderExperienceTimeline() {
  if (!selectors.timeline) return;

  const fragment = document.createDocumentFragment();
  experiences.forEach((item) => {
    const wrapper = document.createElement('article');
    const typeClass = item.type ? ` timeline-${item.type}` : '';
    wrapper.className = `timeline-item${typeClass}`.trim();
    wrapper.setAttribute('data-animate', 'slide-up');

    const achievementsList = item.achievements
      .map((achievement) => `<li>${achievement}</li>`)
      .join('');

    wrapper.innerHTML = `
      <span class="timeline-dot" aria-hidden="true"></span>
      <h3>${item.title}</h3>
      <div class="meta">
        <span>${item.organization}</span>
        <span>${item.location}</span>
        <span>${item.period}</span>
      </div>
      <ul>${achievementsList}</ul>
    `;

    fragment.appendChild(wrapper);
  });

  selectors.timeline.appendChild(fragment);
}

function renderSkillsMatrix() {
  if (!selectors.skillsGrid) return;

  const fragment = document.createDocumentFragment();
  skillGroups.forEach((group) => {
    const card = document.createElement('article');
    card.className = 'skill-card';
    card.setAttribute('data-animate', 'fade-in');

    card.innerHTML = `
      <h3><span class="skill-icon" aria-hidden="true">${group.icon}</span>${group.title}</h3>
      <ul class="skill-items">
        ${group.items.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    `;

    fragment.appendChild(card);
  });

  selectors.skillsGrid.appendChild(fragment);
}

function initNavigation() {
  if (!selectors.navToggle || !selectors.navLinks) return;

  selectors.navToggle.addEventListener('click', () => {
    const isOpen = selectors.navLinks.classList.toggle('open');
    selectors.navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  selectors.navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      selectors.navLinks.classList.remove('open');
      selectors.navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach((element) => observer.observe(element));
}

function initBackToTop() {
  if (!selectors.backToTop) return;

  window.addEventListener('scroll', () => {
    const toggleClass = window.scrollY > 400 ? 'add' : 'remove';
    selectors.backToTop.classList[toggleClass]('visible');
  });

  selectors.backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function setCurrentYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

function initThemeToggle() {
  if (!selectors.themeToggle) return;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
  } else if (prefersDark.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  selectors.themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  });

  prefersDark.addEventListener('change', (event) => {
    if (!localStorage.getItem('theme')) {
      document.documentElement.setAttribute('data-theme', event.matches ? 'dark' : 'light');
    }
  });
}

function validateFormField(field, message) {
  const errorDisplay = field.parentElement.querySelector('.error-message');
  if (!errorDisplay) return;

  errorDisplay.textContent = message;
  field.setAttribute('aria-invalid', message ? 'true' : 'false');
}

function initFormValidation() {
  if (!selectors.contactForm) return;

  selectors.contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameField = selectors.contactForm.elements.namedItem('name');
    const emailField = selectors.contactForm.elements.namedItem('email');
    const messageField = selectors.contactForm.elements.namedItem('message');
    const statusDisplay = selectors.contactForm.querySelector('.form-status');

    let isValid = true;

    if (!(nameField instanceof HTMLInputElement) || nameField.value.trim().length < 2) {
      validateFormField(nameField, 'Please enter your full name.');
      isValid = false;
    } else {
      validateFormField(nameField, '');
    }

    if (
      !(emailField instanceof HTMLInputElement) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())
    ) {
      validateFormField(emailField, 'Provide a valid email address.');
      isValid = false;
    } else {
      validateFormField(emailField, '');
    }

    if (!(messageField instanceof HTMLTextAreaElement) || messageField.value.trim().length < 10) {
      validateFormField(messageField, 'Message should be at least 10 characters.');
      isValid = false;
    } else {
      validateFormField(messageField, '');
    }

    if (!statusDisplay) return;

    if (isValid) {
      statusDisplay.textContent = 'Thanks! Your message has been captured.';
      selectors.contactForm.reset();
      setTimeout(() => {
        statusDisplay.textContent = '';
      }, 4000);
    } else {
      statusDisplay.textContent = 'Please correct the highlighted fields.';
    }
  });

  selectors.contactForm.addEventListener('input', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    if (target.matches('input, textarea')) {
      validateFormField(target, '');
    }
  });
}

function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      const target = document.querySelector(hash);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', hash);
      }
    });
  });
}

function initApp() {
  renderProjects();
  renderExperienceTimeline();
  renderSkillsMatrix();
  initNavigation();
  initScrollAnimations();
  initBackToTop();
  setCurrentYear();
  initThemeToggle();
  initFormValidation();
  initSmoothScroll();
}

document.addEventListener('DOMContentLoaded', initApp);
