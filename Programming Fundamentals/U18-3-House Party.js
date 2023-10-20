function houseParty(arr) {
    let listArr = [];
    for (element of arr) {
        let personalArr = element.split(" ");
        let name = personalArr[0];
        if (!personalArr.includes("not")) {
            if (listArr.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                listArr.push(name);
            }
        } else {
            if (listArr.includes(name)) {
                listArr = listArr.filter(a => a != name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }

    }
    console.log(listArr.join("\n"));
}

houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);
