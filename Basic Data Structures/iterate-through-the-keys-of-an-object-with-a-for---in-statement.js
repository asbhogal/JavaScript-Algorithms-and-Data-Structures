// We've defined a function countOnline which accepts one argument (a users object). Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose online property is set to true. An example of a users object which could be passed to countOnline is shown below. Each user will have an online property with either a true or false value.

const users = {
  Alan: {
    online: true,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(usersObj) {
  // Only change code below this line
  let onlineCount = 0;
  for (let user in usersObj) {
    if (usersObj[user].online) {
      onlineCount++;
    }
  }
  return onlineCount;
  // Only change code above this line
}

console.log(countOnline(users));

/* SINCE THE NUMBER OF USERS IS WHAT NEEDS TO BE RETURNED, A NUMBER VARIABLE NEEDS TO BE INITIALISED, WHICH WILL BE INCREMENTED ON EACH LOOP ITERATION.

THE for in WILL LOOP THROUGH EACH OF THE KEY (PROPERTIES) IN THE OBJECT (ie. the users). SINCE THESE THEN HAVE THEIR OWN KEY-VALUE PAIRS (IE users OBJECT HAS THREE NESTED OBJECTS), BRACKET AND DOT NOTATION IS THEN USED IN THE if STATEMENT AGAINST THE usersObj PARAMETER TO RETRIEVE THE NUMBER OF VALUES WHICH MATCH 'online.' IF THIS PASSES, onlineCount IS INCREMENTED. 

LOGIC FOLLOWS THAT AS THE NUMBER OF ONLINE USERS AND THEIR STATUS CHANGES, THE NUMBER RETURNED CHANGES ACCORDINGLY */
