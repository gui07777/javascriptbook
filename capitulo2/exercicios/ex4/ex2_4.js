function calcular() {
    var preco = document.getElementById('inPreco').value;
    var consumo = document.getElementById('inConsumo').value;
    var total = (preco/1000) * consumo;
    document.getElementById('outResposta').textContent = "Valor a pagar: R$ " + total.toFixed(2);
}

document.getElementById('btnCalcular').addEventListener('click', calcular)