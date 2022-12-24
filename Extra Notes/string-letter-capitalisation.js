/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here

const convertedName = names.map(function(name) {
    return name.charAt(0).toUpperCase() + name.slice(1)
})

console.log(convertedName);