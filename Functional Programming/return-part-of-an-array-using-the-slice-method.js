const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}

sliceArray(inputAnim, 1, 3);

console.log(sliceArray(inputAnim, 1, 3));
