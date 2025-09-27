// Placeholder data for easy future updates
const projects = [
  {
    title: 'Predictive Maintenance Platform',
    description:
      'End-to-end ML pipeline predicting equipment failures using streaming telemetry and automated model retraining.',
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'Kafka'],
    links: {
      github: 'https://github.com/yourusername/predictive-maintenance',
      demo: 'https://example.com/predictive-maintenance'
    }
  },
  {
    title: 'Retail Demand Forecasting',
    description:
      'Demand forecasting system with feature store integration and interactive analytics dashboards for merchandisers.',
    techStack: ['PyTorch', 'AWS', 'dbt', 'React'],
    links: {
      github: 'https://github.com/yourusername/retail-forecasting',
      demo: 'https://example.com/retail-forecasting'
    }
  },
  {
    title: 'Document Intelligence Assistant',
    description:
      'LLM-powered assistant extracting structured insights from unstructured documents with human-in-the-loop review.',
    techStack: ['LangChain', 'OpenAI API', 'PostgreSQL', 'Docker'],
    links: {
      github: 'https://github.com/yourusername/document-intelligence',
      demo: 'https://example.com/document-intelligence'
    }
  }
];

const experience = [
  {
    title: 'Senior ML Engineer',
    organization: 'Nimbus Analytics',
    location: 'Remote',
    period: '2022 — Present',
    achievements: [
      'Led deployment of real-time ML pipeline serving 5M daily predictions with 99.9% uptime',
      'Introduced observability stack reducing mean time to resolution by 40%'
    ]
  },
  {
    title: 'Machine Learning Engineer',
    organization: 'Skyline Labs',
    location: 'San Francisco, CA',
    period: '2019 — 2022',
    achievements: [
      'Built automated experimentation platform accelerating model iteration cycles by 3x',
      'Collaborated with product to launch personalization engine driving 18% retention lift'
    ]
  },
  {
    title: 'M.S. in Computer Science',
    organization: 'Stanford University',
    location: 'Stanford, CA',
    period: '2017 — 2019',
    achievements: ['Specialization in AI Systems', 'Graduate researcher in NLP lab']
  }
];

const selectors = {
  projectsGrid: document.getElementById('projects-grid'),
  timeline: document.getElementById('timeline'),
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

function renderTimeline() {
  if (!selectors.timeline) return;

  const fragment = document.createDocumentFragment();
  experience.forEach((item) => {
    const wrapper = document.createElement('article');
    wrapper.className = 'timeline-item';
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
    const currentTheme = document.documentElement.getAttribute('data-theme');
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
  renderTimeline();
  initNavigation();
  initScrollAnimations();
  initBackToTop();
  setCurrentYear();
  initThemeToggle();
  initFormValidation();
  initSmoothScroll();
}

document.addEventListener('DOMContentLoaded', initApp);
