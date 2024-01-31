function maxNum(...params) {
    let max = Math.max(...params);
    console.log(`The largest number is ${max}.`);
}

maxNum(5, -3, 16);