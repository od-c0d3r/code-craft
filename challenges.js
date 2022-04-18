// // https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript

// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's 
// current state is solved, wouldn't we? Our goal is to create a function 
// that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is 
// empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]

// We want our function to return:

//     -1 if the board is not yet finished AND no one has won yet (there are empty spots),
//     1 if "X" won,
//     2 if "O" won,
//     0 if it's a cat's game (i.e. a draw).

// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {
    const flatBoard = board.reduce((acc, val) => acc.concat(val), []);
    
    if (flatBoard[0] == flatBoard[1] && flatBoard[1] == flatBoard[2] && flatBoard[2] == 1) return 1
    if (flatBoard[0] == flatBoard[1] && flatBoard[1] == flatBoard[2] && flatBoard[2] == 2) return 2
    
    if (flatBoard[3] == flatBoard[4] && flatBoard[4] == flatBoard[5] && flatBoard[5] == 1) return 1
    if (flatBoard[3] == flatBoard[4] && flatBoard[4] == flatBoard[5] && flatBoard[5] == 2) return 2
    
    if (flatBoard[6] == flatBoard[7] && flatBoard[7] == flatBoard[8] && flatBoard[8] == 1) return 1
    if (flatBoard[6] == flatBoard[7] && flatBoard[7] == flatBoard[8] && flatBoard[8] == 2) return 2

    if (flatBoard[0] == flatBoard[3] && flatBoard[3] == flatBoard[6] && flatBoard[6] == 1) return 1
    if (flatBoard[0] == flatBoard[3] && flatBoard[3] == flatBoard[6] && flatBoard[6] == 2) return 2

    if (flatBoard[1] == flatBoard[4] && flatBoard[4] == flatBoard[7] && flatBoard[7] == 1) return 1
    if (flatBoard[1] == flatBoard[4] && flatBoard[4] == flatBoard[7] && flatBoard[7] == 2) return 2

    if (flatBoard[2] == flatBoard[5] && flatBoard[5] == flatBoard[8] && flatBoard[8] == 1) return 1
    if (flatBoard[2] == flatBoard[5] && flatBoard[5] == flatBoard[8] && flatBoard[8] == 2) return 2

    if (flatBoard[0] == flatBoard[4] && flatBoard[4] == flatBoard[8] && flatBoard[8] == 1) return 1
    if (flatBoard[0] == flatBoard[4] && flatBoard[4] == flatBoard[8] && flatBoard[8] == 2) return 2
    
    if (flatBoard[2] == flatBoard[4] && flatBoard[4] == flatBoard[6] && flatBoard[6] == 1) return 1
    if (flatBoard[2] == flatBoard[4] && flatBoard[4] == flatBoard[6] && flatBoard[6] == 2) return 2

    if (flatBoard.includes(0)) return -1

    return 0
}


console.log(
    isSolved([
        [0, 0, 1],
        [0, 1, 2],
        [2, 1, 0]
    ])
) // === -1));

// community solution

// function isSolved(board) {
//    board = board.join('-').replace(/,/g,'');
//    if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
//    if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
//    if(/0/.test(board)) return -1;
//    return 0;
// }