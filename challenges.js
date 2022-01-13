// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

// Given two integers a and b, which can be positive or negative, 
// find the sum of all the integers between and including them and return it.
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a, b) {
    let bigger = (a >= b ? a : b);
    let smaller = (bigger === a ? b : a);
    let result = 0;
    for (let i = smaller; i <= bigger; ++i ) {
        result += i;
    }
    return result;
}

console.log(getSum(-1,2)=== 6); // -1 + 0 + 1 + 2 // return true

/*  other clever code
const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}
*/