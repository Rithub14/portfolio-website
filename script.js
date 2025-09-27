const projects = [
  {
    title: 'Retrieval-Augmented Generation Assistant',
    description:
      'Streamlit-powered RAG workflow that ingests documents and URLs, chunks content, stores embeddings in Pinecone, and answers questions with LangChain + GPT-3.5.',
    techStack: ['LangChain', 'OpenAI', 'Pinecone', 'Streamlit'],
    links: {
      github: 'https://github.com/Rithub14/RAG',
      demo: 'https://rag-all.streamlit.app/'
    }
  },
  {
    title: 'Comic AI',
    description:
      'AI comic strip generator that translates user scenarios into six-panel stories using OpenAI for narrative text and Stable Diffusion for visual styling.',
    techStack: ['OpenAI', 'Stable Diffusion', 'Streamlit'],
    links: {
      github: 'https://github.com/Rithub14/Comics',
      demo: 'https://comics-ai.onrender.com'
    }
  },
  {
    title: 'Mango Variety Identification',
    description:
      'Custom deep learning pipeline leveraging YOLOv5/YOLOv7/Detectron2 to classify mango varieties from UAV imagery with a Streamlit interface for exploration.',
    techStack: ['PyTorch', 'YOLOv5', 'YOLOv7', 'Detectron2', 'Streamlit'],
    links: {
      github: 'https://github.com/Rithub14/FYP',
    }
  }
];

const experiences = [
  {
    title: 'AI Engineer',
    organization: 'IAV GmbH',
    period: 'Oct 2024 — Present',
    type: 'professional',
  },
  {
    title: 'ML Engineer',
    organization: 'Freelancer',
    period: 'Aug 2023 — Oct 2024',
    type: 'professional',
  },
  {
    title: 'Data Science Intern',
    organization: 'Machine Learning 1',
    period: 'May 2023 — Jul 2023',
    type: 'professional',
  },
  {
    title: 'Software Developer Intern',
    organization: 'ABACUS Consulting',
    period: 'May 2021 — Jul 2021',
    type: 'professional',
  },
  {
    title: 'MSc Artificial Intelligence',
    organization: 'Brandenburg University of Technology (BTU Cottbus)',
    period: '2023 — 2025',
    type: 'academic',
  },
  {
    title: 'BSc Computer Science',
    organization: 'COMSATS University Islamabad',
    period: '2019 — 2023',
    type: 'academic',
  }
];

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: '💻',
    items: ['Python', 'SQL']
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
      'LangGraph',
      'Streamlit',
      'FastAPI'
    ]
  },
  {
    title: 'Tools',
    icon: '🛠️',
    items: ['Git', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Cloud Platforms',
    icon: '☁️',
    items: ['AWS SageMaker', 'AWS Bedrock']
  },
  {
    title: 'Certifications',
    icon: '🎓',
    items: [
      'Certified Solutions Architect, Associate — AWS',
      'Machine Learning Specialization — DeepLearning.AI',
      'Deep Learning Specialization — DeepLearning.AI',
      'Python for Data Science &amp; ML Bootcamp — Udemy'
    ]
  }
];

let currentExperienceFilter = 'professional';
let scrollObserver;

let skillsAutoScrollId;

