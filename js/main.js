// Mobile navigation toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close" : "Menu";
  });
}

// Project filters (projects.html)
// Each project has data-tags="ml modeling clinical software"; each button has data-filter.
const filterButtons = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");
const count = document.querySelector("#project-count");

function applyFilter(value) {
  let shown = 0;
  projects.forEach((p) => {
    const tags = (p.dataset.tags || "").split(" ");
    const match = value === "all" || tags.includes(value);
    p.hidden = !match;
    if (match) shown++;
  });
  filterButtons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === value)));
  if (count) count.textContent = `Showing ${shown} of ${projects.length} projects`;
}

filterButtons.forEach((b) => b.addEventListener("click", () => applyFilter(b.dataset.filter)));
if (filterButtons.length) applyFilter("all");

// Current year in the footer
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
