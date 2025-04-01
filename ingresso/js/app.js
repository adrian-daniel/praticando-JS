let totalPista = 100;
let totalSuperior = 200;
let totalInferior = 400;

function atualizar() {
    document.getElementById('qtd-pista').innerHTML = `${totalPista}`;
    document.getElementById('qtd-superior').innerHTML = `${totalSuperior}`;
    document.getElementById('qtd-inferior').innerHTML = `${totalInferior}`;
}

atualizar();


function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt (document.getElementById('qtd').value);

    if (tipo == 'inferior') {
        comprarInferior (quantidade);
    } else {
        if (tipo == 'superior') {
            comprarSuperior (quantidade);
        } else {
            comprarPista (quantidade);
       }     
    }

    atualizar();
}

function comprarInferior (quantidade) {
    if (quantidade <= totalInferior) {
        totalInferior = totalInferior - quantidade;
        alert('Compra realizada com sucesso!');
    } else {
        alert ('Não há ingressos suficiente');
    }
}

function comprarSuperior (quantidade) {
    if (quantidade <= totalSuperior) {
        totalSuperior = totalSuperior - quantidade;
        alert('Compra realizada com sucesso!');
    } else {
        alert ('Não há ingressos suficiente');
    }
}

function comprarPista (quantidade) {
    if (quantidade <= totalPista) {
        totalPista = totalPista - quantidade;
        alert('Compra realizada com sucesso!');
    } else {
        alert ('Não há ingressos suficiente');
    }
}


