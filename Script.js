

document.addEventListener('DOMContentLoaded', function() {
  const introVideo = document.getElementById('intro-video');
  const introContainer = document.getElementById('intro-video-container');
  const mainContent = document.getElementById('main-content');

  // Quand la vidéo se termine
  introVideo.addEventListener('ended', function() {
    introContainer.style.display = 'none';
    mainContent.style.display = 'block';
  });

  // Optionnel : fail-safe si vidéo bloque ou erreur
  setTimeout(() => {
    if (introContainer.style.display !== 'none') {
      introContainer.style.display = 'none';
      mainContent.style.display = 'block';
    }
  }, 10000); // 10 secondes timeout de sécurité
});



document.getElementById('logo-link').addEventListener('click', function(e) {
  e.preventDefault();
  location.reload();
});



particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.7
    },
    "size": {
      "value": 3
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000000",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "out_mode": "bounce"
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    },
    "modes": {
      "repulse": {
        "distance": 100
      }
    }
  },
  "retina_detect": true
});


function updateParticleTheme(theme) {
  const color = theme === 'dark' ? '#ffffff' : '#000000';
  const particles = window.pJSDom?.[0]?.pJS;
  if (particles) {
    particles.particles.color.value = color;
    particles.particles.line_linked.color = color;
    particles.fn.particlesRefresh();
  }
}

const currentTheme = document.documentElement.getAttribute('data-theme');
updateParticleTheme(currentTheme);


