function negOrPossNum(arr) {

    let arr1 = [];
    for (let element of arr) {
        if (Number(element) < 0) {
            arr1.unshift(element);
        } else {
            arr1.push(element);
        }
    }
    console.log(arr1.join("\n"));

}

negOrPossNum(['7', '-2', '8', '9']);
negOrPossNum(['3', '-2', '0', '-1']);
