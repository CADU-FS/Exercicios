function breakingRecords(scores) {
   let maximum = scores[0];
   let minimum = scores[0];
   let max = 0;
   let min = 0;
   for(let i = 0; i < scores.length; i += 1) {
      if(scores[i] > maximum) {
         maximum = scores[i];
         max += 1;
      }
      if(scores[i] < minimum) {
         minimum = scores[i];
         min += 1;
      }
   }
   return ([max, min])
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));