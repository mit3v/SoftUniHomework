function dungeonestDark(input) {
    let arrToString = input[0];

    let arr = arrToString.split("|");
    console.log(arr);
    
    for (i = 0; i < arr.length; i++) {
        let rooms = arr[i].split(" ");
        console.log(rooms);
    }

}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);