const selectors = {
  projectsGrid: document.getElementById('projects-grid'),
  timeline: document.getElementById('timeline'),
  skillsGrid: document.getElementById('skills-grid'),
  navToggle: document.querySelector('.nav-toggle'),
  navLinks: document.querySelector('.nav-links'),
  themeToggle: document.querySelector('.theme-toggle'),
  backToTop: document.getElementById('back-to-top')
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
        ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" rel="noopener">Live Demo</a>` : ''}
      </div>
    `;

    fragment.appendChild(card);
  });

  selectors.projectsGrid.appendChild(fragment);
}

function renderExperienceTimeline(filter = currentExperienceFilter) {
  if (!selectors.timeline) return;

  currentExperienceFilter = filter;
  selectors.timeline.innerHTML = '';

  const filtered = experiences.filter((item) => item.type === filter);
  const fragment = document.createDocumentFragment();

  filtered.forEach((item, index) => {
    const wrapper = document.createElement('article');
    const sideClass = index % 2 === 0 ? 'left' : 'right';
    const typeClass = `timeline-${item.type}`;
    wrapper.className = `timeline-item ${sideClass} ${typeClass}`.trim();
    wrapper.setAttribute('data-animate', 'slide-up');

    const achievementsMarkup = Array.isArray(item.achievements) && item.achievements.length
      ? `<ul class="timeline-details">${item.achievements.map((achievement) => `<li>${achievement}</li>`).join('')}</ul>`
      : '';

    const metaItems = [
      { icon: '📅', label: item.period },
      item.location ? { icon: '📍', label: item.location } : null
    ].filter(Boolean);

    const metaMarkup = metaItems.length
      ? `<div class="timeline-meta">${metaItems
          .map(
            (meta) => `
              <span class="timeline-meta-item">
                <span class="icon" aria-hidden="true">${meta.icon}</span>${meta.label}
              </span>
            `
          )
          .join('')}
        </div>`
      : '';

    wrapper.innerHTML = `
      <span class="timeline-dot" aria-hidden="true"></span>
      <div class="timeline-content">
        <h3>${item.title}</h3>
        <p class="timeline-organization">${item.organization}</p>
        ${metaMarkup}
        ${achievementsMarkup}
      </div>
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

function initSkillsCarousel() {
  const viewport = document.querySelector('.skills-viewport');
  const track = selectors.skillsGrid;
  const prevBtn = document.querySelector('[data-skill-nav="prev"]');
  const nextBtn = document.querySelector('[data-skill-nav="next"]');

  if (!viewport || !track) return;

  const cards = track.querySelectorAll('.skill-card');
  if (!cards.length) return;

  let currentIndex = 0;
  let isProgrammaticScroll = false;

  const getGap = () => {
    const style = window.getComputedStyle(track);
    return parseFloat(style.columnGap || style.gap || '0');
  };

  const getCardsPerView = () => {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  };

  const updateCardWidths = () => {
    const cardsPerView = getCardsPerView();
    const gap = getGap();
    const viewportWidth = viewport.clientWidth;
    const totalGap = gap * Math.max(cardsPerView - 1, 0);
    let cardWidth = (viewportWidth - totalGap) / cardsPerView;
    const maxWidth = cardsPerView === 1 ? viewportWidth : 320;
    cardWidth = Math.max(220, Math.min(cardWidth, maxWidth));
    track.style.setProperty('--skill-card-width', `${cardWidth}px`);
  };

  const getStep = () => {
    const firstCard = cards[0];
    if (!firstCard) return viewport.clientWidth;
    const gap = getGap();
    return firstCard.getBoundingClientRect().width + gap;
  };

  const getMaxScroll = () => Math.max(track.scrollWidth - viewport.clientWidth, 0);

  const getMaxIndex = (step = getStep()) => {
    if (!step) return 0;
    return Math.max(Math.floor((getMaxScroll() + 0.01) / step), 0);
  };

  const hasScrollableContent = () => getMaxScroll() > 1;

  const stopAutoScroll = () => {
    if (skillsAutoScrollId) {
      clearInterval(skillsAutoScrollId);
      skillsAutoScrollId = undefined;
    }
  };

  const startAutoScroll = () => {
    stopAutoScroll();
    updateCardWidths();
    const maxIndex = getMaxIndex();
    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
    if (!hasScrollableContent()) return;
    skillsAutoScrollId = window.setInterval(() => {
      moveCarousel(1, true);
    }, 5000);
  };

  const moveCarousel = (direction, isAuto = false) => {
    updateCardWidths();
    const step = getStep();
    if (!step) return;
    const maxScroll = getMaxScroll();
    const maxIndex = getMaxIndex(step);

    if (maxIndex === 0) {
      currentIndex = 0;
      viewport.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }

    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

    if (isAuto) {
      currentIndex = (currentIndex + 1) % (maxIndex + 1);
    } else {
      currentIndex = Math.max(0, Math.min(currentIndex + direction, maxIndex));
    }

    const target = Math.min(currentIndex * step, maxScroll);
    isProgrammaticScroll = true;
    viewport.scrollTo({ left: target, behavior: 'smooth' });
    window.setTimeout(() => {
      isProgrammaticScroll = false;
    }, 400);

    if (!isAuto) {
      startAutoScroll();
    }
  };

  const handleResize = () => {
    updateCardWidths();
    const step = getStep();
    if (!step) return;
    const maxIndex = getMaxIndex(step);
    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
    viewport.scrollTo({ left: Math.min(currentIndex * step, getMaxScroll()), behavior: 'auto' });
    startAutoScroll();
  };

  if (prevBtn && !prevBtn.dataset.bound) {
    prevBtn.addEventListener('click', () => moveCarousel(-1));
    prevBtn.dataset.bound = 'true';
  }

  if (nextBtn && !nextBtn.dataset.bound) {
    nextBtn.addEventListener('click', () => moveCarousel(1));
    nextBtn.dataset.bound = 'true';
  }

  if (!viewport.dataset.carouselBound) {
    viewport.addEventListener('mouseenter', stopAutoScroll);
    viewport.addEventListener('mouseleave', startAutoScroll);
    viewport.addEventListener('touchstart', stopAutoScroll, { passive: true });
    viewport.addEventListener('touchend', startAutoScroll, { passive: true });
    viewport.addEventListener('scroll', () => {
      if (isProgrammaticScroll) return;
      const step = getStep();
      if (!step) return;
      currentIndex = Math.round(viewport.scrollLeft / step);
    });
    viewport.dataset.carouselBound = 'true';
  }

  viewport.scrollTo({ left: 0 });
  updateCardWidths();
  startAutoScroll();

  if (!viewport.dataset.carouselResizeBound) {
    window.addEventListener('resize', handleResize);
    viewport.dataset.carouselResizeBound = 'true';
  }

  if (!document.body.dataset.skillsVisibilityBound) {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopAutoScroll();
      } else {
        startAutoScroll();
      }
    });
    document.body.dataset.skillsVisibilityBound = 'true';
  }
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

