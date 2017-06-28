var countObject = {};
var re = /[a-zA-z]/g;
var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

/* Beta
function countLetters(sentence, currentChar) {
  var count = 0;
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] === currentChar) {
      count++;
    }
  }
  return count;
}
for (var i = 0; i < characters.length; i++) {
  var currentChar = characters[i];
  countObject[currentChar] = countLetters(sentence, currentChar);
}
console.log(countObject);
*/

// Final Product
function countLetters(sentence) {
  var letters = sentence.toLowerCase().match(re);
  console.log(letters);
  for (var i = 0; i < characters.length; i++) {
    var count = 0;
    for (var x = 0; x < letters.length; x++) {
      if (letters[x] === characters[i]) {
        count++
      }
      countObject[characters[i]] = count;
    }
  }
  console.log(countObject);
}
countLetters("HALLELUJAH IT FINALLY IS A FUNCTIONAL FUNCTION");