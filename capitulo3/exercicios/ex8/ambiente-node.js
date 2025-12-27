var velocidadePermitida = 80;
var velocidadeCondutor = 90;
var calculoPercentual = velocidadePermitida * (20 / 100);

if (velocidadeCondutor <= velocidadePermitida) {
    console.log('Sem multa');
} else if (velocidadeCondutor > (calculoPercentual + velocidadePermitida)) {
    console.log('Multa grave');
} else if (velocidadeCondutor > velocidadePermitida || velocidadeCondutor === (calculoPercentual + velocidadePermitida)) {
    console.log('Multa leve');
}