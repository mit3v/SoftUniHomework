function condenseArray(arr) {
    let oldArr = arr;
    let newArr = [];
    while (true) {
        if (oldArr.length == 1) {
            console.log(oldArr[0]); break;
        }
        for (i = 0; i < oldArr.length - 1; i++){
        newArr[i] = oldArr[i] + oldArr[i+1];
        }
        oldArr = newArr;
        newArr = [];
    }        
    
}

condenseArray([2, 10, 3]);
condenseArray([5, 0, 4, 1, 2]);
condenseArray([1]);
