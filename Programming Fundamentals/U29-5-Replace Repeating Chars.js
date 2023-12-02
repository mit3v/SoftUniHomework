function replaceRepeatingChars(input) {
    let arr = input.split("");
    let result = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i - 1] !== arr[i]) {
            result += arr[i];
        }
    }
    console.log(result);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');