document.addEventListener('DOMContentLoaded', function() {
  // Theme Toggle Functionality
  const themeToggle = document.getElementById('theme-toggle');
  
  // Check for saved theme preference or use the system preference
const savedTheme = localStorage.getItem('theme') || 'light';

// Applique le thème au chargement
document.documentElement.setAttribute('data-theme', savedTheme);
  
  // Theme toggle click handler
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      // Update theme attribute
      document.documentElement.setAttribute('data-theme', newTheme);
      
      // Save preference to localStorage
      localStorage.setItem('theme', newTheme);
      // Mise à jour des particules :
      updateParticleTheme(newTheme);
    });
  }
  
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.menu a').forEach(navLink => {
      navLink.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
  
  // Sticky Header on Scroll
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.padding = '20px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
      }
    });
  }
});
  // Smooth Scroll for Navigation Links (excluding project detail links)
  document.querySelectorAll('a[href^="#"]:not(.more-link)').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      // Skip if href is just '#' to avoid invalid selector
      if (targetId === '#' || !targetId) return;
      
      try {
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const headerHeight = document.querySelector('header').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          
          window.scrollTo({
            top: targetPosition - headerHeight,
            behavior: 'smooth'
          });
        }
      } catch (error) {
        console.error('Invalid selector:', targetId);
      }
    });
  });
  
  // Skills Data
  const skillsData = {
    "Advanced AI & Research": [
      { name: "Machine Learning  / Deep Learning / Reinforcement Learning", level: 50, icon: "fa-solid fa-brain" },
      { name: "eXplainable AI (XAI)", level: 70, icon: "fa-solid fa-gamepad" },
      { name: "NLP & LLMs (RAG)", level: 80, icon: "fa-solid fa-comments" },
      { name: "Medical Image Processing", level: 80, icon: "fa-solid fa-microscope" },
      { name: "Computer Vision", level: 70, icon: "fa-solid fa-eye" },
    ],
      "Technologies & Tools": [
      { name: "Docker", level: 80, icon: "fa-brands fa-docker" },
      { name: "Kubernetes", level: 60, icon: "fa-solid fa-dharmachakra" },
      { name: "Git / GitHub Actions", level: 85, icon: "fa-brands fa-github" },
      { name: "Model Deployment (Flask/FastAPI)", level: 75, icon: "fa-solid fa-rocket" }
    ],    
    "Programming Languages": [
      { name: "Python", level: 75, icon: "fa-brands fa-python" },
      { name: "Java", level: 80, icon: "fa-brands fa-java" },
      { name: "C/C++", level: 90, icon: "fa-solid fa-code" },
      { name: "MATLAB", level: 90, icon: "fa-solid fa-code" }
    ],
    "Web Development": [
      { name: "HTML/CSS", level: 95, icon: "fa-brands fa-html5" },
      { name: "JavaScript", level: 75, icon: "fa-brands fa-js" },
      { name: "PHP", level: 60, icon: "fa-brands fa-php" }
    ],

    "Databases": [
      { name: "SQL/Oracle", level: 80, icon: "fa-solid fa-database" },
      { name: "MySQL", level: 80, icon: "fa-solid fa-database" },
      { name: "Neo4j", level: 70, icon: "fa-solid fa-dna" },
      { name: "MongoDB", level: 50, icon: "fa-solid fa-leaf" }
    ],
    "Frameworks": [
      { name: "React Native", level: 60, icon: "fa-brands fa-react" },
      { name: "React", level: 60, icon: "fa-brands fa-react" },
      { name: "Express.js", level: 60, icon: "fa-brands fa-node-js" },
      { name: "Node.js", level: 60, icon: "fa-brands fa-node-js" },
      //{ name: "Spring Boot", level: 40, icon: "fa-solid fa-leaf" },
      //{ name: "Flutter", level: 30, icon: "fa-brands fa-android" }
    ],
    "Soft Skills": [
      { name: "Scientific Writing", level: 90, icon: "fa-solid fa-pen-nib" },
      { name: "Critical Thinking", level: 95, icon: "fa-solid fa-brain" },
      { name: "Problem Solving", level: 90, icon: "fa-solid fa-puzzle-piece" },
      { name: "Teamwork", level: 85, icon: "fa-solid fa-users" }
    ],

    "Operating Systems": [
      { name: "Linux", level: 80, icon: "fa-brands fa-linux" },
      { name: "Windows", level: 90, icon: "fa-brands fa-windows" },
    ],

    "languages": [
      { name: "Arabic", level: "Native", icon: "fa-solid fa-language" },
      { name: "French", level: "Professional (Good)", icon: "fa-solid fa-language" },
      { name: "English", level: "Intermediate", icon: "fa-solid fa-language" }
    ],
    "Design": [
      { name: "Canva", level: 80, icon: "fa-solid fa-palette" }
    ],
  };

  // Colors for different skill categories
  const categoryColors = {
    "Web Development": "#6E59A5",
    "Programming Languages": "#F97316",
    "Databases": "#0EA5E9",
    "Frameworks": "#D946EF",
    "Advanced AI & Research": "#8B5CF6",
    "Operating Systems": "#1E8EDB",
    "Design": "rgb(253, 155, 43)",
    "Technologies & Tools": "#355FFF",
    "languages": "rgb(5, 110, 162)",
    "Soft Skills": "#FF6B6B",
  };

  // Render skills grid
  function renderSkillsGrid() {
    const skillsContainer = document.getElementById('skills-container');
    
    if (!skillsContainer) return;
    
    // Create skills section header
    const sectionHeader = document.createElement('div');
    sectionHeader.className = 'skills-section-header';
    sectionHeader.innerHTML = '<h2>Skills</h2>';
    skillsContainer.appendChild(sectionHeader);
    
    // Create container for skill category boxes
    const skillBoxesContainer = document.createElement('div');
    skillBoxesContainer.className = 'skill-boxes-container';
    
    // Loop through each skill category
    for (const category in skillsData) {
      // Create category container
      const categoryContainer = document.createElement('div');
      categoryContainer.className = 'skill-category-container';
      
      // Create category header
      const categoryHeader = document.createElement('div');
      categoryHeader.className = 'skill-category-header';
      categoryHeader.style.backgroundColor = categoryColors[category] || '#6E59A5';
      categoryHeader.innerHTML = `<h3>${category}</h3>`;
      categoryContainer.appendChild(categoryHeader);
      
      // Create skills grid for this category
      const skillsGrid = document.createElement('div');
      skillsGrid.className = 'skills-box-grid';
      
      // Add skills to grid
      skillsData[category].forEach(skill => {
        const skillBox = document.createElement('div');
        skillBox.className = 'skill-box';
        
        skillBox.innerHTML = `
          <div class="skill-icon"><i class="${skill.icon}"></i></div>
          <div class="skill-name">${skill.name}</div>
          <div class="skill-bar">
            <div class="skill-progress" style="width: ${skill.level}%"></div>
          </div>
        `;
        
        skillsGrid.appendChild(skillBox);
      });
      
      categoryContainer.appendChild(skillsGrid);
      skillBoxesContainer.appendChild(categoryContainer);
    }
    
    skillsContainer.appendChild(skillBoxesContainer);
  }
  
  // Call functions to initialize
  renderSkillsGrid();
  
  // Animate skill bars when they come into view
  const skillBars = document.querySelectorAll('.skill-progress');
  
  function checkScroll() {
    skillBars.forEach(skillBar => {
      const slideInAt = (window.scrollY + window.innerHeight) - skillBar.offsetHeight / 2;
      const skillBottom = skillBar.offsetTop + skillBar.offsetHeight;
      const isHalfShown = slideInAt > skillBar.offsetTop;
      const isNotScrolledPast = window.scrollY < skillBottom;
      
      if (isHalfShown && isNotScrolledPast) {
        const style = skillBar.getAttribute('style');
        if (style && style.includes('width:')) {
          skillBar.style.width = style.split('width:')[1];
        }
      } else {
        skillBar.style.width = '0';
      }
    });
  }
  
  window.addEventListener('scroll', checkScroll);
  
  // Run once on load to initialize animations
  window.addEventListener('load', checkScroll);
  
  // Form Submission with EmailJS
  // Form Submission with EmailJS
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalBtnText = submitBtn.textContent;
    
    // Changement d'état du bouton
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Paramètres pour EmailJS (doivent correspondre aux IDs de ton compte)
    const serviceID = 'service_ifg3sfj';
    const templateID = 'template_gftzlke';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        submitBtn.textContent = 'Message Sent';
        alert('Thank you! Your message has been sent successfully.');
        contactForm.reset();
      }, (err) => {
        submitBtn.textContent = 'Error!';
        alert("Ops! Envoi échoué : " + JSON.stringify(err));
      })
      .finally(() => {
        setTimeout(() => {
          submitBtn.textContent = originalBtnText;
          submitBtn.disabled = false;
        }, 3000);
      });
  });
}

