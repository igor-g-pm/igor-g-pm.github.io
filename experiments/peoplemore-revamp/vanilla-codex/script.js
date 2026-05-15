(() => {
  const toggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  if (toggle && navList) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      navList.classList.toggle("is-open");
    });
  }

  const page = document.body.dataset.page;
  if (page) {
    const active = document.querySelector(`[data-nav='${page}']`);
    if (active) {
      active.classList.add("is-active");
    }
  }

  const yearNode = document.querySelector("[data-year]");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
})();
