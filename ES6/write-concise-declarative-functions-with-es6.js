// Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

// Only change code below this line
/* const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};*/
// Only change code above this line

const bicycle = {
  gear: 2,
  setGear(newGear) {
    return this.gear = newGear;
  }
}

bicycle.setGear(3);
console.log(bicycle.gear);