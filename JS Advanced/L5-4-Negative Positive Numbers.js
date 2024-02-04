function negPosNum(arr) {

    let arr2 = [];
    for (el of arr) {
        if (el < 0) {
            arr2.unshift(el);
        } else {
            arr2.push(el);
        }
    }
    arr2.forEach(element => {
        console.log(element)
    });
}

negPosNum([7, -2, 8, 9]);
negPosNum([3, -2, 0, -1]);
