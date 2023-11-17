function convertToObject(jjs) {
    let obj = JSON.parse(jjs);
    for (keykey of Object.keys(obj)) {
        console.log(`${keykey}: ${obj[keykey]}`);
    }

}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');