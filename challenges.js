// https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript

function validate(password) {
    return !/[^\w]/.test(password);
}

console.log(validate('djI38D55'));//,); validate('djI38D55')//, 'djI38D55 - Expected true');
console.log(validate('a2.d412')); // !validate('a2.d412')////, 'a2.d412 - Expected false');
console.log(validate('JHD5FJ53'))//,); !validate('JHD5FJ53')//, 'JHD5FJ53 - Expected false');
console.log(validate('!fdjn345'))//,); !validate('!fdjn345')//, '!fdjn345 - Expected false');
console.log(validate('jfkdfj3j'))//,); !validate('jfkdfj3j')//, 'jfkdfj3j - Expected false');
console.log(validate('123'))//,); !validate('123')//, '123 - Expected false');
console.log(validate('abc'))//,); !validate('abc')//, 'abc - Expected false');
console.log(validate('Password123'))
