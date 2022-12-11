// EXERCÍCIO 2 
// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// EXEMPLO: 
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00
// ---------------------------------------------------------------

let vJanta = 80;
let tGarcom = 10;
let total = 0;

total = vJanta + ((tGarcom / 100) * vJanta);

// console.log('Valor do Jantar: R$' + vJanta + ',00')
console.log(`Valor do jantar: R$${vJanta},00`);
console.log(`Taxa do garçom: R$${(tGarcom / 100) * vJanta},00`);
console.log(`Total a pagar: R$${total},00`)