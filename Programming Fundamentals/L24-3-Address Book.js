function adressBook(input) {
    let addressObj = {};
    for (el of input) {
        let [name, address] = el.split(":");
        addressObj[name] = address;
    }
    let addressArr = Object.entries(addressObj);
    addressArr.sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
    addressObj = {};
    // let addressObj = Object.fromEntries(addressArr) // -> това е същото като следващите 3 реда;
    for ([name, address] of addressArr) {
        addressObj[name] = address;
    }
    for (kk in addressObj) {
        console.log(`${kk} -> ${addressObj[kk]}`);
    }
}
adressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);
