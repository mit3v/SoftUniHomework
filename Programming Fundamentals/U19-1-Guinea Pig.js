function guineaPig(arr) {
    // let arr = ["10", "5", "5.2", "1"];
    let food = Number(arr[0]) * 1000;
    let hay = Number(arr[1]) * 1000;
    let cover = Number(arr[2]) * 1000;
    let pigWeight = Number(arr[3]) * 1000;

    for (day = 1; day <= 30; day++) {
        food -= 300;
        if (food <= 0) {
            return console.log("Merry must go to the pet store!");
        }
        if (day % 2 == 0) {
            let givenHay = 0.05 * food;
            hay -= givenHay;
            if (hay <= 0) {
                return console.log("Merry must go to the pet store!");
            }
        }
        if (day % 3 == 0) {
            let givenCover = pigWeight / 3;
            cover -= givenCover;
            if (cover <= 0) {
                return console.log("Merry must go to the pet store!");
            }
        }

    }

    console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);

}
// guineaPig();
guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);
guineaPig((["9", "5", "5.2", "1"]));
