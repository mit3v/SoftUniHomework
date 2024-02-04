function cookingByNumbers(num, ...arr) {

    let operationNum = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num *= 3,
        fillet: (num) => num * 0.8,
    }
    for (el of arr) {
        num = operationNum[el](num); // operationNum[el] връща функция. Изпълняваш функцията с num. 
        console.log(num);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
