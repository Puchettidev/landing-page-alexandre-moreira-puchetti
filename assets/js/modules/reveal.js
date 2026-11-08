import { $$, reducedMotion } from "./env.js";

// Divide títulos em palavras para a revelação com máscara.
function splitWords(el) {
  let i = 0;
  const walk = (node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const parts = child.textContent.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(" "));
          } else {
            const w = document.createElement("span");
            w.className = "w";
            const inner = document.createElement("span");
            inner.style.setProperty("--i", i++);
            inner.textContent = part;
            w.appendChild(inner);
            frag.appendChild(w);
          }
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        walk(child);
      }
    });
  };
  // leitores de tela continuam lendo a frase inteira
  el.setAttribute("aria-label", el.textContent.trim().replace(/\s+/g, " "));
  walk(el);
  $$(".w", el).forEach((w) => w.setAttribute("aria-hidden", "true"));
}

export function initReveal() {
  if (!reducedMotion) $$("[data-split]").forEach(splitWords);

  // atraso escalonado para elementos irmãos que entram juntos
  const groups = new Map();
  $$("[data-reveal]").forEach((el) => {
    const parent = el.parentElement;
    const n = groups.get(parent) || 0;
    groups.set(parent, n + 1);
    el.style.setProperty("--delay", `${Math.min(n * 0.08, 0.4)}s`);
  });

  const targets = $$("[data-reveal], [data-split], [data-curtain], .draw, .area-card").filter(
    (el) => !el.closest(".hero, .area-hero") || el.matches(".draw")
  );

  // elementos com clip-path (cortina) são observados pelo pai, pois o recorte
  // total impede que o próprio elemento seja detectado como visível
  const owner = new Map();
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          (owner.get(e.target) || [e.target]).forEach((el) => el.classList.add("is-in"));
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );
  targets.forEach((el) => {
    const watch = el.matches("[data-curtain]") ? el.parentElement : el;
    if (!owner.has(watch)) owner.set(watch, []);
    owner.get(watch).push(el);
    io.observe(watch);
  });
}

// Entrada do hero, chamada após o pré-loader.
export function playHero() {
  const items = $$(".hero [data-hero-item], .area-hero [data-hero-item]");
  $$(".hero [data-split], .area-hero [data-split], .hero [data-curtain]").forEach((el) => el.classList.add("is-in"));
  items.forEach((el, i) => {
    el.style.setProperty("--delay", `${0.25 + i * 0.09}s`);
    el.classList.add("is-in");
  });
}
