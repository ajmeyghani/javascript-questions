// a promise a value that is resolved/available in the future
// eg: making a request to an endpoint and waiting for the result.
var isPassed = true;
var promise = new Promise(function (resolve, reject) {
  if (isPassed){
    resolve('ok');  
  } else {
    reject('some erro');
  }
});




// chainable
promise.then(function(data) {
  // when data is available (success)
  // 'ok' is available here.
  console.log(data);
}).catch(function(err) {
  // when there was error (fail)
  // rejected, now we are here.
});






/*
// the q library, it does have the finally block.
.finally(function() {
  // always called at the end. (regardless of failure or succes)
  console.log('all done');
});

*/
