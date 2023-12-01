function stringSubstring(input1, input2) {
    input1 = input1.toLowerCase();
    input2 = input2.toLowerCase();
    let sentenceArr = input2.split(" ");
    for (word of sentenceArr) {
        if (word === input1) {
            return console.log(word);
        }
    }
    console.log(`${input1} not found!`);
}
stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');