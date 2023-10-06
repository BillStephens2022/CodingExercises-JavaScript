//Given an integer x, return true if x is a palindrome, and false otherwise.
/**
 * @param {number}
 * @return {boolean}
 */

// ultimately, test whether the string and the reversed string are equal
// need to loop through the string backwards and create a new string which is a 
// reverse of the original and then compare to the original to check if its a palindrome
var isPalindrome = function(x) {
    var xStr = x.toString();
    var xReverse = '';
    for (var i = xStr.length - 1; i >= 0; i--) {
        xReverse += xStr[i];
    }
    return xStr === xReverse;
};

console.log(isPalindrome('tacocat'));  // true
console.log(isPalindrome('bill stephens'));  // false