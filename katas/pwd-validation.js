/*
Valid only if:
- At least six characters long
- contains a lowercase letter
- contains an uppercase letter
- contains a number
All characters should be alpha numeric.
 */

module.exports = function validate(password) {
  /*
    Structure:
    ^: start anchor
    (?=.*<rule?)
    .
    .
    .
    $: end anchor
   */
  if (!password) {return false;}
  if(/[^a-zA-Z0-9]/.test(password)) {return false;}
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);

  /* single regex */
  // return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);

}



/*
function validate(password) {
console.log(password);
      return password.length>=6 &&
        /[a-z]/.test(password) &&
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password) &&
        /^[a-zA-Z0-9]+$/.test(password);

      }
 */
