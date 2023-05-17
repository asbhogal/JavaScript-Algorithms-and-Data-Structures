// Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

function splitify(str) {
  return str.split(/[\s,.\-]+/);
}

splitify("Hello World,I-am code");

console.log(splitify("Hello World,I-am code"));

// SPLIT THE STRING INTO AN ARRAY OF SUBSTRINGS
// ELIMINATE ANYTHING INBETWEEN WHICH IS A SPACE OR NON-ALPHABETICAL CHARACTER
// RETURN THE ARRAY OF SUBSTRINGS
