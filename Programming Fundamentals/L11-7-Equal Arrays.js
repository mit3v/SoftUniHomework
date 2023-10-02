function equalArrays(arr1, arr2) {

    let isEqual = true;
    let sum = 0;
    for (i = 0; i < arr1.length; i++) {
        let checkingNum = Number(arr1[i]);
        sum += checkingNum;
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false; break;
        }
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(["10", "20", "30"], ["10", "20", "30"]);
equalArrays(["1"], ["10"]);
