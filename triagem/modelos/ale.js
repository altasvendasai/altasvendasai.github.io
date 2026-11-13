// ═══════════════════════════════════════════════════════════════
// MODELO DE TRIAGEM — Alê (Espaço Viver)
// Pra outra profissional: copie este arquivo como modelos/<nome>.js, troque os dados
// abaixo e abra /triagem/?p=<nome>. O motor (index.html) não muda.
// ═══════════════════════════════════════════════════════════════

// === BLOCO 1: QUEM É E VISUAL ===
window.TRIAGEM = {
  titulo: "Triagem",
  profissional: {
    nome: "Alê",
    negocio: "Espaço Viver",
    endereco: "R. Ramiro Barcelos, 1982 · sala 202 · Floresta · Porto Alegre",
    whatsapp: "5551986073198",
    agenda: "https://estilo-falcon.web.app/agenda-online/V83"
  },
  cores: { principal: "#8B6FA0", clara: "#EEE7F3", fundo: "#F8F5FA", tinta: "#4E3B5A" },
  // "whatsapp" = só o botão do WhatsApp; "agenda" = botão da agenda Falcon em destaque + WhatsApp
  modoFinal: "whatsapp",

  intro: {
    eyebrow: "Cuidado sob medida",
    titulo: "Vamos descobrir o <em>cuidado certo</em> pra você?",
    texto: "Responde algumas perguntas rápidas e eu te indico o tratamento ideal pro teu corpo e pra tua pele.",
    rodape: "Leva menos de 1 minuto · tuas respostas ficam só comigo."
  },

  // === BLOCO 2: PERGUNTAS (uma por tela; "mostrarSe" faz a pergunta aparecer só quando faz sentido) ===
  perguntas: [
    { id: "incomodo", grupo: "Sobre você", tipo: "multi", curto: "Incômodo",
      q: "O que mais te incomoda hoje?", ajuda: "Pode marcar mais de uma.",
      ops: [
        { v: "Celulite", icone: "🍑" }, { v: "Flacidez", icone: "🤍" }, { v: "Gordura localizada / medidas", icone: "📏" },
        { v: "Inchaço e retenção", icone: "💧" }, { v: "Manchas", icone: "🌗" }, { v: "Acne / pele oleosa", icone: "🌸" },
        { v: "Dores e tensão", icone: "💆" }, { v: "Quero só relaxar", icone: "🕯️" }
      ] },
    { id: "regiao", grupo: "Sobre você", tipo: "multi", curto: "Região",
      q: "Em qual parte do corpo?", ajuda: "Pode marcar mais de uma.",
      mostrarSe: { campo: "incomodo", algumDe: ["Celulite", "Flacidez", "Gordura localizada / medidas", "Inchaço e retenção"] },
      ops: [{ v: "Bumbum" }, { v: "Coxas" }, { v: "Culote" }, { v: "Barriga" }, { v: "Braços" }, { v: "Costas" }] },
    { id: "tempo", grupo: "Sobre você", tipo: "unica", curto: "Há quanto tempo",
      q: "Há quanto tempo isso te incomoda?",
      ops: [{ v: "Menos de 6 meses" }, { v: "De 6 meses a 2 anos" }, { v: "Mais de 2 anos" }] },
    { id: "antes", grupo: "Sobre você", tipo: "unica", curto: "Tratamento antes",
      q: "Já fez algum tratamento pra isso?",
      ops: [{ v: "Nunca fiz" }, { v: "Sim, mas não tive resultado" }, { v: "Sim, tive resultado e quero manter" }] },
    { id: "objetivo", grupo: "O que você busca", tipo: "unica", curto: "Objetivo",
      q: "O que você busca agora?",
      ops: [
        { v: "Resultado pra uma data (verão, festa, viagem)", icone: "📅" },
        { v: "Cuidar de mim com constância", icone: "🦋" },
        { v: "Experimentar uma sessão primeiro", icone: "✨" }
      ] },
    { id: "saude", grupo: "Tua segurança", tipo: "multi", curto: "Saúde",
      q: "Algo que eu precise saber sobre tua saúde?", ajuda: "É pra eu cuidar de você com segurança.",
      exclusivas: ["Nada disso"],
      ops: [{ v: "Estou gestante" }, { v: "Tenho varizes ou já tive trombose" }, { v: "Tenho alergia a algum óleo" }, { v: "Uso marcapasso" }, { v: "Nada disso" }],
      avisos: [
        { se: "Estou gestante", texto: "Tudo bem! Alguns tratamentos são adaptados na gestação — eu avalio com você antes de começar." },
        { se: "Tenho varizes ou já tive trombose", texto: "Obrigada por avisar. Eu avalio com cuidado na primeira conversa antes de qualquer técnica." },
        { se: "Uso marcapasso", texto: "Obrigada por avisar. Alguns aparelhos não são indicados — eu escolho as técnicas certas pra você." }
      ] }
  ],

  // === BLOCO 3: VITRINE DOS BLENDS (sem preço: o preço vai pela conversa) ===
  vitrine: {
    eyebrow: "Pra continuar em casa",
    titulo: "Quer continuar o cuidado em casa?",
    ajuda: "Toque nos blends que te interessaram. Eu te conto mais no WhatsApp.",
    itens: [
      { nome: "Blend Celulite", serve: "Ajuda a ativar a circulação nas áreas com celulite.", icone: "🍑" },
      { nome: "Blend Clareamento", serve: "Pra manchas, axila e virilha escurecidas.", icone: "🌗" },
      { nome: "Blend Pele", serve: "Pra acne e manchas no rosto.", icone: "🌸" },
      { nome: "Blend Capilar", serve: "Pra queda e crescimento dos fios.", icone: "🌿" },
      { nome: "Blend Calma", serve: "Aroma pra ajudar a relaxar no dia a dia.", icone: "🕯️" },
      { nome: "Blend Labial", serve: "Hidratação pros lábios.", icone: "💋" }
    ]
  },

  // === BLOCO 4: INDICAÇÃO (regra simples: a primeira que bater vale) ===
  indicacao(r) {
    const inc = r.incomodo || [];
    const tem = x => inc.includes(x);
    const corpo = ["Celulite", "Flacidez", "Gordura localizada / medidas"].some(tem);
    const saude = (r.saude || []).filter(x => x !== "Nada disso");
    const aviso = saude.length ? "Como você me contou algo sobre tua saúde, a primeira sessão começa com uma avaliação pra eu escolher as técnicas certas pra você." : "";
    if (corpo && r.objetivo === "Experimentar uma sessão primeiro")
      return { servico: tem("Celulite") ? "Sessão para celulite" : "Esculpe Detox – Desincha / Elimina Toxinas / Modela", porque: "Uma sessão pra você sentir o resultado e a gente montar teu plano.", aviso };
    if (corpo)
      return { servico: "Deusa Grega – Pele Porcelana / Reduz Medida / Modela / Desinflama", porque: "Meu método completo: avaliação + 4 sessões que unem modelagem, detox e os blends pra cuidar de dentro pra fora.", aviso };
    if (tem("Inchaço e retenção"))
      return { servico: "Esculpe Detox – Desincha / Elimina Toxinas / Modela", porque: "Pra desinchar, eliminar o que o corpo está retendo e modelar.", aviso };
    if (tem("Manchas")) return { servico: "Tratamento para manchas", porque: "Clareamento com blends e técnicas pra uniformizar a pele.", aviso };
    if (tem("Acne / pele oleosa")) return { servico: "Limpeza de pele", porque: "Limpeza profunda pra controlar a oleosidade e cuidar da acne.", aviso };
    if (tem("Dores e tensão")) return { servico: "Massagem terapêutica", porque: "Pra soltar a tensão e aliviar as dores.", aviso };
    return { servico: "Massagem relaxante", porque: "Um momento só seu pra desacelerar.", aviso };
  },

  resultado: { titulo: "Achei o cuidado certo pra você" }
};
