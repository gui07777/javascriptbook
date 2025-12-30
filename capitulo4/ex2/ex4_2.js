class Desc {

    constructor() {
        this.inNumero = document.getElementById('inNumero').value;
        this.numero = Number(this.inNumero);
        this.outResposta = document.getElementById('outResposta');
        this.resultado = 0;
    }

    processar() {
        for (let i = this.numero; i > 1; i--) {
            this.resultado = this.numero - ;
        }
    }

    exibir() {
        this.outResposta.textContent = this.resultado;
    }

    executar() {
        this.processar();
        this.exibir();
    }

}

function executar() {
    var desc = new Desc();
    desc.executar();
}