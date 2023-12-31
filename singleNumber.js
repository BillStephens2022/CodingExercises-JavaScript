// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var numCount = new Map();
    var answer;
    for (var i = 0; i < nums.length; i++) {
        numCount.set(nums[i], (numCount.get(nums[i]) || 0) + 1);
    }
    console.log("numCount map: ", numCount);
    numCount.forEach((value, key) => {
        if (value === 1) {
            answer = key;
        }
    })
    return answer;
};

// var nums = [4,1,2,1,2];
// console.log(singleNumber(nums));
// var nums = [2,2,1];
// console.log(singleNumber(nums));
// var nums = [1];
// console.log(singleNumber(nums));
// var nums = [1,0,1];
// console.log(singleNumber(nums));

// solution 2: using the bitwise 'XOR operator'
var singleNumber2 = function(nums) {
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result ^= nums[i];
        console.log("loop: " + i + "result = " + result);
    }
    return result;
};

var nums = [4,1,2,1,2];
console.log(singleNumber2(nums));
var nums = [2,2,1];
console.log(singleNumber2(nums));
var nums = [1];
console.log(singleNumber2(nums));
var nums = [1,0,1];
console.log(singleNumber2(nums));
 