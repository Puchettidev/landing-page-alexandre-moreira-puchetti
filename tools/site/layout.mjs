import { SITE, AREAS, wa } from "./data.mjs";
import { icon, whatsappIcon, justiceLineArt } from "./icons.mjs";

export const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const FONTS =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Manrope:wght@400;500;600;700&display=swap";

export const LEGAL_NOTICE =
  "As informações deste site têm caráter exclusivamente informativo e não substituem a consulta individual com um advogado. Não há garantia de resultado em qualquer demanda, e o primeiro contato não implica contratação de serviços advocatícios.";

export const META_NOTICE =
  "Este site não é um produto Meta Platforms, Inc. ou Google LLC, tampouco oferece serviços públicos oficiais. Somos um escritório de advocacia que oferece serviços jurídicos privados, conforme a legislação vigente e o Código de Ética e Disciplina da OAB do Brasil.";

export const officeGraph = () => ({
  "@type": ["Attorney", "LegalService"],
  "@id": `${SITE.origin}/#escritorio`,
  name: SITE.office,
  url: `${SITE.origin}/`,
  image: `${SITE.origin}/assets/img/og-alexandre-moreira-puchetti.jpg`,
  logo: `${SITE.origin}/imagem/justica-symbol.svg`,
  telephone: SITE.phoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Coronel Marciano Rodrigues, 151, Loja 10 B, Centro",
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Muriaé" },
    { "@type": "AdministrativeArea", name: "Muriaé e região, Minas Gerais" },
  ],
  knowsAbout: AREAS.map((a) => a.title),
  sameAs: [SITE.instagram],
  founder: { "@id": `${SITE.origin}/#advogado` },
});

export const personGraph = () => ({
  "@type": "Person",
  "@id": `${SITE.origin}/#advogado`,
  name: SITE.name,
  jobTitle: "Advogado",
  identifier: { "@type": "PropertyValue", propertyID: "OAB/MG", value: "159.385" },
  worksFor: { "@id": `${SITE.origin}/#escritorio` },
  sameAs: [SITE.instagram],
});

