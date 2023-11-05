function minimumDistances(a) {
  let distances = [];
  let sub = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if(a[i] == a[j]) {
        sub = j - i;
        distances.push(sub);
      }
    }
  }
  
  return distances.length == 0 ? -1 : Math.min(...distances);
}

/* function minimumDistances(a) {
  let numbers = {};
  let keysArr = Object.keys(numbers); // Armazena todas as chaves de 'numbers' em uma array 'keysArr'.

  a.forEach((element) => { // Adiciona um elemento (número) como chave e seu índice como valor.
    keysArr = Object.keys(numbers);
    if(!(element in keysArr)) {
      numbers[element] = a.indexOf(element);
    }
  });
  keysArr = Object.keys(numbers);

  let distances = [];
  for(let i = 0; i < a.length; i++) { // Percorre o array e verifica se o índice atual do loop é diferente do valor (índice) da chave (número) do índice atual.
    if(i != numbers[a[i]]) {
      let sub = i - numbers[a[i]];
      distances.push(sub);
    }
  }

  return distances.length == 0 ? -1 : Math.min(...distances);
} */

/* function minimumDistances(a) {
  const indexMap = {};
  let minDistance = Infinity;

  for (let i = 0; i < a.length; i++) {
    if (a[i] in indexMap) {
      const prevIndex = indexMap[a[i]];
      const distance = i - prevIndex;
      minDistance = Math.min(minDistance, distance);
    }
    indexMap[a[i]] = i;
  }

  return isFinite(minDistance) ? minDistance : -1;
} */

/* function minimumDistances(a) {
  return a.reduce((res, num, i) => {
    const numFind = a.findLastIndex(n => n === num)

    if (numFind !== -1 && (numFind !== i) && (res === -1 || (numFind - i) < res)) res = numFind - i

    return res
  }, -1)
} */

console.log(minimumDistances([7, 1, 3, 4, 1, 7]));