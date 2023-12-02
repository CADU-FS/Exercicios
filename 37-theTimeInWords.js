function timeInWords(h, m) {
  let numberInWords = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  let hour = numberInWords[h - 1];
  let minutes = numberInWords[m - 1];
  m = m.toString();

  if(m < 30) {
    if(m == 0) {
      return `${hour} o' clock`;
    } else if(m == 15) {
      return `quarter past ${hour}`;
    } else if(m <= 20) {
      if(m == 1) {
        return `${minutes} minute past ${hour}`;
      } else {
        return `${minutes} minutes past ${hour}`;
      }
    } else {
      return `twenty ${numberInWords[m[1] - 1]} minutes past ${hour}`;
    }
  } else if(m == 30) {
    return `half past ${hour}`;
  } else {
    hour = numberInWords[h].toString();
    minutes = numberInWords[60 - m - 1];

    if(m == 45) {
      return `quarter to ${hour}`;
    } else if(60 - m <= 20) {
      if(60 - m == 1) {
        return `${minutes} minute to ${hour}`;
      } else {
        return `${minutes} minutes to ${hour}`;
      }
    } else {
      return `twenty ${numberInWords[m[1] - 1]} minutes to ${hour}`;
    }
  }
}

/* function timeInWords(h, m) {
  let newH = h.toString()
  let newM = m.toString()
  
  let numArr = Array.of([1,"one"], [2,"two"], [3,"three"], [4,"four"], [5,"five"], [6,"six"], [7,"seven"], [8,"eight"], [9,"nine"], [10,"ten"], [11,"eleven"], [12,"twelve"],[13,"thirteen"], [14,"fourteen"], [15,"fifteen"], [16,"sixteen"], [17,"seventeen"], [18,"eightteen"], [19,"nineteen"], [20,"twenty"], [21,"twenty one"], [22,"twenty two"], [23,"twenty three"], [24,"twenty four"], [25,"twenty five"], [26,"twenty six"], [27,"twenty seven"], [28,"twenty eight"], [29,"twenty nine"])
  
  let numMap = {}
  
  for (let i = 0; i < numArr.length; i++) {
    numMap[numArr[i][0]] = numArr[i][1]
  }
  
  if (m > 30) {
    switch (newM) {
      case '45':
        return `quarter to ${numMap[(h + 1).toString()]}`
      default:
        return `${numMap[(60 - m).toString()]} minutes to ${numMap[(h + 1).toString()]}`
      }
  } else {
    switch (newM) {
      case '0':
        return `${numMap[newH]} o' clock`           
      case '1':
        return `${numMap[newM]} minute past ${numMap[newH]}`              
      case '15':
        return `quarter past ${numMap[newH]}`               
      case '30':
        return `half past ${numMap[newH]}`               
      default:
        return `${numMap[newM]} minutes past ${numMap[newH]}` 
    }
  }
} */

/* function timeInWords(h, m) {
  let words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine"];

  let string = !m ? `${words[h]} o' clock` : `${!(m % 30) ? 'half' : !(m % 15) ? 'quarter' : `${m <= 30 ? words[m] : words[60 - m]} ${`minute${m > 1 ? 's' : ''}`}`} ${m <= 30 ? 'past' : 'to'} ${words[m <= 30 ? h : h + 1]}`;

  return string;
} */

console.log(timeInWords(7, 29));