function beautifulDays(i, j, k) {
  let count = 0;

  for(let start = i; start <= j; start++) {
    let reversedNum = start.toString().split('').reverse().join(''); // O número invertido se transforma em string, porém, ainda é possível fazer operações.
    if (Math.abs(start - reversedNum) % k == 0) count++;
  }

  return count;
}

/* function beautifulDays(i, j, k) {
  // Write your code here
  let reverse = 0;
  let count = 0;

  for(let index = i; index <= j; index += 1) {
    reverse = Number(String(index).split('').reverse().join(''));
    if(Number.isInteger(Math.abs(index - reverse) / k) === true) {
      count += 1;
    }
  }

  return count;
} */

console.log(beautifulDays(13, 45, 3));