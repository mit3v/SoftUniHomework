function train(input) {
    let arrAsString = input[0];
    let arr = arrAsString.split(" ");
    let maxPassengers = input[1];
    for (i = 2; i < input.length; i++) {
        if (input[i][0] === "A") {
            let newWagonArr = input[i].split(" ");
            arr.push(newWagonArr[1]);
        } else {
            for (j = 0; j < arr.length; j++) {
                if (Number(arr[j]) + Number(input[i]) <= maxPassengers) {
                    arr[j] = Number(arr[j]) + Number(input[i]);
                    break;
                }
            }
        }
    }

    console.log(arr.join(" "));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);
