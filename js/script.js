document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-toggle");
  const menu = document.getElementById("menu");
  const header = document.querySelector(".header");

  btn?.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    menu.classList.toggle("open", !open);
  });
  menu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
    menu.classList.remove("open");
    btn?.setAttribute("aria-expanded", "false");
  }));

  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
