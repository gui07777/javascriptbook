var pacientes = [];
var outLista = document.querySelector('.outLista');
var outAtendimento = document.querySelector('#outAtendimento');

function adicionar() {
    var paciente = document.querySelector('.inPaciente').value;
    pacientes.push(paciente);
    var lista = '';
    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}`;
    }
    outLista.innerHTML = lista + '<br>';
}

document.querySelector('.btnAdicionar').addEventListener('click', adicionar)

function atender() {
    var paciente = document.querySelector('.inPaciente').value;
    if (pacientes.includes(paciente)) {
        outAtendimento.textContent = paciente;
        pacientes.pop(paciente)
    } else {
        outAtendimento.textContent = 'Não há nenhum paciente sendo atendido!'
    }
}

document.querySelector('.btnAtender').addEventListener('click', atender)

function urgencia() {
    var paciente = document.querySelector('.inPaciente').value;
    if (pacientes.includes(paciente)) {
        outAtendimento.textContent = paciente;
    } else {
        outAtendimento.textContent = 'Não há nenhum paciente sendo atendido com urgência!'
    }
}

document.querySelector('.btnUrgencia').addEventListener('click', urgencia)
