function invalidNumber(input) {
    let num = Number(input[0]);
    let validNumber = (num >= 100 && num <= 200) || num === 0;
    if (!validNumber) { console.log("invalid");}

}

invalidNumber(["75"]);
// invalidNumber(["150"]);
// invalidNumber(["220"]);
// invalidNumber(["199"]);
// invalidNumber(["-1"]);
// invalidNumber(["27"]);
// invalidNumber(["200"]);
// invalidNumber(["0"]);

