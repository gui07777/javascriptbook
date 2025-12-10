function calcular() {
    var inMedicamento = document.getElementById('inMedicamento').value;
    var inPreco = document.getElementById('inPreco').value;
    var preco = Number(inPreco);
    var soma = preco + preco;
    document.getElementById('outTitulo').textContent = "Promoção de " + inMedicamento;
    document.getElementById('outPromocao').textContent = "Leve 2 por apenas " + Math.floor(soma) + ".00";
}

document.getElementById('btnCalcular').addEventListener('click', calcular)