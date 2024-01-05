let totalGeral;
limpar();

function adicionar(id) {
    //recuperar os valores nome do prodruto, quantidade e e valor 
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    if(quantidade = ' ' || '0'){
        alert('quantidade invalida');
        return;
    }

    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    
    //calcular o preço, o nosso subtotal
    let preco =  quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');

    //adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
</section>`


    //atualizar valor total da compra
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;

    //zerar quantidade
    document.getElementById('quantidade').value = 0; 
}

function limpar(id){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}