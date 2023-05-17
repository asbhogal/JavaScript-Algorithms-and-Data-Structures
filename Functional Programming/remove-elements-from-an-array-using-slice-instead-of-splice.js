// Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.

// Do not mutate the original array provided to the function.

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

function nonMutatingSplice(cities) {
  return cities.slice(0, 3);
}

console.log(nonMutatingSplice(inputCities));
