// ES: EcmaScript
// ES5
// ES6: a lot of new features

var fs = require('fs');
fs.readFile('./my-files.txt',  (err, content) => { // es6 arrow function
  // err of the content?

  // clean code: Robert C Martin
  if (err) {
    throw new Error();
  }
  console.log(content);
  //
  fs.writeFile('./output.txt', content, 'utf8', (err) => {
    if (err) {
      throw new Error();
    }
    // TODO: promise to rescue...
  });
});

