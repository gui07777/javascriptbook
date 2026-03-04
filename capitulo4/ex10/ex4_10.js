function criar() {
    var quantidadeLinhas = Number(document.getElementById('inLinhas').value);
    var outSaida = document.getElementById('outSaida');
    var simbolo = '*';

    for (let i = 0; i < quantidadeLinhas; i++) {
        outSaida.innerHTML += `${simbolo}<br>`
    }

}

document.getElementById('btnCriar').addEventListener('click', criar)

/*
cada vez que o laço rodar (cada i) é uma linha
então roda primeira linha o inner gera um simbolo
roda a segunda, o inner gera 2
*/