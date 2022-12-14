function catAndMouse(x, y, z) {
   let gatoA = x;
   let gatoB = y;
   let rato = z;
   if(Math.abs(gatoA - rato) > Math.abs(gatoB - rato)) {
      return 'Cat B';
   } else if (Math.abs(gatoA - rato) < Math.abs(gatoB - rato)) {
      return'Cat A';
   } else {
      return'Mouse C';
   }
}

console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));