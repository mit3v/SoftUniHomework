function signCheck (numOne, numTwo, numThree) {
    let signCheckArr = [];
    signCheckArr.push(numOne);
    signCheckArr.push(numTwo);
    signCheckArr.push(numThree);
    let checker = 0;
    
    for (element of signCheckArr) {
        if (element < 0) {
            checker += 1;
        }
    }
    if (checker % 2 == 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }

}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
