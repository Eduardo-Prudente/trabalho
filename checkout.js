// Carrinho

function calcularSubtotal(itens) {
    let subtotal = 0;

    for (let i = 0; i < itens.length; i++) {
        if (itens[i].quantidade > 0) {
            subtotal += itens[i].preco * itens[i].quantidade;
        }
    }

    return subtotal;
}

function contarItens(itens) {
    let totalItens = 0;

    for (let i = 0; i < itens.length; i++) {
        if (itens[i].quantidade > 0) {
            totalItens += itens[i].quantidade;
        }
    }

    return totalItens;
}


// Cupons

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

    if (preco < 0) {
        preco = 0;
    }

    return preco;
}

function finalizarCompra(subtotal, cupom) {
    let total = aplicarCupom(cupom, subtotal);

    return {
        subtotal: subtotal,
        total: total,
        desconto: subtotal - total
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

console.log("Quantidade de itens:", contarItens(itens));
console.log("Subtotal:", calcularSubtotal(itens));

console.log("DESC10:", aplicarCupom("DESC10", 250));
console.log("DESC20:", aplicarCupom("DESC20", 250));
console.log("FRETEGRATIS:", aplicarCupom("FRETEGRATIS", 250));
console.log("Cupom inválido:", aplicarCupom("ABC123", 250));
console.log("Finalizar compra:", finalizarCompra(250, "DESC10"));
