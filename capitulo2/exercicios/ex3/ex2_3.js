function calcular() {
    var veiculo = document.getElementById('inVeiculo').value;
    var preco = document.getElementById('inPreco').value;
    var valorEntrada = preco * (50 / 100);
    var parcelas = valorEntrada / 12;
    document.getElementById('outVeiculo').textContent = "Promoção: " + veiculo;
    document.getElementById('outEntrada').textContent = "Entrada de R$: " + valorEntrada.toFixed(2);
    document.getElementById('outParcelas').textContent = "+ 12x R$: " + parcelas.toFixed(2);
}

document.getElementById('btnCalcular').addEventListener('click', calcular);