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

    if (valor < 1) {
        alert('Valor insuficiente');
        return;
    }

    if (valor === 1) {
        
    }
}