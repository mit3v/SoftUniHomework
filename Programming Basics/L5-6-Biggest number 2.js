function biggestNumber(input) {
    let index = 0;
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let command = input[index];

    while (command !== "Stop") {
        command = input[index];
        if (Number(command) > maxNumber) {maxNumber = command;}
        index++;
    }
    console.log(maxNumber);
}

biggestNumber(["100", "99", "80", "70", "Stop"]);
biggestNumber(["-1", "-2", "Stop"]);
