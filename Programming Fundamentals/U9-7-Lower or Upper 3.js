function lowerOrUpper(letter) {
    if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
        console.log("lower-case");
    } else {
        console.log("upper-case");
    }

}

lowerOrUpper("L");
lowerOrUpper("f");