var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
app.get('/api/data', function (req, res) {
  var userAgent = req.headers['user-agent']; // using the bracket notation because the name of the prop contains hyphen

//  var isMozila = userAgent.toLowerCase().indexOf('mozilla') !== -1; // indexOf ES5 way of checking the string.
 var isMozila = userAgent.toLowerCase().includes('mozilla');
  console.log(userAgent);
  res.send({
    isMozilla: isMozila
  });
});

app.listen(3000);