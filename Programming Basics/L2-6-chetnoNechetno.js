function oddOrEven(input) {
    let number1 = Number(input[0]);
    if (number1 % 2 === 0) {
        console.log('even');
    }
    else {
        console.log('odd');
    }
}

oddOrEven(["6"]);
