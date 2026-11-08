import { $, reducedMotion } from "./modules/env.js";
import { initHeader, initMenu } from "./modules/header.js";
import { initReveal, playHero } from "./modules/reveal.js";
import {
  initSmoothScroll, initAnchors, initParallax, initCounter, initTimeline, initAbout, initMarquee,
} from "./modules/motion.js";
import { initCursor, initMagnetic, initTilt } from "./modules/interactions.js";
import { initFaq } from "./modules/faq.js";
import { initLeadForm, initChat, initMap, initWaFloat } from "./modules/contact.js";

window.__siteReady = true;
const root = document.documentElement;

function safe(fn, ...args) {
  try { return fn(...args); } catch (err) { console.warn(err); return null; }
}

function finishPreloader() {
  const pre = $(".preloader");
  if (!root.classList.contains("is-preloading") || !pre) {
    playHero();
    return;
  }
  try { sessionStorage.setItem("amp-intro", "1"); } catch {}
  // no máximo ~1s de pré-loader
  setTimeout(() => {
    pre.classList.add("is-leaving");
    root.classList.remove("is-preloading");
    playHero();
    pre.addEventListener("animationend", () => pre.remove(), { once: true });
  }, 950);
}

safe(initReveal);
safe(initSmoothScroll);
safe(initAnchors);
safe(initHeader);
safe(initMenu);
safe(initParallax);
safe(initCounter);
safe(initTimeline);
safe(initAbout);
safe(initMarquee);
safe(initCursor);
safe(initMagnetic);
safe(initTilt);
safe(initFaq);
safe(initLeadForm);
safe(initChat);
safe(initMap);
safe(initWaFloat);
finishPreloader();

if (reducedMotion) root.classList.add("reduced-motion");
