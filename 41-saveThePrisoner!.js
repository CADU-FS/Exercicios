function saveThePrisoner(n, m, s) {
  if(s == 1) {
    if(m <= n) {
      return m;
    } else {
      while (m > n) {
        m -= n;
      }

      return m;
    }
  } else {
    if((s - 1 + m) <= n) {
      return (s - 1 + m);
    } else {
      while ((s - 1 + m) > n) {
        m -= n;
      }
  
      return (s - 1 + m);
    }
  }
}

/* function saveThePrisoner(n, m, s) {
  return (m - 1 + s) % n || n;
} */

/* function saveThePrisoner(n, m, s) {
  //actual effecteive sweets num
  m %= n;
  const order = (m+s-1 == 0)? n:m+s-1;
  return (order <= n )? order:order-n;
} */

/* function saveThePrisoner(n, m, s) {
  if(m===1) {
    return s;
  } if ((m+(s-1))%n===0) {
    return n;
  } else {
    return ((m+(s-1))%n);
  }
} */

console.log(saveThePrisoner(5, 2, 1));
// 2
console.log(saveThePrisoner(9, 12, 1));
// 3
console.log(saveThePrisoner(5, 2, 2));
// 3
console.log(saveThePrisoner(7, 19, 2));
// 6