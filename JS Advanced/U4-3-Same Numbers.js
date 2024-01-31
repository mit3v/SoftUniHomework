function sameNumbers(a) {
    let numberAsString = String(a);
    let isTrue = true;
    let checkingNum = numberAsString[0];
    let sum = Number(numberAsString[0]);
    for (i = 1; i < numberAsString.length; i++) {
        if (checkingNum != numberAsString[i]) {
            isTrue = false;
        }
        sum += Number(numberAsString[i]);
        checkingNum = numberAsString[i];
    }
    console.log(isTrue);
    console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);