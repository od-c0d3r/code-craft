// https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript

/**
 * A stream of data is received and needs to be reversed.Each segment is 8 bits long,
 *  meaning the order of these segments needs to be reversed,
 */

function dataReverse(data) {
    const sliceingTimes = data.length / 8;
    console.log( Array(, 2));

}



const data1 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]
const data2 = [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
console.log(dataReverse(data1));
console.log(dataReverse(data1) === data2);
const data3 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]
const data4 = [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0]
console.log(dataReverse(data3));
console.log(dataReverse(data3) === data4);

