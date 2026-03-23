var pacientes = [];
var saida = document.querySelector('.outSaida');

function adicionar() {
    var paciente = document.querySelector('.inPaciente').value;
    pacientes.push(paciente);
    for (let i = 0; i < pacientes.length; i++) {
        var posicao = i + 1;
        saida.innerHTML += `${posicao}. ${pacientes[i]}<br>`;
    }
}

document.querySelector('.btnAdicionar').addEventListener('click', adicionar)