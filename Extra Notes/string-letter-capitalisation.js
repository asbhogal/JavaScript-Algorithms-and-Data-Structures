/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here

const convertedName = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})

// OR

const convertedName2 = names.map(name => (name[0].toUpperCase() + name.slice(1)))

console.log(convertedName);
console.log(convertedName2);

// THE SECOND IS MORE CONCISE

// BOTH WILL OUTPUT THE SAME RESULT