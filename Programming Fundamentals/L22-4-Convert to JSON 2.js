function convertToJson(a, b, c) {
    let obj = {
        name: a,
        lastName: b,
        hairColor: c,
    }
    console.log(JSON.stringify(obj));
}
convertToJson('George', 'Jones', 'Brown');
convertToJson('Peter', 'Smith', 'Blond');

function convertToJson2(a, b, c) {
    let obj = {};
    obj.name = a;
    obj.lastName = b;
    obj.hairColor = c;
    console.log(JSON.stringify(obj));
    console.log(obj.name);
    console.log(obj["name"]);
}
convertToJson2('George', 'Jones', 'Brown');
convertToJson2('Peter', 'Smith', 'Blond');

