function lastKnumSequence(n, k) {
    let sum = 0;
    let arr = [1];
    for (i = 1; i < n; i++) {
       
        for (j = i; j >= i - k; j--) {
            if (arr[j] != undefined) {
            sum += arr[j]; }
        }
        arr.push(sum);
        sum = 0;
    }
    console.log(arr.join(" "));
}

lastKnumSequence(6, 3);
lastKnumSequence(8, 2);