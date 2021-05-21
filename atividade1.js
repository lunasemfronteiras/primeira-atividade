//    1 - Solicite o preço de uma mercadoria e o percentual de desconto. Exiba no console o valor do desconto e o preço a pagar.

let preço = 250
let desconto = preço * (20/100)

let  valorTotal = preço - desconto
console.log(preço.toFixed(2), valorTotal.toFixed(2))