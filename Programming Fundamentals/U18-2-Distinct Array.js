function distinctArray(arr) {
    for (i = 0; i < arr.length; i++) {
        let numberToRemove = arr[i];
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] == numberToRemove) {
            arr.splice(j, 1);
            }
        }
    }
    console.log(arr.join(" "));

}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);