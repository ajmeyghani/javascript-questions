/*
  Given the string input, representing people
  in departments, group them by departments:
  i.e.

  {
    engineering: [
     {
      id: ...,
      first_name: ...,
      last_name: ...,
      department: ...
     }
    ],
    sales: [
     {
      id: ...,
      first_name: ...,
      last_name: ...,
      department: ...
     }
    ]
  }
*/


var rawInput = "id, first_name, last_name, department\n1, Tom, Jones, Engineering \n3, Kim, Thomson, Sales \n2, Jon, Doe, Engineering \n4, Paul, Doe, Sales \n";

var grouped = {};
var peopleData = rawInput.split('\n')
             .filter((p, i) => p)
             .map(p => p.replace(/\s*/g, ''));

var header = peopleData[0].split(',');
peopleData.slice(1).forEach(p => {
  var row = p.split(',');
  var person = {};
  header.forEach((h, i) => {
    person[h] = row[i];
  });
  if (!(person.department in grouped)) {
    grouped[person.department] = [];
  }
  grouped[person.department].push(person);
});

console.log(grouped);

