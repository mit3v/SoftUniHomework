function cardGame(input) {
    let obj = {};
    for (el of input) {
        let splittedArr = el.split(": ");    // [ "Peter", "2C, 4H, 9H, AS, QS" ]
        let name = splittedArr[0];   // Peter
        let cardsArr = splittedArr[1].split(", ");   // ["2C", "4H", "9H", "AS", "QS"]
        for (singleCard of cardsArr) {
            if (name in obj) {
                if (obj[name].includes(singleCard)) {
                    continue;
                } else {
                    obj[name].push(singleCard);
                }
            } else {
                obj[name] = [singleCard];
            }
        }
    }
    let entries = Object.entries(obj);

    let powerValues = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14 };
    let typeValues = { S: 4, H: 3, D: 2, C: 1 };
    for (let [playerName, finalCardsArr] of entries) {
        let playerValue = 0;
        for (everySingleCard of finalCardsArr) {
            if (everySingleCard[0] != 1) {
                playerValue += powerValues[everySingleCard[0]] * typeValues[everySingleCard[1]];
            }
            else {
                playerValue += 10 * typeValues[everySingleCard[2]];
            }
        }
        console.log(`${playerName}: ${playerValue}`);
    }
}
cardGame(['Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);

