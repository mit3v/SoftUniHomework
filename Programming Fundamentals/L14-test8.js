function isValid(index, arr) {

    if (Number.isInteger(index) && index >= 0 && index < arr.length) {
        return true;
    } else {
        return false;
    }
}

console.log(isValid(4, [4, 6, 34, 2, 57, 5]));
console.log(isValid(7, [4, 6, 34, 2]));