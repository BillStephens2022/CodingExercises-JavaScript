// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var openBrackets = [];
  var bracketPairs = {
    "(" : ")",
    "[" : "]",
    "{" : "}"
  };

  for (var i = 0; i < s.length; i++) {
    var char = s[i];
    if (bracketPairs[char]) {
        openBrackets.push(char);
    } else {
        var openBracket = openBrackets.pop();
        if (char !== bracketPairs[openBracket]) return false;
    }
  }
  return openBrackets.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(}")); // false
console.log(isValid("([)]")); // false
console.log(isValid("([{}])")); // true
console.log(isValid("]"));  // false
