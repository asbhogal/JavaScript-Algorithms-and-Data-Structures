/* CHARACTERS CAN BE SURROUNDED BY SINGLE QUOTATION MARKS, DOUBLE QUOTATION MARKS AND BACKTICKS, IE:
    ''
    ""
    ``
*/

// CHARACTERS WITHIN EITHER OF THESE THREE ARE REFERRED TO AS STRING LITERALS

var myFirstName = "Aman";
var myLastName = "Bhogal";

// ESCAPING LITERAL QUOTES IN JAVASCRIPT

    // IN CASES WHERE THERE ARE QUOTES INSIDE THE STRING QUOTE, e.g.

        // var myStr = "I am a "double quotes" string inside "double quotes"";

        // JAVASCRIPT DOESN'T KNOW HOW TO HANDLE THIS - IT SEES THE BEGINNING AND END QUOTE AS ITS OWN INDEPENDENT STRING, IRRESPECTIVE OF THE OTHER STRINGS INSIDE IT

        //AN ESCAPE CHARACTER CAN BE USED TO RESOLVE THIS. ESCAPING A QUOTE MEANS THAT, TO JAVASCRIPT, IT WON'T BE CONSIDERED THE END OF THE STRING:

        var myStrNew = "I am a \"double quoted\" string inside \"double quotes\"";
        
        // THIS WAY, JAVASCRIPT NO LONGER INTERPRETS THE SECOND QUOTE IN A STRING AS THE LAST CHARACTER IN IT. \" TELLS JAVASCRIPT THAT THIS IS A LITERAL QUOTATION MARK/CHARACTER, INSIDE A STRING

        console.log(myStrNew);  // OUTPUTS I am a "double quoted" string inside "double quotes" - OUTSIDE QUOTES AREN'T NECESSARY AS THIS DECLARES IT A STRING

        // ATTEMPTING TO DECLARE THE VARIABLE ON LINE 16 AS IS WILL RETURN AN 'Uncaught SyntaxError: Unexpected Identifier'ERROR AND WON'T OUTPUT THE CONTENTS OF LINE 22 IN THE CONSOLE LOG
    
// QUOTING STRINGS WITH SINGLE QUOTES

    // SOMETIMES THERE ARE MORE EFFICIENT WAYS OF ACHIEVING THE SAME THING AS ABOVE

    // STARTING AND ENDING THE STRING VALUE WITH '' AND THE INSIDE QUOTES AS "" ACHIEVES THE SAME:

    var SingleStringQuote = 'I am a "double quoted" string inside "double quotes"';

    console.log(SingleStringQuote);  // OUTPUTS THE SAME AS ABOVE

// BACKTICKS CAN ALSO BE USED TO WRAP THE STRING

    var BacktickStringQuote = `'I am a "double quoted" string inside "double quotes"'`;

    // THIS MEANS IT IS POSSIBLE TO USE BOTH SINGLE QUOTES AND DOUBLE QUOTES WITHIN A STRING, AND OUTPUTS THE OUTER QUOTE MARKS TOO, WHICH MAY BE USEFUL AT TIMES

    console.log(BacktickStringQuote); // OUTPUTS 'I am a "double quoted" string inside "double quotes"'

// ESCAPE SEQUENCES IN STRINGS

    // AS WELL AS USING THE \" SEEN ABOVE TO ESCAPE OUT, THE FOLLOWING CAN ALSO BE LEVERAGED:

    /*
        \'      single quote
        \"      double quote (seen previously)
        \\      backslash (using two ensures JS doesn't think that the character isn't being escaped)
        \n      new line
        \r      carriage return
        \t      tab
        \b      backspace
        \f      form feed
    */

    // USING THESE TO MAKE A MULTILINE STRING:

    var multiStringLine = "FirstLine\n\t\\SecondLine\nThirdLine";

    console.log(multiStringLine); 

    // THIS OUTPUTS THE FOLLOWING:
    /*  FirstLine
            \SecondLine
        ThirdLine
    */

// STRING CONCATENATION

    // STRINGS CAN BE CONCATENATION BY USING THE + OPERATOR

    var ourStr = "I come first. " + "I come second.";

    console.log(ourStr);    // OUPUTS I come first. I come second.

    // NB. A SPACE IN A STRING IS ALSO TREATED AS A CHARACTER, AND SHOULD BE USED WITH SEPARATE STRING VALUES TO AVOID THEM JOINING DIRECTLY TOGETHER

// STRING CONCATENATION WITH += OPERATOR

    // SIMILAR TO THE ARITHMETIC OPERATIONS, STRING CONCATENATION CAN ALSO BE PERFORMED THE SAME WAY:

    var newStr = "I come first. ";
    newStr += "I come second";      // TAKES THE VALUE AT ASSIGNMENT, APPENDS THIS TO IT THEN RETURNS THE CONCATENATED VALUE TO THE VARIABLE

    // CONVENTIONALLY, LINE 90 WOULD BE newStr = newStr + "I come second";

    console.log(newStr);             // OUTPUTS I come first. I come second.

// CONSTRUCTING STRINGS WITH VARIABLES

    // STRINGS CAN ALSO BE CONCATENATED TOGETHER WITH VARIABLES, e.g.

    var ourName = "freeCodeCamp";
    var ourNewString = "Hello, our name is " + ourName + ". How are you?";

    console.log(ourNewString);

    // OUTPUTS Hello, our name is freeCodeCamp, how are you?

    // THIS CAN BE DONE WITH MULTIPLE VARIABLES

