function sorting(arr) {
    // let arr = [34, 2, 32, 45, 690, 6, 32, 7, 19, 47];
    arr.sort((a, b) => b - a);
    let newArr = [];
    while (arr.length > 0) {
        let firstNum = arr.shift();
        newArr.push(firstNum);
        let lastNum = arr.pop();
        newArr.push(lastNum);
    }
    console.log(newArr.join(" "));
}
// sorting();
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
