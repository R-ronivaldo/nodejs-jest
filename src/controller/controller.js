module.exports = { 
    aplicarDesconto(valor, desconto){
        if(desconto > valor) return 0;
        return valor - desconto;
    }
}