// COMPOUND ASSIGNMENT WITH AUGMENTED ADDITION

    // IT IS COMMON TO ADD NUMBERS TO A VARIABLE, INITIALLY AND DOWN THE LINE:

    var a = 3;
    var b = 17;
    var c = 12;

    a = a + 12;
    b = 9 + b;
    c = c + 7;

    console.log(a, b, c);       // OUTPUTS 15, 26, 19

    // BECAUSE THIS IS SUCH A COMMON PATTERN, THERE'S A SHORTCUT TO ACHIEVE THE SAME THING USING THE += OPERATOR:

    a += 12;
    b += 9;
    c += 7;

    console.log(a, b, c);       // OUTPUTS 15, 26, 19 (NEGATING THE ABOVE)

    // THIS WAY, WE ADD THE VALUE TO THE VARIABLE AND ASSIGN THE ANSWER TO THAT VARIABLE SIMULTANEOUSLY. A SIMILAR APPROACH CAN BE APPLIED TO THE FOLLOWING OPERATIONS...

// COMPOUND ASSIGNMENT WITH AUGMENTED SUBTRACTION

    // SIMILAR TO ABOVE, THE -= OPERATOR SUBTRACTS THE VALUE FROM THE VARIABLE AND ASSIGNS THE ANSWER TO IT

    var x = 11;
    var y = 9;
    var z = 3;

    x -= 6;
    y -= 15;
    z -= 1;

    console.log(x, y, z);   // OUTPUTS 5, -6, 2

// COMPOUND ASSIGNMENT WITH AUGMENTED MULTIPLICATION

    var a1 = 5;
    var b1 = 12;
    var c1 = 4.6;

    a1 *= 5;
    b1 *= 3;
    c1 *= 10;

    console.log(a1, b1, c1)     //OUTPUTS 25, 36, 46

// COMPOUND ASSIGNMENT WITH AUGMENTED DIVISION

    var a2 = 48;
    var b2 = 108;
    var c2 = 33;

    a2 /= 12;
    b2 /= 4;
    c2 /= 11;

    console.log(a2, b2, c2);    // OUTPUTS 4, 27, 3
    