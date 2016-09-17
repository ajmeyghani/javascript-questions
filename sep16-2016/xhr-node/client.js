//  function getData(callback) {
//    var xhr = new XMLHttpRequest();
//    xhr.open('get', 'http://localhost:3000/api/data');
//    xhr.send();
//    xhr.onreadystatechange = function () {
//      if (xhr.readyState === 4) {
//        callback(xhr.responseText);
//      }
//    };
//  }

//  getData(function(data) {
//    console.log(data);
//  });


// using axios
var response = axios.get('http://localhost:3000/api/data');
// response is a promise object.
response.then(function (data) {
  console.log(data);
});
















