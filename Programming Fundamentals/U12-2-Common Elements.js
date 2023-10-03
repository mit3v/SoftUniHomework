function commonElements(arr1, arr2) {

    for (elementOfArr1 of arr1) {
        for (elementOfArr2 of arr2) {
            if (elementOfArr1 === elementOfArr2) {
                console.log(elementOfArr1);
            }
        }
    }
}

commonElements(["Hey", "hello", 2, 4, "Peter", "e"], ["Petar", 10, "hey", 4, "hello", "2"]);
