// There's a multiple-choice test with  N questions, numbered from
// 1 to N. Each question has 2 answer options, labelled A and B.
// You know that the correct answer for the ith question is the
// ith character in the string C, which is either "A" or "B", but you
// want to get a score of 0 on this test by answering every question
// incorrectly.
// Your task is to implement the function getWrongAnswers(N, C) which
// returns a string with N characters, the ith of which is the answer
// you should give for question i in order to get it wrong (either "A" or "B").

/* @param {number} N
 * @param {string} C
 * @return {string}
 */
function getWrongAnswers(N, C) {
  let answer = "";
  for (let i = 0; i < C.length; i++) {
    answer += C[i] == "A" ? "B" : "A";
  }
  return answer;
}

console.log(getWrongAnswers(3, "ABA"));
console.log(getWrongAnswers(5, "BBBBB"));
console.log(getWrongAnswers(7, "AAAAAAA"));
console.log(getWrongAnswers(23, "BABABABABABABABABAAAAA"));

