function muOnline(input) {
    // let input = "rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000";
    let health = 100;
    let bitcoins = 0;
    let inputArr = input.split("|");
    let roomNum = 0;
    for (room of inputArr) {
        roomNum++;
        let roomArr = room.split(" ");
        let numNum = Number(roomArr[1]);
        switch (roomArr[0]) {
            case "potion":
                if (health + numNum > 100) {
                    numNum = 100 - health;
                }
                health += numNum;
                console.log(`You healed for ${numNum} hp.`);
                console.log(`Current health: ${health} hp.`); break;
            case "chest":
                bitcoins += Number(roomArr[1]);
                console.log(`You found ${Number(roomArr[1])} bitcoins.`); break;
            default: 
            let attack = Number(roomArr[1]);
            health -= attack;
            if (health > 0) {
                console.log(`You slayed ${roomArr[0]}.`);
            } else {
                console.log(`You died! Killed by ${roomArr[0]}.`);
                console.log(`Best room: ${roomNum}`);
                return;
            }

        }
    }
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);

}
// muOnline();
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
