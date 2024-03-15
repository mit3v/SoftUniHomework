function outer() {

    let count = 5;
    let name = "Stan";

    function func(a, b) {
        console.log(name);
        count++;
        return count + a + b;
    }
    
    return func;

}

let a = outer();  // тук обаче слагаме функцията в променлива; тук явно става магията, защото присвояваме функцията на променливата, а променливата си живее. И когато я викаме чрез тази променлива, ние реално оставяме връзка между променливата и функцията. Нещата във функцията не се изтриват след приключването ѝ, както става на първите 3 конзол лог-а;

console.log(outer()(3, 5));
console.log(outer()(3, 5));
console.log(outer()(3, 5));
console.log("--------------");
console.log(a(3, 5));
console.log(a(3, 5));
console.log(outer()(3, 5));
console.log(a(3, 5));