function reverseArray(n, array) {
    
    let newArray = [];

    for(i = n - 1; i >= 0; i--) {
        newArray.push(array[i]);

    }
    console.log(newArray.join(" "));
}

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);