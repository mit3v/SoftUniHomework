function lowestPrice(arr) {
    let result = {};
    for (el of arr) {
        [town, product, price] = el.split(" | ");
        if (!result.hasOwnProperty(product)) {
            result[product] = [Number(price), town];
        } else {
            if (Number(result[product][0]) > Number(price)) {
                result[product] = [Number(price), town];
            }
        }
    }
    // console.table(result);
    for (kk in result) {
        console.log(`${kk} -> ${result[kk][0]} (${result[kk][1]})`);
    }

}

lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);