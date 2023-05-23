function Bird() {}

Bird.prototype.fly = function () {
  return "I am flying!";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function () {
  return "Alas, this is a flightless bird.";
};

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

/*

The eat() function returns "peck peck peck" instead of "nom nom nom" because you have overridden the eat() method in the Bird.prototype.

Here's a breakdown of what happens:

1. The Animal constructor function is defined, and its prototype is modified to include the eat() method, which returns "nom nom nom" when called.

2. The Bird constructor function is defined without any specific properties or methods.

3. The Bird.prototype object is created using Object.create(Animal.prototype), establishing the prototype chain between Bird.prototype and Animal.prototype. This means that Bird.prototype inherits properties and methods from Animal.prototype, including the eat() method.

4. The Bird.prototype.eat method is added, which returns "peck peck peck" when called. This method overrides the eat() method inherited from Animal.prototype.

When you call eat() on a Bird instance, JavaScript first looks for the eat() method on the Bird object itself. If it doesn't find the method, it continues searching up the prototype chain.

In this case, since you have defined an eat() method in Bird.prototype, it takes precedence over the eat() method in Animal.prototype. As a result, when you call eat() on a Bird instance, it executes the eat() method defined in Bird.prototype, which returns "peck peck peck".

So, the eat() function returns "peck peck peck" because the method defined in Bird.prototype has overridden the method inherited from Animal.prototype. The Bird.prototype.constructor property is not relevant in this context.

*/
