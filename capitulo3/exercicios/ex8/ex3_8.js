/*
entrada: ler velocidade permitida e ler velocidade do condutor
processamento:
1) se velocidade for inferior ou igual a permitida sem multa
2) se for até 20% maior que a permitida multa leve
3) se for superior a 20%, multa grave
saída: exibir mensagens
*/

function calcularMulta() {
    var inVelocidadePermitida = document.getElementById('inVelocidadePermitida').value;
    var velocidadePermitida = Number(inVelocidadePermitida);
    var inVelocidadeCondutor = document.getElementById('inVelocidadeCondutor').value;
    var velocidadeCondutor = Number(inVelocidadeCondutor);
    var outResposta = document.getElementById('outResposta');
    var calculoPercentual = velocidadePermitida * (20 / 100);

    if (velocidadeCondutor <= velocidadePermitida) {
        outResposta.textContent = 'Sem multa';
    } else if (velocidadeCondutor > (calculoPercentual + velocidadePermitida)) {
        outResposta.textContent = 'Multa grave';
    } else if (velocidadeCondutor > velocidadePermitida || velocidadeCondutor === (calculoPercentual + velocidadePermitida)) {
        outResposta.textContent = 'Multa leve';
    }
}

document.getElementById('btnVerify').addEventListener('click', calcularMulta);