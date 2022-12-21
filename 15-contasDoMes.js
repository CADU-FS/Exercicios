// Desenvolva um algoritmo que recebe todas as suas contas do mês, faça a soma dos valores e diminua do seu salário. Como saída mostre o salário, o total de gastos e o quanto irá sobrar no final do mês.

/* let contas = [100, 112, 223, 324];
let salario = 2300;
let totalDespesas = 0;
let sobra = 0;

for (i = 0; i < contas.length; i += 1) {
   totalDespesas += contas[i];
}

sobra = salario - totalDespesas;

console.log(
`Salário: ${salario}
Total de gastos: ${totalDespesas}
Sobra no final do mês: ${sobra}`
); */

let salario = 2500;
let gastos = {
   'Água' : 30,
   'Luz' : 200,
   'Internet' : 100,
   'Alimentação' : 60,
};
const total = Object.values(gastos).reduce((a, b) => a + b);

console.log(
`Salário: R$${salario}
Total de gastos: R$${total}
Sobra no final do mês: R$${salario - total}`
);