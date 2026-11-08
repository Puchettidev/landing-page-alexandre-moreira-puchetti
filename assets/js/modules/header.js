import { $, $$, onScroll } from "./env.js";
import { smooth } from "./motion.js";

export function initHeader() {
  const header = $("[data-header]");
  const progress = $(".scroll-progress");
  let lastY = window.scrollY;

  onScroll(() => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress?.style.setProperty("--progress", max > 0 ? (y / max).toFixed(4) : 0);

    if (!header || document.documentElement.classList.contains("menu-open")) return;
    header.classList.toggle("is-scrolled", y > 24);
    const goingDown = y > lastY + 4;
    const goingUp = y < lastY - 4;
    if (goingDown && y > 420) header.classList.add("is-hidden");
    else if (goingUp || y < 120) header.classList.remove("is-hidden");
    lastY = y;
  });

  // destaque do link da seção atual (somente na home)
  const links = $$(".nav a[href^='/#']");
  const map = new Map();
  links.forEach((a) => {
    const id = a.getAttribute("href").slice(2);
    const section = document.getElementById(id);
    if (section) map.set(section, a);
  });
  const hero = document.getElementById("inicio");
  if (map.size && hero) map.set(hero, null);
  if (map.size) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) => l.classList.remove("is-active"));
            map.get(e.target)?.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    map.forEach((_, section) => io.observe(section));
  }
}

export function initMenu() {
  const root = document.documentElement;
  const toggle = $(".menu-toggle");
  const menu = $("#menu-mobile");
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    if (open) {
      menu.hidden = false;
      // força o layout para a transição de entrada acontecer
      void menu.offsetWidth;
    }
    root.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    $("[data-header]")?.classList.remove("is-hidden");
    if (open) {
      smooth.lenis?.stop();
      $("a", menu)?.focus({ preventScroll: true });
    } else {
      smooth.lenis?.start();
      setTimeout(() => {
        if (!root.classList.contains("menu-open")) menu.hidden = true;
      }, 700);
    }
  };

  toggle.addEventListener("click", () => setOpen(!root.classList.contains("menu-open")));
  $$("a", menu).forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && root.classList.contains("menu-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
}
