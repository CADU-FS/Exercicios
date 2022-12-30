function countApplesAndOranges(s, t, a, b, apples, oranges) {
   let countA = 0;
   let countO = 0;

   for(let i=0; i<apples.length; i+=1) {
      if((apples[i] + a) >= s && (apples[i] + a) <= t ) {
         countA += 1;
      }
   };

   for(let i=0; i<oranges.length; i+=1) {
      if((oranges[i] + b) >= s && (oranges[i] + b) <= t ) {
         countO += 1;
      }
   };

console.log(countA);
console.log(countO);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])

/* function countApplesAndOranges(s, t, a, b, apples, oranges) {
   // Write your code here
   let applesCount = 0;
   let orangesCount = 0;
 
   apples.forEach((apple) => {
     if((apple + a) >= s && (apple + a) <= t){
       applesCount += 1;
     }
   });
 
   oranges.forEach((orange) => {
     if((orange + b) <= t && (orange + b) >= s){
       orangesCount += 1;
     }
   });
 
   console.log(applesCount);
   console.log(orangesCount);
 };
 
 countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]); */