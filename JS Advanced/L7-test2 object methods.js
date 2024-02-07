let person = {
    firstName: "Stan",
    lastName: "Miller",
    printAge: function (theAge) {
        console.log(`My age is ${theAge}`);
    }
};
person.printAge(34);


let person2 = {
    firstName: "Stan",
    lastName: "Miller",
    printAge(theAge) {
        return `My age is ${theAge}`;
    }
};
console.log(person2.printAge(33));

let functionFromObj = person.printAge;
functionFromObj(27);


let { printAge } = person;
printAge(21);

let person3 = {
    firstName: "Stan",
    lastName: "Miller",
    printAge,
};

person3.printAge(19);


let num = 5;
let myCalculator = {
    increment(a) { return a + 1 ;},
    decrement(a) { return a - 1; },
    reset(a) { return a = 0; },
}
console.log(myCalculator.increment(num));
console.log(myCalculator.decrement(num));
console.log(myCalculator.reset(num));




let person4 = {
    firstName: "Stan",
    lastName: "Miller",
    printAge2() {
        console.log(`My name is ${this.firstName}`);
    }
};
person4.printAge2();  // -> My name is Stan

let {printAge2} = person4;
let person5 = {
    firstName: "Dan",
    lastName: "Petrov",
    printAge2
};
person5.printAge2();  // -> My name is Dan
// демек this си сочи към това, което е преди точката;

printAge2(); // -> My name is undefined
