// Dados reais do site. Não acrescente fatos sobre o advogado ou o escritório
// que não estejam aqui (formação, e-mail, horário, depoimentos, números).

export const SITE = {
  origin: "https://www.alexandrepuchettiadv.com.br",
  name: "Dr. Alexandre Moreira Puchetti",
  shortName: "Alexandre Moreira Puchetti",
  office: "Escritório de Advocacia Dr. Alexandre Moreira Puchetti",
  oab: "OAB/MG 159.385",
  experience: "Mais de 10 anos de experiência",
  phoneDisplay: "(32) 99175-3684",
  phoneE164: "+5532991753684",
  whatsappBase: "https://wa.me/5532991753684",
  instagram: "https://www.instagram.com/alexandrepuchettiadv/",
  instagramHandle: "@alexandrepuchettiadv",
  address: {
    street: "Rua Coronel Marciano Rodrigues, nº 151, Loja 10 B",
    district: "Centro",
    city: "Muriaé",
    region: "MG",
    postalCode: "36880-027",
    full: "Rua Coronel Marciano Rodrigues, nº 151, Loja 10 B, Centro, Muriaé/MG, CEP 36880-027",
  },
  mapsEmbed:
    "https://www.google.com/maps?q=Rua%20Coronel%20Marciano%20Rodrigues%20151%20Loja%2010%20B%20Centro%20Muria%C3%A9%20MG&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Rua%20Coronel%20Marciano%20Rodrigues%20151%20Loja%2010%20B%20Centro%20Muria%C3%A9%20MG",
  googleVerification: "-CArdIEhp9KW-egl9GGRrgTKld8qE43Q8O9rg07cRd4",
  defaultMessage: "Olá, Dr. Alexandre. Gostaria de atendimento jurídico.",
};

export const wa = (text = SITE.defaultMessage) =>
  `${SITE.whatsappBase}?text=${encodeURIComponent(text)}`;

export const areaMessage = (title) =>
  `Olá, Dr. Alexandre. Gostaria de orientação sobre ${title}.`;

