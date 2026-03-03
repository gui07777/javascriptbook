function repetir() {
    var fruta = document.querySelector('.inFruta').value;
    var numero = Number(document.querySelector('.inNumero').value);
    var saida = document.querySelector('.outSaida');
    var numeroReduzido = numero - 1;
    var formato = '';

    for (let i = 0; i < numeroReduzido; i++) {
        formato += fruta + ' * ';
    }

    formato += fruta
    saida.textContent = formato
}

document.querySelector('.btnRepetir').addEventListener('click', repetir)