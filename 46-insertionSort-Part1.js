function insertionSort1(n, arr) {
  let rightmostNumber = arr[n - 1];

  for(let i = n - 1; i >= 0; i--) {
    if(arr[i - 1] > rightmostNumber) {
      arr[i] = arr[i - 1];
      console.log(arr.join(' '));
    } else {
      arr[i] = rightmostNumber;
      console.log(arr.join(' '));
      break;
    }
  }
}

/* function insertionSort1(n, arr) {
  // let n = inputArr.length;

  for (let index = 1; index < arr.length; index += 1) {
    // Choosing the first element in our unsorted subarray
    let current = arr[index];
    // The last element of our sorted subarray
    let compare = index - 1; 

    while ((compare > - 1) && (current < arr[compare])) {
      arr[compare + 1] = arr[compare];
      compare -= 1;
      console.log(...arr);
    }

    arr[compare + 1] = current;
  }

  console.log(...arr);
} */

insertionSort1(5, [2, 4, 6, 8, 3]);
// 2 4 6 8 8
// 2 4 6 6 8
// 2 4 4 6 8
// 2 3 4 6 8
insertionSort1(5, [2, 4, 6, 8, 4]);
// 2 4 6 8 8
// 2 4 6 6 8
// 2 4 4 6 8
insertionSort1(5, [2, 4, 6, 8, 0]);
// 2 4 6 8 8
// 2 4 6 6 8
// 2 4 4 6 8
// 2 3 4 6 8
insertionSort1(7, [3, 4, 7, 5, 6, 2, 1]);