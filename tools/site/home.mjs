import { SITE, AREAS, HOME_FAQ, STEPS, wa, areaMessage } from "./data.mjs";
import { icon, whatsappIcon } from "./icons.mjs";
import { page, faqList, photo, esc, officeGraph, personGraph, faqGraph, heroPreload } from "./layout.mjs";

const areaCard = (a) => `
                <article class="area-card" data-tilt data-reveal>
                    <span class="area-glow" aria-hidden="true"></span>
                    <div class="area-head">
                        <span class="area-num" aria-hidden="true">${a.num}</span>
                        ${icon(a.icon, { cls: "icon area-icon", size: 40, stroke: 1.25 })}
                    </div>
                    <h3 class="area-title"><a href="/${a.slug}">${a.title}</a></h3>
                    <div class="area-body">
                        <p class="area-summary">${a.summary}</p>
                        <div class="area-more" id="temas-${a.num}">
                            <ul class="area-tags" aria-label="Temas de ${a.title}">
                                ${a.tags.map((t) => `<li>${t}</li>`).join("")}
                            </ul>
                        </div>
                    </div>
                    <div class="area-foot">
                        <a class="area-cta" href="/${a.slug}">Saiba mais <span class="visually-hidden">sobre ${a.title}</span>${icon("arrow", { size: 18 })}</a>
                        <button class="area-toggle" type="button" aria-expanded="false" aria-controls="temas-${a.num}">
                            <span>Ver temas</span>${icon("plus", { size: 18 })}
                        </button>
                    </div>
                </article>`;

