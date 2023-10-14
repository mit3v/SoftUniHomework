function smallestOfThree(num1, num2, num3) {

    let minNum = num1;
    if (num2 < minNum) {
        minNum = num2;
    } if (num3 < minNum) {
        minNum = num3;
    }
console.log(minNum);

}

smallestOfThree(2, 5, 3);
