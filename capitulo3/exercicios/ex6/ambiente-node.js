var value = 280;
var quantidadeNotas100 = Math.floor(value / 100);

console.log('Notas de R$ 100: ' + quantidadeNotas100)

var resto = value % 100;

if (resto > 0) {
    var quantidadeNotas50 = Math.floor(resto / 50);
    console.log('Notas de R$ 50: ' + quantidadeNotas50)
    resto = resto % 50;
    if (resto > 0) {
        var quantidadeNotas10 = Math.floor(resto / 10);
        console.log('Notas de R$ 10: ' + quantidadeNotas10)
    }
}