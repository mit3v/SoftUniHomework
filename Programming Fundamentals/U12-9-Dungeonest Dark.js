function dungeonestDark(input) {
    let arrToString = input[0];
    let arr = arrToString.split(/[| ]+/);
    let health = 100;
    let coins = 0;
    let amIAlive = true;

    for (i = 0; i < arr.length; i += 2) {
        if (amIAlive == false) {break;}
        if (arr[i] == "potion") {
            if (Number(arr[i + 1]) + health > 100) {
            console.log(`You healed for ${100 - health} hp.`);
            health = 100;
            } else { console.log(`You healed for ${Number(arr[i + 1])} hp.`)
            health += Number(arr[i + 1]); }
            console.log(`Current health: ${health} hp.`);
        }
        else if (arr[i] == "chest") {
            console.log(`You found ${Number(arr[i + 1])} coins.`);
            coins += Number(arr[i + 1]);
        }
        else {
            health -= Number(arr[i + 1]);
            if (health > 0) {
                console.log(`You slayed ${arr[i]}.`);
            } else {
                console.log(`You died! Killed by ${arr[i]}.`);
                console.log(`Best room: ${i / 2 + 1}`);
                amIAlive = false;
            }
        }
    }
    if (amIAlive == true) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);