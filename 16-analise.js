/* (Questão 3 Discursiva) Enade 2021
 Considere a realização de uma pesquisa com 1 000 pessoas para obtenção das seguintes informações:
o valor da maior altura; o valor da menor altura; a média das alturas; quantas pessoas têm altura inferior
à média das alturas.
Considere, ainda, que um programador foi selecionado para desenvolver um modelo de código que
soluciona o problema automatizando a coleta das alturas e a geração das informações.
Com base nas informações apresentadas, desenvolva o código adequado para resolver o problema
usando pseudocódigo ou uma linguagem de programação. (valor: 10,0 pontos) */

let altura = [1.82, 1.51, 1.60, 1.64, 1.77];
let media = 0;
let alturaInferior = 0;

for (i = 0; i < altura.length; i += 1) {
   media += altura[i];
}
media /= altura.length;

for (i = 0; i < altura.length; i += 1) {
   if (altura[i] < media) {
      alturaInferior += 1;
   }
}

console.log(`Maior altura: ${Math.max(...altura)}`);
console.log(`Menor altura: ${Math.min(...altura)}`);
console.log(`Média: ${media.toFixed(2)}`);
console.log(`Pessoas com altura abaixo da média: ${alturaInferior}`);

/* let alturas = [];
function criaPessoa (num) {
  for(let index = 0; index < num; index += 1){
    alturas.push((Math.random() * (2.5 - 1.3) + 1.3));
  }
};

criaPessoa(10);

// console.log(alturas);
// console.log((Math.random() * (2.5 - 1.3) + 1.3).toFixed(2));

let soma = 0;
alturas.forEach((altura) => soma += altura);

const media = (soma / alturas.length);

// console.log(soma);

let menorMedia = 0;
alturas.forEach((altura) => {
  if(altura < media) menorMedia += 1; 
});

console.log(`Menor altura: ${(alturas.sort()[0]).toFixed(2)}`);
console.log(`Maior altura: ${(alturas.sort((a, b) => b - a)[0]).toFixed(2)}`);
console.log(`Média: ${media.toFixed(2)}`);
console.log(`Quantidade de pessoas com altura menor que a média: ${menorMedia}`); */