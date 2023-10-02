function reverseArray(n, array) {
    
    let result = "";

    for(i = n - 1; i >= 0; i--) {
        result += array[i] + " ";

    }
    console.log(result);
}

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);