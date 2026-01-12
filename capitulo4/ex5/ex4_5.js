var numContas = 0;
var valTotal = 0;
var resposta = '';

function processar() {
    var descricao = document.getElementById('inDescricao').value;
    var inValor = document.getElementById('inValor').value;
    var valor = Number(inValor);
    var outListaContas = document.getElementById('outListaContas');
    var outTotal = document.getElementById('outTotal');

    if (descricao === '' || valor == 0 || isNaN(inValor)) {
        alert('Preencha corretamente os campos')
        return;
    }

    resposta += `${descricao} - R$: ${valor.toFixed(2)} \n ------------------------------- \n`
    numContas++;
    valTotal += valor;
    resposta += `${numContas} Conta(s) - Total: ${valTotal}`
    outTotal.textContent = resposta;
}

document.getElementById('btRegistrar').addEventListener('click', processar)