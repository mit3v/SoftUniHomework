function nonDecreasing(arr) {

    let newArr = [];
    let maxNum = Number(arr[0]);
    newArr.push(maxNum);
    for (i = 1; i < arr.length; i++) {
        if (Number(arr[i]) >= maxNum) {
            newArr.push(arr[i]);
            maxNum = Number(arr[i]);
        }
    }
    console.log(newArr.join(" "));

}

nonDecreasing([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasing([ 1, 2, 3, 4]);
nonDecreasing([ 20, 3, 2, 15, 6, 1]);