const body = `
        <section class="hero" id="inicio" aria-labelledby="hero-title">
            <div class="container hero-grid">
                <div class="hero-copy">
                    <p class="eyebrow" data-hero-item>Advogado em Muriaé e região</p>
                    <h1 class="hero-title" id="hero-title" data-split>Orientação jurídica clara para <em>decisões importantes.</em></h1>
                    <p class="hero-lead" data-hero-item>
                        Atendimento direto com o Dr. Alexandre Moreira Puchetti, ${SITE.oab}. Você conversa com o próprio advogado e entende, com clareza, quais são os próximos passos.
                    </p>
                    <div class="hero-actions" data-hero-item>
                        <a class="btn btn-solid" href="${wa()}" target="_blank" rel="noopener" data-magnetic data-wa>${whatsappIcon()}<span>Fale com o advogado</span></a>
                        <a class="btn btn-ghost" href="#areas" data-magnetic><span>Conheça as áreas</span></a>
                    </div>
                    <ul class="hero-badges" aria-label="Formas de atendimento">
                        <li data-hero-item>${icon("monitor", { size: 18 })}Online</li>
                        <li data-hero-item>${icon("building", { size: 18 })}Presencial</li>
                        <li data-hero-item>${icon("pin", { size: 18 })}Muriaé e região</li>
                    </ul>
                </div>

                <div class="hero-media">
                    <div class="hero-photo" data-curtain>
                        <div class="hero-photo-inner" data-parallax="0.12">
                    ${photo("hero", {
                      alt: "Dr. Alexandre Moreira Puchetti em pose institucional, de terno escuro e gravata vermelha.",
                      sizes: "(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 86vw",
                      eager: true,
                    })}
                        </div>
                    </div>
                    <div class="hero-card" data-hero-item>
                        <span class="hero-card-label">Advogado</span>
                        <strong>Dr. Alexandre Moreira Puchetti</strong>
                        <span>${SITE.oab}</span>
                    </div>
                </div>
            </div>

            <a class="scroll-cue" href="#experiencia" aria-label="Rolar para a próxima seção">
                <span>Role</span><i aria-hidden="true"></i>
            </a>
        </section>

        <div class="marquee" aria-hidden="true">
            <div class="marquee-track">
                ${[0, 1]
                  .map(() => `<ul>${AREAS.map((a) => `<li>${a.title}</li>`).join("")}</ul>`)
                  .join("")}
            </div>
        </div>

        <section class="section section--light experience" id="experiencia" aria-labelledby="exp-title">
            <div class="container experience-grid">
                <div class="experience-number" data-reveal>
                    <p class="big-number" aria-hidden="true">+<span data-count="10">10</span></p>
                    <p class="big-number-label">anos de experiência na advocacia</p>
                </div>
                <div class="experience-copy">
                    <p class="eyebrow" data-reveal>Experiência</p>
                    <h2 id="exp-title" data-split>Mais de 10 anos de experiência, com atendimento próximo e direto.</h2>
                    <p data-reveal>Atuação em Muriaé e região com análise cuidadosa de cada situação e linguagem acessível, para que você compreenda o seu caso e as alternativas disponíveis.</p>
                    <ul class="principles">
                        <li data-reveal><span>01</span>Atendimento direto com o advogado</li>
                        <li data-reveal><span>02</span>Online e presencial</li>
                        <li data-reveal><span>03</span>Comunicação clara em cada etapa</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="section section--dark areas" id="areas" aria-labelledby="areas-title">
            <div class="container">
                <div class="section-head">
                    <p class="eyebrow" data-reveal>Áreas de atuação</p>
                    <h2 id="areas-title" data-split>Sete frentes de atuação, um mesmo cuidado com cada caso.</h2>
                    <p data-reveal>Conheça os temas de cada área. Em cada página você encontra explicações gerais, documentos que costumam ser úteis e respostas para dúvidas comuns.</p>
                </div>
                <p class="swipe-hint" aria-hidden="true">Deslize para ver todas ${icon("arrow", { size: 16 })}</p>
            </div>
            <div class="container areas-grid-wrap">
                <div class="areas-grid">
${AREAS.map(areaCard).join("\n")}
                    <article class="area-card area-card--cta" data-reveal>
                        <h3 class="area-title">Não encontrou a sua situação?</h3>
                        <p>Envie uma mensagem contando brevemente o que aconteceu. O advogado indica se e como pode orientar você.</p>
                        <a class="btn btn-light" href="${wa()}" target="_blank" rel="noopener" data-magnetic data-wa>${whatsappIcon()}<span>Fale com o advogado</span></a>
                    </article>
                </div>
            </div>
        </section>

        <section class="section section--light about" id="sobre" aria-labelledby="about-title">
            <div class="container about-grid">
                <div class="about-media" aria-hidden="false">
                    <div class="about-frame" data-curtain>
                        <div class="about-photo is-active" data-about-photo="0">
                    ${photo("lateral", {
                      alt: "Retrato lateral do Dr. Alexandre Moreira Puchetti, de terno escuro e gravata vermelha.",
                      sizes: "(min-width: 1024px) 40vw, 90vw",
                    })}
                        </div>
                        <div class="about-photo" data-about-photo="1">
                    ${photo("corpo-inteiro", {
                      alt: "Dr. Alexandre Moreira Puchetti em foto de corpo inteiro, de terno escuro e gravata vermelha.",
                      sizes: "(min-width: 1024px) 40vw, 90vw",
                    })}
                        </div>
                    </div>
                    <p class="about-caption">${SITE.name} · ${SITE.oab}</p>
                </div>

                <div class="about-copy">
                    <div class="about-intro">
                        <p class="eyebrow" data-reveal>Sobre o advogado</p>
                        <h2 id="about-title" data-split>Atendimento técnico e comunicação clara.</h2>
                    </div>
                    <div class="about-block" data-about-step="0">
                        <span class="about-index">01</span>
                        <h3 data-reveal>Quem é</h3>
                        <p data-reveal>O Dr. Alexandre Moreira Puchetti é advogado inscrito na Ordem dos Advogados do Brasil, Seção de Minas Gerais, sob o nº 159.385, com mais de 10 anos de experiência. Atua em Muriaé e região.</p>
                    </div>
                    <div class="about-block" data-about-step="1">
                        <span class="about-index">02</span>
                        <h3 data-reveal>Como atua</h3>
                        <p data-reveal>Cada caso é analisado com atenção aos fatos, aos documentos e aos prazos. O cliente recebe uma explicação objetiva sobre as alternativas possíveis e os próximos passos, sem termos difíceis.</p>
                    </div>
                    <div class="about-block" data-about-step="0">
                        <span class="about-index">03</span>
                        <h3 data-reveal>Onde atende</h3>
                        <p data-reveal>O atendimento é feito diretamente pelo advogado, online pelo WhatsApp ou presencialmente no escritório, no Centro de Muriaé.</p>
                        <a class="text-link" href="#contato" data-reveal>Ver endereço e contato ${icon("arrow", { size: 18 })}</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section--dark process" id="atendimento" aria-labelledby="process-title">
            <div class="container">
                <div class="section-head section-head--center">
                    <p class="eyebrow" data-reveal>Como funciona o atendimento</p>
                    <h2 id="process-title" data-split>Do primeiro contato à orientação, em quatro etapas.</h2>
                </div>
                <ol class="timeline" data-timeline>
                    <li class="timeline-line" aria-hidden="true"><span></span></li>
${STEPS.map(
  (s, i) => `                    <li class="timeline-step" data-reveal>
                        <span class="timeline-dot" aria-hidden="true">0${i + 1}</span>
                        <h3>${s.t}</h3>
                        <p>${s.d}</p>
                    </li>`
).join("\n")}
                </ol>
            </div>
        </section>

        <section class="section section--light faq" id="duvidas" aria-labelledby="faq-title">
            <div class="container faq-grid">
                <div class="faq-intro">
                    <p class="eyebrow" data-reveal>Dúvidas frequentes</p>
                    <h2 id="faq-title" data-split>Perguntas comuns antes do primeiro contato.</h2>
                    <p data-reveal>Se a sua dúvida não estiver aqui, envie uma mensagem. O primeiro contato serve justamente para entender a sua situação.</p>
                    <a class="btn btn-wine" href="${wa()}" target="_blank" rel="noopener" data-magnetic data-wa data-reveal>${whatsappIcon()}<span>Enviar uma dúvida</span></a>
                </div>
                ${faqList(HOME_FAQ, { light: true })}
            </div>
        </section>

        <section class="section section--dark contact" id="contato" aria-labelledby="contact-title">
            <div class="container">
                <div class="section-head">
                    <p class="eyebrow" data-reveal>Contato</p>
                    <h2 id="contact-title" data-split>Conte o que aconteceu. A mensagem já chega pronta no WhatsApp.</h2>
                </div>

                <div class="contact-grid">
                    <div class="contact-visual" data-reveal>
                        <div class="contact-photo" data-float>
                    ${photo("celular", {
                      alt: "Dr. Alexandre Moreira Puchetti usando o celular, representando o atendimento online pelo WhatsApp.",
                      sizes: "(min-width: 1024px) 34vw, 90vw",
                    })}
                        </div>
                        <div class="chat-bubble" data-chat aria-hidden="true">
                            <span class="chat-typing"><i></i><i></i><i></i></span>
                            <span class="chat-text">${SITE.defaultMessage}</span>
                        </div>
                    </div>

                    <div class="contact-form-wrap" data-reveal>
                        <form class="lead-form" data-lead-form action="${SITE.whatsappBase}" method="get" target="_blank" novalidate>
                            <div class="form-progress" aria-hidden="true">
                                <span>Etapa <b data-step-current>1</b> de 3</span>
                                <span class="form-bar"><i></i></span>
                            </div>

                            <fieldset class="form-step is-active" data-step="1">
                                <legend>Sobre qual assunto você precisa de orientação?</legend>
                                <div class="choice-grid">
${AREAS.map(
  (a, i) => `                                    <label class="choice"><input type="radio" name="area" value="${esc(a.title)}"${i === 0 ? " required" : ""}><span>${a.title}</span></label>`
).join("\n")}
                                    <label class="choice"><input type="radio" name="area" value="Outro assunto"><span>Outro assunto</span></label>
                                </div>
                                <div class="form-nav">
                                    <button class="btn btn-solid" type="button" data-next><span>Continuar</span>${icon("arrow", { size: 18 })}</button>
                                </div>
                            </fieldset>

                            <fieldset class="form-step" data-step="2">
                                <legend>Conte brevemente a sua situação</legend>
                                <label class="field">
                                    <span>Resumo do caso</span>
                                    <textarea id="lead-relato" rows="5" maxlength="600" placeholder="Ex.: o plano de saúde negou um procedimento indicado pelo médico."></textarea>
                                </label>
                                <p class="form-hint">Não envie dados sensíveis neste primeiro contato, como detalhes do seu estado de saúde, números de documentos ou senhas. Um resumo geral já é suficiente.</p>
                                <div class="form-nav">
                                    <button class="btn btn-ghost" type="button" data-prev>Voltar</button>
                                    <button class="btn btn-solid" type="button" data-next><span>Continuar</span>${icon("arrow", { size: 18 })}</button>
                                </div>
                            </fieldset>

                            <fieldset class="form-step" data-step="3">
                                <legend>Como podemos chamar você?</legend>
                                <label class="field">
                                    <span>Nome</span>
                                    <input id="lead-nome" type="text" autocomplete="name" maxlength="80" required>
                                </label>
                                <label class="field">
                                    <span>Telefone <small>(opcional)</small></span>
                                    <input id="lead-telefone" type="tel" autocomplete="tel" inputmode="tel" maxlength="20" placeholder="(32) 00000-0000">
                                </label>
                                <label class="check">
                                    <input id="lead-aceite" type="checkbox" required>
                                    <span>Li a <a href="/politica-de-privacidade" target="_blank">Política de Privacidade</a> e entendo que este contato não implica contratação.</span>
                                </label>
                                <div class="form-nav">
                                    <button class="btn btn-ghost" type="button" data-prev>Voltar</button>
                                    <button class="btn btn-solid" type="submit">${whatsappIcon()}<span>Abrir no WhatsApp</span></button>
                                </div>
                            </fieldset>

                            <p class="form-error" data-form-error role="alert"></p>
                            <p class="form-note">Os dados digitados não ficam armazenados neste site. Ao concluir, o WhatsApp abre com a mensagem pronta para você revisar antes de enviar.</p>
                        </form>
                        <noscript><p class="form-note">Para montar a mensagem automaticamente, ative o JavaScript. Você também pode falar direto pelo <a href="${wa()}">WhatsApp ${SITE.phoneDisplay}</a>.</p></noscript>
                    </div>
                </div>

                <div class="location" id="localizacao">
                    <div class="location-copy" data-reveal>
                        <h3>Escritório em Muriaé</h3>
                        <address>${SITE.address.street}<br>${SITE.address.district}, ${SITE.address.city}/${SITE.address.region}<br>CEP ${SITE.address.postalCode}</address>
                        <ul class="location-links">
                            <li><a href="${SITE.mapsLink}" target="_blank" rel="noopener">${icon("pin", { size: 18 })}Como chegar</a></li>
                            <li><a href="${wa()}" target="_blank" rel="noopener" data-wa>${icon("phone", { size: 18 })}WhatsApp ${SITE.phoneDisplay}</a></li>
                            <li><a href="${SITE.instagram}" target="_blank" rel="noopener">${icon("instagram", { size: 18 })}${SITE.instagramHandle}</a></li>
                        </ul>
                    </div>
                    <div class="map" data-map="${SITE.mapsEmbed}" data-reveal>
                        <a class="map-fallback" href="${SITE.mapsLink}" target="_blank" rel="noopener">${icon("pin", { size: 22 })}<span>Abrir o mapa no Google Maps</span></a>
                    </div>
                </div>
            </div>
        </section>`;

export function home() {
  return page({
    title: "Advogado em Muriaé e Região | Dr. Alexandre Moreira Puchetti",
    description:
      "Dr. Alexandre Moreira Puchetti, OAB/MG 159.385, advogado em Muriaé/MG. Atendimento online e presencial em Direito à Saúde, Consumidor, Família, Bancário, Civil, Sucessões, Usucapião e Previdenciário.",
    keywords:
      "advogado em Muriaé, advogado Muriaé MG, Alexandre Moreira Puchetti, OAB/MG 159.385, direito à saúde, plano de saúde, direito do consumidor, direito de família, divórcio, pensão alimentícia, direito bancário, RMC, RCC, direito civil, inventário, usucapião, direito previdenciário, INSS, aposentadoria, LOAS",
    path: "/",
    preload: heroPreload,
    bodyClass: "page-home",
    graph: [
      officeGraph(),
      personGraph(),
      { "@type": "WebSite", "@id": `${SITE.origin}/#site`, url: `${SITE.origin}/`, name: SITE.name, inLanguage: "pt-BR" },
      faqGraph(HOME_FAQ),
    ],
    body,
  });
}

export { areaMessage };
