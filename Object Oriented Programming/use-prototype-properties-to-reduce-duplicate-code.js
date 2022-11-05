// Add a numLegs property to the prototype of Dog

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");

// Any value can be assigned to the numLegs property, so long as there is one. Each instance of Dog, e.g. beagle, will therefore have a numLegs property with the value assigned in line 7