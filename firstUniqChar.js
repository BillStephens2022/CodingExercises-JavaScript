
// Given a string s, find the first non-repeating character in it and 
// return its index. If it does not exist, return -1.
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var answer;
    repeatedChars = "";
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if ((!s.slice(i + 1).includes(char)) && (!repeatedChars.includes(char))) {
            answer = i;
            return answer;
        } else {
            repeatedChars += char;
        }
    }
    return -1;
};

console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("aabb"));
console.log(firstUniqChar("crazyperson"));

// alternative method using a Map data structure
const firstUniqChar2 = (s) => {
    const charCount = new Map();
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (charCount.get(char) === 1) {
            return i;
        }
    }
    return -1;
}

console.log(firstUniqChar2("loveleetcode"));
console.log(firstUniqChar2("leetcode"));
console.log(firstUniqChar2("aabb"));
console.log(firstUniqChar2("crazyperson"));