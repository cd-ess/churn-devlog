(() => {
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const updatedEl = document.querySelector("[data-updated]");
  if (updatedEl) {
    updatedEl.textContent = new Date().toLocaleDateString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  }
})();
