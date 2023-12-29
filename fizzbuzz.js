// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    answer = [];
    for (var i = 1; i <= n; i++) {
        if ((i % 5 === 0) && (i % 3 === 0 )) {
            answer.push("FizzBuzz");
        } else if (i % 5 === 0) {
            answer.push("Buzz");
        } else if (i % 3 === 0) {
            answer.push("Fizz");
        } else {
            answer.push(i.toString());
        }
    }
    return answer;
};

console.log(fizzBuzz(15));

// Another more efficient method
const fizzBuzz2 = (n) => {
    const answer = [];
    for (i = 1; i <=n; i++) {
        let output = "";
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        answer.push(output || i.toString());
    }
    return answer;
}

console.log(fizzBuzz2(15))