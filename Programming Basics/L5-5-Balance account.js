function balanceMoney(input) {
    let index = 0;
    let sum = 0;
    while (true) {
        if (input[index] === "NoMoreMoney") {break;}
        if (input[index] < 0) {console.log("Invalid operation!"); break;}
        sum += Number(input[index]);
        console.log(`Increase: ${Number(input[index]).toFixed(2)}`);
        index++;
    }
    console.log(`Total: ${sum.toFixed(2)}`)

}

balanceMoney(["5.51", "69.42", "100", "NoMoreMoney"]);
balanceMoney(["120", "45.55", "-150"]);