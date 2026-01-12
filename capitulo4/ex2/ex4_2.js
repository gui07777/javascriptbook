function processar() {
    var inNumero = document.getElementById('inNumero').value;
    var numero = Number(inNumero);
    var outResposta = document.getElementById('outResposta');
    outResposta.textContent = `Entre ${numero} e 1: `;
    for (let i = numero; i > 0; i--) {
        outResposta.textContent += `${i}, `;
    }
}

document.getElementById('btnProcessar').addEventListener('click', processar)