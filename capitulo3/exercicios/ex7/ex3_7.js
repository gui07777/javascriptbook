function verifyNumber() {
    var inNumber = document.getElementById('inNumber').value;
    var number = Number(inNumber);

    if (number % 2 == 0) {
        document.getElementById('outResponse').textContent = 'Resposta: ' + number + ' é Par';
    } else {
        document.getElementById('outResponse').textContent = 'Resposta: ' + number + ' é Ímpar';
    }
}

document.getElementById('btnVerify').addEventListener('click', verifyNumber);