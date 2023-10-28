function convertToObject(input) {
    let myObject = JSON.parse(input);
    for ([key, value] of Object.entries(myObject)){
        console.log(`${key}: ${value}`);
    }

}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
