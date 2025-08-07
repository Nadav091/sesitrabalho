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