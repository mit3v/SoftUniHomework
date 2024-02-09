function storeCatalogue(arr) {
    let obj = {};
    arr.sort((a, b) => a.localeCompare(b));
    for (i = 0; i < arr.length; i++) {
        let element = arr[i].split(" : ").join(": ");
        let firstLetter = element[0];

        if (!obj.hasOwnProperty(firstLetter)) {
            obj[firstLetter] = ["  " + element];
        } else {
            obj[firstLetter].push(`  ${element}`);
        }
    }
        
    // console.log(obj);
    for (kk in obj) {
        console.log(kk);
        for (el of obj[kk]){
            console.log(el);
        }
    }
}

storeCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499','Deodorant : 10', 
'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);