function greaterNum(inputArray) {
    let number1 = Number(inputArray[0]);
    let number2 = Number(inputArray[1]);
    if (number1 > number2) {
        console.log(number1);
    } 
    else {console.log(number2)};
}

greaterNum(['3','5']);
