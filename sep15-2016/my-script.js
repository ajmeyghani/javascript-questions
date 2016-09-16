var button = document.getElementById('my-button');
button.addEventListener('click', function(event) {
  console.log('ok');
  console.log(event);
  console.log(event.target);
});

document.addEventListener('DOMContentLoaded', function(event) {
  console.log(event);
});