function initScrollAnimations(refresh = false) {
  const animatedElements = document.querySelectorAll('[data-animate]');
  if (!animatedElements.length) return;

  if (!scrollObserver || refresh) {
    if (scrollObserver) {
      scrollObserver.disconnect();
    }

    scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            scrollObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  }

  animatedElements.forEach((element) => {
    if (!element.classList.contains('animated')) {
      scrollObserver.observe(element);
    }
  });
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

  const initialTheme = storedTheme || (prefersDark.matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initialTheme);

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

function initExperienceFilter() {
  const buttons = document.querySelectorAll('[data-experience-filter]');
  if (!buttons.length) return;

  const updateActiveState = () => {
    buttons.forEach((button) => {
      const isActive = button.dataset.experienceFilter === currentExperienceFilter;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  };

  updateActiveState();

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.experienceFilter;
      if (filter === currentExperienceFilter) return;
      renderExperienceTimeline(filter);
      updateActiveState();
      initScrollAnimations(true);
    });
  });
}

function initApp() {
  renderProjects();
  renderExperienceTimeline(currentExperienceFilter);
  renderSkillsMatrix();
  initSkillsCarousel();
  initNavigation();
  initExperienceFilter();
  initScrollAnimations();
  initBackToTop();
  setCurrentYear();
  initThemeToggle();
  initSmoothScroll();
}

document.addEventListener('DOMContentLoaded', initApp);
