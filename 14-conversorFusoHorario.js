// Sabendo que o fuso horário da França em relação ao Brasil é de +5 horas (no horário de verão na França), elaborar um programa que leia a hora no Brasil e informe a hora na França.

let horaBrasil = 18;
let minutos = 40;
let horaFranca = horaBrasil + 5;

if (horaFranca >= 24) {
   horaFranca = horaBrasil - (24 - 5)
// horaFranca = horaFranca - 24
}

console.log(`Brasil: ${horaBrasil}:${minutos}
França: ${horaFranca}:${minutos}`);