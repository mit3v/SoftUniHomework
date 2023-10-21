function treasureHunt(arr) {
    // let arr = ["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"]
    let initialLootArr = arr.shift().split("|");
    let index = 0;
    while (arr[index] != "Yohoho!") {
        let commandArr = arr[index].split(" ");
        let command = commandArr[0];
        switch (command) {
            case "Loot":
                for (i = 1; i < commandArr.length; i++) {
                    let element = commandArr[i];
                    if (!initialLootArr.includes(element)) {
                        initialLootArr.unshift(element);
                    }
                } break;
            case "Drop":
                if (Number(commandArr[1]) < 0 || Number(commandArr[1]) >= initialLootArr.length) {
                    index++;
                    continue;
                } let droppedItem = initialLootArr.splice(commandArr[1], 1);
                initialLootArr.push(droppedItem[0]); break;
            case "Steal":
                let stealedItems = Number(commandArr[1]);
                let stealedItemsArr = [];
                if (stealedItems < initialLootArr.length) {
                stealedItemsArr = initialLootArr.splice(-stealedItems);
                 }
                else {
                  stealedItemsArr = initialLootArr;
                    initialLootArr = [];
                }
                console.log(`${stealedItemsArr.join(", ")}`); 
               
                break;
        }
        index++;
    }
    let sumLength = 0;
    let count = 0;
    for (element of initialLootArr) {
        let elementLength = element.length;
        sumLength += elementLength;
        count++;
    }
    if (count == 0) {
        return console.log("Failed treasure hunt.");
    }
    console.log(`Average treasure gain: ${(sumLength / count).toFixed(2)} pirate credits.`);
}
// treasureHunt();
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"]);
treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]);

