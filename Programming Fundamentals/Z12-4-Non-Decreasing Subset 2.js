function nonDecreasing(arr) {
    let currentMax = Number(arr[0]);
    let newArr = arr.filter(function(num) {if (num >= currentMax) {currentMax = num;}});
    console.log(newArr);

}

nonDecreasing([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasing([ 1, 2, 3, 4]);
nonDecreasing([ 20, 3, 2, 15, 6, 1]);