function binaryDigits(num, B) {
    let counter = 0;
    while (num != 0) {
        let ostatyk = num % 2;
        num = Math.floor(num / 2);
        if (ostatyk == B) {
            counter++;
        }
    }
    console.log(counter);
}
binaryDigits(20, 0);
binaryDigits(15, 1);
binaryDigits(10, 0);
