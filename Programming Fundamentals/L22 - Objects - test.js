
// let myObject = {
//     name: "Kiril",
//     age: 34
// }

// myObject.ageFirstCar = 24;

// console.log(myObject);
// console.log(myObject.name);
// console.log(myObject.age);
// console.log(myObject.ageFirstCar);

// console.log(myObject["age"]);

// let key = "age";
// console.log(myObject[key]);




// function solve(key) {
//     let myObject = {
//         name: "Kiril",
//         age: 34
//     }
//     console.log(myObject[key]);
//     myObject["hairColor"] = "white";
//     console.log(myObject);
//     console.table(myObject);
// }

// solve("name");
// solve("age");



// function solve(key, value) {
//     let myObject = {
//         name: "Kiril",
//     }
//     myObject[key] = value;
//     console.table(myObject);
// }
// solve("hairColor", "Yellow");



// function solve(key, value) {
//     let myObject = {
//         name: "Kiril",
//         age: 34,
//     }
//     return myObject;
// }
// console.log(solve());




// function solve(key, value) {
//     let myObject = {
//         name: "Kiril",
//         age: 34,
//     }
//     myObject.name = "Vanko";
//     myObject.name1 = "Stanko";
//     return myObject;
// }
// console.log(solve());


// function solve(firstName, lastName, age) {
//     let result = {
//         firstName,
//         lastName,
//         age,
//         sayHello: function () {
//             console.log("hello");
//         }
//     }
//     console.log(result.sayHello());
// }
// console.log(solve("George", "Smith", "18"));  

// при изпълнението получаваме 2 undefined, защото функцията sayHello реално не връща нищо като резултат на изпълнението си. И още веднъж undefined от solve, защото реално и тя не връща нищо;


// function solve(firstName, lastName, age) {
//     let result = {
//         firstName,
//         lastName,
//         age,
//         sayHello: function () {   // sayHello e метод;
//             console.log("hello");
//         }
//     }
//     result.sayHello();   // .sayHello е методът;
//     // console.log();    // .log е метод на обекта console.
//     // Math.abs();       // .abs е метод на обекта Math;
// }
// console.log(solve("George", "Smith", "18")); 




// function solve(firstName, lastName, age) {
//     let result = {
//         firstName,
//         lastName,
//         age,
//         sayHello: () => console.log("hello")
//         }
//     result.sayHello();
// }
// console.log(solve("George", "Smith", "18")); 



// function solve(firstName, lastName, age) {
//     let result = {
//         firstName,
//         lastName,
//         age,
//         sayHello() { console.log("hello") }
//     }
//     return result  // -> {firstName: 'George', lastName: 'Smith', age: '18', sayHello: ƒ}

// }
// console.log(solve("George", "Smith", "18")); 



// function solve(firstName, lastName, age) {
//     let result = {
//         firstName,
//         lastName,
//         age,
//         sayHello(name) { console.log("hello " + name) }
//     }
//     return result.sayHello("Kiril")  // -> hello Kiril

// }
// console.log(solve("George", "Smith", "18")); 



// function solve(firstName, lastName, age) {
//     let result = {
//         firstName,
//         lastName,
//         age,
//         sayHello(name) { console.log("hello " + name) }
//     }
//     // return Object.keys(result);
//     // return Object.values(result);
//     return Object.entries(result);
    
// }
// console.log(solve("George", "Smith", "18")); 




function solve(firstName, lastName, age) {
    let result = {
        firstName,
        lastName,
        age,
    }
    for (let key of Object.keys(result)) {
        console.log(key);
        console.log(result[key]);
        console.log(`${key} -> ${result[key]}`);
    }
}
solve("George", "Smith", "18"); 