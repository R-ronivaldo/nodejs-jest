module.exports = { 
    venda(produto, pagamento){
        const produtos = {
            'sapato': 100,
            'calça': 120,
            'cinto': 50 }
        if (produtos[produto] <= pagamento)
            return true;
    },

    aplicarDesconto(valor, desconto){
        if(desconto > valor) return 0;
        return valor - desconto;
    }
}