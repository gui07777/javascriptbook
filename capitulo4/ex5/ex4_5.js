function processar() {
    console.log('funcionando')
    var descricao = document.getElementById('inDescricao').value;
    var inValor = document.getElementById('inValor').value;
    var valor = Number(inValor);
    var outListaContas = document.getElementById('outListaContas');
    var outTotal = document.getElementById('outTotal');
    var count = 0;

    if (descricao === '' || valor == 0 || isNaN(inValor)) {
        alert('Preencha corretamente os campos')
        return;
    }

    do {
        outListaContas.textContent = `${descricao} - R$: ${valor.toFixed(2)}`;
        count++;
        outTotal.textContent = `${count} Conta(s) - Total:`;
        break;
    } while (descricao && valor)
}

document.getElementById('btRegistrar').addEventListener('click', processar)