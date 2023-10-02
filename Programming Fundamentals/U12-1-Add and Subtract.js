function addAndSubtract(arr) {

    let sumOld = 0;
    let sumNew = 0;
    let newArr = [];
    let singleNum = 0;
    for (i = 0; i < arr.length; i++) {
        singleNum = arr[i];
        sumOld += singleNum;
        if (singleNum % 2 == 0) {
            singleNum += i;
        } else {
            singleNum -= i;
        }
        sumNew += singleNum;
        newArr[i] = singleNum;
    }
    // console.log("[", newArr.join(", "), "]"); 
    console.log(newArr);
    console.log(sumOld);
    console.log(sumNew);

}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
