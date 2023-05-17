// You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.

// let difficultSpelling = "Mississippi";
// let myRegex = /change/; // Change this line
// let result = difficultSpelling.match(myRegex);

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // i optional dep. on result and string
let result = difficultSpelling.match(myRegex);

console.log(result); // returns [ 'ss', 'ss' ]
