import { $, $$, finePointer, reducedMotion } from "./env.js";

const enhanced = finePointer && !reducedMotion;

export function initCursor() {
  if (!enhanced) return;
  const cursor = $(".cursor");
  if (!cursor) return;
  document.documentElement.classList.add("has-cursor");
  let x = -100, y = -100, cx = x, cy = y;
  window.addEventListener("pointermove", (e) => {
    x = e.clientX;
    y = e.clientY;
    cursor.classList.remove("is-hidden");
  }, { passive: true });
  document.addEventListener("pointerleave", () => cursor.classList.add("is-hidden"));
  document.addEventListener("pointerover", (e) => {
    const hit = e.target.closest("a, button, summary, label, input, textarea, picture, [data-tilt]");
    cursor.classList.toggle("is-hover", Boolean(hit));
  });
  const loop = () => {
    cx += (x - cx) * 0.22;
    cy += (y - cy) * 0.22;
    cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    requestAnimationFrame(loop);
  };
  loop();
}

export function initMagnetic() {
  if (!enhanced) return;
  $$("[data-magnetic]").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${dx * 0.18}px, ${dy * 0.28}px)`;
    });
    el.addEventListener("pointerleave", () => {
      el.style.transform = "";
    });
  });
}

export function initTilt() {
  $$("[data-tilt]").forEach((card) => {
    if (enhanced) {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.style.setProperty("--mx", `${px * 100}%`);
        card.style.setProperty("--my", `${py * 100}%`);
        card.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 5}deg) rotateY(${(px - 0.5) * 6}deg)`;
      });
      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
      });
    }

    // toque: o botão "Ver temas" expande o card
    const toggle = $(".area-toggle", card);
    toggle?.addEventListener("click", () => {
      const open = !card.classList.contains("is-open");
      card.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      $("span", toggle).textContent = open ? "Ocultar temas" : "Ver temas";
    });
  });
}
