function arrayRotation(arr, numRot) {
    let arrChanged = arr;
    for (n = 1; n <= numRot; n++) {
        
        let firstNum = arrChanged.shift();
        arrChanged.push(firstNum);

    }

    console.log(arrChanged.join(" "));

}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);

