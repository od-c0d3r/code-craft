// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persis
// tence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num, result = 0) {
    if (num.toString().length == 1) return result;

    num = [...num.toString()].reduce((a, b) => Number(a) * Number(b));
    result++;

    return persistence(num, result++)
}


// console.log(persistence(39)); // ,3
// console.log(persistence(4)); // ,0
// console.log(persistence(25)); // ,2
console.log(persistence(999)); // ,4