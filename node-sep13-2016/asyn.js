console.log('1');
setTimeout(function() {
  console.log('2');
}, 0);
setTimeout(function() {
  console.log('4');
}, 100);
console.log('3');

// event loop:
// stack: 1, sche, 3
// queue: then execute
