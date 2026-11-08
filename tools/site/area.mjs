import { SITE, AREAS, wa, areaMessage } from "./data.mjs";
import { icon, whatsappIcon } from "./icons.mjs";
import { page, faqList, officeGraph, personGraph, faqGraph, LEGAL_NOTICE } from "./layout.mjs";

export function areaPage(a) {
  const msg = areaMessage(a.title);
  const others = AREAS.filter((o) => o.slug !== a.slug);
  const url = `${SITE.origin}/${a.slug}`;

  const body = `
        <section class="area-hero" aria-labelledby="area-title">
            <div class="container">
                <nav class="breadcrumb" aria-label="Você está em">
                    <ol>
                        <li><a href="/">Início</a></li>
                        <li><a href="/#areas">Áreas de atuação</a></li>
                        <li aria-current="page">${a.title}</li>
                    </ol>
                </nav>
                <div class="area-hero-grid">
                    <div>
                        <p class="eyebrow" data-hero-item>Área ${a.num} · Muriaé e região</p>
                        <h1 id="area-title" class="area-hero-title" data-split>${a.title}</h1>
                        <p class="hero-lead" data-hero-item>${a.lead}</p>
                        <div class="hero-actions" data-hero-item>
                            <a class="btn btn-solid" href="${wa(msg)}" target="_blank" rel="noopener" data-magnetic>${whatsappIcon()}<span>Fale com o advogado</span></a>
                            <a class="btn btn-ghost" href="#temas" data-magnetic><span>Ver os temas</span></a>
                        </div>
                    </div>
                    <div class="area-hero-mark" aria-hidden="true">
                        <span class="area-hero-num">${a.num}</span>
                        ${icon(a.icon, { cls: "icon area-hero-icon draw", size: 140, stroke: 0.9 })}
                    </div>
                </div>
            </div>
        </section>

        <section class="section section--light" id="temas" aria-labelledby="temas-title">
            <div class="container area-intro-grid">
                <div>
                    <p class="eyebrow" data-reveal>Visão geral</p>
                    <h2 id="temas-title" data-split>O que esta área abrange</h2>
                </div>
                <div class="prose">
                    ${a.intro.map((p) => `<p data-reveal>${p}</p>`).join("\n                    ")}
                </div>
            </div>
            <div class="container">
                <ol class="topic-list">
${a.topics
  .map(
    (t, i) => `                    <li class="topic" data-reveal>
                        <span class="topic-num">${String(i + 1).padStart(2, "0")}</span>
                        <h3>${t.t}</h3>
                        <p>${t.d}</p>
                    </li>`
  )
  .join("\n")}
                </ol>
            </div>
        </section>

        <section class="section section--dark" aria-labelledby="docs-title">
            <div class="container docs-grid">
                <div>
                    <p class="eyebrow" data-reveal>Antes do atendimento</p>
                    <h2 id="docs-title" data-split>Documentos que costumam ser úteis</h2>
                    <p data-reveal>A lista é apenas uma referência geral. Não é preciso ter todos os documentos para entrar em contato: o advogado indica o que é necessário em cada caso.</p>
                </div>
                <ul class="docs-list">
                    ${a.docs.map((d) => `<li data-reveal>${icon("check", { size: 20 })}<span>${d}</span></li>`).join("\n                    ")}
                </ul>
            </div>
        </section>

        <section class="section section--light" aria-labelledby="area-faq-title">
            <div class="container faq-grid">
                <div class="faq-intro">
                    <p class="eyebrow" data-reveal>Dúvidas frequentes</p>
                    <h2 id="area-faq-title" data-split>Perguntas sobre ${a.title}</h2>
                    <p data-reveal>Respostas gerais e informativas. A orientação para o seu caso depende da análise individual dos fatos e documentos.</p>
                </div>
                ${faqList(a.faq, { light: true })}
            </div>
        </section>

        <section class="section section--dark cta-band" aria-labelledby="cta-title">
            <div class="container cta-band-inner">
                <h2 id="cta-title" data-split>Quer conversar sobre ${a.title}?</h2>
                <p data-reveal>Envie uma mensagem pelo WhatsApp. Ela já chega com o assunto identificado, e você pode completar com um breve resumo da sua situação.</p>
                <a class="btn btn-solid btn-lg" href="${wa(msg)}" target="_blank" rel="noopener" data-magnetic data-reveal>${whatsappIcon()}<span>Fale com o advogado</span></a>
                <p class="cta-note" data-reveal>${LEGAL_NOTICE}</p>
            </div>
        </section>

        <section class="section section--light other-areas" aria-labelledby="others-title">
            <div class="container">
                <h2 id="others-title" class="other-areas-title" data-reveal>Outras áreas de atuação</h2>
                <ul class="other-areas-list">
${others
  .map(
    (o) => `                    <li data-reveal><a href="/${o.slug}"><span class="other-num">${o.num}</span>${icon(o.icon, { size: 28, stroke: 1.25 })}<span class="other-title">${o.title}</span>${icon("arrow", { size: 18, cls: "icon other-arrow" })}</a></li>`
  )
  .join("\n")}
                </ul>
            </div>
        </section>`;

  return page({
    title: a.metaTitle,
    description: a.metaDescription,
    keywords: `${a.title}, advogado em Muriaé, ${a.tags.join(", ")}, Alexandre Moreira Puchetti, OAB/MG 159.385`,
    path: `/${a.slug}`,
    waMessage: msg,
    bodyClass: "page-area",
    graph: [
      officeGraph(),
      personGraph(),
      {
        "@type": "WebPage",
        "@id": `${url}#pagina`,
        url,
        name: a.metaTitle,
        description: a.metaDescription,
        inLanguage: "pt-BR",
        about: { "@type": "Thing", name: a.title },
        provider: { "@id": `${SITE.origin}/#escritorio` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: `${SITE.origin}/` },
          { "@type": "ListItem", position: 2, name: "Áreas de atuação", item: `${SITE.origin}/#areas` },
          { "@type": "ListItem", position: 3, name: a.title, item: url },
        ],
      },
      faqGraph(a.faq),
    ],
    body,
  });
}
