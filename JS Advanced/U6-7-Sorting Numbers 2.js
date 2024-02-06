function sortingNumber(arr) {

    let sortedArr = [];
    arr.sort((a, b) => a - b);
    let num = 0;
    let isTrue = true;

    while (isTrue) {
        if (arr.length == 1) {
            sortedArr.push(arr[0]);
            break;
        }
        num = arr.shift();
        sortedArr.push(num);
        num = arr.pop();
        sortedArr.push(num);
        if (arr.length == 0) {
            break;
        }
    }


    console.log(sortedArr);
    // return sortedArr;
}

sortingNumber([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
sortingNumber([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);
sortingNumber([5, 5, 7, 7]);
sortingNumber([5, 1, 4]);
sortingNumber([5, 1, 0]);