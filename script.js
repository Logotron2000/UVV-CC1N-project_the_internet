const caixas = document.querySelectorAll('.decada');

caixas.forEach(caixa => {
  caixa.addEventListener('click', () => {
    caixa.classList.toggle('open');
  });
});