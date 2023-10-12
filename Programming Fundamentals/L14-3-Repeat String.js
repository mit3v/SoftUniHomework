function repeatString(string, n) {
    let result = "";
    for (i = 1; i <= n; i++) {
        result += string;
    }
    console.log(result);
}

repeatString("abc", 3);
repeatString("String", 2);