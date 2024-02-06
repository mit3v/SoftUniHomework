function extract(arr) {

    let num = arr[0];
    let newArr = arr.filter(a => {
        if (a >= num) {
            num = a;
            return true;
        }
    })
    console.log(newArr);
    // return newArr;
}

extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extract([1, 2, 3, 4]);
extract([20, 3, 2, 15, 6, 1]);