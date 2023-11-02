function findDigits(n) {
  let numberInString = n.toString();
  let count = 0;

  for(let i = 0; i < numberInString.length; i++) {
    if(n % numberInString[i] == 0) count++;
  }

  return count;
}

/* function findDigits(n) {
  let count = 0;
  const d = n.toString().split("")

  d.forEach(x => {
      if (n % Number(x) === 0) count++
  })

  return count
} */

/* function findDigits(n) {
  const nums = n.toString().split('')
  return nums.reduce ((acc, curr) =>
      n % parseInt(curr) === 0 ? acc+1 : acc,0)
} */

console.log(findDigits(1012));