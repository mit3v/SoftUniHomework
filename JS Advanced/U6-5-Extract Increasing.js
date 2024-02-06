function extract(arr) {

    let num = arr[0];
    let result = [];
    for (el of arr) {
        if (el >= num) {
            result.push(el);
            num = el;
        }
    }
    // console.log(result);
    return result;
}

extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extract([1, 2, 3, 4]);
extract([20, 3, 2, 15, 6, 1]);