const projectsData = [
  // --- PRIORITÉ 1 : AI, LLM & MACHINE LEARNING ---
    // --- PRIORITÉ 2 : CYBERSECURITY & INTELLIGENT SYSTEMS ---
  {
    id: 7,
    title: "Pentesting with RL-LLM",
    image: "Media/cyber-ai.png",
    tags: ["Reiforcement Learning ", "LLM", "Pentesting", "Cybersecurity", "React" , "Docker"],
    description: "Recherche sur l'automatisation des tests d'intrusion en utilisant le Reinforcement Learning et les modèles de langage.",
    github: "https://github.com/el-karami08/Pentesting-with-Auto-Agent-using-RL-LLM"
  },
  {
    id: 1,
    title: "Medical Chatbot (DevOps/MLOps)",
    image: "Media/chatbot.png",
    tags: ["React", "Shell", "LLM", "MLOps", "Docker", "Kubernetes", ],
    description: "Projet collaboratif MLOps développant un assistant médical intelligent basé sur les LLM, avec déploiement scalable via Docker et Kubernetes.",
    github: "https://github.com/usmba-fsdm-mlaim/project3-chatbot"
  },
  {
    id: 2,
    title: "Teaching Assistant RAG",
    image: "Media/chat.png",
    tags: ["RAG", "LangChain", "NLP", "Python", "React","FastAPI"],
    description: "Système de Retrieval-Augmented Generation agissant comme un assistant pédagogique capable d'extraire des réponses de documents spécifiques.",
    github: "https://github.com/el-karami08/teaching-assistant-RAG"
  },
  {
    id: 3,
    title: "Medical Image Classification",
    image: "Media/Pneumonia.png",
    tags: ["Deep Learning", "CNN", "PyTorch", "Tensorflow", "matplotlib", "Numpy", "GradCAM", "Seaborn" ,"pandas" ],
    description: "Classification d'images médicales à l'aide de réseaux de neurones convolutifs (CNN) pour l'aide au diagnostic.",
    github: "https://github.com/el-karami08/Medicale-Image-Classification-with-CNN"
  },
    {
    id: 5,
    title: "CTR-Challenge",
    image: "Media/ctr.png",
    tags: ["sklearn", "PyTorch", "deepctr-torch", "sentence-transformers", "CLIP ViT-Large"],
    description: "Défi de prédiction du Click-Through Rate (CTR) utilisant des modèles de Machine Learning pour l'optimisation publicitaire.",
    github: "https://github.com/el-karami08/CTR-Challenge"
  },
  {
    id: 4,
    title: "Zero-Shot News Classifier",
    image: "Media/zero-shot.png",
    tags: ["NLP", "Transformers", "HuggingFace" ,"Python"],
    description: "Classification de texte sans entraînement préalable pour catégoriser des flux d'actualités en temps réel.",
    github: "https://github.com/el-karami08/zero-shot-news-classifier"
  },
  {
    id: 6,
    title: "Energy Efficiency Prediction",
    image: "Media/energy.png",
    tags: ["ML", "Scikit-Learn", "Regression"],
    description: "Prédiction de l'efficacité énergétique des bâtiments en fonction de paramètres architecturaux.",
    github: "https://github.com/el-karami08/Prediction-of-Energy-Efficiency-of-Buildings"
  },

  // --- PRIORITÉ 3 : DEVELOPMENT & INTERFACES ---
  {
    id: 10,
    title: "Image Processing Interface (GUI)",
    image: "Media/img-gui.png",
    tags: ["Python", "Tkinter", "OpenCV"],
    description: "Interface logicielle interactive (GUI) pour le traitement d'images en temps réel avec filtres et détection de contours.",
    github: "https://github.com/el-karami08/image-processing-python-interface"
  },
  {
    id: 9,
    title: "Image Processing Website",
    image: "Media/img-web.png",
    tags: ["Python", "Flask", "OpenCV", "React"],
    description: "Plateforme web permettant d'appliquer divers algorithmes de traitement d'images en ligne.",
    github: "https://github.com/el-karami08/images-processing-website-app"
  },
  {
    id: 8,
    title: "PARKNOLOGY (Smart Parking)",
    image: "Media/Inside.jpg",
    tags: ["IoT", "Security", "Smart City"],
    description: "Système de parking intelligent intégrant des capteurs et une gestion sécurisée des données.",
    github: "https://github.com/el-karami08/PARKNOLOGY-smart-parking-system"
  },
  {
    id: 12,
    title: "Smart Parking App",
    image: "Media/parknology.png",
    tags: ["React", "IoT"],
    description: "Application mobile facilitant la recherche et la réservation de places de parking en temps réel.",
    github: "https://github.com/el-karami08/smart-parking-app"
  },
  {
    id: 11,
    title: "EduHub Platform",
    image: "Media/eduhub.png",
    tags: ["FullStack", "Web", "Database"],
    description: "Plateforme éducative pour la gestion des cours et la collaboration entre étudiants et enseignants.",
    github: "https://github.com/el-karami08/EduHub-platform"
  },
];


