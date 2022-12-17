// Elaborar um algorítimo que leia um número e informe se ele é par ou ímpar.

function decision (num) {
   if (num % 2) {
      return console.log('ímpar');
   } else {
      return console.log('par');
   }
}
decision(10);

/* let num = 10;
if (num % 2 === 0) {
   console.log('Par');
} else {
   console.log('Ímpar');
} */

/* let num = 10;
(num % 2 === 0) ? console.log('Par') : console.log('Ímpar'); */