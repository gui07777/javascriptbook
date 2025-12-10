function calcular() {
    var inValor = document.getElementById('inValor').value;
    var inTempo = document.getElementById('inTempo').value;
    var valor = (inValor * inTempo) / 15;
    document.getElementById('outResposta').textContent = "Valor a pagar R$: " + valor.toFixed(2);
}

document.getElementById('btnCalcular').addEventListener('click', calcular);

//falta ajustar o calculo