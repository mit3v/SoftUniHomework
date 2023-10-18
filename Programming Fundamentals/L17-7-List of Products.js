function listOfProducts(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    let newArr = arr.map((a, index) => index + 1 + "." + a);
    console.log(newArr.join(" \n"));

}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);
