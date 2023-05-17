// Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return `This dog has ${dog.numLegs} legs.`;
  },
};

dog.sayLegs(); // calls the function sayLegs in the dog property. Line 6 is then parsed and the respective value returned (see console log)

console.log(dog.sayLegs());
