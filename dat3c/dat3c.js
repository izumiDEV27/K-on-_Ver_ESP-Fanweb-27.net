document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".post-section");
  const menuLinks = document.querySelectorAll(".menu-link");

  // Configuración del observador: se activa cuando la sección ocupa el 50% de la pantalla
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        
        // Remover la clase active de todos los enlaces
        menuLinks.forEach((link) => link.classList.remove("active"));
        
        // Añadirla solo al enlace que apunta a la sección visible
        const activeLink = document.querySelector(`.menu-link[href="#${id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  }, options);

  // Ponemos a observar cada una de nuestras secciones
  sections.forEach((section) => observer.observe(section));
});