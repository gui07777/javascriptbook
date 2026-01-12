function processar() {
    var inNumero = document.getElementById('inNumero').value;
    var numero = Number(inNumero);

    if (inNumero == 0 || isNaN(numero) || inNumero === '') {
        alert('Digite um número válido');
        inNumero.focus();
        return;
    }

    var outResposta = document.getElementById('outResposta');
    outResposta.textContent = `Entre ${numero} e 1: `;
    for (let i = numero; i > 1; i--) {
        outResposta.textContent += `${i}, `;
    }
    outResposta.textContent += `1.`
}

// function processar() {
//     var inNumero = document.getElementById('inNumero').value;
//     var numero = Number(inNumero);
//     var resposta = `Entre ${numero} e 1: `;

//     if (inNumero == 0 || isNaN(numero) || inNumero === '') {
//         alert('Digite um número válido');
//         inNumero.focus();
//         return;
//     }

//     var outResposta = document.getElementById('outResposta');
//     for (let i = numero; i > 1; i--) {
//         resposta = `${resposta + i}, `;
//     }
//     outResposta.textContent = resposta + '1.'
// }

document.getElementById('btnProcessar').addEventListener('click', processar)