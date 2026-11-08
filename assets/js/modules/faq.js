import { $$, reducedMotion } from "./env.js";

// Acordeão sobre <details>: funciona sem JS, e com JS anima a altura.
export function initFaq() {
  $$(".faq-item").forEach((item) => {
    const summary = item.querySelector("summary");
    const panel = item.querySelector(".faq-answer");
    let anim = null;

    summary.addEventListener("click", (e) => {
      if (reducedMotion || !panel.animate) return;
      e.preventDefault();
      anim?.cancel();
      if (item.open) {
        const h = panel.offsetHeight;
        anim = panel.animate([{ height: `${h}px`, opacity: 1 }, { height: "0px", opacity: 0 }], {
          duration: 380, easing: "cubic-bezier(0.65, 0, 0.35, 1)",
        });
        anim.onfinish = () => { item.open = false; };
      } else {
        // fecha os outros itens do mesmo grupo
        $$(".faq-item[open]", item.parentElement).forEach((other) => {
          if (other !== item) other.querySelector("summary").click();
        });
        item.open = true;
        const h = panel.offsetHeight;
        anim = panel.animate([{ height: "0px", opacity: 0 }, { height: `${h}px`, opacity: 1 }], {
          duration: 480, easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        });
      }
    });
  });
}
