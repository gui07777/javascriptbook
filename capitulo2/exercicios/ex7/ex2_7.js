function calcular() {
    var inProduto = document.getElementById('inProduto').value;
    var inPreco = document.getElementById('inPreco').value;
    var preco = Number(inPreco);
    var desconto = preco - (preco * (50 / 100));
    var total = preco + preco + desconto;
    document.getElementById('outTitulo').textContent = inProduto + " - Promoção: Leve 3 por R$ " + total.toFixed(2);
    document.getElementById('outPromocao').textContent = "O 3° produto custa apenas R$ " + desconto.toFixed(2);
}

document.getElementById('btnCalcular').addEventListener('click', calcular);