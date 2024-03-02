function sayHello() {
    console.log(this.name + " says hi!");
}

sayHello(); // -> undefined says hi!

const myObj = {
    name: "Peter",
    sayHello,
    sayHello2
}

myObj.sayHello(); // Peter says hi!

sayHello.call(myObj);  // -> Peter says hi!  // this вече сочи към обекта извикан от call;

console.log("---------------");

function sayHello2(subject, grade) {
    console.log(this.name + " says hi!");
    console.log(this.name + " received a " + grade + " at " + subject);
}

sayHello2("math", 5);

sayHello2.call(myObj, "biology", 6);  // Peter says hi! // Peter received a 6 at biology !! тук this се появява като първи параметър на функцията;
sayHello2.apply(myObj, ["biology", 6]); // Peter says hi! // Peter received a 6 at biology;

console.log("- - - - - - - - - - - -");

const secondObj = {
    name: "John"
}

myObj.sayHello2.call(secondObj, "biology", 6); // -> John says hi! // John received a 6 at biology

console.log("----    ----    ----    ----");


const boundFn = sayHello2.bind(secondObj);
boundFn("art", 4);  // -> John says hi! // John received a 4 at art

// bind може да приема параметри като дефолтски; в този пример оставаме само с един допълнителен параметър - оценката, който да добавим във баунднатата функция; можем даже и оценката да вържем;

const boundFn2 = sayHello2.bind(secondObj, "fizika");
boundFn2(6); // -> John received a 6 at fizika
