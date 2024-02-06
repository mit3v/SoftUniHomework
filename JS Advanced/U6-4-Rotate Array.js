function rotateArr (arr, num) {
    let variable = "";
    for (i = 1; i <= num; i++) {
        variable = arr.pop();
        arr.unshift(variable);
    }
    // console.log(arr.join(" "));
    return arr.join(" ");
}

rotateArr(['1', '2', '3', '4'], 2);
rotateArr(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
