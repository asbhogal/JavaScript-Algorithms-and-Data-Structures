// A foods object has been created with three entries. Using the syntax of your choice, add three more entries to it: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

// Only change code below this line

const strawberries = "strawberries"; // VARIABLE DECLARED THEN USED IN LINE 15

foods.bananas = 13; // DOT NOTATION METHOD
foods["grapes"] = 35; // BRACKET NOTATION METHOD
foods[strawberries] = 27; // VARIABLE NOTATION METHOD

// Only change code above this line

console.log(foods);
