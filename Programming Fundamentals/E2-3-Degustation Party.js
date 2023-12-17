function degustationParty(input) {
    let index = 0;
    let guests = {};
    let countDisliked = 0;
    while (input[index] != "Stop") {
        let [likeOrDislike, guest, meal] = input[index].split("-");
        if (likeOrDislike == "Like") {
            if (!guests[guest]) {
                guests[guest] = [];
            }
            if (!guests[guest].includes(meal)) {
                guests[guest].push(meal);
            }
        }
        if (likeOrDislike == "Dislike") {
            if (!guests[guest]) {
                console.log(`${guest} is not at the party.`);
            } else {
                if (guests[guest].includes(meal)) {
                    guests[guest] = guests[guest].filter(a => a != meal);
                    console.log(`${guest} doesn't like the ${meal}.`);
                    countDisliked++;
                } else {
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                }
            }
        }
        index++;
    }
    for (let key in guests) {
        console.log(`${key}: ${guests[key].join(", ")}`);
    }
    console.log(`Unliked meals: ${countDisliked}`);

}
degustationParty(["Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Misho-salad",
    "Stop"]);
degustationParty(["Like-Krisi-shrimps",
"Dislike-Vili-carp",
"Dislike-Krisi-salad", "Stop"]);
