function addAndRemove(arr) {
    let newArr = [];
    let variable = 1;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == "add") {
            newArr.push(variable);
        } else if (arr[i] == "remove") {
            newArr.pop();
        } variable++;
    }
    if (newArr.length == 0) {
        console.log("Empty");
    } else {
        console.log(newArr.join(" "));
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);