// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9

multiplicationTable = function (size) {
    let oneToSize = Array.from(Array(size), (x, index) => index + 1);
    let multiplicationTable = oneToSize.map((head, index) => {
        return Array.from(Array(size), (x, index) => (index+1)* head);
    });
    return multiplicationTable;
}


console.log(multiplicationTable(3) == [[1,2,3], [2,4,6], [3,6,9]]);

