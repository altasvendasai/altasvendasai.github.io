// ═══════════════════════════════════════════════════════════════
// PERGUNTAS DO DIAGNÓSTICO (usadas pelo formulário e pelo painel)
// tipo: texto | tel | longo | escolha (outro:true abre campo livre)
// ═══════════════════════════════════════════════════════════════
window.DIAG = {
  supabaseUrl: "https://gopqajnivmbxjqsiznqi.supabase.co",
  supabaseKey: "sb_publishable_YBF0cSQt0IlTqVhCyRlduQ_ij2CHBZ5",
  tabela: "acelera_diagnostico",
  whatsapp: "5551994687046",
  // Modelo TERAPEUTAS (padrão da Alê): /diagnostico/
  perguntas: [
    // Sobre você
    {id:"nome", grupo:"Sobre você", tipo:"texto", q:"Como você prefere ser chamada?", ph:"Seu nome ou apelido"},
    {id:"negocio", grupo:"Sobre você", tipo:"texto", q:"Qual é o nome do seu espaço ou negócio?", ph:"Ex.: Espaço Bem-Estar"},
    {id:"whatsapp", grupo:"Sobre você", tipo:"tel", q:"Qual é o seu WhatsApp?", ph:"(51) 9 9999-9999", ajuda:"É por ele que eu te mando a proposta."},
    {id:"instagram", grupo:"Sobre você", tipo:"texto", q:"Qual é o @ do seu Instagram?", ph:"@seuperfil", opcional:true},
    {id:"prioridade", grupo:"Sobre você", tipo:"escolha", q:"O que é prioridade pra você agora?",
      ops:["Vender mais, dinheiro no bolso","Ter um Instagram bonito"]},

    // Seu trabalho
    {id:"servicos", grupo:"Seu trabalho", tipo:"longo", q:"Escreva cada serviço ou produto que você oferece, com o preço.",
      ajuda:"Um por linha, sempre com o valor. Ex.: Massagem relaxante R$ 150 · Drenagem R$ 120 · Blend 10 ml R$ 55"},
    {id:"custo", grupo:"Seu trabalho", tipo:"escolha", q:"Quanto você gasta de material em CADA atendimento, mais ou menos?",
      ajuda:"Só o que você usa na cliente: óleo, creme, descartáveis… Não conta aluguel, luz nem internet.",
      ops:["Até R$ 10","De R$ 10 a 30","De R$ 30 a 60","Mais de R$ 60","Não sei"]},
    {id:"avulso", grupo:"Seu trabalho", tipo:"escolha", q:"Você vende algum produto pra cliente comprar sem marcar atendimento?",
      ajuda:"Ex.: um óleo ou kit que ela compra e retira no espaço, ou recebe em casa.",
      ops:["Sim, já vendo","Ainda não, mas quero","Não"]},
    {id:"retorno", grupo:"Seu trabalho", tipo:"escolha", q:"A cliente costuma voltar?",
      ops:["Sim, todo mês","A cada 2 ou 3 meses","De vez em quando","Quase não volta"]},

    // Sua agenda e seus números
    {id:"horarios", grupo:"Sua agenda", tipo:"texto", q:"Quais dias e horários você atende?", ph:"Ex.: terça a sábado, das 9h às 18h"},
    {id:"atend_semana", grupo:"Sua agenda", tipo:"escolha", q:"Quantos atendimentos você faz por SEMANA, em média?",
      ajuda:"Some a semana inteira. Ex.: 1 por dia, de terça a sábado = 5.",
      ops:["Até 5","De 6 a 15","De 16 a 30","Mais de 30"]},
    {id:"vagos", grupo:"Sua agenda", tipo:"escolha", q:"Quantos horários costumam ficar vagos por SEMANA?",
      ops:["Quase nenhum","De 1 a 5","De 6 a 10","Mais de 10"]},
    {id:"faturamento", grupo:"Sua agenda", tipo:"escolha", q:"Quanto você fatura por SEMANA, em média?", opcional:true,
      ajuda:"Fica só entre nós. É pra eu montar uma proposta que caiba no seu bolso.",
      ops:["Até R$ 300","De R$ 300 a 800","De R$ 800 a 1.500","Mais de R$ 1.500"]},
    {id:"ano_passado", grupo:"Sua agenda", tipo:"longo", q:"No ano passado, você fez alguma promoção de Black Friday ou de Natal? Como foi?", opcional:true,
      ajuda:"Ex.: dei 20% de desconto na drenagem e lotei a agenda. Se não fez, é só escrever que não."},

    // A campanha
    {id:"vender_agora", grupo:"A campanha", tipo:"longo", q:"Qual serviço ou produto você quer vender mais nessa Black Friday, e qual seria a oferta?",
      ajuda:"Escolha 1 ou 2. Ex.: pacote de 4 drenagens de R$ 480 por R$ 360 · blend + sessão com 15% off."},
    {id:"origem", grupo:"A campanha", tipo:"escolha", outro:true, q:"Hoje, de onde vem a maioria das suas clientes?",
      ops:["Indicação","Instagram","Passam em frente ao espaço"]},
    {id:"anuncio", grupo:"A campanha", tipo:"escolha", q:"Você já fez anúncio pago?",
      ops:["Nunca fiz","Já impulsionei post","Já fiz campanha no Instagram ou no Google"]},
    {id:"lista", grupo:"A campanha", tipo:"escolha", q:"Você tem contato de clientes antigas no WhatsApp?",
      ops:["Não","Até 50","De 50 a 200","Mais de 200"]},
    {id:"cartao", grupo:"A campanha", tipo:"escolha", q:"Você tem cartão de crédito pra pagar o anúncio direto no Instagram e no Google?",
      ajuda:"O dinheiro do anúncio não passa pela gente: você paga direto pra plataforma.",
      ops:["Sim","Não, só Pix ou boleto","Não sei"]},
    {id:"investimento", grupo:"A campanha", tipo:"escolha", q:"Quanto você pode investir por MÊS pra vender mais (anúncio + nosso trabalho)?",
      ajuda:"Pensa no que cabe no caixa sem apertar, depois de pagar as contas fixas. A gente monta a proposta dentro disso.",
      ops:["Até R$ 200","De R$ 200 a 500","De R$ 500 a 1.000","Mais de R$ 1.000","Ainda não sei"]},
    {id:"obs", grupo:"A campanha", tipo:"longo", q:"Quer me contar mais alguma coisa?", opcional:true}
  ],

  // Modelo EMPRESAS EM GERAL: /diagnostico/empresas/
  perguntasEmpresas: [
    // Você e a empresa
    {id:"nome", grupo:"Você e a empresa", tipo:"texto", q:"Qual é o seu nome?", ph:"Como você prefere ser chamado"},
    {id:"negocio", grupo:"Você e a empresa", tipo:"texto", q:"Qual é o nome da sua empresa?", ph:"Ex.: Studio Bella, Center Calçados, Clínica Vida"},
    {id:"whatsapp", grupo:"Você e a empresa", tipo:"tel", q:"Qual é o seu WhatsApp?", ph:"(51) 9 9999-9999", ajuda:"É por ele que a gente fala com você."},
    {id:"instagram", grupo:"Você e a empresa", tipo:"texto", q:"Qual é o Instagram ou o site da empresa?", ph:"@suaempresa ou www.suaempresa.com.br", opcional:true},
    {id:"segmento", grupo:"Você e a empresa", tipo:"escolha", outro:true, q:"O que a sua empresa faz?",
      ops:["Vende produtos (loja física ou online)","Presta serviço com hora marcada (clínica, estética, salão, consultório)","Presta serviço sem hora marcada (manutenção, reforma, eventos)","Restaurante, lanchonete ou delivery"]},
    {id:"prioridade", grupo:"Você e a empresa", tipo:"escolha", q:"Qual é o seu maior objetivo agora?",
      ops:["Vender mais","Responder os clientes mais rápido","Mais gente conhecer a empresa","Organizar a agenda e os clientes"]},

    // O que você vende
    {id:"servicos", grupo:"O que você vende", tipo:"longo", q:"Quais são os 3 produtos ou serviços que mais vendem, e o preço de cada um?",
      ajuda:"Um por linha, com o preço. Ex.: Limpeza de pele R$ 180 · Tênis de corrida R$ 299 · Pizza grande R$ 65"},
    {id:"margem", grupo:"O que você vende", tipo:"escolha", q:"De cada venda, quanto mais ou menos sobra de lucro pra você?",
      ajuda:"Ex.: vende por R$ 100 e gasta R$ 60 com produto, material e taxa → sobram R$ 40, ou seja, 40%.",
      ops:["Menos de 20%","De 20% a 40%","De 40% a 60%","Mais de 60%","Não sei"]},
    {id:"como_compra", grupo:"O que você vende", tipo:"escolha", outro:true, q:"Hoje, como o cliente costuma comprar de você?",
      ops:["Pelo WhatsApp","Na loja ou no local","Pelo site ou link de pagamento","Marca horário e paga no atendimento"]},
    {id:"retorno", grupo:"O que você vende", tipo:"escolha", q:"O cliente costuma comprar de novo?",
      ops:["Sim, todo mês","A cada 2 ou 3 meses","De vez em quando","Quase nunca"]},

    // Seus números
    {id:"horarios", grupo:"Seus números", tipo:"texto", q:"Em quais dias e horários a empresa atende?", ph:"Ex.: segunda a sábado, das 9h às 18h"},
    {id:"vendas_mes", grupo:"Seus números", tipo:"escolha", q:"Quantas vendas ou atendimentos a empresa faz por MÊS, em média?",
      ajuda:"Some o mês inteiro. Ex.: 3 por semana = cerca de 12 por mês.",
      ops:["Até 20","De 21 a 50","De 51 a 150","Mais de 150"]},
    {id:"contatos_dia", grupo:"Seus números", tipo:"escolha", q:"Quantas pessoas novas chamam a empresa no WhatsApp por DIA?",
      ops:["Até 5","De 6 a 20","De 21 a 50","Mais de 50"]},
    {id:"faturamento", grupo:"Seus números", tipo:"escolha", q:"Quanto a empresa fatura por MÊS, em média?", opcional:true,
      ajuda:"Fica só entre nós. É pra montar uma proposta que se pague e caiba no seu bolso.",
      ops:["Até R$ 5 mil","De R$ 5 mil a 20 mil","De R$ 20 mil a 50 mil","De R$ 50 mil a 100 mil","Mais de R$ 100 mil"]},
    {id:"ano_passado", grupo:"Seus números", tipo:"longo", q:"No ano passado, vocês fizeram promoção de Black Friday ou de Natal? Como foi o resultado?", opcional:true,
      ajuda:"Ex.: dei 20% de desconto e vendi o dobro de uma semana normal. Se não fez, é só escrever que não."},

    // A Black Friday
    {id:"vender_agora", grupo:"A Black Friday", tipo:"longo", q:"Qual produto ou serviço você quer vender mais nessa Black Friday, e qual seria a oferta?",
      ajuda:"Ex.: limpeza de pele de R$ 180 por R$ 129 · leve 2 pares e ganhe 15% · combo família com refri grátis."},
    {id:"meta", grupo:"A Black Friday", tipo:"escolha", q:"Quanto você gostaria de faturar A MAIS na Black Friday?",
      ops:["Até R$ 2 mil","De R$ 2 mil a 5 mil","De R$ 5 mil a 15 mil","Mais de R$ 15 mil","Ainda não sei"]},
    {id:"origem", grupo:"A Black Friday", tipo:"escolha", outro:true, q:"Hoje, de onde vem a maioria dos seus clientes?",
      ops:["Indicação","Instagram","Google","Anúncio pago","Passam em frente"]},
    {id:"anuncio", grupo:"A Black Friday", tipo:"escolha", q:"Você já fez anúncio pago?",
      ops:["Nunca fiz","Já impulsionei post","Já fiz campanha no Instagram, Facebook ou Google"]},
    {id:"lista", grupo:"A Black Friday", tipo:"escolha", q:"Quantos contatos de clientes antigos você tem no WhatsApp?",
      ops:["Nenhum","Até 50","De 50 a 200","De 200 a 1.000","Mais de 1.000"]},
    {id:"cartao", grupo:"A Black Friday", tipo:"escolha", q:"Você tem cartão de crédito pra pagar o anúncio direto no Instagram e no Google?",
      ajuda:"O dinheiro do anúncio não passa pela gente: você paga direto pra plataforma.",
      ops:["Sim","Não, só Pix ou boleto","Não sei"]},
    {id:"investimento", grupo:"A Black Friday", tipo:"escolha", q:"Quanto você pode investir por MÊS pra vender mais (anúncio + nosso trabalho)?",
      ajuda:"Pensa no que cabe no caixa sem apertar. A gente monta a proposta dentro disso.",
      ops:["Até R$ 500","De R$ 500 a 1.000","De R$ 1.000 a 3.000","Mais de R$ 3.000","Ainda não sei"]},
    {id:"obs", grupo:"A Black Friday", tipo:"longo", q:"Quer contar mais alguma coisa sobre a sua empresa?", opcional:true}
  ],

  // Questionário dos blends (página /blends/?c=CODIGO). Respostas ficam na coluna "blends" do mesmo diagnóstico.
  perguntasBlends: [
    {id:"b_quais", grupo:"Sobre os blends", tipo:"longo", q:"Quais blends você faz hoje?", ajuda:"Me diz o nome e pra que serve cada um (celulite, flacidez, manchas…)."},
    {id:"b_tamanhos", grupo:"Sobre os blends", tipo:"texto", q:"Os tamanhos são só 10 ml e 30 ml, ou tem outro?", ph:"Ex.: só 10 ml e 30 ml"},
    {id:"b_precos", grupo:"Sobre os blends", tipo:"texto", q:"Os preços ainda são R$ 55 o de 10 ml e R$ 70 o de 30 ml?", ph:"Ex.: sim, continuam"},
    {id:"b_frasco", grupo:"Sobre os blends", tipo:"texto", q:"Vem em que tipo de frasco?", ph:"Conta-gotas, roll-on, spray…"},
    {id:"b_oleos", grupo:"O que vai dentro", tipo:"longo", q:"Quais óleos você usa em cada blend?", ajuda:"O óleo de base (ex.: semente de uva, amêndoas) e os óleos essenciais."},
    {id:"b_oleos_preco", grupo:"O que vai dentro", tipo:"longo", q:"De cada óleo, quanto vem no frasco que você compra e quanto você paga em reais?", ajuda:"Ex.: \"óleo de amêndoas, frasco de 500 ml, R$ 40\"."},
    {id:"b_gotas", grupo:"O que vai dentro", tipo:"longo", q:"Quanto vai de cada óleo essencial no blend de 10 ml e no de 30 ml?", ajuda:"Pode ser em gotas ou em ml."},
    {id:"b_embalagem", grupo:"Frasco e embalagem", tipo:"longo", q:"O frasco vazio, o rótulo e a embalagem: quanto você pagou e quantas unidades vieram?", ajuda:"Embalagem = saquinho, caixinha, laço. Ex.: \"pacote com 50 frascos, R$ 60\"."},
    {id:"b_frete", grupo:"Frasco e embalagem", tipo:"longo", q:"Você paga frete quando compra os óleos e os frascos?", ajuda:"Se paga, quanto costuma ser o frete e de quanto em quanto tempo você faz essas compras? Ex.: \"uns R$ 25 de frete, compro uma vez por mês\"."},
    {id:"b_tempo", grupo:"Seu tempo", tipo:"texto", q:"Quanto tempo você leva pra preparar um blend?", ajuda:"Do começo até ele estar pronto pra entregar.", ph:"Ex.: uns 15 minutos"},
    {id:"b_vendas", grupo:"Venda", tipo:"longo", q:"Quantos frascos você vende por mês, mais ou menos?", ajuda:"Separa por tamanho se der. Ex.: \"uns 5 de 10 ml e 3 de 30 ml\"."},
    {id:"b_como_vende", grupo:"Venda", tipo:"longo", q:"Você vende mais junto com o atendimento ou separado?", ajuda:"Quando é separado, a cliente busca ou você entrega? Se entrega, quanto você gasta com isso?"},
    {id:"b_sessao", grupo:"Venda", tipo:"longo", q:"Você usa blend dentro dos atendimentos também?", ajuda:"Se usa, quanto de produto vai em cada sessão? Pode ser em ml, em gotas ou em \"meio frasco de 10 ml\", do jeito que for mais fácil medir. E isso já está incluído no preço da sessão ou você cobra à parte?"},
    {id:"b_maquininha", grupo:"Venda", tipo:"texto", q:"Quando a cliente paga no cartão, quanto a maquininha desconta, em %?", ajuda:"Se for diferente no débito e no crédito, me diz os dois.", ph:"Ex.: débito 1,5%, crédito 3,5%"},
    {id:"b_350", grupo:"Pra fechar", tipo:"longo", q:"No formulário você colocou que gasta uns R$ 350. Esse valor é por mês? Com o que você gasta?"},
    {id:"b_obs", grupo:"Pra fechar", tipo:"longo", q:"Quer contar mais alguma coisa sobre os blends?", opcional:true}
  ]
};

