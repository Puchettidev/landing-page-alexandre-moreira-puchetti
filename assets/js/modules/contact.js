import { $, $$, reducedMotion } from "./env.js";

const WA_BASE = "https://wa.me/5532991753684";

// Formulário em 3 etapas que monta a mensagem e abre o WhatsApp.
// Nada é enviado a servidores do site.
export function initLeadForm() {
  const form = $("[data-lead-form]");
  if (!form) return;
  const steps = $$(".form-step", form);
  const current = $("[data-step-current]", form);
  const error = $("[data-form-error]", form);
  let index = 0;

  const show = (i) => {
    index = i;
    steps.forEach((s, n) => s.classList.toggle("is-active", n === i));
    current.textContent = String(i + 1);
    form.style.setProperty("--step", ((i + 1) / steps.length).toFixed(3));
    error.textContent = "";
    const focusable = $("input, textarea", steps[i]);
    focusable?.focus({ preventScroll: true });
  };

  const validate = (i) => {
    if (i === 0 && !$("input[name='area']:checked", form)) return "Escolha um assunto para continuar.";
    if (i === 1 && $("#lead-relato").value.trim().length < 10) return "Escreva um breve resumo da sua situação (pelo menos algumas palavras).";
    if (i === 2) {
      if ($("#lead-nome").value.trim().length < 2) return "Informe o seu nome.";
      if (!$("#lead-aceite").checked) return "Para continuar, confirme que leu a Política de Privacidade.";
    }
    return "";
  };

  $$("[data-next]", form).forEach((b) =>
    b.addEventListener("click", () => {
      const msg = validate(index);
      if (msg) { error.textContent = msg; return; }
      show(Math.min(index + 1, steps.length - 1));
    })
  );
  $$("[data-prev]", form).forEach((b) => b.addEventListener("click", () => show(Math.max(index - 1, 0))));

  // escolher um assunto já avança para a próxima etapa
  $$("input[name='area']", form).forEach((r) =>
    r.addEventListener("change", () => setTimeout(() => index === 0 && show(1), 220))
  );

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    for (let i = 0; i < steps.length; i++) {
      const msg = validate(i);
      if (msg) { show(i); error.textContent = msg; return; }
    }
    const area = $("input[name='area']:checked", form).value;
    const nome = $("#lead-nome").value.trim();
    const tel = $("#lead-telefone").value.trim();
    const relato = $("#lead-relato").value.trim();
    const assunto = area === "Outro assunto" ? "um assunto jurídico" : area;
    const lines = [
      `Olá, Dr. Alexandre. Meu nome é ${nome}. Gostaria de orientação sobre ${assunto}.`,
      "",
      `Resumo: ${relato}`,
    ];
    if (tel) lines.push("", `Telefone para contato: ${tel}`);
    const url = `${WA_BASE}?text=${encodeURIComponent(lines.join("\n"))}`;
    const win = window.open(url, "_blank");
    if (win) win.opener = null;
    else location.href = url;
  });

  show(0);
}

// Balão "digitando..." que se transforma na mensagem pronta.
export function initChat() {
  const bubble = $("[data-chat]");
  if (!bubble) return;
  if (reducedMotion) { bubble.classList.add("is-done"); return; }
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    io.disconnect();
    setTimeout(() => {
      bubble.classList.add("is-typing", "is-done");
      setTimeout(() => bubble.classList.remove("is-typing"), 1900);
    }, 400);
  }, { threshold: 0.5 });
  io.observe(bubble);
}

// Mapa do Google: carrega só quando a seção se aproxima.
export function initMap() {
  const map = $("[data-map]");
  if (!map) return;
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    io.disconnect();
    const iframe = document.createElement("iframe");
    iframe.title = "Mapa do escritório do Dr. Alexandre Moreira Puchetti em Muriaé";
    iframe.src = map.dataset.map;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    iframe.allowFullscreen = true;
    map.appendChild(iframe);
  }, { rootMargin: "300px 0px" });
  io.observe(map);
}

// Botão flutuante: dica após alguns segundos.
export function initWaFloat() {
  const btn = $("[data-wa-float]");
  if (!btn) return;
  let shown = false;
  try { shown = sessionStorage.getItem("amp-tip") === "1"; } catch {}
  if (shown) return;
  setTimeout(() => {
    btn.classList.add("show-tip");
    try { sessionStorage.setItem("amp-tip", "1"); } catch {}
    setTimeout(() => btn.classList.remove("show-tip"), 6000);
  }, 7000);
}
