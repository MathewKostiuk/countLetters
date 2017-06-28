var countObject = {};
var re = /[a-zA-z]/g;
var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
countLetters("oog a booga hallelujah");
var sentence = "hello";

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