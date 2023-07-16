/*
Day of the Week
Problem Statement:
In this question, you are given a particular day, and an integer N. You have to find out what day will it be, after N days.
*/
function dayOfTheWeek(day, N) {
  let obj = {
  "1" : 'Monday',
  "2" : 'Tuesday',
  "3" : 'Wednesday',
  "4" : 'Thursday',
  "5" : 'Friday',
  "6" : 'Saturday',
  "7" : 'Sunday',
  }
  for(let x in obj) {
      if(obj[x] == day) {
          let k = +x + (N % 7);
          if(k > 7) k = k % 7;
          console.log(obj[k])
          break;
      }
  }
}
dayOfTheWeek('Saturday',404);