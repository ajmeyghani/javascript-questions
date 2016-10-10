/*
Description:

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:
persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                      // and 4 has only one digit

persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                       // 1*2*6 = 12, and finally 1*2 = 2

persistence(4) === 0 // because 4 is already a one-digit number
*/

function persistence(num) {
 var nStr = String(num).split('').map(str => Number(str));
 if (nStr.length === 1) {
   return 0;
 }
 var reducedMult = nStr.reduce((c,a) => c * a);
 return 1 + persistence(reducedMult);
}


/*
const prod = (n) => (n+'').split('').reduce((p,v)=>p*v,1)

function persistence(num) {
   let p = 0; 
   while( num>9 ){ num = prod(num); p++ }
   return p
}

function persistence(num) {
   var count = 0;   
   while(num.toString().length > 1){
     num = num.toString().split('').reduce((a, b) => a * +b, 1);
     count++;
   }
   
   return count;
}


function persistence(num, cnt=0) {
  let arrayNum = num.toString().split('');
  return arrayNum.length === 1 ?
    cnt :
    persistence(arrayNum.reduce((x,y) => x*y), ++cnt)
}
*/
