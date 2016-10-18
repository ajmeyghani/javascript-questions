module.exports = function luhn(n) {
  return [...String(n)].reverse().map(str => Number(str))
  .map((n, idx) => idx % 2 !== 0 ? n * 2 : n)
  .map(n => n > 9 ? Math.abs(n - 9) : n)
  .reduce((s, val) => s + val) % 10 === 0;
};

/*
// one liner
function validate(n){
  return (n+"").split('').map((x,ind)=>((n+"").length+ind)%2==0?2*x:x).map(x=>(x>9)?x-9:x).reduce((a,b)=>parseInt(a)+parseInt(b))%10 == 0;
}
*/

