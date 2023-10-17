function negOrPossNum(arr) {

    let arr1 = [];
    for (let element of arr) {
        if (Number(element) < 0) {
            arr1.unshift(element);
        } else {
            arr1.push(element);
        }
    }
    for (let element of arr1) {
        console.log(element);
    }

}

negOrPossNum(['7', '-2', '8', '9']);
negOrPossNum(['3', '-2', '0', '-1']);
