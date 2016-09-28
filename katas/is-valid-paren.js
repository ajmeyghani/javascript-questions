/*
Write a function called isValidParen that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

Examples:
isValidParen( "()" ) => returns true
isValidParen( ")(()))" ) => returns false
isValidParen( "(" ) => returns false
isValidParen( "(())((()())())" ) => returns true
shift elm:
  if leftparen
    push to tracker
  else for each rightParn, pop from tracker
*/
function isValidParen(parens) {
  const parensList = parens.split('');
  if (parensList.length === 1) {
    return false;
  }
  var isBalanced = true;
  const parenTracker = [];
  parensList.forEach(p => {
    if (p === '(') {
      parenTracker.push(p);
    } else {
      if (!parenTracker.length) {
        isBalanced = false;
      }
      parenTracker.pop();
    }
  });
  return Boolean(!parenTracker.length && isBalanced);
}

/*
function validParentheses(parens){
  var stack = [],
    i;

  for (i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      stack.push(parens[i]);
    }
    else if('(' !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
}

function validParentheses(parens){
  for (var i = 0, depth = 0; i < parens.length; i++) {
    if (parens[i] == '(') depth++;
    if (parens[i] == ')') depth--;
    if (depth < 0) return false;
  }
  return depth == 0;
}

function validParentheses(parens) {
  sum = 0;
  for (var i = 0; i < parens.length; ++i)
  {
    sum += parens.charAt(i) == "(" ? 1 : -1;
    if (sum < 0) return false;
  }
  return sum == 0;
}

function validParentheses(str) {
  var res = str.split('').reduce(function(sum,item) {
    if(item == ')' && sum <= 0) return sum = 100
    return sum += item == '(' || -1
  }, 0)
  return res === 0
}

function validParentheses(parens){
  return !parens.split("").reduce(function(res, curr) { return Math.abs(res) + (curr === "(" ? 1 : -1) }, 0);
}
*/

module.exports = isValidParen;
