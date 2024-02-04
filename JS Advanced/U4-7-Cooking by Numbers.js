function cookingByNumbers(num, op1, op2, op3, op4, op5) {
    let arr = [op1, op2, op3, op4, op5];
    
    for (el of arr) {
        switch (el) {
            case "chop":
                num = num / 2; break;
            case "dice":
                num = Math.sqrt(num); break;
            case "spice":
                num += 1; break;
            case "bake":
                num *= 3; break;
            case "fillet":
                num -= num * 0.2; break;
        }
        console.log(num);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
