// === BLOCO 1: CONFIGURAÇÃO ===
// Número de uma PESSOA (não a IA) pra tirar dúvidas.
const AV_HUMANO = '5551982276577';

// === BLOCO 2: BOTÃO FLUTUANTE DO WHATSAPP ===
(function () {
  const a = document.getElementById('wpp');
  if (!a) return;
  const msg = a.dataset.msg || 'Oi! Estou vendo a página da IA de atendimento e queria tirar uma dúvida.';
  a.href = `https://wa.me/${AV_HUMANO}?text=${encodeURIComponent(msg)}`;
})();

// === BLOCO 3: SEÇÕES APARECEM AO ROLAR (uma vez só) ===
(function () {
  const itens = document.querySelectorAll('.revela');
  if (!('IntersectionObserver' in window)) { itens.forEach(e => e.classList.add('on')); return; }
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  itens.forEach(e => io.observe(e));
})();

// === BLOCO 4: FRASE ACENDE PALAVRA POR PALAVRA ===
(function () {
  const f = document.getElementById('frase');
  if (!f) return;
  f.innerHTML = f.textContent.trim().split(/\s+/).map(p => `<span class="p">${p}</span>`).join(' ');
  const ps = [...f.querySelectorAll('.p')];
  let pedido = false;
  function atualizar() {
    pedido = false;
    const linha = innerHeight * 0.7;
    ps.forEach(p => p.classList.toggle('on', p.getBoundingClientRect().top < linha));
  }
  addEventListener('scroll', () => { if (!pedido) { pedido = true; requestAnimationFrame(atualizar); } }, { passive: true });
  atualizar();
})();
