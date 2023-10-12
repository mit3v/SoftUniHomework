function mathPower(num, power) {
    let result = num;
    for (i = 1; i < power; i++) {
        result *= num;
    }
    console.log(result);
}

mathPower(2, 5);
mathPower(2, 8);