function partyTime(input) {
    let guestListArr = [];
    let index = 0;
    while (input[index] !== "PARTY") {
        guestListArr.push(input[index]);
        index++;
    }
    index++;
    for (index; index < input.length; index++) {
        let guestHere = input[index];
        let i = guestListArr.indexOf(guestHere);
        guestListArr.splice(i, 1);
    }
    let vipList = guestListArr.filter(a => !isNaN(a[0])).sort((a, b) => a[0] - b[0]);
    let regularList = guestListArr.filter(a => isNaN(a[0])).sort((a, b) => a.localeCompare(b));
    console.log(vipList.length + regularList.length);
    for (el of vipList) {
        console.log(el);
    }
    for (el of regularList) {
        console.log(el);
    }
}

partyTime(["1ds", "4af", "3br", "9op", "gra", "mra", "wra", "PARTY"]);




partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p',
'PARTY',
'9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']);

partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]);