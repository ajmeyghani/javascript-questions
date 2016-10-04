function isPalindrome(text){
  // normalize
  var cleaned = text.replace(/\W/gi, '').toLowerCase();
                  
  return cleaned === cleaned.split('').reverse().join('');              

}

console.log(isPalindrome('bad'));
