let person = {
    name: "Peter",
    age: 27,
    "last name": "Jackson",
};
console.log(person);
console.log(person.name);
console.log(person["last name"]);

person.name = "Jakob";
person["last name"] = "Ivanovich";
console.log(person);

let keykey = "last name";
console.log(person[keykey]);
console.log(person.keykey);

person.height = 180;
console.log(person);
delete person["height"];
console.log(person);

console.log("-------");
let { age } = person;
console.log(age);
let { age: somePromenliva } = person;
console.log(somePromenliva);
console.log("-----------");

person.car = "Suzuki";
person["car hp"] = 60;
console.log(person);

let color = "white";
person.carColor = color;
console.log(person.carColor);

console.log("- - - - - - - - - - -");
let someObj = { a: 1, b: 2, c: 3};
let {a, ...propertiies} = someObj;
console.log(a);
console.log(propertiies);
let modifiedObj = {...propertiies, c: 15};
console.log(modifiedObj);

console.log("--  --  --  --  --  --");


let dynamicKeyche = "proffesion";
let personDynamicKey = {
    name: "Peter",
    age: 27,
    [dynamicKeyche]: "junior developer",
};
console.log(personDynamicKey);

console.log("--                   --");


let person3 = {
    name: "Peter",
    age: 27,
    "last name": "Jackson",
};
for (let kk in person3) {
    console.log(kk);
    console.log(person3[kk]);
}

let keycheta = Object.keys(person3);
console.log(keycheta);

for (kk of keycheta) {
    console.log(kk, person3[kk]);
}

let vv = Object.values(person3);
console.log(vv);

let allThings = Object.entries(person3);
console.log(allThings);

console.log("-      -      -       -       -");


allThings.sort(sortirovka);
function sortirovka(a, b) {
    console.log(a[0], b[0], a[0].localeCompare(b[0]));
    return 0;  // демек не сортирай, не пипай нищо;
}

allThings.sort(sortirovka2);
function sortirovka2(a, b) {
    return a[0].localeCompare(b[0]); // демек връщай ей онова горе - 1 или 1; щом не е 0, това вече сортира;
}
console.log(allThings[0]);
console.log(allThings[1]);
console.log(allThings[2]);


let sortedArrAsObj = Object.fromEntries(allThings);
console.log(sortedArrAsObj);