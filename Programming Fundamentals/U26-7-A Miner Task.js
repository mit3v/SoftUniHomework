function aMinerTask(input) {
    let resourceObj = {};
    for (i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);
        if (resource in resourceObj) {
            resourceObj[resource] += quantity;
        } else {
            resourceObj[resource] = quantity;
        }
    }
    for (key in resourceObj) {
        console.log(`${key} -> ${resourceObj[key]}`);
    }
}
aMinerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);
aMinerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);

