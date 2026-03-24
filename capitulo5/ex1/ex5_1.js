var pacientes = [];
var outLista = document.querySelector('.outLista');

function adicionar() {
    var paciente = document.querySelector('.inPaciente').value;
    pacientes.push(paciente);
    var lista = '';
    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]} \n`;
    }
    outLista.textContent = lista;
}

document.querySelector('.btnAdicionar').addEventListener('click', adicionar)