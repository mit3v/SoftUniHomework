function longestSequence(arr) {
    let finalArr = [arr[0]];

    for (i = 0; i < arr.length; i++) {
        let singleNum = arr[i];
        let newArr = [singleNum];
        let j = i + 1;
        while (true) {
            if (arr[j] == singleNum) {
                newArr.push(arr[j]);
            }
            else { break; }
            j++;
        }
        if (newArr.length > finalArr.length) {
        finalArr = newArr;
        }

    }
    console.log(finalArr.join(" "));
}

longestSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
longestSequence([1, 1, 1, 2, 3, 1, 3, 3]);
longestSequence([4, 4, 4, 4]);
longestSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);