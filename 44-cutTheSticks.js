function* arrayManipulation(arr) {
  yield arr.length;

  let allEquals = true;

  for(let stick of arr) {
    if(stick != arr[0]) {
      allEquals = false;
      break;
    }
  }

  if(allEquals == false) {
    let minStick = Math.min(...arr);
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] == minStick) {
        arr.splice(i, 1);
        i -= 1;
      } else {
        arr[i] -= minStick;
      }
    }
    
    yield Array.from(arrayManipulation(arr));
  }
}

function cutTheSticks(arr) {
  let arrayFromFunction = Array.from(arrayManipulation(arr)).join(',').split(',');
  let result = [];

  for(let element of arrayFromFunction) {
    result.push(parseInt(element));
  }

  return result;
}

/* function cutTheSticks(arr) {
	let result = [];
	let change = true;
	
	while(change == true) {
		change = false;
		result.push(arr.length);
		let minStick = Math.min(...arr);
		
		for(let i = 0; i < arr.length; i++) {
			if(arr[i] == minStick) {
				arr.splice(i, 1);
				i -= 1;
				change = true;
			} else {
				arr[i] -= minStick;
				change = true;
			}
		}
	}
	
	result.pop();
	return result;
} */

/* function cutTheSticks(arr) {
    let result = [];
    while(arr.length > 0){
        result.push(arr.length);
        let minStick = Math.min(...arr);
        arr = arr.filter(stick => stick > minStick)
        .map(stick => stick - minStick);
    }
    return result;

} */

/* function cutTheSticks(arr) {
  let min = 0;
  let count = 0;
  let result = [];

  for(let wow = 0; wow < arr.length; wow += 1) {
    let filtered = arr.filter((value) => value > 0);
    count = 0;
    min = filtered.sort((a, b) => a - b)[0];

    for(let index = 0; index < arr.length; index += 1) {
      if(arr[index] > 0) {
        arr[index] = arr[index] - min;
        count += 1;
      }
    }

    count > 0 && result.push(count);
  }

  return result;
} */

console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));
// [ 6, 4, 2, 1 ]
console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]));
// [ 8, 6, 4, 1 ]