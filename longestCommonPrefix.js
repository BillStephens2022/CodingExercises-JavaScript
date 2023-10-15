//Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return "";
    }

    strs.sort(); // Sort the input array

    const firstStr = strs[0];
    const lastStr = strs[strs.length - 1];
    let prefix = "";
    
    for (let i = 0; i < firstStr.length; i++) {
        if (firstStr[i] === lastStr[i]) {
            prefix += firstStr[i];
        } else {
            break;
        }
    }
    
    return prefix;
}



var strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));

var strs = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs));