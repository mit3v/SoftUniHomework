function bombNumbers(arr1, arr2) {
    // let arr1 = [1, 2, 2, 4, 2, 2, 2, 9];
    // let arr2 = [4, 2];
    let bombNumber = arr2[0];
    let range = arr2[1];
    let sum = 0;

    while(true) {
        let index = arr1.indexOf(bombNumber);
        if (index == -1) {
            break;
        }
        if (index - range >= 0) {
        arr1.splice(index - range, range * 2 + 1);}
        else {
            arr1.splice(0, range - index + 1 + range);
        }
    }
    for (element of arr1) {
        sum += element;
    }
    console.log(sum);

}

// bombNumbers();
// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
bombNumbers([1, 2, 1, 1, 1], [2, 3]);