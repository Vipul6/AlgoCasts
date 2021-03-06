// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//-----Solution #2
function reverseInt(n) {
    console.log(Math.sign(n));
    const reverseInterger = n.toString().split('').reverse().join('');
    return parseInt(reverseInterger) * Math.sign(n);
    
  }
  console.log(reverseInt(123));

//---------Solution #1
// function reverseInt(n) {
//     const reverseInterger = n.toString().split('').reverse().join('');
  
//     return n < 0 ?  parseInt(reverseInterger) * (-1): parseInt(reverseInterger);
    
//   }
//   console.log(reverseInt(-123));

module.exports = reverseInt;