// ═══════════════════════════════════════════════════════════════
// Formulários de reunião ADAPTADOS por página: tiram o que a pessoa
// já respondeu na página (vem pronto na mensagem do WhatsApp).
// O nome fica pra identificar a resposta no painel.
// ═══════════════════════════════════════════════════════════════
(function(){
  const tira = ids => DIAG.perguntasEmpresas.filter(p => !ids.includes(p.id));
  // Form Reunião Black (/diagnostico/black/): CIRÚRGICO, só o que falta pra montar a estratégia.
  // A página da Black já manda empresa, o que vende, produto, preço, destino, pacote, adicionais,
  // vendas/mês, valor médio e Black do ano passado. Nome e empresa repetem só pra identificar no painel.
  const G = "Sua Black";
  const pega = id => DIAG.perguntasEmpresas.find(p => p.id === id);
  DIAG.perguntasBlack = [
    Object.assign({}, pega("nome"), {grupo:"Pra identificar"}),
    Object.assign({}, pega("negocio"), {grupo:"Pra identificar"}),
    Object.assign({}, pega("instagram"), {grupo:"Pra identificar"}),
    {id:"oferta", grupo:G, tipo:"longo", q:"Qual é a oferta que você quer fazer na Black?",
      ajuda:"Desconto, bônus, kit ou prazo. Ex.: de R$ 180 por R$ 129 até domingo · leve 2 e ganhe 15% · se ainda não sabe, escreva o que pensou."},
    Object.assign({}, pega("margem"), {grupo:G, q:"De cada venda desse produto, quanto mais ou menos sobra de lucro pra você?"}),
    Object.assign({}, pega("meta"), {grupo:G}),
    {id:"capacidade", grupo:G, tipo:"escolha", q:"Quantos pedidos ou atendimentos A MAIS vocês dão conta por dia?",
      ajuda:"Pensa em estoque, equipe e agenda na semana da Black.",
      ops:["Até 5","De 6 a 20","De 21 a 50","Mais de 50","Não sei"]},
    Object.assign({}, pega("lista"), {grupo:G}),
    {id:"anuncio_cartao", grupo:G, tipo:"escolha", q:"Sobre anúncio pago, qual é a sua situação hoje?",
      ajuda:"O dinheiro do anúncio não passa pela gente: você paga direto pra plataforma, no cartão.",
      ops:["Já anunciei e tenho cartão","Nunca anunciei, mas tenho cartão","Já anunciei, mas não tenho cartão","Nunca anunciei e não tenho cartão"]},
    {id:"preocupacao", grupo:G, tipo:"longo", q:"O que mais te preocupa nessa Black?", opcional:true,
      ajuda:"Ex.: gastar em anúncio e não vender · não dar conta de atender · dar desconto e perder dinheiro."}
  ];
  // Form Reunião Atendimento (/diagnostico/atendimento/): CIRÚRGICO pra Automação de Atendimento.
  // A página /atendimento já manda empresa, o que vende, quem atende e se tem número pra IA.
  // Nome e empresa repetem só pra identificar no painel.
  const A = "Seu atendimento";
  DIAG.perguntasAtendimento = [
    Object.assign({}, pega("nome"), {grupo:"Pra identificar"}),
    Object.assign({}, pega("negocio"), {grupo:"Pra identificar"}),
    Object.assign({}, pega("instagram"), {grupo:"Pra identificar"}),
    Object.assign({}, pega("servicos"), {grupo:A}),
    {id:"perguntas_freq", grupo:A, tipo:"longo", q:"Quais são as 3 perguntas que os clientes mais fazem no WhatsApp?",
      ajuda:"Ex.: quanto custa · tem horário amanhã · parcela no cartão"},
    {id:"desistencia", grupo:A, tipo:"longo", q:"Por que um cliente desiste de comprar?",
      ajuda:"Ex.: acha caro · some depois que recebe o preço · diz que vai pensar"},
    Object.assign({}, pega("contatos_dia"), {grupo:A}),
    {id:"tempo_resposta", grupo:A, tipo:"escolha", q:"Hoje, em quanto tempo vocês costumam responder?",
      ops:["Na hora","Em até 1 hora","Mais de 1 hora","Só no fim do dia ou no outro dia"]},
    {id:"destino", grupo:A, tipo:"escolha", outro:true, q:"Quando o cliente decide comprar, pra onde a IA deve levar ele?",
      ops:["Pra uma pessoa da equipe","Pra página de vendas ou link de pagamento","Pra agenda marcar horário"]},
    {id:"quem_assume", grupo:A, tipo:"texto", q:"Em quais dias e horários tem alguém pra assumir quando o cliente pede uma pessoa?", ph:"Ex.: segunda a sábado, das 9h às 18h"},
    Object.assign({}, pega("meta"), {grupo:A})
  ];
  // Form Reunião Completo (/diagnostico/completo/): a página principal (20 dias grátis) já manda
  // empresa, o que vende, objetivo, faturamento, base de contatos, canais, tráfego pago, gasto e meta.
  DIAG.perguntasCompleto = tira(["negocio","whatsapp","segmento","prioridade","faturamento","lista","origem","anuncio","investimento","vender_agora","meta","ano_passado"])
    .map(p => p.grupo === "A Black Friday" ? Object.assign({}, p, {grupo:"Pra começar"}) : p);
})();
