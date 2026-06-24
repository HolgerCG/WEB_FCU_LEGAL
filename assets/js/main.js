const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const dropdowns = document.querySelectorAll(".nav-dropdown");
const consultaForm = document.querySelector("#consulta-form");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

dropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector(".dropdown-trigger");

  if (!trigger) return;

  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = dropdown.classList.toggle("is-open");
    trigger.setAttribute("aria-expanded", String(isOpen));
  });
});

document.addEventListener("click", () => {
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("is-open");
    dropdown.querySelector(".dropdown-trigger")?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

if (consultaForm) {
  consultaForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(consultaForm);
    const nombre = String(data.get("nombre") || "").trim();
    const telefono = String(data.get("telefono") || "").trim();
    const correo = String(data.get("correo") || "").trim();
    const tipo = String(data.get("tipo") || "").trim();
    const mensaje = String(data.get("mensaje") || "").trim();

    const texto = [
      "Hola, deseo solicitar una consulta legal con FCU Legal.",
      "",
      `Nombre: ${nombre}`,
      `Teléfono: ${telefono}`,
      `Correo: ${correo || "No indicado"}`,
      `Tipo de consulta: ${tipo}`,
      `Mensaje: ${mensaje}`
    ].join("\n");

    const url = `https://wa.me/593969341483?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank", "noopener");
  });
}
