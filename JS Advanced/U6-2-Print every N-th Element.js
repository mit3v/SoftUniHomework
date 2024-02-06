function printEveryNthElement(arr, n) {

    let returnArr = [];
    for (i = 0; i < arr.length; i += n) {
        returnArr.push(arr[i]);
    }
    // console.log(returnArr);
    return returnArr;

}

printEveryNthElement(['5', '20', '31', '4', '20'], 2);
printEveryNthElement(['dsa', 'asd', 'test', 'tset'], 2);
printEveryNthElement(['1', '2', '3', '4', '5'], 6);