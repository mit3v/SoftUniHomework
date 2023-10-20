function searchForaNumber(arr1, arr2) {
    // let arr1 = [5, 2, 3, 4, 1, 6];
    // let arr2 = [5, 2, 3];
    let takeAway = arr2[0];
    let deleteNumbers = arr2[1];
    let searchingNumber = arr2[2];
    let counter = 0;
    arr1 = arr1.slice(0, takeAway);
    arr1.splice(0, deleteNumbers);
    
    for (element of arr1) {
        if (element === searchingNumber) {
            counter ++;
        }
    }
    console.log(`Number ${searchingNumber} occurs ${counter} times.`);
}
// searchForaNumber();
searchForaNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForaNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
