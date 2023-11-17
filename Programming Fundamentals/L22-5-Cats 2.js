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
        let meowArr = element.split(" ");
        let catInfo = new Cat(`${meowArr[0]}`, Number(meowArr[1]));
        catInfo.meow();
    }
    
}
catMeow(["Mellow 2", "Tom 5"]);
catMeow(["Candy 1", "Poppy 3", "Nyx 2"]);
