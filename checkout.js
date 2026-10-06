// Carrinho

function calcularSubtotal(itens) {
    let subtotal = 0;

    for (let i = 0; i < itens.length; i++) {
        subtotal += itens[i].preco * itens[i].quantidade;
    }

    return subtotal;
}

function calcularItens(itens) {
    let totalItens = 0;

    for (let i = 0; i < itens.length; i++) {
        totalItens += itens[i].quantidade;
    }

    return totalItens;
}


// Cupom 

function aplicarCupom(cupom, subtotal) {
    let preco = subtotal;

    if (cupom === "DESC10") {
        preco = subtotal * 0.90;

    } else if (cupom === "DESC20") {
        if (subtotal >= 200) {
            preco = subtotal * 0.80;
        }

    } else if (cupom === "FRETEGRATIS") {
        preco = subtotal - 15;
    }

    // Valor não negativo
    if (preco < 0) {
        preco = 0;
    }

    return preco;
}


// Checkout

function finalizarCompra(itens, cupom) {
    let subtotal = calcularSubtotal(itens);
    let total = aplicarCupom(cupom, subtotal);
    let desconto = subtotal - total;

    return {
        subtotal: subtotal,
        desconto: desconto,
        total: total
    };
}


// Testes

let itens = [
    {
        nome: "Camiseta",
        preco: 50,
        quantidade: 2
    },

    {
        nome: "Tênis",
        preco: 150,
        quantidade: 1
    }
];


console.log("Quantidade de itens:", calcularItens(itens));

console.log("Subtotal:", calcularSubtotal(itens));

console.log(
    "Cupom DESC10:",
    finalizarCompra(itens, "DESC10")
);

console.log(
    "Cupom FRETEGRATIS:",
    finalizarCompra(itens, "FRETEGRATIS")
);

console.log(
    "Cupom inválido:",
    finalizarCompra(itens, "ABC123")
);