class Produto{

    constructor (){
        this.id = 0;
        this.nomeProduto = '';
        this.valor = 0
    }

    adicionar ()  {
        console.log('Produto adicionado!')
    }
    excluir () {
        console.log ('Produto deletado')
    }
}

var produto = new Produto()