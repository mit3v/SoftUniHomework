class Student {
    constructor(name) { // конструктора е специална функция, тя не се извиква;
        this.name = name; // на този обект, който е създаден сега, ще има пропърти name и зад него ще стои стойност, която получаваме;
    }
}
let myStudent = new Student("Todor");  // конструктура се извиква автоматично, като се използва думата new;
console.log(myStudent);  // -> Student {name: 'Todor'} -> излиза Student отпред, за разлика от обекта. Това ни казва по коя структура е направен този обект; Класа е template за създаване на обекти;

let obj = {
    name: "Todor"
}
console.log(obj);  // -> {name: 'Todor'}

myStudent.age = 30;
console.log(myStudent);  // -> Student {name: 'Todor', age: 30} // можем да си добавяме пропъртита; myStudent си е обект, въпреки че е вдигнат през инстанция на класа Student;

let myStudent2 = new Student("Pesho");
console.log(myStudent2);
console.log(myStudent2.name); // -> Pesho; 