// APPENDING VARIABLES TO STRINGS USING +=

    var anAdjective = "awesome!";
    var ourStr = "freeCodeCamp is ";
    ourStr += anAdjective;

    // THIS ALLOWS YOU TO APPEND THE STRING CONTENTS FROM ONE VARIABLE INTO ANOTHER VIA CONCATENATION 

    // THE CONVENTIONAL APPROACH TO LINE 113 WOULD BE ourStr = ourStr + anAdjective

    console.log(ourStr);    // OUTPUTS freeCodeCamp is awesome!

// FINDING THE LENGTH OF A STRING

    // THE .length CAN BE USED TO CALCULATE THE NUMBER OF CHARACTERS (ie. THE LENGTH) OF A STRING VARIABLE AND ASSIGN THIS TO ANOTHER VARIABLE, e.g.

    var firstNameLength = 0;        // ASSIGN THE VARIABLE THAT WILL STORE THE DATA AS A NUMBER TO BEGIN WITH, AND ASSIGN IT WITH 0 (GOOD PRACTICE TO START WITH THIS AS AN 'index'/'initialisation' VALUE)
    var firstName = "Aman";

    firstNameLength = firstName.length;

    console.log(firstNameLength);   // OUTPUTS 4

// BRACKET NOTATION TO FIND THE FIRST CHARACTER IN A STRING

    // BRACKET NOTATION IS A WAY OF RETRIEVING A CHARACTER AT A SPECIFIC INDEX WITHIN A STRING, e.g.

    var firstLetterOfFirstName = "";        // THE VARIABLE MUST FIRST BE INITIALISED AS A STRING VARIABLE BEFORE IT CAN BE ASSIGNED A STRING VALUE LATER ON
    var firstName = "Aman";

    firstLetterOfFirstName = firstName[0];

    console.log(firstLetterOfFirstName);

    // MANY PROGRAMMING LANGUAGES START COUNTING AT 0, UNLIKE HUMANS. THIS IS KNOWN AS ZERO-BASED INDEXING
    // THIS BRACKET NOTATION WILL THEREFORE RETURN THE LETTER 'A' TO THE VARIABLE
    // TO GET THE SECOND LETTER (TO US), THE INDEX NUMBER IS CHANGED TO 1, AND SO ON

// STRING IMMUTABILITY

    // STRINGS ARE IMMUTABLE, MEANING THEY CANNOT BE ALTERED ONCE CREATED.
    // THIS NOT THE SAME AS CHANGING THEM AS A WHOLE - IMMUTABILITY REFERS TO INDIVIDUAL CHARACTERS OF A STRING LITERAL THAT CANNOT BE CHANGED
    // e.g. CONSIDER THE CASE OF A STRING WHERE WE WISH TO CHANGE A LETTER WITHIN IT BECAUSE OF A TYPO:

    var originalString = "Jello World";
    originalString[0] = "H";

    // THIS IS ATTEMPTING TO REPLACE THE LETTER J AT INDEX POSITION 0 OF THE VARIABLES INITIALISED VALUE WITH H, WHICH WILL RETURN THE ORIGINAL VALUE, NOT THE AMENDED

    console.log(originalString);

    // THE WORD ITSELF CAN BE CHANGED, BUT NOT THE LETTER, THE FOLLOWING WILL NEED TO BE PERFORMED:

    originalString = "Hello World";

    // THE SAME OBJECTIVE IS ACHIEVED HERE, BUT BY DIRECTLY REPLACING THE STRING. THIS CAN BE DONE AT ANY POINT, WITHOUT NEEDING TO GO BACK TO WHEN THE VARIABLE WAS FIRST INITIALISED WITH THE INCORRECTLY-TYPED VALUE

// BRACKET NOTATION TO FIND THE nth CHARACTER IN A STRING

    // SIMILAR TO THE ABOVE, TO FIND THE 8th LETTER, USING THE INDEX NOTATION:

    var originalString = "Hello World";
    var sixthLetterOfString = "";

    sixthLetterOfString = originalString[8];

    console.log(sixthLetterOfString);       // OUTPUTS r (INCLUDES SPACE)

// FINDING THE LAST LETTER OF A STRING

    // THE LAST LETTER OF A STRING VARIABLE CAN BE USED WITHOUT NEEDING TO KNOW ITS LENGTH VIA THE FOLLOWING:

    var lastLetterMiddleName = "Singh";
    var lastLetterOfMiddleName = lastLetterMiddleName[lastLetterMiddleName.length - 1];

    // THIS TAKES THE STRING VARIABLE, LEVERAGES THE BRACKET NOTATION AND .length PROPERTY TO FIND THE LAST LETTER AND RETURN THIS VALUE TO THE STRING VARIABLE lastLetterOfMiddleName
    // N.B. -1 MUST BE DONE DUE TO JAVASCRIPT STARTING THE INDEXING AT 0

    console.log(lastLetterOfMiddleName);    // OUTPUTS h

// FINDING THE nth TO LAST LETTER OF A STRING

    // LEVERAGING THE ABOVE, THE FOLLOWING CAN BE USED TO FIND THE nth-TO-LAST LETTER OF A STRING
    // e.g. TO FIND THE 3rd TO LAST :

    var thirdLastLetter = "Singh";
    var thirdLastLetterValue = thirdLastLetter[thirdLastLetter.length - 3];

    // THIS 'NORMALISES' IT FOR HUMANS, AS REMEMBER WE COUNT FROM 1, NOT FROM 0

    console.log(thirdLastLetterValue);      // OUTPUTS n

