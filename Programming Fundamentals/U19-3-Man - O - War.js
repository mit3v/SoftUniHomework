function manOwar(arr) {
    // let arr = ["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"];
    let statusPirateship = arr[0].split(">");
    let statusWarship = arr[1].split(">");
    let maxHealth = Number(arr[2]);

    for (i = 3; i < arr.length; i++) {
        let commandArr = arr[i].split(" ");
        let command = commandArr[0];
        switch (command) {
            case "Fire":
                let fireIndex = Number(commandArr[1]);
                let fireDamage = Number(commandArr[2]);
                if (fireIndex <= statusWarship.length - 1) {
                    let warshipSection = Number(statusWarship[fireIndex]);
                    let warshipSectionAfterDamage = warshipSection - fireDamage;
                    if (warshipSectionAfterDamage <= 0) {
                        return console.log(`You won! The enemy ship has sunken.`);
                    } else {
                        statusWarship[fireIndex] = warshipSectionAfterDamage;
                    }
                } break;
            case "Defend":
                let defendStartIndex = Number(commandArr[1]);
                let defendEndIndex = Number(commandArr[2]);
                let defendDamage = Number(commandArr[3]);
                if (defendStartIndex >= 0 && defendStartIndex < statusPirateship.length && defendEndIndex >= 0 && defendEndIndex < statusPirateship.length) {
                    let damagedArr = statusPirateship.slice(defendStartIndex, defendEndIndex + 1);
                    damagedArr = damagedArr.map(a => a - defendDamage);
                    for (j = 0; j < damagedArr.length; j++) {
                        if (damagedArr[j] <= 0) {
                            return console.log(`You lost! The pirate ship has sunken.`);
                        }
                        statusPirateship[defendStartIndex + j] = damagedArr[j];
                    }
                } break;
            case "Repair":
                let repairIndex = Number(commandArr[1]);
                let repairHealth = Number(commandArr[2]);
                if (repairIndex >= 0 && repairIndex < statusPirateship.length) {
                    let repairPlace = Number(statusPirateship[repairIndex]);
                    repairPlace += repairHealth;
                    if (repairPlace > maxHealth) {
                        repairPlace = maxHealth;
                    }
                    statusPirateship[repairIndex] = repairPlace;
                } break;
            case "Status":
                let counter = 0;
                for (el of statusPirateship) {
                    if (Number(el) < 0.2 * maxHealth) {
                        counter++;
                    }
                } console.log(`${counter} sections need repair.`); break;

        }

    }
    function sum(someArray) {
        let result = 0;
        for (el of someArray) {
            result += Number(el);
        }
        return result;
    }
    console.log(`Pirate ship status: ${sum(statusPirateship)}`);
    console.log(`Warship status: ${sum(statusWarship)}`);

}
// manOwar();
manOwar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"]);
manOwar(["2>3>4>5>2", "6>7>8>9>10>11", "20", "Status", "Fire 2 3", "Defend 0 4 11", "Repair 3 18", "Retire"]);
