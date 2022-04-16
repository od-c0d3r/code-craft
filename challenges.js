// // https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
// Implement the function unique_in_order which takes as argument a sequence and 
// returns a list of items without any elements with the same value next to each
//  other and preserving the original order of elements.

// For example:a

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


const uniqueInOrder = (iterable) => {
    let result = []
    if (typeof iterable == 'string') iterable.split('').forEach((element) => (result[result.length - 1] !== element) ? result.push(element) : false);
    else iterable.forEach((element) => (result[result.length - 1] !== element) ? result.push(element) : false);
    return result
}

// console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A','B','C','D','A','B']
console.log(uniqueInOrder([1,2,2,3,3])); //[1,2,3]
