function stringSimilarity(s) {
  let left = 0;
	let right = 0;
	let Z = new Array(s.length).fill(0);
  Z[0] = s.length;
	
	for(let index = 1; index < s.length; index++) {
		if(index > right) {
			left = right = index;
			
			while(right < s.length && s[right] == s[right - left]) {
				right++;
			}
			
			right--;
			Z[index] = right - left + 1;
		} else {
			let indexCompare = index - left;

      if(Z[indexCompare] < right - index + 1) {
        Z[index] = Z[indexCompare];
      } else {
        left = index;
        
        while(right < s.length && s[right] == s[right - left]) {
          right++;
        }
        
        right--;
        Z[index] = right - left + 1;
      }
		}
	}
  
	let result = Z.reduce((a, b) => a += b);
	
	return result;
}

// solução um pouco lenta, não passou em todos testes
/* function stringSimilarity(s) {
  // Write your code here
let backup = s;
let result = 0;

while(backup.length > 0) {
  let length = 0;

  for(let i = 0; i < s.length; i++) {
    if(backup[i] == s[i]) {
      length += 1;
    } else {
      break;
    }
  }

  result += length;
  backup = backup.substr(1);
}

return result;
} */

console.log(stringSimilarity("ababaa"));
// 11
console.log(stringSimilarity("abcabccba"));
// 13
console.log(stringSimilarity("aa"));
// 3