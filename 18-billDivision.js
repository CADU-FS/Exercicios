function bonAppetit(bill, k, b) {
   let sum = 0;
   let final = 0;
   for(let i = 0; i < bill.length; i += 1) {
      sum += bill[i];
   }
   sum -= bill[k];
   final = sum / 2;

   if(final != b) {
      console.log(b - final);
   } else {
      console.log('Bon Appetit')
   }
}
bonAppetit([22, 54, 62, 89, 58, 23, 78, 34, 32,], 4, 226);

/*function bonAppetit(bill, k, b) {
  let sum = 0;
  let final = 0;

  bill.forEach(price => sum += price);
  sum = sum - bill[k];
  final = sum / 2;
  if(final != b){
    console.log(b - final);
  } else {
    console.log(`Bon Appetit`);
  }
}

bonAppetit([72, 53, 60, 66, 90, 62, 12, 31, 36, 94], 6, 288); */