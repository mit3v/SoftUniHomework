function sorting(arr) {
    // let arr = [34, 2, 32, 45, 690, 6, 32, 7, 19, 47];
    arr.sort((a, b) => b - a);
    let newArr = [];
    while (arr.length > 0) {
        newArr.push(arr[0]);
        arr.splice(0, 1);
        newArr.push(arr[arr.length - 1]);
        arr.splice(-1);
    }
    console.log(newArr.join(" "));
}
// sorting();
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
