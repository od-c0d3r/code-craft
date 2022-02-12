// https://www.codewars.com/kata/55aa075506463dac6600010d/javascript

/**
 * f
 * 
 */

function listSquared(m, n) {
    let arr = [];
    let resault = [];
    for (let start = m; start <= n; start++) {
        for (let index = 1; index <= start ; index++) {
            if (Number.isSafeInteger(start / index)) arr.push(index * index);
            const sum = arr.reduce((a, b) => a + b, 0);
            if (Number.isSafeInteger(Math.sqrt(sum)) && index == start) resault.push([start, sum])
        }
        arr = [];
    }
    // // return Math.sqrt(sum);
    // // return sum
    console.log(`resault ${resault}`);
    return resault;
}

// function listSquared(m, n) {
//     let arr = []
//     for (let start = m; start <= n; start++) {
//         if (Number.isSafeInteger(n / start)) arr.push(start * start)
//     }
//     const sum = arr.reduce((a, b) => a + b, 0);
//     // return Math.sqrt(sum);
//     // return sum
//     return arr;
// }

console.log(listSquared2(1, 50)) //=== `[[1, 1], [42, 2500], [246, 84100]]`);

// // https://www.codewars.com/kata/55aa075506463dac6600010d/javascript

// /**
//  * f
//  * 
//  */

//  function listSquared(m, n) {
//     let arr = []
//     for (let start = m; start <= n; start++) {
        
//         for (let start2 = m; start2 <= start; start2++) {
//             if (Number.isSafeInteger(start / start2)) {
//                 arr.push(start * start)
//                 console.log(start*start);
//             }
//         }
//     }
//     // const sum = arr.reduce((a, b) => a + b, 0);
//     // // return Math.sqrt(sum);
//     // // return sum
//     // return arr;
// }

// console.log(listSquared(1, 250)) //=== `[[1, 1], [42, 2500], [246, 84100]]`);
