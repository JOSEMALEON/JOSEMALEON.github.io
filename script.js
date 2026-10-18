(() => {
  const translations = {
    es: {
      "nav.about": "Sobre mí", "nav.skills": "Tecnologías", "nav.projects": "Proyectos", "nav.experience": "Experiencia", "nav.education": "Formación", "nav.contact": "Contacto",
      "hero.available": "Abierto a oportunidades de desarrollo", "hero.greeting": "Hola, soy", "hero.text": "Desarrollador junior con foco en Java y Python. Me gusta aprender de forma autónoma, resolver problemas reales y convertir ideas en aplicaciones funcionales.", "hero.projectCta": "Ver proyecto", "hero.cvCta": "Descargar CV", "hero.java": "Lenguaje principal", "hero.python": "Proyecto personal", "hero.spring": "Backend", "hero.modeLabel": "Disponibilidad", "hero.mode": "Remoto · Híbrido · Presencial", "hero.modeText": "Flexible según la oportunidad.", "hero.scroll": "Explorar portfolio",
      "about.kicker": "Perfil", "about.title": "Sobre mí", "about.p1": "Soy Técnico Superior en Desarrollo de Aplicaciones Multiplataforma y cuento con experiencia práctica en personalización de software empresarial. Trabajo principalmente con Java y Python y me siento cómodo aprendiendo nuevas herramientas por mi cuenta.", "about.p2": "Me considero una persona proactiva, adaptable y autodidacta. Busco una oportunidad donde seguir creciendo como desarrollador y aportar desde el primer día con una base técnica sólida y ganas de aprender.", "about.fact1": "Fin de DAM", "about.fact2": "Inglés", "about.fact3": "MagicInventory", "about.autodidactTitle": "Aprendizaje autónomo", "about.autodidactText": "Capacidad para investigar, probar y aprender herramientas nuevas de forma independiente.", "about.adaptTitle": "Adaptabilidad", "about.adaptText": "Experiencia en entornos técnicos y operativos distintos, manteniendo enfoque y responsabilidad.", "about.problemTitle": "Orientación práctica", "about.problemText": "Preferencia por construir soluciones útiles, iterar y mejorar sobre problemas reales.",
      "contribution.kicker": "Valor profesional", "contribution.title": "Qué puedo aportar", "contribution.card1Title": "Autonomía para aprender", "contribution.card1Text": "Estoy acostumbrado a investigar, probar y avanzar por mi cuenta cuando aparece una herramienta o problema nuevo.", "contribution.card2Title": "Adaptación sobre software existente", "contribution.card2Text": "En Tier1 trabajé sobre una plataforma ya construida, realizando ajustes, personalizaciones y correcciones sin partir de cero.", "contribution.card3Title": "Responsabilidad y adaptación", "contribution.card3Text": "Mi experiencia técnica y operativa me ha acostumbrado a trabajar con objetivos, organizar tareas y responder ante imprevistos.", "now.kicker": "Actualmente", "now.title": "En evolución constante", "now.item1": "Desarrollando MagicInventory", "now.item2": "Mejorando Java y Spring", "now.item3": "Abierto a oportunidades Junior",
      "skills.kicker": "Stack", "skills.title": "Tecnologías", "skills.subtitle": "Herramientas que he utilizado en formación, prácticas y proyectos personales. Sin barras de nivel artificiales: prefiero mostrar contexto real de uso.", "skills.languages": "Lenguajes", "skills.backend": "Backend y datos", "skills.tools": "Herramientas", "skills.context": "Contexto de uso", "skills.context1": "Prácticas profesionales y formación", "skills.context2": "MagicInventory", "skills.context3": "Formación y proyectos",
      "projects.kicker": "Proyecto destacado", "projects.subtitle": "Proyecto personal desarrollado de forma individual y actualmente en evolución.", "projects.present": "Actualidad", "projects.personal": "Proyecto personal", "projects.dev": "En desarrollo", "projects.headline": "Gestión de colecciones con datos en la nube y seguimiento de precios.", "projects.description": "Aplicación de inventario creada inicialmente para colecciones de cartas Magic: The Gathering, planteada para poder adaptarse a otras temáticas. Centraliza usuarios, stock, categorías, imágenes, precios y exportación de datos.", "projects.feature1": "Registro e inicio de sesión con Firebase Authentication.", "projects.feature2": "Colección independiente y persistente para cada usuario mediante Firestore.", "projects.feature3": "Control de stock, categorías, imágenes y exportación de datos.", "projects.feature4": "Seguimiento del precio utilizando la API de MKM.", "projects.note": "El repositorio aún no está publicado. Esta sección muestra la arquitectura funcional del proyecto, no una demo pública.", "projects.mockCollection": "Mi colección", "projects.mockAdd": "Añadir", "projects.mockCards": "Cartas", "projects.mockValue": "Valor", "projects.mockUsers": "Perfil", "projects.mockInventory": "Inventario", "projects.mockPrice": "Precio MKM", "projects.mockTrend": "Evolución de precio", "projects.archLabel": "Flujo funcional", "projects.archText": "Una vista simplificada de cómo se conectan las piezas principales.", "projects.archUser": "Usuario", "projects.archUser2": "Interfaz gráfica", "projects.archAuth": "Acceso", "projects.archDb": "Colección en nube", "projects.archApi": "Precios",
      "experience.kicker": "Trayectoria", "experience.title": "Experiencia", "experience.tierRole": "Desarrollador Junior en prácticas", "experience.tierText": "Prácticas con un enfoque formativo y autodidacta sobre Comerzzia, el software de Tier1. Trabajé en personalizaciones y ajustes del producto, corrección de errores, cambios en lógica backend, endpoints, bases de datos, interfaz e integraciones.", "experience.hermesRole": "Repartidor · Servicio para Amazon", "experience.hermesText": "Experiencia adicional en un entorno operativo exigente: carga y organización del vehículo, gestión de rutas, uso de aplicación de reparto y resolución de incidencias operativas.",
      "education.kicker": "Base técnica", "education.title": "Formación y certificaciones", "education.dam": "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma", "education.git": "Curso de Git · 7 h", "education.spring": "Introducción a Spring Framework · 2 h", "education.cyber": "Introducción a la Ciberseguridad · 10 h", "education.languagesLabel": "Idiomas", "education.english": "Inglés · B2", "education.englishText": "Nivel acreditado",
      "contact.kicker": "Contacto", "contact.title": "¿Hablamos?", "contact.text": "Estoy abierto a oportunidades de desarrollo remotas, híbridas o presenciales. Si mi perfil puede encajar en tu equipo, estaré encantado de conversar.", "contact.email": "Enviar email", "contact.copy": "Copiar email", "contact.copied": "Email copiado", "contact.mode": "Remoto · Híbrido · Presencial", "footer.top": "Volver arriba ↑", "ui.backToTop": "Volver arriba"
    },
    en: {
      "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects", "nav.experience": "Experience", "nav.education": "Education", "nav.contact": "Contact",
      "hero.available": "Open to software development opportunities", "hero.greeting": "Hi, I'm", "hero.text": "Junior software developer focused on Java and Python. I enjoy learning independently, solving real-world problems and turning ideas into functional applications.", "hero.projectCta": "View project", "hero.cvCta": "Download CV", "hero.java": "Core language", "hero.python": "Personal project", "hero.spring": "Backend", "hero.modeLabel": "Availability", "hero.mode": "Remote · Hybrid · On-site", "hero.modeText": "Flexible depending on the opportunity.", "hero.scroll": "Explore portfolio",
      "about.kicker": "Profile", "about.title": "About me", "about.p1": "I hold a Higher Technician qualification in Multiplatform Application Development and have hands-on experience customising enterprise software. I mainly work with Java and Python and I am comfortable learning new tools independently.", "about.p2": "I consider myself proactive, adaptable and self-taught. I am looking for an opportunity where I can continue growing as a developer and contribute from day one with a solid technical foundation and a strong willingness to learn.", "about.fact1": "DAM completed", "about.fact2": "English", "about.fact3": "MagicInventory", "about.autodidactTitle": "Self-directed learning", "about.autodidactText": "Able to research, test and learn new tools independently.", "about.adaptTitle": "Adaptability", "about.adaptText": "Experience across different technical and operational environments while staying focused and accountable.", "about.problemTitle": "Practical mindset", "about.problemText": "I prefer building useful solutions, iterating and improving them around real problems.",
      "contribution.kicker": "Professional value", "contribution.title": "What I can bring", "contribution.card1Title": "Independent learning", "contribution.card1Text": "I am used to researching, testing and moving forward independently when I face a new tool or problem.", "contribution.card2Title": "Adapting existing software", "contribution.card2Text": "At Tier1 I worked on an existing platform, making adjustments, customisations and fixes instead of starting from scratch.", "contribution.card3Title": "Responsibility and adaptability", "contribution.card3Text": "My technical and operational experience has trained me to work towards goals, organise tasks and respond to unexpected situations.", "now.kicker": "Currently", "now.title": "Always evolving", "now.item1": "Developing MagicInventory", "now.item2": "Improving Java and Spring", "now.item3": "Open to Junior opportunities",
      "skills.kicker": "Stack", "skills.title": "Technologies", "skills.subtitle": "Tools I have used in education, internships and personal projects. No artificial skill bars: I prefer showing real usage context.", "skills.languages": "Languages", "skills.backend": "Backend & data", "skills.tools": "Tools", "skills.context": "Usage context", "skills.context1": "Internship and education", "skills.context2": "MagicInventory", "skills.context3": "Education and projects",
      "projects.kicker": "Featured project", "projects.subtitle": "Personal project developed independently and currently evolving.", "projects.present": "Present", "projects.personal": "Personal project", "projects.dev": "In development", "projects.headline": "Collection management with cloud data and price tracking.", "projects.description": "Inventory application initially created for Magic: The Gathering card collections and designed to adapt to other themes. It centralises users, stock, categories, images, prices and data export.", "projects.feature1": "Registration and login with Firebase Authentication.", "projects.feature2": "Independent persistent collection for each user through Firestore.", "projects.feature3": "Stock control, categories, images and data export.", "projects.feature4": "Price tracking using the MKM API.", "projects.note": "The repository is not public yet. This section shows the project's functional architecture, not a public demo.", "projects.mockCollection": "My collection", "projects.mockAdd": "Add", "projects.mockCards": "Cards", "projects.mockValue": "Value", "projects.mockUsers": "Profile", "projects.mockInventory": "Inventory", "projects.mockPrice": "MKM price", "projects.mockTrend": "Price trend", "projects.archLabel": "Functional flow", "projects.archText": "A simplified view of how the main pieces connect.", "projects.archUser": "User", "projects.archUser2": "Graphical interface", "projects.archAuth": "Access", "projects.archDb": "Cloud collection", "projects.archApi": "Prices",
      "experience.kicker": "Career", "experience.title": "Experience", "experience.tierRole": "Junior Developer Intern", "experience.tierText": "Internship with a training-focused and self-directed approach using Comerzzia, Tier1's software platform. I worked on product customisation and adjustments, bug fixing, backend logic changes, endpoints, databases, interface updates and integrations.", "experience.hermesRole": "Delivery Driver · Amazon service", "experience.hermesText": "Additional experience in a demanding operational environment: vehicle loading and organisation, route management, delivery app usage and handling operational issues.",
      "education.kicker": "Technical foundation", "education.title": "Education & certifications", "education.dam": "Higher Technician in Multiplatform Application Development", "education.git": "Git Course · 7 h", "education.spring": "Introduction to Spring Framework · 2 h", "education.cyber": "Introduction to Cybersecurity · 10 h", "education.languagesLabel": "Languages", "education.english": "English · B2", "education.englishText": "Certified level",
      "contact.kicker": "Contact", "contact.title": "Let's talk", "contact.text": "I am open to remote, hybrid or on-site development opportunities. If you think my profile could fit your team, I would be happy to talk.", "contact.email": "Send email", "contact.copy": "Copy email", "contact.copied": "Email copied", "contact.mode": "Remote · Hybrid · On-site", "footer.top": "Back to top ↑", "ui.backToTop": "Back to top"
    }
  };

  const root = document.documentElement;
  const languageButton = document.getElementById("languageButton");
  const languageLabel = document.getElementById("languageLabel");
  const themeButton = document.getElementById("themeButton");
  const moon = document.getElementById("themeIconMoon");
  const sun = document.getElementById("themeIconSun");
  const menuButton = document.getElementById("menuButton");
  const mobileNav = document.getElementById("mobileNav");
  const copyEmailButton = document.getElementById("copyEmailButton");
  const toast = document.getElementById("toast");
  const header = document.getElementById("siteHeader");
  const cvLinks = document.querySelectorAll(".cv-link");
  const navLinks = [...document.querySelectorAll('.desktop-nav a[href^="#"], .mobile-nav a[href^="#"]')];
  const scrollProgressBar = document.getElementById("scrollProgressBar");
  const backToTopButton = document.getElementById("backToTopButton");
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  let language = localStorage.getItem("portfolio-language") || "es";
  const storedTheme = localStorage.getItem("portfolio-theme");
  let theme = storedTheme || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  let toastTimer;

  function t(key) { return translations[language][key] || key; }

  function applyLanguage() {
    root.lang = language;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = translations[language][el.dataset.i18n];
      if (value) el.textContent = value;
    });
    languageLabel.textContent = language === "es" ? "EN" : "ES";
    languageButton.setAttribute("aria-label", language === "es" ? "Switch to English" : "Cambiar a español");
    cvLinks.forEach((link) => {
      link.href = language === "es" ? "assets/docs/CV_Jose_Manuel_Leon_ES.pdf" : "assets/docs/CV_Jose_Manuel_Leon_EN.pdf";
    });
    if (backToTopButton) {
      backToTopButton.setAttribute("aria-label", t("ui.backToTop"));
      backToTopButton.setAttribute("title", t("ui.backToTop"));
    }
    localStorage.setItem("portfolio-language", language);
  }

  function applyTheme() {
    root.dataset.theme = theme;
    const isDark = theme === "dark";
    moon.classList.toggle("hidden", !isDark);
    sun.classList.toggle("hidden", isDark);
    themeButton.setAttribute("aria-label", isDark ? "Activar tema claro" : "Activar tema oscuro");
    if (themeColorMeta) themeColorMeta.setAttribute("content", isDark ? "#07101d" : "#f6f8fb");
    localStorage.setItem("portfolio-theme", theme);
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("show");
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
  }

  languageButton.addEventListener("click", () => {
    language = language === "es" ? "en" : "es";
    applyLanguage();
  });

  themeButton.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    applyTheme();
  });

  function closeMobileMenu() {
    mobileNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  menuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const open = mobileNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", (event) => {
    if (mobileNav.classList.contains("open") && !mobileNav.contains(event.target) && !menuButton.contains(event.target)) {
      closeMobileMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileMenu();
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  copyEmailButton.addEventListener("click", async () => {
    const email = copyEmailButton.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      showToast(t("contact.copied"));
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      showToast(t("contact.copied"));
    }
  });

  // Escalona las tarjetas que pertenecen al mismo bloque para que no aparezcan todas a la vez.
  document.querySelectorAll(".principles-grid, .skills-grid, .contribution-grid, .education-grid").forEach((group) => {
    group.querySelectorAll(".reveal").forEach((el, index) => {
      el.style.setProperty("--reveal-delay", `${Math.min(index * 75, 300)}ms`);
    });
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  const sections = [...document.querySelectorAll("main section[id]")];
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", isActive);
        if (isActive) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-42% 0px -52% 0px", threshold: 0 });
  sections.forEach((section) => sectionObserver.observe(section));

  if (backToTopButton) {
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function updateScrollUI() {
    header.classList.toggle("scrolled", window.scrollY > 16);
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
    scrollProgressBar.style.transform = `scaleX(${progress})`;

    if (backToTopButton) {
      const showBackToTop = window.scrollY > Math.max(520, window.innerHeight * 0.65);
      backToTopButton.classList.toggle("visible", showBackToTop);
    }
  }

  window.addEventListener("scroll", updateScrollUI, { passive: true });
  window.addEventListener("resize", updateScrollUI, { passive: true });

  document.getElementById("year").textContent = new Date().getFullYear();
  applyLanguage();
  applyTheme();
  updateScrollUI();
})();
