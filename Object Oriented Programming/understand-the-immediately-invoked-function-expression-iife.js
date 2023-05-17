// A common pattern in JavaScript is to execute a function as soon as it is declared. Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE)

(function () {
  console.log("A cozy nest is ready");
})();

makeNest();
