var value = 280;
var quantidadeNotas100 = 0;
var quantidadeNotas50 = 0;
var quantidadeNotas10 = 0;

var resto;

var notas100 = value / 100;
if (resto === 0) {
    resto = notas100 % 100;
    quantidadeNotas100++;
    console.log('Notas de R$ 100: ' + quantidadeNotas100);
}

if (resto === 0) {
    var notas50 = resto / 50;
    resto = notas50 % 50;
    quantidadeNotas50++;
    console.log('Notas de R$ 50: ' + quantidadeNotas50);
}

if (resto === 0) {
    var notas10 = resto / 10;
    resto = notas10 % 10;
    quantidadeNotas10++;
    console.log('Notas de R$ 10: ' + quantidadeNotas10++);
}