function printHeader() {
    console.log("~~~-   {@}   -~~~");
    console.log("~- Certificate -~");
    console.log("~~~-   ~---~   -~~~");
}

function printName(nameArr) {
    return nameArr[0] + " " + nameArr[1];
}

function pass(grade) {
    return grade >= 3;
}

printHeader();
console.log(printName(["John", "Smith"]));