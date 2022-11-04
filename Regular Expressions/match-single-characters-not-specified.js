// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

// let quoteSample = "3 blind mice.";
// let myRegex = /change/; // Change this line
// let result = myRegex; // Change this line

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);

console.log(result);

/* returns [
  ' ', 'b', 'l',
  'n', 'd', ' ',
  'm', 'c', '.'
] */