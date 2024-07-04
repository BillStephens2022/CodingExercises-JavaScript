// A cafeteria table consists of a row of N seats, numbered from 1 to N 
// from left to right. Social distancing guidelines require that every
// diner be seated such that K seats to their left and K seats to their
// right (or all the remaining seats to that side if there are fewer 
// than K) remain empty. There are currently  M diners seated at the 
// table, the ith of whom is in seat Si. No two diners are sitting in 
// the same seat, and the social distancing guidelines are satisfied.
// Determine the maximum number of additional diners who can 
// potentially sit at the table without social distancing guidelines 
// being violated for any new or existing diners, assuming that the 
// existing diners cannot move and that the additional diners will 
// cooperate to maximize how many of them can sit down.

/**
 * @param {number} N
 * @param {number} K
 * @param {number} M
 * @param {number[]} S
 * @return {number}
 */
function getMaxAdditionalDinersCount(N, K, M, S) {
    let availableSeats = 0;
    const sortedOccupiedSeats = S.sort((a, b) => a - b);
    console.log("Sorted Occupied Seats: ", sortedOccupiedSeats);

    const startSeatsAvailable = Math.floor((sortedOccupiedSeats[0] - 1) / (2 * K));
    const endSeatsAvailable = Math.floor(((N - sortedOccupiedSeats[sortedOccupiedSeats.length - 1] - 1)/ (2 * K)));
    console.log("start seats: ", startSeatsAvailable);
    console.log("end seats: ", endSeatsAvailable);
    availableSeats = availableSeats + startSeatsAvailable + endSeatsAvailable;
    console.log("total seats available at ends: ", availableSeats);
   

   

    return availableSeats;
}

console.log(getMaxAdditionalDinersCount(10, 1, 2, [2, 6]));
console.log(getMaxAdditionalDinersCount(15, 2, 3, [11, 6, 14]));

