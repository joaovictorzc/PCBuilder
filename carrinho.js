// Função para obter os itens do carrinho armazenados no localStorage
function obterCarrinho() {
    let carrinho = localStorage.getItem('carrinho');
    return carrinho ? JSON.parse(carrinho) : []; // Retorna os itens do carrinho ou um array vazio
}

// Função para salvar os itens do carrinho no localStorage
function salvarCarrinho(carrinho) {
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Salva o carrinho no localStorage
}

// Função para exibir os itens do carrinho
function exibirCarrinho() {
    const carrinhoDiv = document.getElementById('carrinho');
    carrinhoDiv.innerHTML = ''; // Limpa a lista de itens

    const carrinho = obterCarrinho();

    // Se o carrinho estiver vazio
    if (carrinho.length === 0) {
        carrinhoDiv.innerHTML = '<p>Seu carrinho está vazio.</p>';
    } else {
        // Exibe os itens do carrinho
        carrinho.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item-carrinho');
            itemDiv.innerHTML = `
                <span>${item.nome} - R$ ${item.preco}</span>
                <button onclick="removerItem(${index})">Remover</button>
            `;
            carrinhoDiv.appendChild(itemDiv);
        });
    }

    // Calcula o total
    const total = carrinho.reduce((acc, item) => acc + item.preco, 0);
    const totalDiv = document.getElementById('total');
    totalDiv.innerHTML = `<strong>Total: R$ ${total}</strong>`;
}

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(nome, preco) {
    const carrinho = obterCarrinho();
    carrinho.push({ nome, preco });
    salvarCarrinho(carrinho); // Salva os itens no localStorage
    exibirCarrinho(); // Atualiza a exibição do carrinho
}

// Função para remover um item do carrinho
function removerItem(index) {
    const carrinho = obterCarrinho();
    carrinho.splice(index, 1); // Remove o item pelo índice
    salvarCarrinho(carrinho); // Salva novamente no localStorage
    exibirCarrinho(); // Atualiza a exibição do carrinho
}

// Função para continuar comprando
function continuarComprando() {
    window.location.href = 'Pré.html'; // Redireciona para a página de PCs Pré-Montados
}

// Função para finalizar a compra
function finalizarCompra() {
    alert('Compra Finalizada!'); // Aqui você pode redirecionar para uma página de checkout ou exibir uma mensagem
}

// Chama a função de exibir carrinho quando a página carrega
window.onload = exibirCarrinho;
