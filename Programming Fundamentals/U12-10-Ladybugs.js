function ladybugs(input) {

    let fieldSize = Number(input[0]);
    let fieldArr = [];
    let rightOrLeft = [];
    for (i = 0; i < fieldSize; i++) {
        fieldArr.push(0);
    }
    let ladybugsPos = input[1];
    let positions = ladybugsPos.split(" ");
    for (i = 0; i < positions.length; i++) {
        let initialPositionIndex = Number(positions[i]);
        if (initialPositionIndex >= 0 && initialPositionIndex < fieldArr.length) {
            fieldArr[initialPositionIndex] = 1;
        }
    }
    for (i = 2; i < input.length; i++) {
        let rightOrLeft = input[i].split(" ");               // [1, 1, 0]    0 right 1
        let positionFrom = Number(rightOrLeft[0]);           // from 0
        let positionTo = Number(rightOrLeft[2]);             // right 1
        let direction = rightOrLeft[1];

        if (fieldArr[positionFrom] == 1) {
            if (direction == "right" && positionTo > 0) {
                let n = 0;
                while (fieldArr[positionFrom + positionTo + n] == 1 || positionFrom + positionTo + n <= fieldArr.length) {
                    fieldArr[positionFrom] = 0;
                    fieldArr[positionFrom + positionTo + n] == 1;
                    n++;
                }
            }
            if (direction == "right" && positionTo < 0) {
                let n = 0;
                while (fieldArr[positionFrom + positionTo + n] == 1 || positionFrom + positionTo + n <= -1) {
                    fieldArr[positionFrom] = 0;
                    fieldArr[positionFrom + positionTo + n] == 1;
                    n++;
                }
            }
            if (direction == "left" && positionTo > 0) {
                let n = 0;
                while (fieldArr[positionFrom - positionTo + n] == 1 || positionFrom - positionTo + n < 0) {
                    fieldArr[positionFrom] = 0;
                    fieldArr[positionFrom + positionTo + n] == 1;
                    n++;
                }
            }
            if (direction == "left" && positionTo < 0) {
                let n = 0;
                while (fieldArr[positionFrom - positionTo + n] == 1 || positionFrom + positionTo + n <= fieldArr.length) {
                    fieldArr[positionFrom] = 0;
                    fieldArr[positionFrom + positionTo + n] == 1;
                    n++;
                }
            }
        }
    }
    console.log(fieldArr.join(" "));
}

ladybugs([3, '0 1', '0 right 1', '2 right 1']);
ladybugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladybugs([ 5, '3', '3 left 2', '1 left -2']);