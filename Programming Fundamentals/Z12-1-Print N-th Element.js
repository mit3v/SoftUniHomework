function nElement(arr) {
    let newArr = [];
    let step = Number(arr[arr.length - 1]);
    for (i = 0; i < arr.length - 1; i += step) {
        newArr.push(arr[i]);
    }
    console.log(newArr.join(" "));
}

nElement(['5', '20', '31', '4', '20', '2']);
nElement(['dsa', 'asd', 'test', 'test', '2']);
nElement(['1', '2', '3', '4', '5', '6']);