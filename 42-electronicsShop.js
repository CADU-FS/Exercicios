function getMoneySpent(keyboards, drives, b) {
  let maxSum = 0;

  for(let i = 0; i < keyboards.length; i++) {
    for(let j = 0; j < drives.length; j++) {
      if(keyboards[i] + drives[j] > maxSum && keyboards[i] + drives[j] <= b) {
        maxSum = keyboards[i] + drives[j];
      }
    }
  }

  if(maxSum == 0) {
    return -1;
  } else {
    return maxSum;
  }
}

/* function getMoneySpent(keyboards, drives, b) {
  let maxAmount = -1;
  keyboards.sort((a, b) => b - a);
  drives.sort((a, b) => b - a);

  for (let keyboard of keyboards) {
    for (let drive of drives) {
      let total = keyboard + drive;
      if (total <= b) {
        maxAmount = Math.max(maxAmount, total);
      }
    }
  }

  return maxAmount;
} */

console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
// 9
console.log(getMoneySpent([4], [5], 5));
// -1