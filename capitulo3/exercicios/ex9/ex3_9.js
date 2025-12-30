/*
entrada
1) ler o valor das moedas

processamento (calculo do valor por minutos)
1) verificar se o valor é menor que o valor de tempo mínimo e se for exibir insuficiente
2) calcular tempo de permanência do veículo no local seguindo a tabela

saída
exibir tempo e troco se houver troco
*/

function verificarSituacao() {
    var inValor = document.getElementById('inValor').value;
    var valor = Number(inValor);
    var outTempo = document.getElementById('outTempo');
    var outTroco = document.getElementById('outTroco');

    if (valor < 1) {
        alert('Valor insuficiente');
        return;
    }

    if (valor >= 1 && valor < 1.75) {
        outTempo.textContent = 'Tempo: 30 min';
        var troco = valor - 1;
        if (troco > 0) {
            outTroco.textContent = 'Troco R$: ' + troco.toFixed(2);
        } else {
            outTroco.textContent = '';
        }
    } else if (valor >= 1.75 && valor < 3) {
        outTempo.textContent = 'Tempo: 60 min';
        var troco = valor - 1.75;
        if (troco > 0) {
            outTroco.textContent = 'Troco R$: ' + troco.toFixed(2);
        } else {
            outTroco.textContent = '';
        }
    } else if (valor >= 3) {
        outTempo.textContent = 'Tempo: 120 min';
        var troco = valor - 3;
        if (troco > 0) {
            outTroco.textContent = 'Troco R$: ' + troco.toFixed(2);
        } else {
            outTroco.textContent = '';
        }
    }

}

document.getElementById('btnConfirmar').addEventListener('click', verificarSituacao)