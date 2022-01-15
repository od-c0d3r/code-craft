// https://github.com/microverse-students/towers-of-hanoi---part-1-od-c0d3r/blob/main/tests.js

function move(starting, goal) {
    let steps = []
    let mid;
    if (starting === 1 && goal === 2 || starting === 2 && goal === 1) mid = 3;
    if (starting === 1 && goal === 3 || starting === 3 && goal === 1 || goal === 2 && starting === 3) mid = 2;
    if (starting === 2 && goal === 3 || starting === 3 && goal === 2) mid = 1;

    steps.push(`${starting}->${mid}`);
    steps.push(`${starting}->${goal}`);
    steps.push(`${mid}->${goal}`);

    return steps.join(' ')
}

console.log(move(1, 3));
// => 1->2 1->3 2->3

console.log(move(2, 3));
  // => 2->1 2->3 1->3
