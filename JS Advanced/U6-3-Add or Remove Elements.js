function addOrRemove(arr) {

    let num = 1;
    let numArr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === "add") {
            numArr.push(num);
        } else if (arr[i] === "remove") {
            numArr.pop();
        }
        num++;
    }
    if (numArr.length == 0) {
        console.log("Empty");
    } else {
        for (el of numArr) {
            console.log(el);
        }
    }

}

addOrRemove(['add', 'add', 'add', 'add']);
addOrRemove(['add', 'add', 'remove', 'add', 'add']);
addOrRemove(['remove', 'remove', 'remove']);