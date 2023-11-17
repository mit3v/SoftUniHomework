function cats(arr) {

    class Cat {
        constructor(namename, ageage) {
            this.name = namename;
            this.age = ageage;
        }
        sayMeow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let objArr = [];
    for (element of arr) {
        let [catName, catAge] = element.split(" ");
        let newCat = new Cat (catName, catAge);
        objArr.push(newCat);
    }
    for (el of objArr) {
        el.sayMeow();
    }
}
cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
