function criar() {
    var quantidadeLinhas = Number(document.getElementById('inLinhas').value);
    var outSaida = document.getElementById('outSaida');
    var simbolo = '*';

    for (let i = 0; i < quantidadeLinhas;) {
        i++;
        outSaida.innerHTML += '<br>'
        for (let x = 0; x < i; x++) {
            outSaida.innerHTML += `${simbolo}`
        }
    }

}

document.getElementById('btnCriar').addEventListener('click', criar)