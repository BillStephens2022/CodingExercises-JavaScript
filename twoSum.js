/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const numArray_1 = nums = [2, 7, 11 ,15];
const targetNum_1 = 9;

const numArray_2 = nums = [3, 2, 4];
const targetNum_2 = 6;

const numArray_3 = nums = [3, 3];
const targetNum_3 = 6;


// Solution 1 - most efficient - uses hash table:
let twoSum_1 = function(nums, target) {
    // create object that will hold the answer with both the numbers and indices (indeces to be returned later)
    let answerObj = {};
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i]
        // identify the complementary number to the currentNum
        let complementNum = target - currentNum;
        // if the complementary number exists in the answerObj, return the index
        if (answerObj.hasOwnProperty(complementNum)) {
            return [answerObj[complementNum], i];
        }
        // otherwise, store the current number's index
        answerObj[currentNum] = i;
    }
    // If no solution is found, return an empty array
    return [];
};

let solution_1 = twoSum_1(numArray_1, targetNum_1);
let solution_2 = twoSum_1(numArray_2, targetNum_2);
let solution_3 = twoSum_1(numArray_3, targetNum_3);
console.log(`Method 1, 1st example: ${solution_1}`);
console.log(`Method 1, 2nd example: ${solution_2}`);
console.log(`Method 1, 3rd example ${solution_3}`);

// Solution 2 - less efficient - uses 2 pointer:

// Uses two nested loops to compare each pair of numbers in the array to check if they add
// up to the target. If they do, we add their indices to the answerArr. 
// This ensures that the two numbers are at different indices, as required by the problem. 
// Since it uses nested loops, it is less efficient than the hash table approach,
//  but still valid for small input sizes.

let twoSum_2 = function(nums, target) {
    let answerArr = [];
  
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        answerArr.push(i, j);
        return answerArr;
      }
    }
  }
  
  return answerArr;
};

solution_1 = twoSum_1(numArray_1, targetNum_1);
solution_2 = twoSum_1(numArray_2, targetNum_2);
solution_3 = twoSum_1(numArray_3, targetNum_3);
console.log(`Method 2, 1st example: ${solution_1}`);
console.log(`Method 2, 2nd example: ${solution_2}`);
console.log(`Method 2, 3rd example ${solution_3}`);