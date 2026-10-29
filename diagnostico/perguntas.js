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
    // Sobre você
    {id:"nome", grupo:"Sobre você", tipo:"texto", q:"Como você prefere ser chamada?", ph:"Seu nome ou apelido"},
    {id:"negocio", grupo:"Sobre você", tipo:"texto", q:"Qual é o nome do seu espaço ou negócio?", ph:"Ex.: Espaço Bem-Estar"},
    {id:"whatsapp", grupo:"Sobre você", tipo:"tel", q:"Qual é o seu WhatsApp?", ph:"(51) 9 9999-9999", ajuda:"É por ele que eu te mando a proposta."},
    {id:"instagram", grupo:"Sobre você", tipo:"texto", q:"Qual é o @ do seu Instagram?", ph:"@seuperfil", opcional:true},
    {id:"prioridade", grupo:"Sobre você", tipo:"escolha", q:"O que é prioridade pra você agora?",
      ops:["Vender mais, dinheiro no bolso","Ter um Instagram bonito"]},

    // Seu trabalho
    {id:"servicos", grupo:"Seu trabalho", tipo:"longo", q:"Quais serviços e produtos você oferece, e o valor de cada um?",
      ajuda:"Ex.: Massagem relaxante R$ 150 · Kit de óleos R$ 70"},
    {id:"custo", grupo:"Seu trabalho", tipo:"longo", q:"Quanto custa, mais ou menos, pra você fazer cada atendimento?",
      ajuda:"Material, produto, óleo, embalagem… Pode ser um valor aproximado."},
    {id:"avulso", grupo:"Seu trabalho", tipo:"escolha", q:"Você vende algum produto pra cliente comprar sem marcar atendimento?",
      ajuda:"Ex.: um óleo ou kit que ela compra e retira no espaço, ou recebe em casa.",
      ops:["Sim, já vendo","Ainda não, mas quero","Não"]},
    {id:"retorno", grupo:"Seu trabalho", tipo:"escolha", q:"A cliente costuma voltar?",
      ops:["Sim, todo mês","A cada 2 ou 3 meses","De vez em quando","Quase não volta"]},

    // Sua agenda e seus números
    {id:"horarios", grupo:"Sua agenda", tipo:"texto", q:"Quais dias e horários você atende?", ph:"Ex.: terça a sábado, das 9h às 18h"},
    {id:"atend_semana", grupo:"Sua agenda", tipo:"escolha", q:"Quantos atendimentos você faz por dia, em média?",
      ops:["Até 1","De 2 a 3","De 4 a 5","Mais de 5"]},
    {id:"vagos", grupo:"Sua agenda", tipo:"escolha", q:"Quantos horários costumam ficar vagos por dia?",
      ops:["Quase nenhum","1 ou 2","3 ou 4","5 ou mais"]},
    {id:"faturamento", grupo:"Sua agenda", tipo:"escolha", q:"Quanto você fatura por semana, em média?", opcional:true,
      ajuda:"Fica só entre nós. É pra eu montar uma proposta que caiba no seu bolso.",
      ops:["Até R$ 300","De R$ 300 a 800","De R$ 800 a 1.500","Mais de R$ 1.500"]},
    {id:"ano_passado", grupo:"Sua agenda", tipo:"longo", q:"No ano passado, você fez alguma promoção de Black Friday ou de Natal? Como foi?", opcional:true},

    // A campanha
    {id:"vender_agora", grupo:"A campanha", tipo:"longo", q:"Qual serviço ou produto você acha que mais vale a pena vender nessa temporada de Black Friday?",
      ajuda:"Pode ser uma oferta especial pra Black Friday. Ex.: um pacote de sessões, um kit de produtos ou um valor promocional."},
    {id:"origem", grupo:"A campanha", tipo:"escolha", outro:true, q:"Hoje, de onde vem a maioria das suas clientes?",
      ops:["Indicação","Instagram","Passam em frente ao espaço"]},
    {id:"anuncio", grupo:"A campanha", tipo:"escolha", q:"Você já fez anúncio pago?",
      ops:["Nunca fiz","Já impulsionei post","Já fiz campanha no Instagram ou no Google"]},
    {id:"lista", grupo:"A campanha", tipo:"escolha", q:"Você tem contato de clientes antigas no WhatsApp?",
      ops:["Não","Até 50","De 50 a 200","Mais de 200"]},
    {id:"cartao", grupo:"A campanha", tipo:"escolha", q:"Você tem cartão de crédito pra pagar o anúncio direto no Instagram e no Google?",
      ajuda:"O dinheiro do anúncio não passa pela gente: você paga direto pra plataforma.",
      ops:["Sim","Não, só Pix ou boleto","Não sei"]},
    {id:"investimento", grupo:"A campanha", tipo:"texto", q:"Tirando seus gastos fixos, quanto sobra por mês pra você investir no seu negócio e aumentar suas vendas?", ph:"Ex.: R$ 400"},
    {id:"obs", grupo:"A campanha", tipo:"longo", q:"Quer me contar mais alguma coisa?", opcional:true}
  ]
};
