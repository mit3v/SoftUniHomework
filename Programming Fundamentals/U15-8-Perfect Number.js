function perfectNumber(num) {
    let sum = 0;
    for (i = 1; i <= num / 2; i++) {
        if (Number.isInteger(num / i)) {
            sum += i;
        }
    }
    if (sum == num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }

}

perfectNumber(6);
perfectNumber(28);
perfectNumber(2452345);