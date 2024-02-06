function addOrRemove(arr) {

    let num = 1;
    let numArr = [];
    
    arr.forEach(x => {
        x === "add" ? numArr.push(num) : numArr.pop();
        num++
    })
    console.log(numArr.length ? numArr.join("\n") : "Empty");
}

addOrRemove(['add', 'add', 'add', 'add']);
addOrRemove(['add', 'add', 'remove', 'add', 'add']);
addOrRemove(['remove', 'remove', 'remove']);