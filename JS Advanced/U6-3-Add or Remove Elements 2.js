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
    // console.log(numArr.length? numArr.join("\n") : "Empty");
    return (numArr.length? numArr.join("\n") : "Empty");
}

addOrRemove(['add', 'add', 'add', 'add']);
addOrRemove(['add', 'add', 'remove', 'add', 'add']);
addOrRemove(['remove', 'remove', 'remove']);