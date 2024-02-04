function lastKNumbers(n, k) {
    let arr = [1];
    for (i = 1; i < n; i++) {
        arr[i] = 0;
        for (j = 1; j <= k; j++) {
            if(arr[i - j] != undefined) {
            arr[i] += Number(arr[i - j]);}
        }
    }
    // console.log(arr);
    return(arr);
}

lastKNumbers(6, 3);
lastKNumbers(8, 2);
