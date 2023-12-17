function decryptingCommands(input) {
    let str = input.shift();
    let index = 0;
    let text = input[index];
    while (text != "Finish") {
        let commandArr = text.split(" ");
        let command = commandArr[0];
        switch (command) {
            case "Replace":
                let oldSymbols = commandArr[1];
                let newSymbols = commandArr[2];
                str = str.split(oldSymbols).join(newSymbols);
                console.log(str);
                break;
            case "Cut":
                let startIndex = Number(commandArr[1]);
                let endIndex = Number(commandArr[2]);
                if (startIndex >= 0 && startIndex < str.length && endIndex >= 0 && endIndex < str.length) {
                    str = str.slice(0, startIndex) + str.slice(endIndex + 1);
                    console.log(str);
                }
                else { console.log("Invalid indices!") };
                break;
            case "Make":
                if (commandArr[1] == "Upper") {
                    str = str.toUpperCase();
                    console.log(str);
                }
                if (commandArr[1] == "Lower") {
                    str = str.toLowerCase();
                    console.log(str);
                }
                break;
            case "Check":
                if (str.includes(commandArr[1]) == true) {
                    console.log(`Message contains ${commandArr[1]}`);
                } else {
                    console.log(`Message doesn't contain ${commandArr[1]}`);
                }
                break;
            case "Sum":
                let sum = 0;
                let start = commandArr[1];
                let finish = commandArr[2];
                if (start >= 0 && start < str.length && finish >= 0 && finish < str.length) {
                    for (i = start; i <= finish; i++) {
                        let value = str[i].charCodeAt();
                        sum += value;
                    }
                    console.log(sum);
                } else {
                    console.log("Invalid indices!");
                }
                break;
        }
        index++;
        text = input[index];
    }

}
decryptingCommands((["ILikeSoftUni", "Replace I We", "Make Upper", "Check SoftUni", "Sum 1 4", "Cut 1 4", "Finish"]));
decryptingCommands((["HappyNameDay", "Replace p r", "Make Lower", "Cut 2 23", "Sum -2 2",
    "Finish"]));