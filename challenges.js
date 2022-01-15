// https://github.com/microverse-students/binary-search-od-c0d3r/edit/main/challenge.js

function sqrt(number) {
    return sqrt_recursive(number, 0, number)
}

function sqrt_recursive(number, min_interval, max_interval) {
    // console.log(min_interval, max_interval);
    let mid = Math.floor((min_interval + max_interval) / 2);
    if (mid * mid === number) return mid;
    if (mid * mid > number) return sqrt_recursive(number, min_interval, mid);
    if (mid * mid < number) return sqrt_recursive(number, mid, max_interval);
    return 'Error';
}

console.log(sqrt(25))
console.log(sqrt(7056))

