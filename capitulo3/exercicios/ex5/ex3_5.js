/*
Elaborar um programa que leia um número e calcule sua raiz quadrada.
Caso  a  raiz  seja  exata  (quadrados  perfeitos),  informá-la,  caso  contrário,
informe: ‘Não há raiz exata para ..’.

Entrada: ler um número
processamento: calcular raiz quadrada e verificar se é exata (quadrados perfeitos)
saída: informar raíz e se nao tiver exibir uma frase

*/

function calcTime() {
    var inNumber = document.getElementById('inNumber').value;
    var number = Number(inNumber);

    if (inNumber.value == "" || isNaN(number)) {
        alert('Informe um número')
        inNumber.focus();
        return;
    }

    var squareRoot = Math.sqrt(number);
    if (Number.isInteger(squareRoot)) {
        document.getElementById('outResponse').textContent = 'A raíz quadrada de ' + number + ' é ' + squareRoot;
    } else {
        document.getElementById('outResponse').textContent = 'Não há raiz exata para ' + number;
    }

}

document.getElementById('btnShow').addEventListener('click', calcTime)