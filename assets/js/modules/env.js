export const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
export const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
export const isDesktop = () => window.innerWidth >= 1024;
export const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// Um único laço de rolagem compartilhado por todos os efeitos.
const scrollHandlers = new Set();
let ticking = false;
export function onScroll(fn) {
  scrollHandlers.add(fn);
  fn();
}
function run() {
  ticking = false;
  scrollHandlers.forEach((fn) => fn());
}
export function requestScrollFrame() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(run);
  }
}
window.addEventListener("scroll", requestScrollFrame, { passive: true });
window.addEventListener("resize", requestScrollFrame, { passive: true });
