function morganAndString(a, b) {
  a += 'a';
  b += 'a';
  let finalString = '';

  while (a.length > 1 || b.length > 1) {
    if(a < b) {
      finalString += a[0];
      a = a.substring(1);
    } else {
      finalString += b[0];
      b = b.substring(1);
    }
  }

  return finalString;
}

/* function morganAndString(a, b) {
  a += 'z';
  b += 'z';
  let l = a.length + b.length - 2;
  let finalString = '';

  for(let i = 0; i < l; i++) {
    if(a[0] < b[0] || a[0] == b[0]) {
      finalString += a[0];
      a = a.substring(1);
    } else if (a.length == 0 || a[0] > b[0]) {
      finalString += b[0];
      b = b.substring(1);
    } else {
      finalString += a[0];
      a = a.substring(1);
    }
  }

  return finalString;
} */

/* function morganAndString(a, b) {
  a += 'z';
  b += 'z';

  let i = 0;
  let j = 0;
  let finalString = '';

  while (i < a.length - 1 || j < b.length - 1) {
    if (a.substring(i) < b.substring(j)) {
      finalString += a[i];
      i++;
    } else {
      finalString += b[j];
      j++;
    }
  }

  return finalString;
} */

console.log(morganAndString('ABACABA', 'ABACABA'));
// AABABACABACABA
console.log(morganAndString('JACK', 'DANIEL'));
// DAJACKNIEL
console.log(morganAndString('ACA', 'BCF'));
// ABCACF
console.log(morganAndString('MZBMC', 'MZBMA'));
// MMZBMAZBMC