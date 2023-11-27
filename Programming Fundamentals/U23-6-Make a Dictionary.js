function makeAdictionary(input) {
    let objAll = {};
    for (element of input) {
        let obj = JSON.parse(element);
        for (keykey of Object.keys(obj)) {
            objAll[keykey] = obj[keykey];
        }
    }
    let keys = Object.keys(objAll);
    keys.sort(); // -> връща масив ['Boiler', 'Bus', 'Coffee', 'Microphone', 'Tape'];
    let sortedObj = {};
    for (el of keys) {
        sortedObj[el] = objAll[el];
    }
    for (sortedKey of Object.keys(sortedObj)) {
    console.log(`Term: ${sortedKey} => Definition: ${sortedObj[sortedKey]}`);
    }

}
makeAdictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}', '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}', '{"Boiler":"A fuel-burning apparatus or container for heating water."}', '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}', '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);