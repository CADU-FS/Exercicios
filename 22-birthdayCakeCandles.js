function birthdayCakeCandles(candles) {
   let max = Math.max(...candles);
   let sum = 0;

   for(let i=0; i<candles.length; i+=1) {
      if(max === candles[i]) {
         sum += 1;
      }
   }
   return sum
}

birthdayCakeCandles([3, 2, 1, 3]);

/* function birthdayCakeCandles(candles) {
   let max = Math.max(...candles);
   let sum = 0;

   candles.forEach((candle) => {
      if(max === candle) {
         sum += 1;
      }
   })
   return sum
}

birthdayCakeCandles([3, 2, 1, 3]); */

/* function birthdayCakeCandles(candles) {
   let bigCandle = 0;
   let count = 0;

   candles.sort((a, b) => b - a);
   bigCandle = candles[0];

   candles.forEach((candle) => {
     if(candle === bigCandle){
       count += 1;
     }
   });

   return count;
 };

 console.log(birthdayCakeCandles([3, 2, 1, 3])); */