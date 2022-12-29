function divisibleSumPairs(n, k, ar) {
   let pairs = 0;

   for(let i1=0; i1<ar.length; i1+=1) {
      for(let i=i1+1; i<ar.length; i+=1) {
         if((ar[i1] + ar[i]) % k === 0) {
            pairs += 1
         }
      }
   }
   return pairs;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));

/* function divisibleSumPairs(n, k, ar) {
   // Write your code here
   let sum = 0;
   for(let index = 0; index < n; index += 1){
     for(let pair = 0; pair < n; pair += 1){
       if(index != pair){
         if((ar[index] + ar[pair]) % k === 0){
           sum += 1;
         }
       }
     }
   };
   return sum / 2;
 }
 
 console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])); */