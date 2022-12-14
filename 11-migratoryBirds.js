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

function migratoryBirds(arr) {
   let counts = [];
   for(let index = 0; index < arr.length; index += 1) {
      if(arr[index]){}
   }
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));