export const AREAS = [
  {
    slug: "direito-a-saude",
    num: "01",
    icon: "health",
    title: "Direito à Saúde",
    summary: "Medicamentos, cirurgias, tratamentos, plano de saúde, canabidiol e erro médico.",
    tags: ["Medicamentos", "Cirurgias", "Tratamentos", "Plano de saúde", "Canabidiol", "Erro médico"],
    metaTitle: "Direito à Saúde em Muriaé | Plano de saúde, medicamentos e cirurgias",
    metaDescription:
      "Orientação jurídica sobre negativa de plano de saúde, medicamentos, cirurgias, tratamentos, canabidiol e erro médico em Muriaé e região. Dr. Alexandre Moreira Puchetti, OAB/MG 159.385.",
    lead:
      "Quando um medicamento, uma cirurgia ou um tratamento indicado pelo médico é negado, atrasado ou interrompido, é importante entender quais caminhos a lei oferece.",
    intro: [
      "O direito à saúde é garantido pela Constituição Federal. Nos planos de saúde, a relação também é regulada pela Lei nº 9.656/1998, pelas normas da Agência Nacional de Saúde Suplementar (ANS) e pelo Código de Defesa do Consumidor.",
      "Cada situação depende do contrato, da indicação médica e dos documentos disponíveis. Por isso, a orientação começa sempre pela análise cuidadosa do caso concreto.",
    ],
    topics: [
      { t: "Medicamentos", d: "Fornecimento de medicamentos pelo poder público ou cobertura pelo plano de saúde, inclusive de alto custo, observados os critérios definidos em lei e pelos tribunais." },
      { t: "Cirurgias e tratamentos", d: "Negativas de cobertura, demora na autorização, limitação de sessões e pedidos de reembolso de procedimentos indicados pelo médico assistente." },
      { t: "Plano de saúde", d: "Reajustes, carências, cancelamento do contrato, descredenciamento de prestadores e discussões sobre o rol de procedimentos da ANS." },
      { t: "Canabidiol", d: "Acesso a produtos à base de cannabis prescritos por médico, incluindo questões sobre autorização sanitária e custeio do tratamento." },
      { t: "Erro médico", d: "Análise de possível responsabilidade civil por danos decorrentes de falhas na prestação de serviços de saúde, a partir de prontuário, exames e laudos." },
    ],
    docs: [
      "Relatório e prescrição médica detalhados, com a indicação do tratamento",
      "Exames, laudos e prontuário, quando houver",
      "Negativa do plano por escrito ou números de protocolo",
      "Carteirinha e contrato do plano de saúde",
      "Orçamentos e comprovantes de pagamento",
      "Documento de identidade e CPF",
    ],
    faq: [
      { q: "O plano pode negar um tratamento que não está no rol da ANS?", a: "O rol da ANS é a referência básica de cobertura. Desde a Lei nº 14.454/2022, tratamentos fora do rol podem ser cobertos quando preenchidos critérios previstos em lei, como a comprovação de eficácia. A análise depende dos documentos médicos de cada caso." },
      { q: "Preciso da negativa do plano por escrito?", a: "Ela é muito útil. As normas da ANS permitem ao beneficiário solicitar que a negativa seja informada por escrito. Guarde também os números de protocolo de todos os atendimentos." },
      { q: "Também há orientação para quem depende do SUS?", a: "Sim. É possível orientar sobre o fornecimento de medicamentos e tratamentos pelo poder público, observados os requisitos definidos pela legislação e pela jurisprudência." },
    ],
  },
  {
    slug: "direito-do-consumidor",
    num: "02",
    icon: "shield",
    title: "Direito do Consumidor",
    summary: "Falhas em serviços, telefonia, produtos defeituosos, indenizações e cobranças indevidas.",
    tags: ["Falhas em serviços", "Telefonia", "Produtos defeituosos", "Indenizações", "Cobranças indevidas"],
    metaTitle: "Direito do Consumidor em Muriaé | Cobranças indevidas e produtos com defeito",
    metaDescription:
      "Orientação jurídica sobre falhas em serviços, telefonia, produtos defeituosos, cobranças indevidas e indenizações em Muriaé e região. Dr. Alexandre Moreira Puchetti, OAB/MG 159.385.",
    lead:
      "Serviço mal prestado, produto com defeito ou cobrança que você não reconhece: o Código de Defesa do Consumidor estabelece regras claras para essas situações.",
    intro: [
      "O Código de Defesa do Consumidor (Lei nº 8.078/1990) protege quem adquire produtos ou contrata serviços, prevendo deveres de informação, qualidade e segurança para os fornecedores.",
      "Antes de qualquer medida, vale reunir registros do problema: protocolos, notas fiscais, conversas e comprovantes ajudam a entender o que aconteceu e quais são as alternativas.",
    ],
    topics: [
      { t: "Falhas em serviços", d: "Serviços não prestados, prestados de forma inadequada ou fora do prazo combinado, incluindo transporte, energia, internet e outros contratos de consumo." },
      { t: "Telefonia", d: "Cobranças de serviços não contratados, falhas de sinal ou internet, portabilidade e dificuldades no cancelamento de planos." },
      { t: "Produtos defeituosos", d: "Vícios que tornam o produto impróprio para uso, prazos para reclamar e as alternativas previstas em lei: troca, devolução do valor ou abatimento do preço." },
      { t: "Indenizações", d: "Análise da possibilidade de reparação por danos materiais e, quando cabível, morais, decorrentes de falhas na relação de consumo." },
      { t: "Cobranças indevidas", d: "Cobranças de valores não devidos, inclusão indevida em cadastros de inadimplentes e pedidos de devolução de quantias pagas a mais." },
    ],
    docs: [
      "Nota fiscal, recibo ou contrato",
      "Faturas, boletos e comprovantes de pagamento",
      "Números de protocolo de atendimento",
      "Prints de conversas, e-mails e anúncios",
      "Fotos ou vídeos do produto ou do problema",
      "Comprovante de negativação, se houver",
    ],
    faq: [
      { q: "Qual é o prazo para reclamar de um produto com defeito?", a: "Pelo Código de Defesa do Consumidor, o prazo é de 30 dias para produtos e serviços não duráveis e de 90 dias para os duráveis. No caso de defeito oculto, o prazo começa a contar quando o problema aparece." },
      { q: "Quem paga uma cobrança indevida tem direito à devolução em dobro?", a: "O Código de Defesa do Consumidor prevê a devolução em dobro do valor pago indevidamente, salvo hipótese de engano justificável. A aplicação depende das circunstâncias de cada caso." },
      { q: "Preciso tentar resolver com a empresa antes?", a: "Não é sempre obrigatório, mas é recomendável. Registrar a reclamação no atendimento da empresa, no Procon ou no consumidor.gov.br ajuda a documentar o problema." },
    ],
  },
  {
    slug: "direito-de-familia",
    num: "03",
    icon: "family",
    title: "Direito de Família",
    summary: "Divórcio, alimentos, revisão de pensão, exoneração e defesa em ações familiares.",
    tags: ["Divórcio", "Alimentos", "Revisão de pensão", "Exoneração", "Defesa em ações familiares"],
    metaTitle: "Direito de Família em Muriaé | Divórcio, pensão alimentícia e revisão",
    metaDescription:
      "Orientação jurídica sobre divórcio, pensão alimentícia, revisão e exoneração de alimentos e defesa em ações familiares em Muriaé e região. Dr. Alexandre Moreira Puchetti, OAB/MG 159.385.",
    lead:
      "Questões de família envolvem decisões delicadas. Uma orientação clara ajuda a conduzir cada etapa com mais tranquilidade.",
    intro: [
      "O Direito de Família trata das relações entre cônjuges, companheiros, pais e filhos, como o fim do casamento, a guarda e a pensão alimentícia.",
      "Sempre que possível, buscar soluções consensuais tende a reduzir desgastes. Quando o acordo não é possível, cada parte tem o direito de apresentar sua posição perante o Judiciário.",
    ],
    topics: [
      { t: "Divórcio", d: "Divórcio consensual ou litigioso, judicial ou em cartório, quando preenchidos os requisitos legais, incluindo a divisão de bens." },
      { t: "Alimentos", d: "Fixação de pensão alimentícia considerando a necessidade de quem recebe e a possibilidade de quem paga." },
      { t: "Revisão de pensão", d: "Pedido de aumento ou redução do valor quando há mudança relevante na situação financeira de uma das partes." },
      { t: "Exoneração", d: "Encerramento da obrigação alimentar, por exemplo após a maioridade, que depende de decisão judicial e não acontece de forma automática." },
      { t: "Defesa em ações familiares", d: "Acompanhamento de quem foi citado em ações de alimentos, divórcio ou outras demandas familiares, com análise dos prazos e da melhor estratégia de defesa." },
    ],
    docs: [
      "Certidão de casamento ou de nascimento",
      "Documento de identidade e CPF",
      "Comprovantes de renda e de despesas",
      "Acordo ou decisão judicial anterior, se houver",
      "Documentos dos bens do casal",
      "Citação ou intimação recebida, em caso de defesa",
    ],
    faq: [
      { q: "O divórcio pode ser feito em cartório?", a: "Sim, quando há consenso entre o casal e são preenchidos os requisitos legais. A presença de advogado é obrigatória também no divórcio feito em cartório." },
      { q: "A pensão acaba automaticamente aos 18 anos?", a: "Não. Segundo a Súmula 358 do STJ, o fim da pensão para o filho que atinge a maioridade depende de decisão judicial, com oportunidade de manifestação do filho." },
      { q: "É possível rever o valor da pensão?", a: "Sim, quando há mudança relevante na situação financeira de quem paga ou na necessidade de quem recebe. O pedido é analisado com base nas provas apresentadas." },
    ],
  },
  {
    slug: "direito-bancario",
    num: "04",
    icon: "bank",
    title: "Direito Bancário",
    summary: "Revisão de juros, dívidas, RCC, RMC, contratos e descontos indevidos.",
    tags: ["Revisão de juros", "Dívidas", "RCC", "RMC", "Contratos", "Descontos indevidos"],
    metaTitle: "Direito Bancário em Muriaé | Revisão de juros, RMC, RCC e descontos indevidos",
    metaDescription:
      "Orientação jurídica sobre revisão de juros, dívidas bancárias, cartão consignado (RMC e RCC), contratos e descontos indevidos em Muriaé e região. Dr. Alexandre Moreira Puchetti, OAB/MG 159.385.",
    lead:
      "Juros acima do esperado, descontos que você não reconhece ou um cartão consignado contratado sem a informação adequada: entender o contrato é o primeiro passo.",
    intro: [
      "Os contratos bancários também estão sujeitos ao Código de Defesa do Consumidor, conforme a Súmula 297 do STJ. Isso inclui o dever de informação clara sobre taxas, encargos e produtos contratados.",
      "A análise envolve ler o contrato, conferir extratos e comparar as condições pactuadas com as regras aplicáveis e com as taxas médias de mercado divulgadas pelo Banco Central.",
    ],
    topics: [
      { t: "Revisão de juros", d: "Análise de taxas e encargos de empréstimos, financiamentos e cartões, comparando-os com as taxas médias de mercado do Banco Central." },
      { t: "Dívidas", d: "Orientação sobre renegociação, cobranças abusivas e situações de superendividamento, com base na Lei nº 14.181/2021." },
      { t: "RCC e RMC", d: "Reserva de Cartão Consignado (RCC) e Reserva de Margem Consignável (RMC): descontos ligados a cartões consignados em benefícios e salários." },
      { t: "Contratos", d: "Leitura e revisão de cláusulas, tarifas e seguros incluídos em contratos bancários, inclusive possível venda casada." },
      { t: "Descontos indevidos", d: "Descontos não autorizados em conta corrente, salário ou benefício do INSS, como tarifas, seguros e empréstimos não reconhecidos." },
    ],
    docs: [
      "Contrato do empréstimo, financiamento ou cartão",
      "Extratos bancários do período",
      "Extrato de empréstimos consignados, disponível no Meu INSS",
      "Faturas do cartão consignado",
      "Comprovantes de pagamento e de renegociações",
      "Documento de identidade e CPF",
    ],
    faq: [
      { q: "O que são RMC e RCC?", a: "São reservas de margem ligadas a cartões de crédito consignados. Muitas pessoas descobrem esses descontos no benefício sem saber que contrataram um cartão, e não um empréstimo comum. Cada contrato precisa ser analisado." },
      { q: "Juros altos são sempre abusivos?", a: "Não necessariamente. Os tribunais costumam comparar a taxa contratada com a taxa média de mercado para a mesma operação e época. Só a análise do contrato indica se há abusividade." },
      { q: "Como verificar descontos no meu benefício do INSS?", a: "Pelo aplicativo ou site Meu INSS é possível emitir o extrato de empréstimos consignados, que mostra os contratos e cartões ativos vinculados ao benefício." },
    ],
  },
  {
    slug: "direito-civil",
    num: "05",
    icon: "document",
    title: "Direito Civil",
    summary: "Contratos, cobranças, ações monitórias, execução de dívidas e defesa do devedor.",
    tags: ["Contratos", "Cobranças", "Ações monitórias", "Execução de dívidas", "Defesa do devedor"],
    metaTitle: "Direito Civil em Muriaé | Contratos, cobranças, monitória e execução",
    metaDescription:
      "Orientação jurídica sobre contratos, cobranças, ações monitórias, execução de dívidas e defesa do devedor em Muriaé e região. Dr. Alexandre Moreira Puchetti, OAB/MG 159.385.",
    lead:
      "Seja para cobrar um valor que lhe é devido, seja para se defender de uma cobrança, a orientação começa pela análise dos documentos e dos prazos.",
    intro: [
      "O Direito Civil regula as relações entre pessoas e empresas no dia a dia: contratos, obrigações, dívidas e responsabilidade por danos.",
      "Prazos são decisivos nessa área. Tanto o direito de cobrar quanto as oportunidades de defesa podem se perder com o tempo, por isso agir de forma informada faz diferença.",
    ],
    topics: [
      { t: "Contratos", d: "Elaboração, revisão e análise de contratos, além de orientação em casos de descumprimento ou rescisão." },
      { t: "Cobranças", d: "Medidas para receber valores devidos, desde a notificação até as vias judiciais adequadas a cada tipo de documento." },
      { t: "Ações monitórias", d: "Procedimento para cobrar dívidas comprovadas por escrito sem força de título executivo, como cheques prescritos ou confissões sem testemunhas." },
      { t: "Execução de dívidas", d: "Cobrança judicial baseada em títulos executivos, como cheques, notas promissórias e contratos que preencham os requisitos legais." },
      { t: "Defesa do devedor", d: "Análise de excessos na cobrança, prescrição, penhoras e proteção de bens impenhoráveis, como o bem de família, nos limites da lei." },
    ],
    docs: [
      "Contrato, cheque, nota promissória ou outro documento da dívida",
      "Comprovantes de pagamento ou de entrega",
      "Notificações, e-mails e mensagens trocadas",
      "Citação ou intimação recebida, em caso de defesa",
      "Documento de identidade e CPF",
    ],
    faq: [
      { q: "O que é uma ação monitória?", a: "É um procedimento para cobrar uma dívida comprovada por documento escrito que não tem força de título executivo, como um cheque já prescrito para execução." },
      { q: "Existe prazo para cobrar uma dívida?", a: "Sim. O prazo de prescrição varia conforme o tipo de dívida e de documento. Muitas dívidas previstas em documento escrito prescrevem em cinco anos, mas cada caso deve ser verificado." },
      { q: "Meu salário pode ser penhorado?", a: "Em regra, salários são impenhoráveis, mas a lei e os tribunais admitem exceções, como no caso de pensão alimentícia. A análise depende da situação concreta." },
    ],
  },
  {
    slug: "sucessorio-e-usucapiao",
    num: "06",
    icon: "home",
    title: "Sucessório e Usucapião",
    summary: "Inventários, partilhas, planejamento sucessório e regularização de imóveis.",
    tags: ["Inventários", "Partilhas", "Planejamento sucessório", "Usucapião", "Regularização de imóveis"],
    metaTitle: "Inventário e Usucapião em Muriaé | Partilhas e regularização de imóveis",
    metaDescription:
      "Orientação jurídica sobre inventário judicial e em cartório, partilha de bens, planejamento sucessório, usucapião e regularização de imóveis em Muriaé e região. Dr. Alexandre Moreira Puchetti, OAB/MG 159.385.",
    lead:
      "Organizar a transmissão de bens e regularizar um imóvel são passos importantes para organizar o patrimônio da família.",
    intro: [
      "O Direito Sucessório trata da transmissão do patrimônio após o falecimento, por meio do inventário e da partilha, e também do planejamento feito em vida.",
      "A usucapião permite adquirir a propriedade de um imóvel pela posse prolongada, mansa e pacífica, cumpridos os requisitos legais. Pode ser buscada na Justiça ou, em certos casos, em cartório.",
    ],
    topics: [
      { t: "Inventários", d: "Inventário judicial ou extrajudicial em cartório, quando há acordo entre os herdeiros e preenchidos os requisitos legais." },
      { t: "Partilhas", d: "Divisão dos bens entre herdeiros e meeiro, considerando o regime de bens, o testamento, se houver, e a vontade das partes." },
      { t: "Planejamento sucessório", d: "Orientação sobre instrumentos como testamento e doação para organizar a sucessão em vida, dentro dos limites da lei." },
      { t: "Usucapião", d: "Análise do tempo e da forma de posse e da modalidade cabível, com prazos que variam conforme o caso." },
      { t: "Regularização de imóveis", d: "Orientação para imóveis sem escritura ou com registro desatualizado, buscando a regularização junto ao cartório." },
    ],
    docs: [
      "Certidão de óbito e documentos dos herdeiros",
      "Certidão de casamento do falecido, se houver",
      "Matrícula atualizada dos imóveis",
      "Documentos de veículos, contas e outros bens",
      "Testamento, se houver",
      "Para usucapião: IPTU, contas, fotos e outros comprovantes da posse",
    ],
    faq: [
      { q: "Existe prazo para abrir o inventário?", a: "O Código de Processo Civil prevê a abertura do inventário em até dois meses após o falecimento. O atraso pode gerar multa sobre o imposto de transmissão (ITCMD), conforme a lei estadual." },
      { q: "O inventário pode ser feito em cartório?", a: "Sim, quando há acordo entre os herdeiros e são preenchidos os requisitos legais. A presença de advogado é obrigatória também no inventário extrajudicial." },
      { q: "Quanto tempo de posse é preciso para a usucapião?", a: "Depende da modalidade. Os prazos previstos em lei variam, em geral, de 5 a 15 anos, conforme o tipo de imóvel, o uso e a existência de justo título." },
    ],
  },
  {
    slug: "previdenciario-e-extrajudicial",
    num: "07",
    icon: "scale",
    title: "Previdenciário e Extrajudicial",
    summary: "INSS, aposentadoria, LOAS, pareceres, contratos e cobranças extrajudiciais.",
    tags: ["INSS", "Aposentadoria", "LOAS", "Pareceres", "Contratos", "Cobranças extrajudiciais"],
    metaTitle: "Previdenciário em Muriaé | INSS, aposentadoria, LOAS e atuação extrajudicial",
    metaDescription:
      "Orientação jurídica sobre INSS, aposentadoria, BPC/LOAS, pareceres, contratos e cobranças extrajudiciais em Muriaé e região. Dr. Alexandre Moreira Puchetti, OAB/MG 159.385.",
    lead:
      "Benefícios do INSS e soluções fora do Judiciário exigem atenção aos requisitos, aos documentos e aos prazos de cada etapa.",
    intro: [
      "Na área previdenciária, a orientação envolve verificar requisitos, tempo de contribuição e documentos para pedidos e recursos junto ao INSS, inclusive após as mudanças da Reforma da Previdência (Emenda Constitucional nº 103/2019).",
      "Na atuação extrajudicial, o objetivo é prevenir conflitos e buscar soluções sem processo judicial, por meio de pareceres, contratos bem redigidos e cobranças negociadas.",
    ],
    topics: [
      { t: "INSS", d: "Pedidos de benefícios, análise de indeferimentos e recursos administrativos junto à Previdência Social." },
      { t: "Aposentadoria", d: "Verificação de requisitos, regras de transição e documentos para o pedido de aposentadoria." },
      { t: "LOAS", d: "Benefício de Prestação Continuada (BPC/LOAS) para idosos a partir de 65 anos e pessoas com deficiência em situação de baixa renda, nos termos da lei." },
      { t: "Pareceres", d: "Análises jurídicas por escrito sobre uma situação específica, para apoiar uma decisão de forma mais informada." },
      { t: "Contratos", d: "Elaboração e revisão de contratos para prevenir conflitos e deixar claros os direitos e deveres das partes." },
      { t: "Cobranças extrajudiciais", d: "Notificações e negociações para receber valores sem a necessidade de uma ação judicial." },
    ],
    docs: [
      "Documento de identidade e CPF",
      "Extrato do CNIS, disponível no Meu INSS",
      "Carteira de trabalho e carnês de contribuição",
      "Carta de indeferimento do INSS, se houver",
      "Laudos e relatórios médicos, quando o benefício envolver saúde",
      "Inscrição atualizada no CadÚnico, para o BPC/LOAS",
    ],
    faq: [
      { q: "O que fazer se o INSS negar o meu benefício?", a: "É possível apresentar recurso administrativo, em regra no prazo de 30 dias a contar da ciência da decisão, ou avaliar a via judicial. A carta de indeferimento indica o motivo da negativa." },
      { q: "Quem tem direito ao BPC/LOAS?", a: "Idosos a partir de 65 anos e pessoas com deficiência em situação de baixa renda, conforme os critérios da lei. Não exige contribuição ao INSS, mas pede inscrição atualizada no CadÚnico." },
      { q: "O que é uma cobrança extrajudicial?", a: "É a tentativa de receber um valor sem processo judicial, por meio de notificação formal e negociação. Pode ser um caminho mais rápido e menos custoso quando há disposição para acordo." },
    ],
  },
];

