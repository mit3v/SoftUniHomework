function arrayManipulator(arr1, arr2) {
    // let arr1 = [1, 2, 4, 5, 6, 7];
    // let arr2 = ['add 1 8', 'contains 1', 'contains 3', 'print'];

    for (commands of arr2) {
        let commandsArr = commands.split(" ");
        switch (commandsArr[0]) {
            case "add":
                arr1.splice(Number(commandsArr[1]), 0, Number(commandsArr[2])); break;
            case "addMany":
                let k = commandsArr.length - 1;
                while (k > 1) {
                    arr1.splice(Number(commandsArr[1]), 0, Number(commandsArr[k]));
                    k--;
                } break;
            case "contains":
                let containsPosition = arr1.indexOf(Number(commandsArr[1]));
                console.log(containsPosition); break;
            case "remove":
                arr1.splice(Number(commandsArr[1]), 1); break;
            case "shift":
                let rotations = Number(commandsArr[1]);
                for (i = 1; i <= rotations; i++) {
                    let element = arr1.shift();
                    arr1.push(element);
                } break;
            case "sumPairs":
                let sumPairsArr = [];
                for (i = 0; i < arr1.length; i += 2) {
                    if (isNaN(Number(arr1[i + 1]))) {
                        sumPairsArr.push(Number(arr1[i]));
                    } else {
                        sumPairsArr.push(Number(arr1[i]) + Number(arr1[i + 1]));
                    }
                } arr1 = sumPairsArr; break;
            case "print":
                console.log(`[ ${arr1.join(", ")} ]`);

        }
    }


}
// arrayManipulator();
arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
