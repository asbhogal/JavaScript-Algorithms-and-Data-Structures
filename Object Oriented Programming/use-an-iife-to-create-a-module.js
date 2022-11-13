// An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. 

// Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.

/*let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};*/

let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune")
      };
    }
  }
})();
