function diagonalDifference(arr) {
  let soma1 = 0;
  let soma2 = 0;
  for(let index = 0; index < arr.length; index += 1) {
    soma1 += arr[index][index];
    soma2 += arr[index][arr.length - 1 - index];
  };
  return Math.abs(soma1 - soma2);
}

console.log(diagonalDifference([
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9]]));