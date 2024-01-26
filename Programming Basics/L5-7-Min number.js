function minNumber(input) {
    let index = 0;
    let minNumber = Number.MAX_SAFE_INTEGER;
    let command = input[index];

    while (command !== "Stop") {
        command = input[index];
        if (Number(command) < minNumber) {minNumber = command;}
        index++
    }
    console.log(minNumber);
}

minNumber(["100", "99", "80", "70", "Stop"]);
minNumber(["-10", "20", "-30", "Stop"]);
