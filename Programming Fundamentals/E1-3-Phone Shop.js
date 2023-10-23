function phoneShop(arr) {
    // let arr = ["SamsungA50, MotorolaG5, IphoneSE", "Bonus phone - XiaomiNote:Iphone5", "Add - Iphone10", "Remove - IphoneSE", "End"];
    let storage = arr.shift().split(", ");
    let index = 0;
    while (arr[index] != "End") {
        let inputArr = arr[index].split(" ");
        let command = inputArr[0];
        switch (command) {
            case "Add":
                if (!storage.includes(inputArr[2])) {
                    storage.push(inputArr[2]);
                } break;
            case "Remove":
                if (storage.includes(inputArr[2])) {
                    let indexToRemove = storage.indexOf(inputArr[2]);
                    storage.splice(indexToRemove, 1);
                } break;
            case "Bonus":
                let bonusArr = inputArr[3].split(":");
                let ifExist = bonusArr[0];
                if (storage.includes(ifExist)) {
                    let indexOfExisting = storage.indexOf(ifExist);
                    storage.splice(indexOfExisting + 1, 0, bonusArr[1]);
                } break;
            case "Last":
                let lastArr = inputArr[2];
                if (storage.includes(lastArr)) {
                    let indexOfLast = storage.indexOf(lastArr);
                    storage.splice(indexOfLast, 1);
                    storage.push(inputArr[2]);
                } break;

        }
        index++;
    }
    console.log(storage.join(", "));
}
// phoneShop();
// phoneShop(["SamsungA50, MotorolaG5, IphoneSE", "Add - Iphone10", "Remove - IphoneSE", "End"]);
phoneShop(["HuaweiP20, XiaomiNote", "Remove - Samsung", "Bonus phone - XiaomiNote:Iphone5", "End"]);
// phoneShop(["SamsungA50, MotorolaG5, HuaweiP10", "Last - SamsungA50", "Add - MotorolaG5", "End"]);