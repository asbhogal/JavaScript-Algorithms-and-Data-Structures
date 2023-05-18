// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  const mergedArr = [...arr1, ...arr2];
  const newArr = [];

  for (let num of mergedArr) {
    (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) && newArr.push(num);
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// loop through contents of the two arrays
// if one is not equal to the other, push it to the newArr
