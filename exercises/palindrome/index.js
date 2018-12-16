// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


//--------- Solution #3
function palindrome(str) {
    return str.split('').every((char, i) => {
      return char === str[str.length - i -1];
    });
}

console.log(palindrome('madam'));
//----- Solution #2

// function palindrome(str) {
//     console.log(str);
//     const inputStr = str.split('').reduce((rev, char) => char + rev,'');
//     return inputStr === str ? ture: false;
    
// }

// console.log(palindrome('madam'));

//------- Solution #1

// function palindrome(str) {
//     console.log(str);
//     const inputStr = str.split('').reverse().join('');
    
//     if(inputStr === str) {
//       return true
//     }else {
//       return false
//     }
// }

// console.log(palindrome('abba'));

module.exports = palindrome;
