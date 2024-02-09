function carFactory(input) {

    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };
    let newCar = {};
    newCar.model = input.model;
    if (input.power <= 90) {
        newCar.engine = smallEngine;
    } else if (input.power <= 120) {
        newCar.engine = normalEngine;
    } else {
        newCar.engine = monsterEngine;
    }
    newCar.carriage = { type: input.carriage, color: input.color };
    let size = input.wheelsize;
    if (size % 2 == 0) {
        size--;
    }
    newCar.wheels = [size, size, size, size];
    console.table(newCar);
    // return newCar;

}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});
