function solve(numA, numB, name, age) {
    let addTwoNumbers = function(a, b) {
        console.log(a + b);
    }
    console.log(addTwoNumbers);
    addTwoNumbers(numA, numB);

    let textForPrint = `${name} -> ${age}`;
    console.log(textForPrint);

}

solve(1, 2, "Stan", 34);