export const HOME_FAQ = [
  { q: "Como faço para solicitar atendimento?", a: "Basta enviar uma mensagem pelo WhatsApp (32) 99175-3684, pelo formulário desta página ou pelos botões do site. Conte de forma breve qual é a sua situação para que o primeiro retorno seja mais objetivo." },
  { q: "O atendimento pode ser feito online?", a: "Sim. O atendimento pode ser online, pelo WhatsApp, ou presencial, no escritório no Centro de Muriaé." },
  { q: "Quais documentos devo levar ou enviar?", a: "Em geral, documento de identidade, CPF, comprovante de endereço e os documentos relacionados ao caso, como contratos, comprovantes, conversas e decisões. Cada página de área traz uma lista de documentos que costumam ser úteis." },
  { q: "Como são definidos os honorários?", a: "Os honorários são combinados de forma transparente, após entender o caso, considerando sua complexidade e observando os parâmetros da OAB/MG." },
  { q: "Existe garantia de resultado?", a: "Não. Nenhum advogado pode garantir o resultado de um processo ou de uma negociação. O compromisso é com uma atuação técnica, ética e com informação clara em cada etapa." },
  { q: "Entrar em contato significa contratar o serviço?", a: "Não. O primeiro contato serve para entender a sua situação. A contratação só acontece se você decidir seguir, com as condições definidas de forma clara." },
  { q: "Onde fica o escritório?", a: "Na Rua Coronel Marciano Rodrigues, nº 151, Loja 10 B, Centro, Muriaé/MG, CEP 36880-027." },
];

export const STEPS = [
  { t: "Contato inicial", d: "Você envia uma mensagem pelo WhatsApp ou pelo formulário, de forma simples e direta." },
  { t: "Relato do caso", d: "Você conta, com suas palavras, o que aconteceu. O advogado faz as perguntas necessárias para entender a situação." },
  { t: "Análise de documentos", d: "Os documentos relacionados ao caso são analisados com atenção aos fatos, aos prazos e às regras aplicáveis." },
  { t: "Orientação jurídica", d: "Você recebe uma explicação clara sobre as alternativas possíveis e os próximos passos, para decidir com clareza." },
];
