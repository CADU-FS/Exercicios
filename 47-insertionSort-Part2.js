function insertionSort2(n, arr) {
  for(let i = 2; i <= n; i++) {
    arr.splice(0, 0, Math.min(...arr) - 1);
    let number = arr[i];

    for(let j = i - 1; j >= 0; j--) {
      if(arr[i] > arr[j]) {
        arr.splice(i, 1);
        arr.splice(j + 1, 0, number);
        break;
      }
    }

    arr.shift();
    console.log(...arr);
  }
}

/* function insertionSort2(n, arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let value = arr[i];
        arr.splice(i, 1);
        arr.splice(j, 0, value);
        break;
      }
    }

    console.log(...arr);
  }
} */

/* function insertionSort1(n, arr) {
  // Write your code here
  for (let index = 1; index < arr.length; index += 1) {
    // First, choose the element at index 1
    let current = arr[index];
    let compare;

    // Loop from right to left, starting from index-1 to index 0
    for (compare = index - 1; compare >= 0 && arr[compare] > current; compare -= 1) {
      // as long as arr[compare] is bigger than current
      // move arr[compare] to the right at arr[compare + 1]
      arr[compare + 1] = arr[compare];
    }
    // Place the current element at index 0
    // or next to the smaller element
    arr[compare + 1] = current;
    console.log(...arr);
  }
  return arr;
} */

insertionSort2(6, [1, 4, 3, 5, 6, 2]);
// 1 4 3 5 6 2 
// 1 3 4 5 6 2 
// 1 3 4 5 6 2 
// 1 3 4 5 6 2 
// 1 2 3 4 5 6 
insertionSort2(8, [8, 7, 6, 5, 4, 3, 2, 1]);
// 7 8 6 5 4 3 2 1
// 6 7 8 5 4 3 2 1
// 5 6 7 8 4 3 2 1
// 4 5 6 7 8 3 2 1
// 3 4 5 6 7 8 2 1
// 2 3 4 5 6 7 8 1
// 1 2 3 4 5 6 7 8