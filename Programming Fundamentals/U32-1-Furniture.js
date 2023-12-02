function furniture(input) {
    let index = 0;
    let element = input[index];
    let finalPrice = 0;
    console.log("Bought furniture:");
    while (element != "Purchase") {
        let pattern = /[>]{2}(?<furniture>[A-Za-z]+)[<]{2}(?<price>\d+(\.\d+)?)!(?<qty>\d+)/g;
        let match = pattern.exec(element);
        while (match != null) {
            let { furniture, price, qty } = match.groups;
            console.log(furniture);
            match = pattern.exec(element);
            finalPrice += price * qty;
        }
       index++;
       element = input[index];
    }
    console.log(`Total money spend: ${finalPrice.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);
