// Given an integer numRows, return the first numRows of Pascal's triangle.

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows < 1) return null;
    var pascalsTriangle = [[1]];

    if (numRows === 1) return pascalsTriangle;

    pascalsTriangle.push([1, 1]);

    for (var rowNum = 3; rowNum <= numRows; rowNum++) {
        var row = [1];
        for (var col = 1; col < rowNum - 1; col++)
            row.push((pascalsTriangle[rowNum - 2][col - 1] + pascalsTriangle[rowNum - 2][col]));
        row.push(1);
        pascalsTriangle.push(row);
    }

    return pascalsTriangle;
};

console.log("---------Num Rows: 0-----------------");
console.log(generate(0));
console.log("---------Num Rows: 1-----------------");
console.log(generate(1));
console.log("---------Num Rows: 2-----------------");
console.log(generate(2));
console.log("---------Num Rows: 3-----------------");
console.log(generate(3));
console.log("---------Num Rows: 4-----------------");
console.log(generate(4));
console.log("---------Num Rows: 5-----------------");
console.log(generate(5));
