function sortingNumber(arr) {
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    let sortedArr = [];
    let index = 0;
    let isTrue = true;

    while (isTrue) {
        if (arr.length == 1) {
            sortedArr.push(arr[0]);
            break;
        }
        for (el of arr) {
            if (el <= min) {
                min = el;
            }
        }
        index = arr.findIndex(e => e == min);
        arr.splice(index, 1);
        sortedArr.push(min);
        min = Number.MAX_SAFE_INTEGER
        for (el of arr) {
            if (el >= max) {
                max = el;
            }
        }
        index = arr.findIndex(e => e == max);
        arr.splice(index, 1);
        sortedArr.push(max);
        max = Number.MIN_SAFE_INTEGER
        if (arr.length <= 0) {
            isTrue = false;
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