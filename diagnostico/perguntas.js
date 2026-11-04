// ═══════════════════════════════════════════════════════════════
// PERGUNTAS DO DIAGNÓSTICO (usadas pelo formulário e pelo painel)
// tipo: texto | tel | longo | escolha (outro:true abre campo livre)
// ═══════════════════════════════════════════════════════════════
window.DIAG = {
  supabaseUrl: "https://gopqajnivmbxjqsiznqi.supabase.co",
  supabaseKey: "sb_publishable_YBF0cSQt0IlTqVhCyRlduQ_ij2CHBZ5",
  tabela: "acelera_diagnostico",
  whatsapp: "5551982276577",
  perguntas: [
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
  ]
};
