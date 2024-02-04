function biggerHalf(arr) {

    arr.sort((a, b) => a - b);
    // console.log(arr);
    arr.splice(0, Math.floor(arr.length / 2));
    console.log(arr);
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);