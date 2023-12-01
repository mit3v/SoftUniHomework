function stringSubstring(input1, input2) {
    input1 = input1.toLowerCase();
    input2 = input2.toLowerCase();
    if (input2.includes(input1)) {
        console.log(input1);
    } else {
        console.log(`${input1} not found!`);
    }

}
stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');