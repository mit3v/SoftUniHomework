function arrayRotation(arr, numRot) {
    let newArr = [];
    let arrChanged = arr;
    for (n = 1; n <= numRot; n++) {
        
        for (i = 0; i < arrChanged.length; i++) {
            if (i == arrChanged.length - 1) {
                newArr[i] = arrChanged[0];
            }
            else {
                newArr[i] = arrChanged[i + 1];
            }
        }
        arrChanged = newArr;
        newArr = []
    }

    console.log(arrChanged.join(" "));

}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);

