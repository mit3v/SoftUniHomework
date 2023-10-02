let arr = [10, 20, 30, 40];
for (i = 0; i < arr.length; i++) {
    let element = arr[i];
    console.log(element);
}

for (element of arr) {   // for (let element of arr)
    console.log(element);
}