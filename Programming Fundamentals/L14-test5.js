function solve(numA, numB, name, age) {
    let addTwoNumbers = function(a, b) {
        console.log(a + b);
    }
    let result = addTwoNumbers(numA, numB);
    console.log(result);

    let textForPrint = `${name} -> ${age + result}`;
    console.log(textForPrint);

}

solve(1, 2, "Stan", 34);
