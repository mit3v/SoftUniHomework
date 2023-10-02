function reverseInPlace(array) {

    let result = "";
    for (i = array.length - 1; i >= 0; i--) {
        result += array[i] + " ";
    }
 console.log(result);
}

reverseInPlace(["a", "b", "c", "d", "e"]);