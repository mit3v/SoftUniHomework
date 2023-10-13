function solve(numA, numB, name, age) {
    let addTwoNumbers = function(a, b) {
        console.log(a + b);
    }
    addTwoNumbers(numA, numB);
    addTwoNumbers(7, 8);
    addTwoNumbers(10, 14);

    let textForPrint = `${name} -> ${age}`;
    console.log(textForPrint);

}

solve(1, 2, "Stan", 34);
solve(1, 2, "Gosho", 30);
solve(1, 2, "Vanio", 27);