function renderProjects() {
  const container = document.querySelector('.projects-grid');
  if (!container) return;
  
  // On réinitialise complètement le container (exit la vidéo et les placeholders)
  let projectsHTML = ""; 

  projectsData.forEach(project => {
    projectsHTML += `
      <div class="project-card" data-id="${project.id}">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
          <div class="project-overlay">
            <div class="project-links">
              <a href="${project.github}" target="_blank" class="project-link"><i class="fab fa-github"></i></a>
              <a href="#" class="project-link more-link"><i class="fas fa-plus"></i></a>
            </div>
          </div>
        </div>
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description.substring(0, 100)}...</p>
          <div class="project-tech">
            ${project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = projectsHTML;
  initProjectModals(); 
}

function initProjectModals() {
  document.querySelectorAll('.more-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const card = this.closest('.project-card');
      const projectId = card.getAttribute('data-id');
      const project = projectsData.find(p => p.id == projectId);
      
      if (!project) return;

      const modalOverlay = document.createElement('div');
      modalOverlay.className = 'modal-overlay fullscreen-modal active';
      
      modalOverlay.innerHTML = `
        <div class="modal-content fullscreen-content">
          <span class="close-modal">&times;</span>
          <div class="modal-body">
            <div class="modal-header"><h2>${project.title}</h2></div>
            <div class="modal-image"><img src="${project.image}" alt="${project.title}"></div>
            <div class="modal-details">
              <div class="modal-description">
                <h3>Description du Projet</h3>
                <p class="description-content">${project.description}</p>
              </div>
              <div class="modal-tech">
                <h3>Technologies Utilisées</h3>
                <div class="project-tech">
                  ${project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                </div>
              </div>
              <div class="additional-details">
                <a href="${project.github}" target="_blank" class="btn">Voir sur GitHub</a>
              </div>
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(modalOverlay);
      document.body.style.overflow = 'hidden';

      const closeModal = () => {
        modalOverlay.classList.remove('active');
        setTimeout(() => { modalOverlay.remove(); document.body.style.overflow = ''; }, 300);
      };

      modalOverlay.querySelector('.close-modal').addEventListener('click', closeModal);
      modalOverlay.addEventListener('click', (e) => { if(e.target === modalOverlay) closeModal(); });
    });
  });
}

// Appeler le rendu final
document.addEventListener('DOMContentLoaded', renderProjects);



const professions = [
  "AI Researcher",
  "Data scientist",
  "Data Analyst",
  "Data Engineer",
  "ML Engineer",
  "BI Analyst",
];

const professionElement = document.getElementById("profession");
let index = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function type() {
  const currentProfession = professions[index];

  if (!isDeleting) {
    professionElement.textContent = currentProfession.substring(0, ++charIndex);
    if (charIndex === currentProfession.length) {
      isDeleting = true;
      setTimeout(type, pauseTime);
      return;
    }
  } else {
    professionElement.textContent = currentProfession.substring(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % professions.length;
    }
  }

  const speed = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(type, speed);
}

// Lancer l'animation au chargement
document.addEventListener("DOMContentLoaded", type);


