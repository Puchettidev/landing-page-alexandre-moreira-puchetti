import { SITE, wa } from "./data.mjs";
import { page, officeGraph, personGraph } from "./layout.mjs";

export function privacyPage() {
  const url = `${SITE.origin}/politica-de-privacidade`;
  const body = `
        <section class="area-hero area-hero--compact" aria-labelledby="privacy-title">
            <div class="container">
                <nav class="breadcrumb" aria-label="Você está em">
                    <ol>
                        <li><a href="/">Início</a></li>
                        <li aria-current="page">Política de Privacidade</li>
                    </ol>
                </nav>
                <p class="eyebrow" data-hero-item>LGPD · Lei nº 13.709/2018</p>
                <h1 id="privacy-title" class="area-hero-title" data-split>Política de Privacidade</h1>
                <p class="hero-lead" data-hero-item>Como as informações são tratadas quando você visita este site ou entra em contato com o escritório.</p>
            </div>
        </section>

        <section class="section section--light">
            <div class="container prose prose--legal">
                <p><strong>Última atualização:</strong> novembro de 2026.</p>

                <h2>1. Quem é o responsável</h2>
                <p>Este site pertence ao ${SITE.office}, ${SITE.name}, ${SITE.oab}, com endereço na ${SITE.address.full}. Para assuntos relacionados a esta política e aos seus dados pessoais, o contato pode ser feito pelo <a href="${wa("Olá, Dr. Alexandre. Tenho uma dúvida sobre a Política de Privacidade do site.")}" target="_blank" rel="noopener">WhatsApp ${SITE.phoneDisplay}</a>.</p>

                <h2>2. Quais dados podem ser tratados</h2>
                <p><strong>Formulário de contato.</strong> O formulário deste site não envia nem armazena dados em servidores do escritório. As informações digitadas (assunto, resumo, nome e, se você quiser, telefone) são usadas apenas no seu próprio navegador para montar uma mensagem, que é aberta no WhatsApp para você revisar e decidir se envia.</p>
                <p><strong>Mensagens enviadas.</strong> Se você enviar a mensagem, ela passa a ser tratada pelo escritório para responder ao seu contato e, se houver contratação, para a prestação dos serviços jurídicos. O uso do WhatsApp está sujeito também às políticas da própria plataforma.</p>
                <p><strong>Dados técnicos de navegação.</strong> Como em qualquer site, o provedor de hospedagem pode registrar dados técnicos de acesso, como endereço IP, data e hora, navegador e páginas visitadas, para fins de segurança e funcionamento.</p>

                <h2>3. Dados sensíveis</h2>
                <p>Pedimos que você não envie dados sensíveis no primeiro contato, como informações detalhadas sobre saúde, números de documentos, senhas ou dados bancários. Um resumo geral da situação é suficiente para o primeiro retorno. Se forem necessários documentos, o advogado orientará a forma adequada de envio.</p>

                <h2>4. Serviços de terceiros</h2>
                <p>Para funcionar, o site utiliza serviços de terceiros que podem receber dados técnicos da sua navegação, como o endereço IP:</p>
                <ul>
                    <li>Vercel, provedor de hospedagem do site;</li>
                    <li>Google Fonts, para carregar as fontes do site;</li>
                    <li>Google Maps, apenas quando o mapa da seção de contato é exibido;</li>
                    <li>jsDelivr, rede de distribuição de uma biblioteca de rolagem suave;</li>
                    <li>WhatsApp (Meta), quando você escolhe abrir uma conversa.</li>
                </ul>
                <p>Cada um desses serviços possui sua própria política de privacidade.</p>

                <h2>5. Cookies e armazenamento local</h2>
                <p>Este site não utiliza cookies próprios de publicidade ou rastreamento. Ele usa apenas o armazenamento da sessão do navegador para lembrar que a animação de abertura já foi exibida, informação que é apagada quando você fecha o navegador. O mapa do Google, quando carregado, pode utilizar cookies próprios.</p>

                <h2>6. Finalidade e base legal</h2>
                <p>Os dados são tratados para responder ao seu contato, para procedimentos preliminares a pedido do titular e, havendo contratação, para a execução do contrato e o cumprimento de obrigações legais e éticas da advocacia, incluindo o dever de sigilo profissional, nos termos da LGPD e do Estatuto da Advocacia.</p>

                <h2>7. Compartilhamento</h2>
                <p>Os dados não são vendidos nem compartilhados para fins de publicidade. Poderão ser compartilhados apenas quando necessário para a prestação dos serviços, como em processos judiciais e procedimentos administrativos, ou por determinação legal.</p>

                <h2>8. Por quanto tempo os dados são mantidos</h2>
                <p>Os dados são mantidos pelo tempo necessário para as finalidades descritas e pelos prazos exigidos em lei ou necessários para o exercício regular de direitos.</p>

                <h2>9. Seus direitos</h2>
                <p>Nos termos do art. 18 da LGPD, você pode solicitar a confirmação da existência de tratamento, o acesso, a correção, a anonimização, o bloqueio ou a eliminação de dados desnecessários, a portabilidade, informações sobre compartilhamento e a revogação do consentimento, quando aplicável. Também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).</p>

                <h2>10. Segurança</h2>
                <p>São adotadas medidas razoáveis para proteger as informações. Ainda assim, nenhuma transmissão pela internet é totalmente imune a riscos, por isso recomendamos o cuidado com o envio de dados sensíveis.</p>

                <h2>11. Alterações</h2>
                <p>Esta política pode ser atualizada a qualquer momento. A data da última atualização fica indicada no início desta página.</p>
            </div>
        </section>`;

  return page({
    title: "Política de Privacidade | Dr. Alexandre Moreira Puchetti",
    description:
      "Política de Privacidade do site do Dr. Alexandre Moreira Puchetti, OAB/MG 159.385: como os dados são tratados, uso do WhatsApp, serviços de terceiros e direitos previstos na LGPD.",
    keywords: "política de privacidade, LGPD, Alexandre Moreira Puchetti, advogado em Muriaé",
    path: "/politica-de-privacidade",
    bodyClass: "page-legal",
    graph: [
      officeGraph(),
      personGraph(),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: `${SITE.origin}/` },
          { "@type": "ListItem", position: 2, name: "Política de Privacidade", item: url },
        ],
      },
    ],
    body,
  });
}
