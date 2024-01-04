// You're playing Battleship on a grid of cells with R rows and 
// C columns. There are or more battleships on the grid, each 
// occupying a single distinct cell. The cell in the 
// ith row from the top and jth column from the left either contains 
// a battleship (G i,j =1) or doesn't (G i,j =0).
// You're going to fire a single shot at a random cell in the grid. 
// You'll choose this cell uniformly at random from the R∗C possible 
// cells. You're interested in the probability that the cell hit by 
// your shot contains a battleship.
// Your task is to implement the function getHitProbability(R, C, G) 
// which returns this probability.


/**
 * @param {number} R
 * @param {number} C
 * @param {number[][]} G
 * @return {number}
 */
function getHitProbability(R, C, G) {
    const totalCells = R * C;
    let battleshipCount = 0;
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            G[i][j] === 1 ? battleshipCount++ : battleshipCount;
        }
    }

    return battleshipCount / totalCells;
  }
  

const R = 3;
const C = 4;
const G = [
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [1, 0, 0, 0]
];

console.log(getHitProbability(R, C, G)); 