function dayOfProgrammer(year) {
   if(year >= 1700 && year <= 2700) {
      if(year <= 1917) { //Calendário Juliano
         if(year % 4 === 0) {
            return `12.09.${year}`
         } else {
            return `13.09.${year}`
         }
      } else if(year === 1918) { //Caso do ano 1918
         return `26.09.${year}`
      } else { //Calendário Gregoriano
         if((year % 400 === 0) || (year % 4 === 0) && (year % 100 != 0)) {
            return `12.09.${year}`
         } else {
            return `13.09.${year}`
         }
      }
   }
}

console.log(dayOfProgrammer(2016));