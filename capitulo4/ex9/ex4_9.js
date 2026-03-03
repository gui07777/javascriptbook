function verificar() {
    var numero = Number(document.querySelector('.inNumero').value);
    var saida = document.querySelector('.outSaida');
    var formato = `Divisores do ${numero}: `;
    var soma = 0;

    for (let i = 0; i < numero; i++) {
        if (numero % i == 0) {
            soma += i;
            formato += `${i}, `
        }
    }

    formato += `(Soma ${soma})`;
    saida.textContent = formato;

    if (soma === numero) {
        document.querySelector('.outSaida2').textContent = `${numero} É Um Número Perfeito`
    } else {
        document.querySelector('.outSaida2').textContent = `${numero} Não É Um Número Perfeito`
    }

}

document.querySelector('.btnVerificar').addEventListener('click', verificar)