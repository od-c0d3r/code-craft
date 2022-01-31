// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

 /**
  *Complete the function that accepts a string parameter, 
  and reverses each word in the string. 
  All spaces in the string should be retained.
  */

const reverseWords = (str) => str.split(' ').map((word) => word.split('').reverse().join('')).join(' ');


console.log(reverseWords('The quick brown fox jumps over the lazy dog.')  === 'ehT kciuq nworb xof spmuj revo eht yzal .god');


/**
 * i started by the knowleddge of reverse and split array methods
 * and we wanna reverse each word on its orginal postion, 
 * so we gonna use map method too on the array
 */