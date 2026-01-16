function preencher() {
    var inQuantidade = document.getElementById('inQuantidade');
    var quantidade = Number(inQuantidade.value);
    var outSaida = document.getElementById('outSaida');
    var simbolo = '*';

    for (let i = 0; i < quantidade;) {
        quantidade++;
        outSaida.textContent += simbolo;
        break;
    }
}

document.getElementById('btnPreencher').addEventListener('click', preencher)