import { $, $$, clamp, onScroll, reducedMotion, requestScrollFrame, isDesktop } from "./env.js";

const HEADER_OFFSET = -80;

// Referência compartilhada: o Lenis chega depois, sem atrasar o resto da página.
export const smooth = { lenis: null };
const LENIS_SRC = "https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js";

export function initSmoothScroll() {
  if (reducedMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const start = () => {
    if (typeof window.Lenis !== "function") return;
    const lenis = new window.Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 0.95 });
    lenis.on("scroll", requestScrollFrame);
    const raf = (t) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    smooth.lenis = lenis;
  };
  const s = document.createElement("script");
  s.src = LENIS_SRC;
  s.async = true;
  s.onload = start;
  document.head.appendChild(s);
}

// Âncoras internas (inclusive "/#secao" estando na home) com rolagem suave.
export function initAnchors() {
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href*='#']");
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
    const url = new URL(a.href, location.href);
    if (url.pathname !== location.pathname || !url.hash) return;
    const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) return;
    e.preventDefault();
    if (smooth.lenis) smooth.lenis.scrollTo(target, { offset: HEADER_OFFSET });
    else target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    history.pushState(null, "", url.hash);
    // move o foco para acessibilidade de teclado
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  });
}

export function initParallax() {
  if (reducedMotion) return;
  const items = $$("[data-parallax]");
  if (!items.length) return;
  onScroll(() => {
    const vh = window.innerHeight;
    items.forEach((el) => {
      const rect = el.parentElement.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh) return;
      const speed = parseFloat(el.dataset.parallax) || 0.1;
      const offset = (rect.top + rect.height / 2 - vh / 2) * -speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    });
  });
}

export function initCounter() {
  const el = $("[data-count]");
  if (!el || reducedMotion) return;
  const target = Number(el.dataset.count);
  el.textContent = "0";
  const io = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1600;
      const tick = (now) => {
        const p = clamp((now - start) / dur);
        el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 4))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    },
    { threshold: 0.6 }
  );
  io.observe(el);
}

export function initTimeline() {
  const tl = $("[data-timeline]");
  if (!tl) return;
  const line = $(".timeline-line", tl);
  const steps = $$(".timeline-step", tl);
  if (reducedMotion) {
    tl.style.setProperty("--line", 1);
    steps.forEach((s) => s.classList.add("is-reached"));
    return;
  }
  onScroll(() => {
    const rect = tl.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = clamp((vh * 0.75 - rect.top) / (rect.height * 0.9 || 1));
    tl.style.setProperty("--line", p.toFixed(3));
    const horizontal = isDesktop();
    const lineRect = line.getBoundingClientRect();
    steps.forEach((s) => {
      const dot = $(".timeline-dot", s).getBoundingClientRect();
      const along = horizontal
        ? (dot.left + dot.width / 2 - lineRect.left) / lineRect.width
        : (dot.top + dot.height / 2 - lineRect.top) / lineRect.height;
      s.classList.toggle("is-reached", p >= along - 0.01);
    });
  });
}

// Seção "Sobre": a foto troca conforme o bloco de texto em foco.
export function initAbout() {
  const blocks = $$("[data-about-step]");
  const photos = $$("[data-about-photo]");
  if (!blocks.length) return;
  blocks[0].classList.add("is-current");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        blocks.forEach((b) => b.classList.toggle("is-current", b === e.target));
        const idx = e.target.dataset.aboutStep;
        photos.forEach((p) => p.classList.toggle("is-active", p.dataset.aboutPhoto === idx));
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );
  blocks.forEach((b) => io.observe(b));
}

// Faixa de áreas: desacelera ao passar o mouse.
export function initMarquee() {
  const track = $(".marquee-track");
  if (!track || reducedMotion || !track.getAnimations) return;
  const anim = () => track.getAnimations()[0];
  let current = 1;
  let target = 1;
  let raf = 0;
  const ease = () => {
    current += (target - current) * 0.08;
    const a = anim();
    if (a) a.playbackRate = current;
    if (Math.abs(target - current) > 0.01) raf = requestAnimationFrame(ease);
  };
  const set = (v) => {
    target = v;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(ease);
  };
  track.parentElement.addEventListener("pointerenter", () => set(0.2));
  track.parentElement.addEventListener("pointerleave", () => set(1));
}
