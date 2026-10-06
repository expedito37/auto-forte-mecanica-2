// ============================================================================
// script.js — Auto Forte Mecânica
// ----------------------------------------------------------------------------
// Mesma ideia do siteConfig.ts: o objeto "configuracaoSite" é o painel de
// controle. Todo texto, imagem, número e lista vem dele, agrupado por seção.
// Para outra oficina, troque só os dados abaixo — o resto monta o site sozinho.
// ============================================================================

const configuracaoSite = {
  // Nome e frase da marca
  marca: { nome: "Auto Forte Mecânica", slogan: "Seu carro em boas mãos" },

  // Links do menu (o href precisa bater com o id da seção no index.html)
  menu: [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#como", label: "Como funciona" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ],

  // WhatsApp: número no formato internacional (55 + DDD + número)
  whatsapp: {
    numero: "5531996218382",
    mensagemPadrao: "Olá! Gostaria de agendar um orçamento na Auto Forte Mecânica.",
    mensagemServico: "Olá! Tenho interesse no serviço: {servico}. Pode me passar mais informações?",
    textoTopo: "WhatsApp (31) 99621-8382",
  },

  // Hero: carrossel com 4 slides (imagens por link http)
  hero: {
    intervaloMs: 5000, // tempo entre os slides automáticos
    slides: [
      {
        imagem: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=70",
        titulo: "Diagnóstico preciso, conserto sem enrolação",
        texto: "Scanner de última geração e mecânicos experientes cuidando do seu carro.",
        botao: "Pedir orçamento",
      },
      {
        imagem: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1600&q=70",
        titulo: "Revisão completa para viajar tranquilo",
        texto: "Óleo, filtros, freios e suspensão checados item por item.",
        botao: "Agendar revisão",
      },
      {
        imagem: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=70",
        titulo: "Motor e injeção em dia",
        texto: "Mais potência, menos consumo e nenhuma luz de alerta acesa.",
        botao: "Falar com a oficina",
      },
      {
        imagem: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1600&q=70",
        titulo: "Peças de qualidade e garantia por escrito",
        texto: "Você aprova o orçamento antes de qualquer serviço começar.",
        botao: "Chamar no WhatsApp",
      },
    ],
  },

  // Faixa de números logo abaixo do hero
  destaques: [
    { valor: "+6.000", rotulo: "carros atendidos" },
    { valor: "15 anos", rotulo: "de experiência" },
    { valor: "4.9/5", rotulo: "avaliação média" },
    { valor: "90 dias", rotulo: "de garantia nos serviços" },
  ],

  // Seção Sobre
  sobre: {
    imagemGrande: "./img/imgprinc.webp",
    imagemPequena: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=600&q=70",
    titulo: "Oficina de bairro com padrão de concessionária",
    texto:
      "A Auto Forte nasceu para tratar o seu carro como se fosse o nosso. Mostramos a peça trocada, explicamos o defeito em linguagem simples e só começamos depois da sua aprovação.",
    valores: [
      { titulo: "Transparência", texto: "Orçamento claro, sem surpresa na hora de pagar." },
      { titulo: "Qualidade", texto: "Peças confiáveis e serviço com garantia." },
      { titulo: "Agilidade", texto: "Prazo combinado e cumprido; avisamos cada etapa." },
    ],
  },

  // Serviços: 8 cards. Para ativar os preços, veja os trechos comentados.
  servicos: {
    titulo: "Serviços para o seu carro",
    subtitulo: "Clique no serviço e peça seu orçamento pelo WhatsApp.",
    textoBotao: "Pedir orçamento",
    itens: [
      { nome: "Revisão completa", descricao: "Checagem geral de fluidos, filtros, correias e itens de segurança.", duracao: "3 h", icone: "🧰" /*, preco: 350 */ },
      { nome: "Troca de óleo e filtros", descricao: "Óleo adequado ao seu motor, com filtros de óleo, ar e combustível.", duracao: "40 min", icone: "🛢️" /*, preco: 180 */ },
      { nome: "Freios", descricao: "Pastilhas, discos, fluido e sangria com teste de frenagem.", duracao: "2 h", icone: "🛑" /*, preco: 260 */ },
      { nome: "Suspensão e direção", descricao: "Amortecedores, buchas, pivôs e alinhamento para rodar firme.", duracao: "3 h", icone: "🔩" /*, preco: 420 */ },
      { nome: "Injeção eletrônica", descricao: "Diagnóstico por scanner, limpeza de bicos e troca de sensores.", duracao: "2 h", icone: "💻" /*, preco: 300 */ },
      { nome: "Ar-condicionado", descricao: "Higienização, recarga de gás e reparo de vazamentos.", duracao: "1 h 30", icone: "❄️" /*, preco: 220 */ },
      { nome: "Bateria e parte elétrica", descricao: "Teste e troca de bateria, alternador, motor de partida e fusíveis.", duracao: "1 h", icone: "🔋" /*, preco: 150 */ },
      { nome: "Embreagem e câmbio", descricao: "Troca de kit de embreagem e revisão de câmbio manual e automático.", duracao: "6 h", icone: "⚙️" /*, preco: 900 */ },
    ],
  },

  // Passos do atendimento
  comoFunciona: {
    titulo: "Como funciona",
    passos: [
      { titulo: "Contato", descricao: "Você chama no WhatsApp e conta o problema." },
      { titulo: "Diagnóstico", descricao: "Analisamos o carro e explicamos o que foi encontrado." },
      { titulo: "Orçamento", descricao: "Valor e prazo claros. Só seguimos com a sua aprovação." },
      { titulo: "Entrega", descricao: "Carro testado, limpo e com garantia por escrito." },
    ],
  },

  // Depoimentos
  depoimentos: {
    titulo: "O que dizem nossos clientes",
    itens: [
      { nome: "Carlos A.", servico: "Freios", texto: "Me mostraram a pastilha gasta e cobraram o combinado. Voltarei sempre.", nota: 5 },
      { nome: "Renata S.", servico: "Revisão completa", texto: "Entregaram no prazo e ainda explicaram tudo sobre o meu carro.", nota: 5 },
      { nome: "Marcos P.", servico: "Injeção eletrônica", texto: "Resolveram o que outras oficinas não acharam. Carro muito mais econômico.", nota: 5 },
    ],
  },

  // Contato e mapa
  contato: {
    titulo: "Venha nos visitar",
    tituloEndereco: "Onde estamos",
    endereco: "Rua Exemplo, 123 — Centro",
    cidade: "Belo Horizonte — MG",
    tituloContato: "Fale conosco",
    email: "contato@autoforte.com.br",
    telefone: "(31) 99621-8382",
    tituloHorarios: "Horários",
    horarios: [
      { dias: "Segunda a sexta", horas: "08h às 18h" },
      { dias: "Sábado", horas: "08h às 13h" },
      { dias: "Domingo e feriados", horas: "Fechado" },
    ],
    // Troque pelo endereço real. O formato "output=embed" não precisa de chave de API.
    urlMapaEmbed: "https://www.google.com/maps?q=Belo+Horizonte+MG&output=embed",
  },

  // Redes sociais
  redes: [
    { nome: "Instagram", url: "https://instagram.com/" },
    { nome: "Facebook", url: "https://facebook.com/" },
    { nome: "TikTok", url: "https://tiktok.com/" },
  ],

  rodape: { direitos: "Todos os direitos reservados." },
};

// ----------------------------------------------------------------------------
// FUNÇÕES AUXILIARES DO WHATSAPP
// ----------------------------------------------------------------------------

// Monta o link wa.me; encodeURIComponent deixa acentos e espaços seguros na URL
function criarLinkWhatsApp(mensagem, numero = configuracaoSite.whatsapp.numero) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

// Link já com o nome do serviço dentro da mensagem
function criarLinkServico(nomeServico) {
  const mensagem = configuracaoSite.whatsapp.mensagemServico.replace("{servico}", nomeServico);
  return criarLinkWhatsApp(mensagem);
}

// Atalhos para pegar elementos e escrever texto sem repetir código
const $ = (id) => document.getElementById(id);
const escrever = (id, texto) => { $(id).textContent = texto; };

// Cria um elemento com classe e HTML interno (usado para montar os cards, etc.)
function criar(tag, classe, html) {
  const el = document.createElement(tag);
  if (classe) el.className = classe;
  if (html !== undefined) el.innerHTML = html;
  return el;
}

// Se uma imagem não carregar, esconde para não mostrar ícone quebrado
function esconderSeFalhar(img) {
  img.addEventListener("error", () => { img.style.visibility = "hidden"; });
}

// ----------------------------------------------------------------------------
// CABEÇALHO: zap, endereço, redes, logo e menu
// ----------------------------------------------------------------------------
function montarCabecalho() {
  const c = configuracaoSite;

  document.title = `${c.marca.nome} — ${c.marca.slogan}`;
  escrever("logoNome", c.marca.nome);

  // Zap no topo
  const zap = $("topoZap");
  zap.href = criarLinkWhatsApp(c.whatsapp.mensagemPadrao);
  zap.textContent = c.whatsapp.textoTopo;

  // Endereço no topo
  escrever("topoEndereco", `${c.contato.endereco}, ${c.contato.cidade}`);

  // Redes (no topo e no rodapé)
  ["topoRedes", "rodapeRedes"].forEach((id) => {
    c.redes.forEach((r) => {
      const a = criar("a", "", r.nome);
      a.href = r.url; a.target = "_blank"; a.rel = "noopener";
      $(id).appendChild(a);
    });
  });

  // Menu
  c.menu.forEach((l) => {
    const a = criar("a", "", l.label);
    a.href = l.href;
    a.addEventListener("click", () => fecharMenu());
    $("menu").appendChild(a);
  });

  // Botão do menu no celular
  $("menuBotao").addEventListener("click", () => {
    const aberto = $("menu").classList.toggle("aberto");
    $("menuBotao").setAttribute("aria-expanded", aberto);
  });
}

function fecharMenu() {
  $("menu").classList.remove("aberto");
  $("menuBotao").setAttribute("aria-expanded", "false");
}

// ----------------------------------------------------------------------------
// HERO: carrossel de 4 imagens com setas, pontos e troca automática
// ----------------------------------------------------------------------------
function montarHero() {
  const { slides, intervaloMs } = configuracaoSite.hero;
  let atual = 0;
  let timer;

  // Cria cada slide (imagem de fundo + texto) e cada ponto de navegação
  slides.forEach((s, i) => {
    const slide = criar("div", "hero__slide");
    slide.style.backgroundImage = `url("${s.imagem}")`;
    slide.innerHTML = `
      <div class="container">
        <div class="hero__conteudo">
          <h1>${s.titulo}</h1>
          <p>${s.texto}</p>
          <div class="hero__botoes">
            <a class="botao" href="${criarLinkWhatsApp(configuracaoSite.whatsapp.mensagemPadrao)}" target="_blank" rel="noopener">${s.botao}</a>
            <a class="botao botao--contorno" href="#servicos">Ver serviços</a>
          </div>
        </div>
      </div>`;
    $("heroSlides").appendChild(slide);

    const ponto = criar("button", "hero__ponto");
    ponto.setAttribute("aria-label", `Ir para o slide ${i + 1}`);
    ponto.addEventListener("click", () => { ir(i); reiniciar(); });
    $("heroPontos").appendChild(ponto);
  });

  const telas = document.querySelectorAll(".hero__slide");
  const pontos = document.querySelectorAll(".hero__ponto");

  // Mostra o slide "n" e marca o ponto correspondente
  function ir(n) {
    atual = (n + slides.length) % slides.length;
    telas.forEach((t, i) => t.classList.toggle("ativo", i === atual));
    pontos.forEach((p, i) => p.classList.toggle("ativo", i === atual));
  }

  // Reinicia a contagem da troca automática
  function reiniciar() {
    clearInterval(timer);
    timer = setInterval(() => ir(atual + 1), intervaloMs);
  }

  $("heroAnterior").addEventListener("click", () => { ir(atual - 1); reiniciar(); });
  $("heroProximo").addEventListener("click", () => { ir(atual + 1); reiniciar(); });

  ir(0);
  reiniciar();
}

// ----------------------------------------------------------------------------
// DESTAQUES + SOBRE
// ----------------------------------------------------------------------------
function montarDestaquesESobre() {
  const c = configuracaoSite;

  c.destaques.forEach((d) => {
    $("destaques").appendChild(criar("div", "", `<strong>${d.valor}</strong>${d.rotulo}`));
  });

  $("sobreImgGrande").src = c.sobre.imagemGrande;
  $("sobreImgPequeno").src = c.sobre.imagemPequena;
  esconderSeFalhar($("sobreImgGrande"));
  esconderSeFalhar($("sobreImgPequeno"));
  escrever("sobreTitulo", c.sobre.titulo);
  escrever("sobreTexto", c.sobre.texto);

  c.sobre.valores.forEach((v) => {
    $("sobreValores").appendChild(criar("li", "", `<strong>${v.titulo}</strong>${v.texto}`));
  });
}

// ----------------------------------------------------------------------------
// SERVIÇOS: 8 cards com botão de orçamento pelo WhatsApp
// ----------------------------------------------------------------------------
function montarServicos() {
  const s = configuracaoSite.servicos;
  escrever("servicosTitulo", s.titulo);
  escrever("servicosSubtitulo", s.subtitulo);

  s.itens.forEach((item) => {
    const card = criar("article", "card");
    card.innerHTML = `
      <span class="card__icone" aria-hidden="true">${item.icone}</span>
      <h3>${item.nome}</h3>
      <p>${item.descricao}</p>
      <span class="card__tempo">Tempo médio: ${item.duracao}</span>
      <a class="botao" href="${criarLinkServico(item.nome)}" target="_blank" rel="noopener">${s.textoBotao}</a>`;
    // PREÇO NO CARD (DESATIVADO): tire o comentário abaixo e a propriedade "preco" nos dados.
    // card.querySelector(".card__tempo").insertAdjacentHTML("afterend",
    //   `<strong class="card__preco">A partir de ${formatarPreco(item.preco)}</strong>`);
    $("servicosCards").appendChild(card);
  });

  /* ==========================================================================
     TABELA DE PREÇOS ESTILO PLANILHA GOOGLE (DESATIVADA)
     Para ativar: tire o comentário deste bloco, o do index.html e o do styles.css,
     e descomente o campo "preco" de cada serviço nos dados lá em cima.

  function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function montarPlanilha() {
    const tabela = $("planilhaTabela");
    // Cabeçalho com letras de coluna, como no Google Planilhas
    // O preço NUNCA aparece como valor fixo: sempre "A partir de", pois o valor final
    // depende do modelo do carro, das peças e do que for encontrado no diagnóstico.
    let html = "<tr><th></th><th>A — Serviço</th><th>B — Tempo médio</th><th>C — Preço (a partir de)</th></tr>";
    configuracaoSite.servicos.itens.forEach((item, i) => {
      html += `<tr>
        <td>${i + 1}</td>
        <td>${item.nome}</td>
        <td>${item.duracao}</td>
        <td class="num">A partir de ${formatarPreco(item.preco)}</td>
      </tr>`;
    });
    // Aviso embaixo da tabela: deixa claro que o valor final é definido no orçamento
    html += `<tr><td></td><td colspan="3">Valores sujeitos a alteração conforme o veículo e as peças. O valor final é confirmado no orçamento.</td></tr>`;
    tabela.innerHTML = html;
  }
  montarPlanilha();
  ========================================================================== */
}

// ----------------------------------------------------------------------------
// COMO FUNCIONA + DEPOIMENTOS
// ----------------------------------------------------------------------------
function montarPassosEDepoimentos() {
  const c = configuracaoSite;

  escrever("comoTitulo", c.comoFunciona.titulo);
  c.comoFunciona.passos.forEach((p) => {
    $("comoPassos").appendChild(criar("li", "", `<h3>${p.titulo}</h3><p>${p.descricao}</p>`));
  });

  escrever("depTitulo", c.depoimentos.titulo);
  c.depoimentos.itens.forEach((d) => {
    const estrelas = "★".repeat(d.nota) + "☆".repeat(5 - d.nota);
    $("depLista").appendChild(criar("figure", "depoimento", `
      <div class="depoimento__estrelas" aria-label="Nota ${d.nota} de 5">${estrelas}</div>
      <p>${d.texto}</p>
      <small>${d.nome} — ${d.servico}</small>`));
  });
}

// ----------------------------------------------------------------------------
// CONTATO (endereço, telefone, horários), MAPA GOOGLE E RODAPÉ
// ----------------------------------------------------------------------------
function montarContato() {
  const c = configuracaoSite.contato;
  escrever("contatoTitulo", c.titulo);

  const horarios = c.horarios.map((h) => `${h.dias}: ${h.horas}`).join("<br>");
  $("contatoInfo").innerHTML = `
    <div><h3>${c.tituloEndereco}</h3><p>${c.endereco}<br>${c.cidade}</p></div>
    <div><h3>${c.tituloContato}</h3><p>${c.telefone}<br>${c.email}</p></div>
    <div><h3>${c.tituloHorarios}</h3><p>${horarios}</p></div>`;

  // Mapa Google
  $("mapa").src = c.urlMapaEmbed;
  $("mapa").title = `Mapa com a localização da ${configuracaoSite.marca.nome}`;

  escrever("rodapeDireitos", `© ${new Date().getFullYear()} ${configuracaoSite.marca.nome}. ${configuracaoSite.rodape.direitos}`);
}

// ----------------------------------------------------------------------------
// BOTÕES FLUTUANTES: zap fixo e voltar ao topo
// ----------------------------------------------------------------------------
function montarFlutuantes() {
  $("zapFlutuante").href = criarLinkWhatsApp(configuracaoSite.whatsapp.mensagemPadrao);

  // O botão de voltar ao topo só aparece depois de rolar a página
  window.addEventListener("scroll", () => {
    $("voltarTopo").classList.toggle("visivel", window.scrollY > 500);
  });
  $("voltarTopo").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// ----------------------------------------------------------------------------
// INÍCIO: monta tudo quando a página carrega
// ----------------------------------------------------------------------------
montarCabecalho();
montarHero();
montarDestaquesESobre();
montarServicos();
montarPassosEDepoimentos();
montarContato();
montarFlutuantes();