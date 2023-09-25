function rightPlace(word, symbol, match) {
    let index = 0;
    let newWord = "";
    while (index < word.length) {
        if (word[index] == "_") {
            newWord += symbol;
        } else {
            newWord += word[index]
        }
        index++;
    }
    if (newWord == match) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }

}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');
