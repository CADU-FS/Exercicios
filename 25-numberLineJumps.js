function kangaroo(x1, v1, x2, v2) {
   for (let i = 0;; i++) {
      x1 += v1;
      x2 += v2;
      if(x2 > x1 && v2 >= v1 || x1 > x2 && v1 >= v2) {
         return 'NO';
      } else if(x1 === x2) {
         return 'YES';
      }
   }
}

console.log(kangaroo(0, 2, 5, 3));
console.log(kangaroo(0, 3, 4, 2));

/* function kangaroo(x1, v1, x2, v2) {
   let jump1 = x1;
   let jump2 = x2;
   let yesNo = 'NO';
   for(let index = 0; index < 10000; index += 1){
     jump1 += v1;
     jump2 += v2;
     if(jump1 === jump2){
       yesNo = 'YES';
     }
   }
   return yesNo;
 };

console.log(kangaroo(0, 2, 5, 3));
console.log(kangaroo(0, 3, 4, 2)); */