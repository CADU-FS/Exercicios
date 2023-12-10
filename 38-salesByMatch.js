function sockMerchant(n, ar) {
  let pairs = 0;
  let socks = {};
  let socksByColor;

  for(let i = 0; i < ar.length; i++) {
    ar[i] in socks ? socks[ar[i]] += 1 : socks[ar[i]] = 1;
  }

  socksByColor = Object.values(socks);
  socksByColor.forEach((element) => {element % 2 == 0 ? pairs += element / 2 : pairs += (element - 1) / 2});
  return pairs
}

/* function sockMerchant(n, ar) {
  let arr=[];
  for (let i = 0; i < ar.length; i++) {
    if (arr.includes(ar[i]) == true) {
      console.log(arr.indexOf(ar[i]));
      arr.splice(arr.indexOf(ar[i]), 1);
    } else {
      arr.push(ar[i]);
    }
  }
  return (ar.length-arr.length)/2;
} */

/* function sockMerchant(n, ar) {
  let count = 0;
  let obj = {};

  for(let index of ar) {
    obj[index] += 1 || 1;
  }

  for(let index of ar) {
    obj[index] = obj[index] % 2 === 0;
    count += obj[index];
  }

  return count;
} */

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));