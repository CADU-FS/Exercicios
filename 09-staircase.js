function staircase(n) {
  let symbol = '#';
  let input = '';
  let position = n - 1;
  for(let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    for(let columnIndex = 0; columnIndex < n; columnIndex += 1) {
      if(columnIndex < position) {
        input += ' ';
      } else {
        input += symbol;
      }
    }
    console.log(input);
    input = '';
    position -= 1;
  }
}

staircase(6);