// Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it. Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.

const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

function add(bookList, bookName) {
  const clonedList = structuredClone(bookList);

  clonedList.push(bookName);
  return clonedList;
}

function remove(bookList, bookName) {
  const clonedList = structuredClone(bookList);
  const book_index = clonedList.indexOf(bookName);
  if (book_index >= 0) {
    clonedList.splice(book_index, 1);
    return clonedList;
  }
}
