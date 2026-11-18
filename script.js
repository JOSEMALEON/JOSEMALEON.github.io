(() => {
  const translations = {
    es: {
      "ui.skip": "Saltar al contenido",
      "nav.about": "Sobre mí", "nav.experience": "Experiencia", "nav.project": "Proyecto", "nav.skills": "Tecnologías", "nav.education": "Formación", "nav.contact": "Contacto",

      "hero.statement": "Desarrollador junior de Java y Python, con prácticas en software empresarial real y una aplicación propia en la nube en marcha.",
      "hero.status": "Abierto a oportunidades en remoto, híbrido o presencial",

      "about.p1": "Soy Técnico Superior en Desarrollo de Aplicaciones Multiplataforma y tengo experiencia práctica personalizando software empresarial. Trabajo sobre todo con Java y Python, y aprendo herramientas nuevas por mi cuenta sin problema.",
      "about.p2": "Busco un equipo en el que seguir creciendo como desarrollador y aportar desde el primer día con una base técnica sólida.",
      "about.strengthsTitle": "Qué aporto a un equipo",
      "about.s1Title": "Aprendo por mi cuenta",
      "about.s1Text": "Cuando aparece una herramienta o un problema nuevo, investigo, pruebo y avanzo sin esperar a que me lo den resuelto.",
      "about.s2Title": "Trabajo sobre código existente",
      "about.s2Text": "En Tier1 hice ajustes, personalizaciones y correcciones en una plataforma ya construida, sin partir de cero.",
      "about.s3Title": "Me organizo por objetivos",
      "about.s3Text": "Mi experiencia técnica y operativa me ha enseñado a planificar tareas y a resolver imprevistos con calma.",

      "experience.tierRole": "Desarrollador junior en prácticas",
      "experience.tierText": "Personalización y adaptación de Comerzzia, la plataforma de software de Tier1, en un entorno formativo y autodidacta.",
      "experience.tierPoint1": "Desarrollo y ajuste de funcionalidades con Java, Spring Boot, JPA/Hibernate y JavaScript.",
      "experience.tierPoint2": "Corrección de errores y cambios en la lógica backend y en endpoints existentes.",
      "experience.tierPoint3": "Consultas SQL, adaptaciones de interfaz e integraciones con otros sistemas.",
      "experience.hermesRole": "Repartidor, servicio para Amazon",
      "experience.hermesText": "Trabajo operativo con ritmo y objetivos diarios: carga y organización del vehículo, gestión de rutas, uso de la aplicación de reparto y resolución de incidencias.",

      "project.role": "Proyecto personal, en desarrollo",
      "project.present": "actualidad",
      "project.description": "Aplicación de inventario para colecciones de cartas de Magic: The Gathering, pensada para adaptarse a otros tipos de colección. Cada usuario tiene su propia colección en la nube, con stock, categorías, imágenes y precios actualizados.",
      "project.feature1": "Registro e inicio de sesión con Firebase Authentication.",
      "project.feature2": "Colección independiente y persistente para cada usuario en Firestore.",
      "project.feature3": "Control de stock, categorías, imágenes y exportación de datos.",
      "project.feature4": "Seguimiento de precios de mercado con la API de MKM.",
      "project.flowApp": "Aplicación",
      "project.flowAuth": "Inicio de sesión",
      "project.flowDb": "Colección de cada usuario",
      "project.flowApi": "API de MKM",
      "project.flowPrices": "Precios de mercado",
      "project.note": "El código todavía no es público. Pronto añadiré capturas y el enlace al repositorio.",

      "skills.languages": "Lenguajes",
      "skills.backend": "Backend y datos",
      "skills.tools": "Herramientas",
      "skills.note": "Java y Spring los he usado en las prácticas y en la formación; Python y Firebase, en MagicInventory.",

      "education.dam": "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
      "education.certsTitle": "Certificaciones y cursos",
      "education.cyber": "Introducción a la Ciberseguridad (10 h)",
      "education.git": "Curso de Git (7 h)",
      "education.spring": "Introducción a Spring Framework (2 h)",
      "education.languagesTitle": "Idiomas",
      "education.english": "Inglés",

      "contact.title": "¿Encajo en tu equipo? Hablemos.",
      "contact.text": "Respondo rápido por email o WhatsApp. Estoy abierto a puestos en remoto, híbridos o presenciales.",
      "contact.email": "Enviar email",
      "contact.copy": "Copiar email",
      "contact.copied": "Email copiado",
      "contact.whatsappText": "Hola José Manuel, he visto tu portfolio y me gustaría hablar contigo.",

      "footer.top": "Volver arriba",

      "ui.toEnglish": "Switch to English",
      "ui.themeDark": "Activar tema oscuro",
      "ui.themeLight": "Activar tema claro",
      "ui.menuOpen": "Abrir menú",
      "ui.menuClose": "Cerrar menú"
    },
    en: {
      "ui.skip": "Skip to content",
      "nav.about": "About", "nav.experience": "Experience", "nav.project": "Project", "nav.skills": "Skills", "nav.education": "Education", "nav.contact": "Contact",

      "hero.statement": "Junior Java and Python developer, with an internship on real enterprise software and my own cloud app in progress.",
      "hero.status": "Open to remote, hybrid or on-site roles",

      "about.p1": "I hold a Higher Technician qualification in Multiplatform Application Development and have hands-on experience customising enterprise software. I mainly work with Java and Python, and I'm comfortable learning new tools on my own.",
      "about.p2": "I'm looking for a team where I can keep growing as a developer and contribute from day one with a solid technical foundation.",
      "about.strengthsTitle": "What I bring to a team",
      "about.s1Title": "I learn independently",
      "about.s1Text": "When a new tool or problem comes up, I research, test and move forward without waiting for a ready-made answer.",
      "about.s2Title": "I work on existing code",
      "about.s2Text": "At Tier1 I made adjustments, customisations and fixes on an established platform instead of starting from scratch.",
      "about.s3Title": "I work towards goals",
      "about.s3Text": "My technical and operational experience has taught me to plan my tasks and handle the unexpected calmly.",

      "experience.tierRole": "Junior Developer Intern",
      "experience.tierText": "Customisation and adaptation of Comerzzia, Tier1's software platform, in a learning-focused, self-directed environment.",
      "experience.tierPoint1": "Developed and adjusted features using Java, Spring Boot, JPA/Hibernate and JavaScript.",
      "experience.tierPoint2": "Fixed bugs and changed backend logic and existing endpoints.",
      "experience.tierPoint3": "Worked on SQL queries, interface adaptations and integrations with other systems.",
      "experience.hermesRole": "Delivery Driver, Amazon service",
      "experience.hermesText": "Operational work with a fast pace and daily targets: vehicle loading and organisation, route management, delivery app usage and handling incidents.",

      "project.role": "Personal project, in development",
      "project.present": "present",
      "project.description": "Inventory app for Magic: The Gathering card collections, designed to adapt to other kinds of collections. Each user has their own cloud collection with stock, categories, images and up-to-date prices.",
      "project.feature1": "Sign-up and login with Firebase Authentication.",
      "project.feature2": "Independent, persistent collection for each user in Firestore.",
      "project.feature3": "Stock control, categories, images and data export.",
      "project.feature4": "Market price tracking with the MKM API.",
      "project.flowApp": "App",
      "project.flowAuth": "Login",
      "project.flowDb": "Each user's collection",
      "project.flowApi": "MKM API",
      "project.flowPrices": "Market prices",
      "project.note": "The code isn't public yet. Screenshots and a repository link are coming soon.",

      "skills.languages": "Languages",
      "skills.backend": "Backend & data",
      "skills.tools": "Tools",
      "skills.note": "I've used Java and Spring in my internship and studies, and Python and Firebase in MagicInventory.",

      "education.dam": "Higher Technician in Multiplatform Application Development",
      "education.certsTitle": "Certifications and courses",
      "education.cyber": "Introduction to Cybersecurity (10 h)",
      "education.git": "Git course (7 h)",
      "education.spring": "Introduction to Spring Framework (2 h)",
      "education.languagesTitle": "Languages",
      "education.english": "English",

      "contact.title": "Could I fit in your team? Let's talk.",
      "contact.text": "I reply quickly by email or WhatsApp. I'm open to remote, hybrid or on-site roles.",
      "contact.email": "Send email",
      "contact.copy": "Copy email",
      "contact.copied": "Email copied",
      "contact.whatsappText": "Hi José Manuel, I saw your portfolio and would like to talk with you.",

      "footer.top": "Back to top",

      "ui.toEnglish": "Cambiar a español",
      "ui.themeDark": "Switch to dark theme",
      "ui.themeLight": "Switch to light theme",
      "ui.menuOpen": "Open menu",
      "ui.menuClose": "Close menu"
    }
  };

  const WHATSAPP_NUMBER = "34674744656";
  const THEME_COLORS = { light: "#f6f7f9", dark: "#0e1420" };

  const root = document.documentElement;
  const languageButton = document.getElementById("languageButton");
  const languageLabel = document.getElementById("languageLabel");
  const themeButton = document.getElementById("themeButton");
  const menuButton = document.getElementById("menuButton");
  const mobileNav = document.getElementById("mobileNav");
  const copyEmailButton = document.getElementById("copyEmailButton");
  const toast = document.getElementById("toast");
  const header = document.getElementById("siteHeader");
  const whatsappLinks = document.querySelectorAll(".whatsapp-link");
  const navLinks = [...document.querySelectorAll('.desktop-nav a[href^="#"], .mobile-nav a[href^="#"]')];
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  const storage = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch { /* sin almacenamiento: se ignora */ } }
  };

  let language = storage.get("portfolio-language") === "en" ? "en" : "es";
  let theme = root.dataset.theme === "dark" ? "dark" : "light";
  let toastTimer;

  const t = (key) => translations[language][key] ?? key;

  function applyLanguage() {
    root.lang = language;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = translations[language][el.dataset.i18n];
      if (value) el.textContent = value;
    });
    languageLabel.textContent = language === "es" ? "EN" : "ES";
    languageButton.setAttribute("aria-label", t("ui.toEnglish"));
    whatsappLinks.forEach((link) => {
      link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("contact.whatsappText"))}`;
    });
    updateThemeLabel();
    updateMenuLabel();
    storage.set("portfolio-language", language);
  }

  function updateThemeLabel() {
    themeButton.setAttribute("aria-label", theme === "dark" ? t("ui.themeLight") : t("ui.themeDark"));
  }

  function applyTheme() {
    root.dataset.theme = theme;
    if (themeColorMeta) themeColorMeta.setAttribute("content", THEME_COLORS[theme]);
    updateThemeLabel();
    storage.set("portfolio-theme", theme);
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("show");
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
  }

  function updateMenuLabel() {
    const open = mobileNav.classList.contains("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? t("ui.menuClose") : t("ui.menuOpen"));
  }

  function closeMobileMenu() {
    mobileNav.classList.remove("open");
    updateMenuLabel();
  }

  languageButton.addEventListener("click", () => {
    language = language === "es" ? "en" : "es";
    applyLanguage();
  });

  themeButton.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    applyTheme();
  });

  menuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    mobileNav.classList.toggle("open");
    updateMenuLabel();
  });

  document.addEventListener("click", (event) => {
    if (mobileNav.classList.contains("open") && !mobileNav.contains(event.target) && !menuButton.contains(event.target)) {
      closeMobileMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileNav.classList.contains("open")) {
      closeMobileMenu();
      menuButton.focus();
    }
  });

  mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));

  copyEmailButton.addEventListener("click", async () => {
    const email = copyEmailButton.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    showToast(t("contact.copied"));
  });

  // Marca en la navegación la sección que se está leyendo.
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
  }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
  sections.forEach((section) => sectionObserver.observe(section));

  const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", updateHeader, { passive: true });

  document.getElementById("year").textContent = new Date().getFullYear();
  applyLanguage();
  applyTheme();
  updateHeader();
})();
