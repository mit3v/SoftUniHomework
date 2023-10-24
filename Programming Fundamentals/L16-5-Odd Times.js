function oddTimes(input) {
    let result = 0
    for (element of input) {
        result ^= element;
    }
    console.log(result);

}
oddTimes([1, 2, 3, 2, 3, 1, 3]);
oddTimes([5, 7, 2, 7, 5, 2, 5]);