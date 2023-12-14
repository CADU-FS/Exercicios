function superReducedString(s) {
  let change = true;
  let newString = ''

  while(change == true) {
    change = false;

    for(let i = 0; i < s.length; i++) {
      if(s[i] == s[i + 1]) {
        newString = s.slice(0, i) + s.slice(i + 2, s.length);
        change = true;
      }
    }

    s = newString;
  }

  if(s.length == 0) {
    return "Empty String";
  } else {
    return s;
  }
}

/* function superReducedString(s) {
    const repeatRegex = /([a-z])\1/;
    const indexOfRepeat = s.search(repeatRegex);
    
    if (indexOfRepeat == -1) {
        return s.length == 0 ? 'Empty String' : s;
    }
    
    return superReducedString(s.replace(repeatRegex, ''));
} */

/* function superReducedString(s) {
  let arr = s.split('');

  for(let index = 0; index < arr.length; index += 1) {
    if(arr[index] === arr[index + 1]) {
      arr.splice(index, 2);
      index = -1;
    }
  }

  if(arr.length === 0) {
    return 'Empty String';
  } else {
    return arr.join('');
  }
} */

console.log(superReducedString("asdggasdadaakgitt"));
// asdasdadkgi
console.log(superReducedString("aaabccddd"));
// abd
console.log(superReducedString("aa"));
// Empty String