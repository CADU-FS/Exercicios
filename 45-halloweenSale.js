function howManyGames(p, d, m, s) {
  let numberOfGames = 0;

  while(p >= m && s >= 0 && p <= s) {
    if(s - p >= 0) {
      s -= p;
      numberOfGames++;
    }

    if(p - d >= m) {
      p -= d;
    } else {
      p = m;

      if(s - p >= 0) {
        s -= p;
        numberOfGames++;
      } else {
        return numberOfGames;
      }
    }
  }

  return numberOfGames;
}

/* function howManyGames(p, d, m, s) {
  let count = 0;
  let money = s;
  for (let i = p; i >= m && money > 0; i -= d) {
    money -= i;
    count++;
  }
  return(p > s ? 0 : count + (Math.floor(money / m)));
} */

/* function howManyGames(p, d, m, s) {
  let dineroRestante = p;
  let sumaTotal = p;
  let cont = 0;
  
  while (sumaTotal <= s) {
    dineroRestante = (dineroRestante - d) > m ? dineroRestante - d : m;
    sumaTotal += dineroRestante;
    cont++;
  } 

  return cont;
} */

/* function howManyGames(p, d, m, s) {
  let games = 0;
  
  while (s >= 0) {
    p = (p > m) ? p : m;
    s = s - p;

    if((p - d) < m) {
      p = m;
    } else {
      p = p - d;
    }

    games += 1;
  }

  return games - 1;
} */

console.log(howManyGames(20, 3, 6, 80));
// 6
console.log(howManyGames(20, 3, 6, 85));
// 7
console.log(howManyGames(100, 1, 1, 99));
// 0