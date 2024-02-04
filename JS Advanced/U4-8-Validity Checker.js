function validityChecker(a, b, c, d) {

    function distance(x1, y1, x2, y2) {
        let z = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        return z;
    }

    let z = distance(a, b, 0, 0);
    let validOrNot = "invalid";
    if (z == Math.trunc(z)) {
        validOrNot = "valid";
    }
    console.log(`{${a}, ${b}} to {0, 0} is ${validOrNot}`);

    z = distance(c, d, 0, 0);
    validOrNot = "invalid";
    if (z == Math.trunc(z)) {
        validOrNot = "valid";
    }
    console.log(`{${c}, ${d}} to {0, 0} is ${validOrNot}`);

    z = distance(a, b, c, d);
    validOrNot = "invalid";
    if (z == Math.trunc(z)) {
        validOrNot = "valid";
    }
    console.log(`{${a}, ${b}} to {${c}, ${d}} is ${validOrNot}`);

}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
