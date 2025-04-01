let carrinhoTotal;
limpar();

function adicionar() {
    //Atualizar valor total
    let produtoEscolhido = document.getElementById('produto').value;
    let produto = produtoEscolhido.split('-')[0];
    let valor = produtoEscolhido.split('R$')[1];
    let qtd = document.getElementById('quantidade').value;
    let valorTotal = qtd * valor;
    let lista = document.getElementById('lista-produtos');
    lista.innerHTML = lista.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${qtd}x</span> ${produto} <span class="texto-azul">R$${valorTotal}</span>
        </section>`;
    carrinhoTotal = carrinhoTotal + valorTotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${carrinhoTotal}`
    document.getElementById('quantidade').value = '';

    console.log(valor, valorTotal, qtd, lista, carrinhoTotal);


}

function limpar() {
    carrinhoTotal = 0;   
    document.getElementById('lista-produtos').innerHTML = ''; 
    document.getElementById('valor-total').textContent = 'R$ 0';     
}