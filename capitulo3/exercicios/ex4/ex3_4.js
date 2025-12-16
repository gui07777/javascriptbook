/*
Sabendo que o fuso horário da França em relação ao Brasil é de + 5 horas
(no horário de verão na França), elaborar um programa que leia a hora no
Brasil e informe a hora na França.

Entrada: ler hora no brasil
processamento: adicionar 5 horas ao horario do brasil resultando no horario da frança
saída: informar hora na frança

*/

function calcTime() {
    var brazilClock = document.getElementById('inClock').value;
    var brazilClockToNumber = Number(brazilClock);

    if (brazilClockToNumber.value == "" || isNaN(brazilClockToNumber)) {
        alert('Informe a hora no Brasil corretamente')
        brazilClockToNumber.focus();
        return;
    }

    var francaClock = brazilClockToNumber + 5;
    if (francaClock > 24) {
        francaClock = francaClock - 24;
    }
    
    document.getElementById('outResponse').textContent = 'Hora na França: ' + francaClock.toFixed(2);
}

document.getElementById('btnShow').addEventListener('click', calcTime)