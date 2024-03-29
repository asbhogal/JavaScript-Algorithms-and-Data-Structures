// Match all the letters in the string quoteSample.

// Note: Be sure to match both uppercase and lowercase letters.

// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /change/; // Change this line
// let result = alphabetRegex; // Change this line

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);

console.log(result);

/*returns:  [
  'T', 'h', 'e', 'q', 'u', 'i', 'c',
  'k', 'b', 'r', 'o', 'w', 'n', 'f',
  'o', 'x', 'j', 'u', 'm', 'p', 's',
  'o', 'v', 'e', 'r', 't', 'h', 'e',
  'l', 'a', 'z', 'y', 'd', 'o', 'g'
] */
