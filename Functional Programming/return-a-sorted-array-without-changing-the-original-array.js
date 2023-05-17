// Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  const sortedArray = arr.slice().sort((a, b) => a - b);
  return sortedArray;
}

nonMutatingSort(globalArray);

console.log(nonMutatingSort(globalArray));

// The sort() method directly modifies the original array it is called on, rather than creating a new array. The sortedArray variable in the nonMutatingSort function is just a reference to the same array in memory, not a separate copy. To prevent mutation of the original array, a new one is created using slice, before the .sort() function is parsed onto it
