function closestNumbers(arr) {
  let pairs = [];
  let minDiference = Infinity;

  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(Math.abs(arr[i] - arr[j]) <= minDiference) {
        if(Math.abs(arr[i] - arr[j]) < minDiference) {
          pairs = [];
          minDiference = Math.abs(arr[i] - arr[j]);
          pairs.push(arr[i]);
          pairs.push(arr[j]);
        } else {
          pairs.push(arr[i]);
          pairs.push(arr[j]);
        }
      }
    }
  }

  pairs.sort((a, b) => a - b);
  return pairs;
}

/* function closestNumbers(arr) {
    let minimum = 0;
    arr.sort((a, b) => a - b);
    let sortedList = [];

    for (let index = 0; index < arr.length - 1; index++) {
        sortedList.push([arr[index], arr[index + 1]]);
        if (index === 0 || arr[index + 1] - arr[index] < minimum) {
            minimum = arr[index + 1] - arr[index];
        }
    }
    
    return sortedList
        .filter(pair => pair[1] - pair[0] === minimum)
        .flat();
} */

/* function closestNumbers(arr) {
  arr.sort((a, b) => a - b);
  let result = [];
  let minDiff = arr[1] - arr[0];

  for(let index = 2; index < arr.length; index += 1) {
    minDiff = Math.min(minDiff, arr[index] - arr[index - 1]);
  }

  for(let index = 1; index < arr.length; index += 1) {
    if(arr[index] - arr[index - 1] === minDiff) {
      result.push(arr[index - 1], arr[index]);
    }
  }
  
  return result;
} */

console.log(closestNumbers([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854]));
// [ -20, 30 ]
console.log(closestNumbers([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854, -520, -470]));
// [ -520, -470, -20, 30 ]
console.log(closestNumbers([5, 4, 3, 2]));
// [ 2, 3, 3, 4, 4, 5 ]