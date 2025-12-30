function mostrarTabuada() {
    var inNumero = document.getElementById('inNumero').value;
    var numero = Number(inNumero);
    
    for (let i = 1; i < 11; i++) {
        var resultado = numero * i;
        document.getElementById('outResposta').innerHTML += `<p>${numero} x ${i} = ${resultado}<br></p>`;
    }
}

document.getElementById('btnMostrar').addEventListener('click', mostrarTabuada)