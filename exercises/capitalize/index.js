// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


//--------- Solution 2
// function capitalize(str) {
//   let capitalizeStr = '';
  
//   for(let cStr of str.split(' ')) {
//     const convert = cStr.charAt(0).toUpperCase() + cStr.slice(1);
//     capitalizeStr += ' ' + convert;
//     console.log(capitalizeStr)
//   }
//   return capitalizeStr;
// }

function capitalize(str) {
    let result = str[0].toUpperCase();
    
    
    for(let i=1; i < str.length; i++) {
      
      if(str[i - 1] === ' ') {
        result += str[i].toUpperCase();
      }else {
        result += str[i]
      }
      
    }
}

module.exports = capitalize;  

//------------ Solution 1

// function capitalize(str) {
//     const words = [];
  
//     for(let char of str.split(' ')) {
//       words.push(char[0].toUpperCase() + char.slice(1));
//     }
    
//     return words.join(' ');
    
    
// }


