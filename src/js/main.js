// Vi no Sekai — interações leves (sem framework)

document.addEventListener("DOMContentLoaded", () => {
  // --- Filtro de categorias/tags (client-side) ---
  const filterButtons = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-category]");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const value = btn.getAttribute("data-filter");

      cards.forEach((card) => {
        const cat = card.getAttribute("data-category");
        const show = value === "all" || cat === value;
        card.style.display = show ? "" : "none";
      });

      const emptyState = document.querySelector("[data-empty-state]");
      if (emptyState) {
        const visible = Array.from(cards).some((c) => c.style.display !== "none");
        emptyState.style.display = visible ? "none" : "block";
      }
    });
  });

  // --- Fade-in ao rolar ---
  const revealEls = document.querySelectorAll(".fade-up");
  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in-view"));
  }

  // --- Netlify Identity: redireciona pro admin ao logar (usado no widget do CMS) ---
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", (user) => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
});
