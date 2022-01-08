// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

/*
ROT13 is a simple letter substitution cipher that replaces a letter with the 
letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar 
cipher.

Create a function that takes a string and returns the string ciphered with 
Rot13. If there are numbers or special characters included in the string, 
they should be returned as they are. Only letters from the latin/english 
alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message) {
    return message.replace(
        /[a-zA-Z]/g,
        (found) => {
            if (found.charCodeAt(0) > 77 && found.charCodeAt(0) <= 90) {
                var newCode = (found.charCodeAt(0) - 77) + 64;
                return String.fromCharCode(newCode);
            } else if (found.charCodeAt(0) > 109) {
                var newCode = (found.charCodeAt(0) - 109) + 96;
                return String.fromCharCode(newCode)
            }
            else {
                return String.fromCharCode(found.charCodeAt(0) + 13);
            }
        }
    )
}


rot13("test");

// // Uncomment and run code (ctrl+F5) to test
console.log("grfg" == rot13("test")); // true
console.log("Grfg" == rot13("Test")); // true
