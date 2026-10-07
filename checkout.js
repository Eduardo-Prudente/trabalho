// Carrinho

function calcularSubtotal(itens) {
    let subtotal = 0;

    for (let i = 0; i < itens.length; i++) {
        subtotal += itens[i].preco * itens[i].quantidade;
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
