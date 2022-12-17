function migratoryBirds(arr) {
   const types = Array(6).fill(0);
   for (const type of arr) types[type]++;
   return types.indexOf(Math.max(...types))
 }

 console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))

/*function migratoryBirds(arr) {
   let counts = {};
   arr.forEach((count) => {
      counts[count] = (counts[count] || 0) + 1;
   });
   const maxVal = Math.max(...Object.values(counts));
   //console.log(Object.values(counts));
   const num = Object.keys(counts).find((key) => {
      return counts[key] === maxVal;
   });
   return num;
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
*/

// código abaixo incompleto

/*function migratoryBirds(arr) {
   let type = [1, 2, 3, 4, 5];
   let nOfTypes = 0;
   for(let i = 0; i < arr.length; i += 1) {
      if(arr[index] = type) {
         nOfTypes += 1
      }
   }
   return nOfTypes;
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
*/