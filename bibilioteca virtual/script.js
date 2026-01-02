]document.querySelectorAll('.btn-livro').forEach(botao => {
  botao.addEventListener('click', () => {
    const livro = botao.dataset.livro;

    // Base do site (funciona no GitHub Pages e no Live Server)
    const base = window.location.origin + '/livraria-cibernetica';

    window.location.href = `${base}/livros/${livro}.html`;
  });
});

