function sumDigits(number) {
    let numberAsString = String(number);
    let sum = 0;
    for (i = 0; i < String(number).length; i++) {
        sum += Number(numberAsString[i]);
    }
    console.log(sum);

}

sumDigits(245678);
