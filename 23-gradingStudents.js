function gradingStudents(grades) {
   for (let i=0; i<grades.length; i+=1) {
      if(grades[i] >= 38) {
         if((Math.floor(grades[i]/5) +1) * 5 - grades[i] < 3) {
            grades[i] = (Math.floor(grades[i]/5) +1) * 5;
         }
      }
   }
   return grades;
}

console.log(gradingStudents([73, 67, 38, 33]));

/* function gradingStudents(grades) {
   return grades.map((item)=>{
      if(item<38) return item
      const multiple =  (Math.floor(item/5) +1) * 5
     return (multiple - item < 3) ? multiple : item
  })
}

console.log(gradingStudents([73, 67, 38, 33])); */

/* function gradingStudents(grades) {
   for(let index = 0; index < grades.length; index += 1){
     if(grades[index] >= 38){
       if(grades[index] % 5 === 3){
         grades[index] += 2;
       } else if(grades[index] % 5 === 4){
         grades[index] += 1;
       }
     }
   }
   return grades;
 };
 
 console.log(gradingStudents([73, 67, 38, 33])); */