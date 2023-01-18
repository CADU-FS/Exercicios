function encryption(s) {
   let string = s.split('');
   let column = Math.ceil(Math.sqrt(string.length));
   let result = [];
 
   for(let index = 0; index < column; index += 1){
     let char = index;
     let str = '';
     while(char < string.length){
       str += string[char];
       char += column;
     }
     result.push(str);
   }
 
   return result.join(' ');
 }
 
 console.log(encryption('haveaniceday'));

/* function encryption(s) {
  // Write your code here
  const strLen = s.length;
  const cols = Math.ceil(Math.sqrt(strLen));
  const matrix = [];

  let rowCount = 0;
  let colCount = 0;
  let temp = [];
  for(let v of s) {
    if(colCount < cols) {
      colCount += 1;
      temp.push(v);
    } else {
      matrix.push(temp);
      rowCount += 1;
      temp = [];
      colCount = 1;
      temp.push(v);
    }
  }
  if(temp.length) {
    matrix.push(temp);
  }

  console.log(matrix);

  let out = '';
  for(let i = 0; i < cols; i += 1) {
    matrix.forEach(r => {
      out += r[i] || '';
    });
    out += ' ';
  }
  return out.slice(0,-1);
} */

 //código abaixo incompleto

/* function encryption(s) {
   let l = Math.sqrt(s.length);
   let rows = Math.floor(l);
   let columns = Math.ceil(l);
   let array = [];
   let pushArray = [];
   let count = 0;

   for (let i = 0; i < s.length; i++) {
      pushArray += s[i];

      if(pushArray.length == columns) {
         array.push(pushArray);
         pushArray = [];
      }
      if(s.length < columns) {
         array.push(pushArray);
      }
      s = s.substr(1);
   }
}

encryption('feedthedog'); */