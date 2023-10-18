function arrayManipulations(input) {
    let arrString = input[0];
    let arr = arrString.split(" ");
    for (i = 1; i < input.length; i++) {
        let inputToArr = input[i].split(" ");
        let manipulaton = inputToArr[0];
        switch (manipulaton) {
            case "Add":
                arr.push(inputToArr[1]); break;
            case "Remove":
                arr = arr.filter(a => a != inputToArr[1]); break;
            case "RemoveAt":
                arr.splice(inputToArr[1], 1); break;
            case "Insert":
                arr.splice(inputToArr[2], 0, inputToArr[1]); break;
        }
    }
    console.log(arr.join(" "));

}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);
