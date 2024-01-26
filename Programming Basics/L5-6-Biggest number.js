function biggestNumber(input) {
    let index = 0;
    let maxNumber = input[0];
    while (true) {
        if (input[index] === "Stop") {break;}
        let n = Number(input[index]);
        if (n > maxNumber) {maxNumber = n;}
        index++;
    }
    console.log(maxNumber);
}

biggestNumber(["100", "99", "80", "70", "Stop"]);
biggestNumber(["-1", "-2", "Stop"]);
