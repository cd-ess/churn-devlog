(() => {
  const root = document.documentElement;

  // Footer year + "Updated" stamp
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const updatedEl = document.querySelector("[data-updated]");
  if (updatedEl) updatedEl.textContent = new Date().toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });

  // Theme toggle (dark HUD <-> paper mode)
  const themeBtn = document.querySelector("[data-theme-toggle]");
  const stored = localStorage.getItem("theme");
  if (stored) root.setAttribute("data-theme", stored);

  themeBtn?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "";
    const next = current === "paper" ? "" : "paper";
    if (next) root.setAttribute("data-theme", next);
    else root.removeAttribute("data-theme");
    localStorage.setItem("theme", next);
  });

  // Mobile nav toggle
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (nav) nav.dataset.open = "false";

  navToggle?.addEventListener("click", () => {
    if (!nav) return;
    nav.dataset.open = nav.dataset.open === "true" ? "false" : "true";
  });

  // Active tab highlight for hash sections
  const tabs = document.querySelectorAll(".tabs .tab");
  const setActive = () => {
    const hash = window.location.hash || "#overview";
    tabs.forEach(t => t.classList.toggle("is-active", t.getAttribute("href") === hash));
  };
  window.addEventListener("hashchange", setActive);
  setActive();
})();
