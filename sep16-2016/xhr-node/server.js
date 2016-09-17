/*
 npm init: creates the package.json file
 npm install express --save: install the express module and adds it as a prod dep
 npm install cors --save: installed the cors plugin
 npm install mocha --save-dev: installed as a dev dep


 deploy:
 npm install --production: installs the prod deps

 Git: ignore the node_modules folder
 .gitignore: specify the folders you want to ignore

 // GIT:
 // code repo: collabroate, versioning
  git status: what has changed, working directory details
  git diff: tell me the changes so far
  git add: adding files that you want to commit
  git commit: save your work (saving work)
*/
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
