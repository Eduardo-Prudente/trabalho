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


// Testes

let subtotal = 250;

console.log("DESC10:", aplicarCupom("DESC10", subtotal));
console.log("DESC20:", aplicarCupom("DESC20", subtotal));
console.log("FRETEGRATIS:", aplicarCupom("FRETEGRATIS", subtotal));
console.log("Cupom inválido:", aplicarCupom("ABC123", subtotal));
console.log("DESC20 abaixo de R$200:", aplicarCupom("DESC20", 100));
function finalizarCompra(subtotal, cupom) {
    let total = aplicarCupom(cupom, subtotal);

    return {
        subtotal: subtotal,
        total: total,
        desconto: subtotal - total
    };
}


console.log("Finalizar compra:", finalizarCompra(250, "DESC10"));
console.log("Finalizar com cupom inválido:", finalizarCompra(250, "ABC123"));
