function bigSorting(unsorted) {
  unsorted.sort((a, b) => {
    if(a.length === b.length) {
      return a > b ? 1 : -1;
    }
    return a.length - b.length;
  })
  return unsorted;
}

// bubble sort
/* function bigSorting(unsorted) {
  let swap = 1;

  while (swap == 1) {
    swap = 0;
    for (let i = 0; i < unsorted.length - 1; i++) {
      if (BigInt(unsorted[i]) > BigInt(unsorted[i + 1])) {
        [unsorted[i + 1], unsorted[i]] = [unsorted[i], unsorted[i + 1]]
        swap = 1;
      }
    }
  }

  return unsorted;
} */

// selection sort
/* function bigSorting(unsorted) {
  for (let i = 0; i < unsorted.length - 1; i++) {
    for (let j = i + 1; j < unsorted.length; j++) {
      if (BigInt(unsorted[i]) > BigInt(unsorted[j])) {
        [unsorted[i], unsorted[j]] = [unsorted[j], unsorted[i]];
      }
    }
  }

  return unsorted;
} */

/* function bigSorting(unsorted) {
  return unsorted.map(a => BigInt(a)).sort((a, b) => a > b ? 1 : -1);
} */

//console.log(bigSorting(['8', '1', '2']));
console.log(bigSorting(['8', '1', '2', '100', '12303479849857341718340192371', '3084193741082937', '3084193741082938', '111', '200']));