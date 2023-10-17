function lastKnumSequence(n, k) {
    let sum = 0;
    let arr = [1];
    for (i = 1; i < n; i++) {
        let newArr = arr.slice(-k);
        for (element of newArr) {
            sum += element;
        }
        arr.push(sum);
        sum = 0;
    }
    console.log(arr.join(" "));
}

lastKnumSequence(6, 3);
lastKnumSequence(8, 2);