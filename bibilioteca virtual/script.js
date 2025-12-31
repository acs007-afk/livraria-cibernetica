
// Navegação dos livros (compatível com GitHub Pages e Live Server)
 document.querySelectorAll('.btn-livro').forEach(botao => {  botao.addEventListener('click', () => {  
      const livro = botao.dataset.livro;  
      window.location.href = `./livros/${livro}.html`;
  });
});