function storeInTown(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    let coffeePrice = 0;
    let waterPrice = 0;
    let beerPrice = 0;
    let sweetsPrice = 0;
    let peantusPrice = 0;

    if (town === "Sofia") {
        coffeePrice = 0.5;
        waterPrice = 0.8;
        beerPrice = 1.2;
        sweetsPrice = 1.45;
        peantusPrice = 1.6;
    }
    if (town === "Plovdiv") {
        coffeePrice = 0.4;
        waterPrice = 0.7;
        beerPrice = 1.15;
        sweetsPrice = 1.30;
        peantusPrice = 1.5;
    }
    if (town === "Varna") {
        coffeePrice = 0.45;
        waterPrice = 0.7;
        beerPrice = 1.1;
        sweetsPrice = 1.35;
        peantusPrice = 1.55;
    }
    
    switch (product) {
            case "coffee":
            console.log(quantity * coffeePrice); break;
            case "water":
            console.log(quantity * waterPrice); break;
            case "beer":
            console.log(quantity * beerPrice); break;
            case "sweets":
            console.log(quantity * sweetsPrice); break;
            case "peanuts":
            console.log(quantity * peantusPrice); break;
    }
    

}

storeInTown(["coffee", "Varna", "2"]);
storeInTown(["peanuts", "Plovdiv", "1"]);
storeInTown(["beer", "Sofia", "2"]);
storeInTown(["water", "Plovdiv", "2"]);
storeInTown(["sweets", "Sofia", "2.23"]);

