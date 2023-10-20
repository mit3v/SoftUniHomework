function sorting(arr) {
    // let arr = [34, 2, 32, 45, 690, 6, 32, 7, 19, 47];
    let newArr = [];

    while (arr.length > 0) {
        let maxNumber = arr[0];
        for (element of arr) {
            if (element > maxNumber) {
                maxNumber = element;
            }
        }
        newArr.push(maxNumber);
        let index1 = arr.indexOf(maxNumber);
        arr.splice(index1, 1);
        let minNumber = arr[0];
        for (element of arr) {
            if (element < minNumber) {
                minNumber = element;
            }
        }
        newArr.push(minNumber);
        let index2 = arr.indexOf(minNumber);
        arr.splice(index2, 1);

    }
    console.log(newArr.join(" "));
}
// sorting();
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
