function processamento() {
    var nome = document.getElementById('inNome').value;
    var inNota1 = document.getElementById('inNota1').value;
    var inNota2 = document.getElementById('inNota2').value;
    var nota1 = Number(inNota1);
    var nota2 = Number(inNota2);
    var media = (nota1 + nota2) / 2;
    var outMedia = document.getElementById('outMedia');
    var outSituacao = document.getElementById('outSituacao');

    if (media >= 7) {
        outMedia.textContent = "Média das notas: " + media;
        outSituacao.textContent = "Parabéns " + nome + "! Você foi aprovado(a)";
        outSituacao.style.color = 'blue';
    } else {
        outMedia.textContent = "Média das notas: " + media;
        outSituacao.textContent = "Ops " + nome + " ... Você foi reprovado(a)";
        outSituacao.style.color = 'red';
    }
}

document.getElementById('btnProcessar').addEventListener('click', processamento);