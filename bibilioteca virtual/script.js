// Navegação dos livros - compatível com GitHub Pages e Live Server
document.querySelectorAll('.btn-livro').forEach(botao => {
  botao.addEventListener('click', () => {
    const livro = botao.dataset.livro;

    // Descobre se está no GitHub Pages
    const isGithubPages = window.location.hostname.includes('github.io');

    // Nome do repositório (IMPORTANTE)
    const repo = '/livraria-cibernetica';

    if (isGithubPages) {
      window.location.href = `${repo}/livros/${livro}.html`;
    } else {
      window.location.href = `./livros/${livro}.html`;
    }
  });
});