export const faqGraph = (items) => ({
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

function head({ title, description, path, keywords, graph, preload = "" }) {
  const url = `${SITE.origin}${path}`;
  const ld = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2);
  return `<!DOCTYPE html>
<html lang="pt-BR" class="no-js">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="google-site-verification" content="${SITE.googleVerification}">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <meta name="keywords" content="${esc(keywords)}">
    <meta name="author" content="${SITE.name}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="theme-color" content="#08090b">
    <link rel="canonical" href="${url}">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">

    <meta property="og:type" content="website">
    <meta property="og:locale" content="pt_BR">
    <meta property="og:site_name" content="${SITE.name}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${SITE.origin}/assets/img/og-alexandre-moreira-puchetti.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Dr. Alexandre Moreira Puchetti, advogado em Muriaé, OAB/MG 159.385">
    <meta name="twitter:card" content="summary_large_image">

    <script>
        (function (d) {
            var h = d.documentElement;
            h.classList.remove("no-js");
            h.classList.add("js");
            try {
                if (!sessionStorage.getItem("amp-intro") && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
                    h.classList.add("is-preloading");
                }
            } catch (e) {}
            setTimeout(function () {
                if (!window.__siteReady) {
                    h.classList.add("reveal-all");
                    h.classList.remove("is-preloading");
                }
            }, 3000);
        })(document);
    </script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" as="style" href="${FONTS}" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="${FONTS}"></noscript>
    ${preload}
    <link rel="stylesheet" href="/assets/css/site.css">

    <script type="application/ld+json">
${ld}
    </script>
</head>`;
}

function header(message) {
  const links = [
    ["/#areas", "Áreas"],
    ["/#sobre", "Sobre"],
    ["/#atendimento", "Atendimento"],
    ["/#duvidas", "Dúvidas"],
    ["/#contato", "Contato"],
  ];
  return `
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>

    <div class="preloader" aria-hidden="true">
        ${justiceLineArt}
        <span class="preloader-name">Alexandre Moreira Puchetti</span>
    </div>

    <div class="scroll-progress" aria-hidden="true"><span></span></div>

    <header class="site-header" data-header>
        <div class="header-inner">
            <a class="brand" href="/" aria-label="Dr. Alexandre Moreira Puchetti, página inicial">
                <img src="/imagem/justica-symbol.svg" alt="" width="40" height="40">
                <span class="brand-text">
                    <strong>Alexandre Moreira Puchetti</strong>
                    <small>Advocacia · ${SITE.oab}</small>
                </span>
            </a>

            <nav class="nav" aria-label="Navegação principal">
                <ul>
                    ${links.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("\n                    ")}
                </ul>
            </nav>

            <a class="btn btn-solid btn-sm header-cta" href="${wa(message)}" target="_blank" rel="noopener" data-magnetic data-wa>
                <span>Fale com o advogado</span>
            </a>

            <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="menu-mobile">
                <span></span><span></span>
            </button>
        </div>
    </header>

    <div class="menu-mobile" id="menu-mobile" hidden>
        <nav aria-label="Menu">
            <ol>
                ${links.map(([href, label], i) => `<li><a href="${href}"><span>0${i + 1}</span>${label}</a></li>`).join("\n                ")}
            </ol>
        </nav>
        <div class="menu-mobile-foot">
            <a class="btn btn-solid" href="${wa(message)}" target="_blank" rel="noopener" data-wa>${whatsappIcon()}<span>Fale com o advogado</span></a>
            <p>${SITE.address.full}</p>
        </div>
    </div>`;
}

function footer(message) {
  return `
    <footer class="site-footer">
        <div class="footer-grid">
            <div class="footer-brand">
                <img src="/imagem/justica-symbol.svg" alt="" width="48" height="48" loading="lazy">
                <p class="footer-name">${SITE.name}</p>
                <p>${SITE.oab}<br>${SITE.experience}</p>
                <p>Atendimento online e presencial em Muriaé e região.</p>
            </div>

            <div>
                <h2 class="footer-title">Contato</h2>
                <ul class="footer-list">
                    <li><a href="${wa(message)}" target="_blank" rel="noopener" data-wa>${icon("phone", { size: 16 })}WhatsApp ${SITE.phoneDisplay}</a></li>
                    <li><a href="${SITE.instagram}" target="_blank" rel="noopener">${icon("instagram", { size: 16 })}Instagram ${SITE.instagramHandle}</a></li>
                    <li><a href="${SITE.mapsLink}" target="_blank" rel="noopener">${icon("pin", { size: 16 })}<span>${SITE.address.street}, ${SITE.address.district}<br>${SITE.address.city}/${SITE.address.region}, CEP ${SITE.address.postalCode}</span></a></li>
                </ul>
            </div>

            <div>
                <h2 class="footer-title">Áreas de atuação</h2>
                <ul class="footer-list">
                    ${AREAS.map((a) => `<li><a href="/${a.slug}">${a.title}</a></li>`).join("\n                    ")}
                </ul>
            </div>

            <div>
                <h2 class="footer-title">Institucional</h2>
                <ul class="footer-list">
                    <li><a href="/#sobre">Sobre o advogado</a></li>
                    <li><a href="/#atendimento">Como funciona o atendimento</a></li>
                    <li><a href="/#duvidas">Dúvidas frequentes</a></li>
                    <li><a href="/politica-de-privacidade">Política de privacidade</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-legal">
            <p>${LEGAL_NOTICE}</p>
            <p>${META_NOTICE}</p>
            <p class="footer-copy">© 2026 ${SITE.office}. Todos os direitos reservados.</p>
        </div>
    </footer>`;
}

function floating(message) {
  return `
    <a class="wa-float" href="${wa(message)}" target="_blank" rel="noopener" aria-label="Falar com o advogado pelo WhatsApp" data-wa-float>
        ${whatsappIcon()}
        <span class="wa-float-tip" role="status">Fale com o advogado pelo WhatsApp</span>
    </a>

    <div class="cursor" aria-hidden="true"><span></span></div>`;
}

export function page({ title, description, path, keywords, graph, body, waMessage, preload, bodyClass = "" }) {
  return `${head({ title, description, path, keywords, graph, preload })}

<body class="${bodyClass}">
${header(waMessage)}

    <main id="conteudo" tabindex="-1">
${body}
    </main>
${footer(waMessage)}
${floating(waMessage)}

    <script type="module" src="/assets/js/main.js"></script>
</body>
</html>
`;
}

// Bloco reutilizável de perguntas em <details>, legível sem JavaScript.
export function faqList(items, { light = false } = {}) {
  return `<div class="faq-list${light ? " faq-list--light" : ""}">
${items
  .map(
    (f) => `                <details class="faq-item" data-reveal>
                    <summary><span>${esc(f.q)}</span>${icon("plus", { cls: "faq-icon" })}</summary>
                    <div class="faq-answer"><p>${esc(f.a)}</p></div>
                </details>`
  )
  .join("\n")}
            </div>`;
}

// Foto responsiva com AVIF/WebP e fallback JPEG.
const PHOTO_WIDTHS = {
  hero: [[480, 480], [800, 800], [1100, 1063]],
  lateral: [[480, 480], [800, 800], [1100, 1066]],
  "corpo-inteiro": [[480, 480], [800, 800]],
  celular: [[480, 480], [800, 800], [1100, 1100]],
};
const PHOTO_RATIO = { hero: 1600 / 1063, lateral: 1600 / 1066, "corpo-inteiro": 1600 / 929, celular: 1600 / 1207 };

export function photo(name, { alt, sizes, eager = false, cls = "" }) {
  const set = (ext) => PHOTO_WIDTHS[name].map(([f, w]) => `/assets/img/${name}-${f}.${ext} ${w}w`).join(", ");
  const [fallbackFile] = PHOTO_WIDTHS[name][1];
  const w = 800;
  const h = Math.round(w * PHOTO_RATIO[name]);
  return `<picture${cls ? ` class="${cls}"` : ""}>
                        <source type="image/avif" srcset="${set("avif")}" sizes="${sizes}">
                        <source type="image/webp" srcset="${set("webp")}" sizes="${sizes}">
                        <img src="/assets/img/${name}-${fallbackFile}.jpg" srcset="${set("jpg")}" sizes="${sizes}" width="${w}" height="${h}" alt="${esc(alt)}"${eager ? ' fetchpriority="high" decoding="async"' : ' loading="lazy" decoding="async"'}>
                    </picture>`;
}

export const heroPreload = `<link rel="preload" as="image" type="image/avif" imagesrcset="/assets/img/hero-480.avif 480w, /assets/img/hero-800.avif 800w, /assets/img/hero-1100.avif 1063w" imagesizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 86vw" fetchpriority="high">`;
