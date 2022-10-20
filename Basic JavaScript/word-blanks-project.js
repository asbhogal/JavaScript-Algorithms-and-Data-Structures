function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {                                // WHEN THE FUNCTION wordBlanks IS CALLED, ACCEPT THE DATA IN THE FOUR STRING VARIABLE PARAMETERS
    var result = ""                                                                         // DECLARE AND INITIALIZE THE result VARIABLE AS A STRING VARIABLE
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store.";        // APPEND THE CONTENTS SENT TO THE PARAMETERS AND CONCATENATE THESE (IN THE RIGHT GRAMMATICAL ORDER). ASSIGN THIS WHOLE STRING VALUE TO result
    return result;                                                                          // STOPS THE EXECUTION AND RETURNS THE VALUE OF RESULT TO THE INITIAL FUNCTION, WHICH IS THEN SENT TO THE CALL - THIS OUTPUT IS NEEDED
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));                                    // IN THE CONSOLE LOG, CALL THE FUNCTION wordBlanks, BY FIRST SENDING IT THESE FOUR STRING VALUES. RETURN THE RESULT.
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// OUTPUT FOR LINE 7 - The big dog ran to the store.
// OUTPUT FOR LINE 8 - The slow bike flew to the store.

// THE CONSOLE LOG IS USED HERE TO INPUT THE DATA TO BE SENT TO THE FUNCTION. HOWEVER, A USER-CENTERED APPLICATION WOULD INVOLVE USING, FORM FIELDS, FOR EXAMPLE, AS A WAY OF INPUTTING THIS DATA FIRST FRONT-END.
// SINCE EACH PARAMETER IS MET WITH AN INPUT STRING RESPECTIVELY, MISSING ONE OF THESE WOULD RETURN undefined IN THE RESPECTIVE POSITION OF THE WHOLE STRING OUTPUT
// THE VARIABLE return CANNOT BE USED IN console.log BECAUSE THIS WAS CREATED LOCALLY IN THE FUNCTION - IT THEREFORE CANNOT BE USED IN A GLOBAL CASE