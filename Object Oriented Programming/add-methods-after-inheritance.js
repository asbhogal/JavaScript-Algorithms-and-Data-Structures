function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

function Dog() {}

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log("Woof!");
};

// Only change code above this line

let beagle = new Dog();

beagle.bark(); // outputs Woof!
beagle.eat(); // outputs nom nom nom

/* 

The code outputs "nom nom nom" when beagle.eat() is called because Dog.prototype inherits the eat() method from Animal.prototype through the prototype chain.

Here's a breakdown of what happens:

1. The Animal constructor function is defined and its prototype is modified to include the eat() method using Animal.prototype.eat = function() { console.log("nom nom nom"); };. This method logs "nom nom nom" to the console.

2. The Dog constructor function is defined without any specific properties or methods.

3. The Dog.prototype object is created using Object.create(Animal.prototype), establishing the prototype chain between Dog.prototype and Animal.prototype. This means that Dog.prototype inherits properties and methods from Animal.prototype, including the eat() method.

4. The Dog.prototype.constructor property is explicitly set to Dog, ensuring that the constructor property points to the Dog constructor function.

5. The Dog.prototype.bark method is added, which logs "Woof!" to the console.

6. An instance of Dog is created using the new keyword and assigned to the variable beagle.

7. When beagle.eat() is called, JavaScript first looks for the eat() method on the beagle object itself. Since beagle doesn't have an eat() method of its own, JavaScript continues searching for the method up the prototype chain.

8. Since Dog.prototype inherits from Animal.prototype, and Animal.prototype has an eat() method, the eat() method defined in Animal.prototype is executed. It logs "nom nom nom" to the console.

So, even though the Dog.prototype.constructor property is assigned to Dog, it doesn't affect the inheritance of methods from Animal.prototype. The eat() method is still accessible through the prototype chain, allowing beagle.eat() to output "nom nom nom".

*/
