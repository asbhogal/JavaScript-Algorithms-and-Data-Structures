/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const paragraphConversion = pokemon.map(creature => {
    return `<p>${creature}</p>`
})

// OR

const paragraphConversion2 = pokemon.map(creature => `<p>${creature}</p>`)

// SINCE .map RUNS THROUGH EVERY VALUE, AN ITERATIVE LOOP ISN'T REQUIRED

console.log(paragraphConversion);
console.log(paragraphConversion2);

// BOTH WILL OUTPUT THE SAME RESULT