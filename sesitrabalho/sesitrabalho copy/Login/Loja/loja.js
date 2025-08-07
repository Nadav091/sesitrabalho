window.addEventListener("load", () => {
    const titulo = document.querySelector(".titulo-loja");
    titulo.innerHTML = "🎉 Bem-vindo à Nossa Loja! 🎉";
});
async function carregarProdutos() {
    try {
        const response = await fetch('../dados/produtos.json');
        const produtos = await response.json();
        const container = document.getElementById('produtos-container');

        produtos.forEach(produto => {
            const card = document.createElement('div');
            card.classList.add('produto');

            card.innerHTML = `
                <img src="../${produto.imagem}" alt="${produto.nome}">
                <h2>${produto.nome}</h2>
                <p>${produto.descricao}</p>
                <strong>R$ ${produto.preco.toFixed(2)}</strong>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }
}

carregarProdutos();
document.addEventListener("DOMContentLoaded", () => {
    const produtos = document.querySelectorAll(".produto");

    produtos.forEach(produto => {
        produto.addEventListener("click", () => {
            produto.classList.add("ativo");

            setTimeout(() => {
                produto.classList.remove("ativo");
            }, 300); // volta ao normal depois de 300ms
        });
    });
});