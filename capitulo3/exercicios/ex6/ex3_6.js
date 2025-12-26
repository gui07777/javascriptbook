/*
Em um determinado momento do dia, apenas notas de 10, 50 e 100 estão
disponíveis em um terminal de caixa eletrônico. Elaborar um programa que
leia um valor de saque de um cliente, verique sua validade (ou seja, se pode
ser pago com as notas disponíveis) e informe o número mínimo de notas de
100, 50 e 10 necessárias para pagar esse saque.

Entrada: ler valor que o cliente quer sacar
processamento: verificar se pode ser sacado com as notas disponíveis
saída: informar o numero minimo de notas de 100, 50 e 10 necessárias para conseguir sacar

*/

function calcNotes() {
    var inValue = document.getElementById('inValue').value;
    var value = Number(inValue);

    if (inValue == "" || isNaN(value)) {
        alert('Falha no processo. Tente novamente!')
        inValue.focus();
        return;
    }

    var quantidadeNotas100 = 0;
    var quantidadeNotas50 = 0;
    var quantidadeNotas10 = 0;

    var resto;

    var notas100 = value / 100;
    resto = notas100 % 100;

    if (resto === 0) {
        quantidadeNotas100++;
        document.getElementById('outResponse1').textContent = 'Notas de R$ 100: ' + quantidadeNotas100;
        var notas50 = resto / 50;
        resto = notas50 % 50;
        if (resto === 0) {
            quantidadeNotas50++;
            document.getElementById('outResponse2').textContent = 'Notas de R$ 50: ' + quantidadeNotas50;
            var notas10 = resto / 10;
            resto = notas10 % 10;
            if (resto === 0) {
                quantidadeNotas10++;
                document.getElementById('outResponse3').textContent = 'Notas de R$ 10: ' + quantidadeNotas10++;
            }
        }
    }

}

document.getElementById('btnShow').addEventListener('click', calcNotes)

//incompleto