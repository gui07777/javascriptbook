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
        alert('Informe um valor de verdade')
        inValue.focus();
        return;
    }

    var notas100 = value / 100; //470 / 100 = 4 e sobra 70
    var resto = notas100 % 100; //70
    var notas50 = resto / 50; // 70 / 50 = 1 sobra 20
    resto = notas50 % 50;
    var notas10 = value / 10;

    if (value % 10 == 0) {
        document.getElementById('outResponse').textContent = 'A raíz quadrada de ' + number + ' é ' + squareRoot;
    } else {
        document.getElementById('outResponse').textContent = 'Não há raiz exata para ' + number;
    }

}

document.getElementById('btnShow').addEventListener('click', calcNotes)