function stringSubstring(input1, input2) {
    input1 = input1.toLowerCase();
    input2 = input2.toLowerCase();
    let sentenceArr = input2.split(" ");
    if (sentenceArr.includes(input1)) {
        console.log(input1);
    } else {
        console.log(`${input1} not found!`);
    }
}
stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');