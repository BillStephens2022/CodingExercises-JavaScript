// Given a roman numeral s, convert it to an integer

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  // create an object with single roman numeral characters as the key and integers as the values.
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    // compare character with the next character to determine if the value is less than or greater than the next value
    // and then either subtract (if less than next character) or add (if greater than next character)
    if (romanNumerals[s[i]] < romanNumerals[s[i+1]]) {
        result -= romanNumerals[s[i]];
    } else {
        result += romanNumerals[s[i]];
    }
  }
  return result;
};

s = 'III'
console.log(s + ": " + romanToInt(s));

s = 'LVIII'
console.log(s + ": " + romanToInt(s));

s = 'MCMXCIV'
console.log(s + ": " + romanToInt(s));