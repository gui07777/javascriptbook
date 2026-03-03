function mostrar() {
    var numeroChinchilas = Number(document.querySelector('.inChinchilas').value);

    if (numeroChinchilas < 2) {
        alert('É obrigatório no mínimo UM CASAL de chinchilas! Tente novamente.');
        return;
    }

    var numeroAnos = Number(document.querySelector('.inAnos').value);
    var saida = document.querySelector('.outSaida');
    var formato = `<h2>1° ano: ${numeroChinchilas} Chinchilas</h2><br>`;

    for (let i = 2; i <= numeroAnos; i++) {
        formato += `<h2>${i}° ano: ${numeroChinchilas *= 3} Chinchilas</h2><br>`;
    }

    saida.innerHTML = formato
}

document.querySelector('.btnMostrar').addEventListener('click', mostrar)