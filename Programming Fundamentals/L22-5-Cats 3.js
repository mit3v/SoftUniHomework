function catMeow(arr) {

    class Cat {
        constructor(catName, catAge) {
            this.name = catName;
            this.age = catAge;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (element of arr) {
        let [name, age] = element.split(" ");
        let catInfo = new Cat(`${name}`, Number(age));
        catInfo.meow();
    }
    
}
catMeow(["Mellow 2", "Tom 5"]);
catMeow(["Candy 1", "Poppy 3", "Nyx 2"]);
