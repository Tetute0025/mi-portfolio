/*
  JavaScript pequeño para dos mejoras:
  1. Abrir/cerrar el menú en pantallas pequeñas.
  2. Filtrar las tarjetas de proyectos por categoría.
*/

// Menú móvil: buscamos el botón y la navegación por sus atributos data-* e id.
const menuButton = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("#site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Abrir menú de navegación" : "Cerrar menú de navegación",
    );
    siteNav.classList.toggle("is-open", !isOpen);
  });

  // Al elegir una opción, cerramos el menú móvil.
  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menú de navegación");
      siteNav.classList.remove("is-open");
    });
  });

  // Escape permite cerrar el menú desde el teclado.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menú de navegación");
      siteNav.classList.remove("is-open");
      menuButton.focus();
    }
  });
}

// Filtros de la página de proyectos. En otras páginas no habrá botones y no pasa nada.
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-project]");
const projectCount = document.querySelector("[data-project-count]");

if (filterButtons.length > 0 && projectCards.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.dataset.filter;
      let visibleCount = 0;

      // Indicamos qué filtro está seleccionado para accesibilidad y estilo.
      filterButtons.forEach((filterButton) => {
        filterButton.setAttribute(
          "aria-pressed",
          String(filterButton === button),
        );
      });

      // Mostramos todas las tarjetas o solo las de la categoría elegida.
      projectCards.forEach((card) => {
        const matches =
          selectedCategory === "all" ||
          card.dataset.category === selectedCategory;

        card.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      if (projectCount) {
        projectCount.textContent = `${visibleCount} ${visibleCount === 1 ? "proyecto" : "proyectos"}`;
      }
    });
  });
}

// Año automático para no tener que modificar el pie de página cada enero.
const yearElement = document.querySelector("[data-current-year]");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}
