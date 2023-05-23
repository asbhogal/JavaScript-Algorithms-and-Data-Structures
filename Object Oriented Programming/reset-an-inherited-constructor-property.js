function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor);
console.log(beagle.constructor);

/* 

1. Three constructor functions are defined: Animal, Bird, and Dog. Each constructor function is empty and does not contain any specific properties or methods.

2. The Bird.prototype object is created using Object.create(Animal.prototype). This sets up the prototype chain so that Bird.prototype inherits from Animal.prototype. Similarly, Dog.prototype is created with Object.create(Animal.prototype), establishing the prototype chain between Dog.prototype and Animal.prototype.

3. The Bird.prototype.constructor property is explicitly set to Bird. This ensures that the constructor property points to the Bird constructor function. Similarly, the Dog.prototype.constructor property is set to Dog, ensuring that the constructor property points to the Dog constructor function.

4. Instances of Bird and Dog are created using the new keyword and assigned to the variables duck and beagle, respectively. These instances inherit properties and methods from their respective prototype objects, Bird.prototype and Dog.prototype, which in turn inherit from Animal.prototype.

5. The console.log(duck.constructor) statement outputs the constructor property of the duck object. Since duck was created using the Bird constructor function, which has its prototype.constructor explicitly set to Bird, the output will be Bird in the console.

6. The console.log(beagle.constructor) statement outputs the constructor property of the beagle object. Since beagle was created using the Dog constructor function, which has its prototype.constructor explicitly set to Dog, the output will be Dog in the console.

In summary, the code sets up a prototype chain between Animal, Bird, and Dog using Object.create(). It also ensures that the constructor property of each prototype object is correctly assigned to its respective constructor function.*/
