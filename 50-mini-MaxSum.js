function miniMaxSum(arr) {
  let min = BigInt(0);
  let max = BigInt(0);
  arr.sort((a, b) => a - b);

  for(let i = 0; i < arr.length - 1; i++) {
    min += BigInt(arr[i]);
  }
  
  for(let i = 1; i < arr.length; i++) {
    max += BigInt(arr[i]);
  }

  console.log(min.toString() + ' ' + max.toString());
}

/* function miniMaxSum(arr) {
    arr.sort((a, b) => a - b)
    
    const minSum = arr.slice(0,4).reduce((acc, curr) => acc + curr, 0)
    const maxSum = arr.slice(1).reduce((acc, curr) => acc + curr, 0)
    
    console.log(minSum, maxSum)
} */

miniMaxSum([1, 2, 3, 4, 5]);
// 10 14
miniMaxSum([7, 69, 2, 221, 8974]);
// 299 9271