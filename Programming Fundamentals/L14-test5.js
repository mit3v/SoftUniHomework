function solve(numA, numB, name, age) {
    let result = numA + numB;
    console.log(result);

    let textForPrint = `${name} -> ${age + result}`;
    console.log(textForPrint);

}

solve(1, 2, "Stan", 34);
