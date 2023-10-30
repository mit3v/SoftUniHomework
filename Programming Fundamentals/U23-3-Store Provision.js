function storeProvision() {

    let stockArr = ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'];
    let orderedArr = ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'];

    let store = {};
    for (i = 0; i < stockArr.length; i += 2) {
        let product = stockArr[i];
        let qty = Number(stockArr[i + 1]);
        store[product] = qty;
    }

    for (j = 0; j < orderedArr.length; j += 2) {
        if (store.hasOwnProperty[orderedArr[j]] == true) { // това нещо не дава резултат wtf?
            store[orderedArr[j]] += Number(orderedArr[j + 1]);
        } else {
            store[orderedArr[j]] = Number(orderedArr[j + 1]);
        }
    }
    console.log(store);
}

storeProvision();
// storeProvision([ 'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' ], [ 'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30' ]);
// storeProvision([ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ], [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ]);