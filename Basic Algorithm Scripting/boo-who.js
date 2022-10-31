// Check if a value is classified as a boolean primitive. Return true or false. Boolean primitives are true and false.

function booWho(bool) {

  return ((bool === true) || (bool === false)) ? true : false;

}

console.log(booWho(false));

// THERE ARE DIFFERENT APPROACHES TO THIS, AS WITH OTHER CHALLENGES. HERE, STRICT EQUALITY IS LEVERAGED TO MATCH WHETHER THE INPUT IS true OR false. IF IT IS EITHER, IT RETURNS true (AS false IS STILL A BOOLEAN VALUE) OTHERWISE, RETURN FALSE (WITHOUT THIS, JS WILL RETURN undefined)