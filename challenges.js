// https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript

function encode(string) {
    return string.replace(/[aeiou]/ig, (v) => {
        switch (v) {
            case 'a':
                return '1'
            case 'e':
                return '2'
            case 'i':
                return '3'
            case 'o':
                return '4'
            case 'u':
                return '5'
            default:
                break;
        };
    });
};

function decode(string) {
    return string.replace(/[12345]/ig, (v) => {
        switch (v) {
            case '1':
                return 'a'
            case '2':
                return 'e'
            case '3':
                return 'i'
            case '4':
                return 'o'
            case '5':
                return 'u'
            default:
                break;
        };
    });
};

console.log(encode('hello')) // === 'h2ll4';);
console.log(encode('How are you today?')) //); === 'H4w 1r2 y45 t4d1y?';
console.log(encode('This is an encoding test.')); // === 'Th3s 3s 1n 2nc4d3ng t2st.';
console.log(decode('h2ll4')) // === 'hello';);