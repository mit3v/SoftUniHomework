function phoneBook(input) {
    let assocArr = {};
    for (el of input) {
        let [keykey, numnum] = el.split(" ");
        assocArr[keykey] = numnum;
    }
    console.log(Object.entries(assocArr).map(entry => entry.join(" -> ")).join("\n"));
}
phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);
// phoneBook(['George 0552554', 'Peter 087587', 'George 0453112', 'Bill 0845344']);
