function rotateArray(arr) {

    let rotations = Number(arr[arr.length -1]);
    arr.pop();
    for (i = 1; i <= rotations; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    console.log(arr.join(" "));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);