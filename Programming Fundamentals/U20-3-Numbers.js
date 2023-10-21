function numbers(input) {
    // let input = '10 20 30 40 50';
    let inputArr = input.split(" ").map(Number);

    let sum = inputArr.reduce((sumsum, a) => sumsum + a);
    let average = sum / inputArr.length;

    let highThanAverageArr = [];
    for (element of inputArr) {
        if (element > average) {
            highThanAverageArr.push(element);
        }
    }
    if (highThanAverageArr.length == 0) {
        return console.log("No");
    }
    highThanAverageArr.sort((a, b) => b - a);
    highThanAverageArr.splice(5);
    console.log(highThanAverageArr.join(" "));

}
// numbers();
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');
