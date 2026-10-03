import "./style.css";

const year = document.querySelector<HTMLSpanElement>("#year");
if (year) year.textContent = String(new Date().getFullYear());

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (!reducedMotion.matches && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.remove("reveal-pending");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.08 },
  );

  document.querySelectorAll<HTMLElement>(".reveal").forEach((element) => {
    if (element.getBoundingClientRect().top > window.innerHeight) {
      element.classList.add("reveal-pending");
      observer.observe(element);
    }
  });

  reducedMotion.addEventListener("change", () => {
    if (reducedMotion.matches) {
      observer.disconnect();
      document
        .querySelectorAll(".reveal-pending")
        .forEach((element) => element.classList.remove("reveal-pending"));
    }
  });
}
