function convertToJson(firstName, lastName, hairColor) {
    let myObject = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }
    let myObjectAsString = JSON.stringify(myObject);
    console.log(myObjectAsString);

}
convertToJson('George', 'Jones', 'Brown');
convertToJson('Peter', 'Smith', 'Blond');