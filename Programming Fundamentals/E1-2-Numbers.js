function numbers(arr) {
    // let arr = ["1 3 5", "Remove 9", "Replace 3 11", "Collapse 0", "Finish"];
    let numArr = arr.shift().split(" ").map(Number);
    let index = 0;
    while (arr[index] != "Finish") {
        let commandArr = arr[index].split(" ");
        let command = commandArr[0];
        switch (command) {
            case "Add":
                numArr.push(Number(commandArr[1]));
                break;
            case "Remove":
                let indexToRemove = numArr.indexOf(Number(commandArr[1]));
                if (indexToRemove >= 0 && indexToRemove < numArr.length) {
                    numArr.splice(indexToRemove, 1);
                }
                break;
            case "Replace":
                let toRemove = numArr.indexOf(Number(commandArr[1]));
                if (toRemove >= 0 && toRemove < numArr.length) {
                    numArr.splice(toRemove, 1, Number(commandArr[2]));
                }
                break;
            case "Collapse":
                let valueLess = Number(commandArr[1]);
                numArr = numArr.filter(a => a >= valueLess);
                break;
        }
        index++;
    }
    if (numArr.length > 0) {
    console.log(numArr.join(" ")); }
}
// numbers();
numbers(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
numbers(["1 20 -1 10", "Collapse 8", "Finish"]);
numbers((["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]));