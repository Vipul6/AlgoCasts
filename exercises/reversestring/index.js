// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//--------- Solution #3
function reverse(str) {
    console.log(str);
   return str.split('').reduce((reversed, character) => {
     return character + reversed;
   }, '');
 }
 console.log(reverse('saurabh'));

//----Solurion #2
// function reverse(str) {
    
//     let reverseStr = '';
  
//     for(let character of str ) {
//       console.log(character);
//       reverseStr  = character + reverseStr;
//     }
// }

// module.exports = reverse;


//---------- Solution #1
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverse('saurabh'));


