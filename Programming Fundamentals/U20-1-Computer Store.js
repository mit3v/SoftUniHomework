function computerStore(arr) {
    // let arr = ['1050', '200', '450', '2', '18.50', '16.86', 'special'];
    let index = 0;
    let finalPrice = 0;
    while (arr[index] != "special" && arr[index] != "regular") {
        let partPrice = Number(arr[index]);
        if (partPrice < 0) {
            console.log("Invalid price!");
            index++;
            continue;
        }
        index++;
        finalPrice += partPrice;
    }
    if (finalPrice == 0) {
        return console.log("Invalid order!");
    }
    let finalPriceWithTaxes = finalPrice + 0.2 * finalPrice;

    if (arr[index] == "special") {
        finalPriceWithTaxes -= 0.1 * finalPriceWithTaxes;
    }

    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${finalPrice.toFixed(2)}$`);
    console.log(`Taxes: ${(finalPrice * 0.2).toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${(finalPriceWithTaxes).toFixed(2)}$`);


}
// computerStore();
computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
computerStore((['1023','15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']));
computerStore(['regular']);