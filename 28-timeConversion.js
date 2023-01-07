function timeConversion(s) {
   let division = s.split(':');

   if (s.includes('PM')) {
      if (division[0] == 12 && division[1] > 0) {
         return s.slice(0, 8)
      } else {
         return s.replace(division[0], parseInt(division[0]) + 12).slice(0, 8)
      }
   } else if (s.includes('AM')) {
      if (division[0] == 12 && division[1] >= 0) {
         return s.replace(division[0], '00').slice(0, 8)
      } else {
         return s.slice(0, 8)
      }
   }
}

console.log(timeConversion('12:45:54PM'));
console.log(timeConversion('12:00:00AM'));

/* function timeConversion(s) {
   s.split('');
 
   let hours = parseInt(s[0] + s[1]);
   let minutes = s[3] + s[4];
   let seconds = s[6] + s[7];
   let ampm = s[s.length - 2];
 
   if(hours >= 12 && ampm === 'A'){
     hours = hours - 12;
   } else if(hours < 12 && ampm === 'P'){
     hours = hours + 12;
   }
 
   if(hours < 10){
     return (`0${hours}:${minutes}:${seconds}`);
   } else {
     return (`${hours}:${minutes}:${seconds}`);
   }
 }
 
 console.log(timeConversion('06:40:03AM'));
 console.log(timeConversion('07:05:45PM')); */

/* function timeConversion(s) {
   let hour = Number(s.substring(0,2))
   
   if(s.indexOf('AM')!=-1 && hour==12){
       s=s.replace("12","00")
   }
   if(s.indexOf('PM')!=-1&& hour<12){
       s = s.replace(hour<10? `0${hour}`:hour, hour + 12);
   }
   return s.replace(/(AM)|(PM)/,'')
}

console.log(timeConversion('07:05:45PM')); */

/* function convert12to24(time12h) {
   const [time, modifier] = time12h.split(' ');
 
   let [hours, minutes, seconds = '00'] = time.split(':');
 
   if (hours === '12') {
     hours = '00';
   }
 
   if (modifier === 'PM') {
     hours = parseInt(hours, 10) + 12;
   }
 
   return `${hours}:${minutes}:${seconds}`;
 }

 const time12h = '09:15:30 PM';
const time24h = convert12to24(time12h);
console.log(time24h);  // Output: 09:15:30 */