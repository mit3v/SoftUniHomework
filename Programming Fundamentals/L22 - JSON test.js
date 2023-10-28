function solve() {
    let myObject = {
        name: "Pesho",
        age: 25,
        arr: [1, 2, 3, 4, 5]
    }
    console.log(myObject);
    console.log(JSON.stringify(myObject));

    let myJSON = JSON.stringify(myObject);
    console.log(typeof(myJSON));
    console.log(myJSON);

    let receivedSomething = JSON.parse(myJSON);
    console.log(receivedSomething);
    console.log(typeof(receivedSomething));

    let objectDeepCopy = JSON.parse(JSON.stringify(myObject));
    console.log(objectDeepCopy);
}
solve();