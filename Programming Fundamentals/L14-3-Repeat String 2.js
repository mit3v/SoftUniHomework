function repeatString(string, n) {
    let result = "";
    for (i = 1; i <= n; i++) {
        result += string;
    }
    return result;
}

console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));


