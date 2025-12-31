

// pega os botões
const botoes = document.querySelectorAll(".btn-livro");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const livro = botao.getAttribute("data-livro");
        window.location.href = `livros/${livro}.html`;
    });
});

