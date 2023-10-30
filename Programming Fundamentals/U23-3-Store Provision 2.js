function storeProvision(stockArr, orderedArr) {

    // let stockArr = ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'];
    // let orderedArr = ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'];

    let store = {};
    for (i = 0; i < stockArr.length; i += 2) {
        let product = stockArr[i];
        let qty = Number(stockArr[i + 1]);
        store[product] = qty;
    }

    for (j = 0; j < orderedArr.length; j += 2) {
        let product = orderedArr[j];
        let qty = Number(orderedArr[j + 1]);
        if (product in store) {
            store[product] += qty;
        } else {
            store[product] = qty;
        }
    }

    // console.log(store);
    // console.log(Object.entries(store));

    let kvp = Object.entries(store);  // kvp - key value pair;
    for (element of kvp) {
        console.log(`${element[0]} -> ${element[1]}`);
    }
}

// storeProvision();
storeProvision([ 'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' ], [ 'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30' ]);
storeProvision([ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ], [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ]);