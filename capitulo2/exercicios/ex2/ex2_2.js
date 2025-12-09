function mostrarResultado() {
    var titulo = document.getElementById('inTitulo').value;
    var duracao = document.getElementById('inDuracao').value;
    var horas = duracao / 60;
    var minutosRestantes = duracao % 60;
    document.getElementById('outTitulo').textContent = 'Título do filme: ' + titulo;
    document.getElementById('outDuracao').textContent = " Duração: " + horas.toFixed(0) + " horas e " + minutosRestantes + " minutos";
}

var exibir = document.getElementById('btnExibir');
exibir.addEventListener('click', mostrarResultado)