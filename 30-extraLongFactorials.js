function extraLongFactorials(n) {
  let input = BigInt(n - 1);
  let result = BigInt(n);
  for (let i = 0; i < n - 1; i++) {
    result *= input;
    input--;
  }

  result = result.toString()
  console.log(result);
}

extraLongFactorials(25);

/* function extraLongFactorials(n) {
  // Write your code here
  n = BigInt(n);
  let num = BigInt(1);
  for(let index = n; index > 1; index --){
    num *= index; 
  }

  console.log(num.toString());
};

extraLongFactorials(25); */