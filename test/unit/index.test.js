const index = require('../../src/controller/controller')

test('Aplicar desconto', () => {
    const result = index.aplicarDesconto(10,5);
    expect(result).toEqual(5);
})

test.skip('Aplicar desconto grande', () => {
    const result = index.aplicarDesconto(5,10);
    expect(result).toEqual(0);
})

test('Aplicar desconto grande', () => {
    const result = index.venda('calça',120);
    expect(result).toBe(true);
})